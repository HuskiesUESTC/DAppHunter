import json
import threading
from operator import itemgetter
from flask import Flask, jsonify, make_response, request
import requests

from api import web3_util, receipt_fetcher
from util.configuration import config
from util.environment import env, EnvKey
import logging

app = Flask(__name__)
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

VERBOSE = False
previous_tx = None
previous_response = None

RPC_URL, GANACHE_URL, DEFAULT_ETH_BALANCE = \
    itemgetter(*['remote-url', 'ganache-url', 'default-eth-balance'])(config['rpc'])


@app.route('/', methods=['OPTIONS'])
def rpc_delegate_options():
    response = requests.options(RPC_URL)
    return make_response((jsonify({
        'error_code': 0}), 200, response.headers))


@app.route('/', methods=['POST'])
def rpc_delegate_post():
    global previous_tx, previous_response
    request_body = json.loads(request.get_data())
    web3_method = request_body['method']
    # print('Handle method<{}>, request<{}>'.format(web3_method, request_body))

    if web3_method in ['eth_sendTransaction', 'eth_sendRawTransaction']:
        if previous_tx != request_body:
            response = handle_transaction(request_body)
            previous_tx = request_body
            previous_response = response
        else:
            response = previous_response
    elif web3_method in ['eth_getBalance']:
        response = handle_get_balance(request_body)
    elif web3_method in ['eth_estimateGas']:
        if previous_tx != request_body:
            response = handle_estimate_gas(request_body)
            previous_tx = request_body
            previous_response = response
        else:
            response = previous_response
    else:
        response = handle_other_methods(request_body)

    return response


def handle_transaction(request_body):
    response_body = requests.post(GANACHE_URL, json=request_body).json()
    print(response_body)
    return response_body


def handle_get_balance(request_body):
    response_body = requests.post(RPC_URL, json=request_body).json()
    response_body['result'] = DEFAULT_ETH_BALANCE
    return response_body


def handle_estimate_gas(request_body):
    try:
        generated_tx = request_body['params'][0] if 'params' in request_body and request_body['params'] else {}
        env.set(EnvKey.WALLET_STATE, generated_tx)
        # 直接查询gas费
        origin_response_body = requests.post(RPC_URL, json=request_body).json()
        gas = origin_response_body['result']
        # 根据参数直接在Ganache上预执行交易
        request_body['method'] = 'eth_sendTransaction'
        request_body['params'][0]['gasLimit'] = 5000000
        new_response_body = requests.post(GANACHE_URL, json=request_body).json()
        # 获取预执行的交易结果日志
        receipt_info = None
        if 'result' in new_response_body:
            tx_hash = new_response_body['result']
            receipt_info = receipt_fetcher.get_receipts(tx_hash)
            if receipt_info is not None:
                print('Fetch receipt success! Transaction executed {}', tx_hash)
            # env.set(EnvKey.WALLET_STATE, receipt_info)
        else:
            print('Fetch receipt error! Response is {}'.format(new_response_body))
            # env.set(EnvKey.WALLET_STATE, {'has_error': True})
        # 解析完整交易信息

        request_params = list(filter(lambda item: type(item) == dict, request_body['params']))
        if len(request_params) > 0:
            request_params = request_params[0]
            tx = {
                'value': int(request_params['value'], 16) / float(10 ** 18),
                'gas': int(gas, 16),
                'from': request_params['from'],
                'to': request_params['to'],
            }
            if 'data' in request_params:
                tx.update({'data': request_params['data']})
            if 'result' in receipt_info and receipt_info['result'] is not None:
                tx.update({
                    'result': new_response_body['result']
                })
            # if 'data' in request_params:
                # if request_params['data']:
                #     hex_sig = request_params['data'][:10]
                #     text_sig = web3_util.fetch_text_signature(hex_sig)
                #     methods = web3_util.tx_decoders(text_sig)
                #     for method in methods:
                #         success, decoded_tx = method.decode_transaction(request_params['data'])
                #         if success:
                #             tx.update(decoded_tx)
            env.set(EnvKey.BLOCKCHAIN_STATE, tx)
        else:
            print('Fetch transaction error! Response is {}'.format(request_params))
            env.set(EnvKey.BLOCKCHAIN_STATE, {'has_error': True})
        return origin_response_body
    except RuntimeError as e:
        print(e)
    return {}


def handle_other_methods(request_body):
    return requests.post(RPC_URL, json=request_body).json()


def start_api_server(port: int = 8548, chain='BNB'):
    def start_server():
        app.run(port=port)

    thread = threading.Thread(target=start_server, name=chain)
    thread.start()
    return thread


if __name__ == '__main__':
    start_api_server()
