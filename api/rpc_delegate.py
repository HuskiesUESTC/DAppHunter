import json
import threading
from operator import itemgetter
from flask import Flask, jsonify, make_response, request
import requests

from api import web3_util, receipt_fetcher
from util.configuration import config
from util.environment import env, EnvKey

app = Flask(__name__)

VERBOSE = False

RPC_URL, GANACHE_URL, DEFAULT_ETH_BALANCE = \
    itemgetter(*['remote-url', 'ganache-url', 'default-eth-balance'])(config['rpc'])


@app.route('/', methods=['OPTIONS'])
def rpc_delegate_options():
    response = requests.options(RPC_URL)
    return make_response((jsonify({
        'error_code': 0}), 200, response.headers))


@app.route('/', methods=['POST'])
def rpc_delegate_post():
    request_body = json.loads(request.get_data())
    web3_method = request_body['method']
    print('Handle method<{}>, request<{}>'.format(web3_method, request_body))

    if web3_method in ['eth_sendTransaction', 'eth_sendRawTransaction']:
        response = handle_transaction(request_body)
    elif web3_method in ['eth_getBalance']:
        response = handle_get_balance(request_body)
    elif web3_method in ['eth_estimateGas']:
        response = handle_estimate_gas(request_body)
    else:
        response = handle_other_methods(request_body)

    print('Handle method<{}>, response<{}>'.format(web3_method, response))

    return response


def handle_transaction(request_body):
    response_body = requests.post(GANACHE_URL, json=request_body).json()
    tx_hash = response_body['result']
    receipt_fetcher.get_receipts(tx_hash)
    return response_body


def handle_get_balance(request_body):
    response_body = requests.post(RPC_URL, json=request_body).json()
    response_body['result'] = DEFAULT_ETH_BALANCE
    return response_body


def handle_estimate_gas(request_body):
    try:
        # 直接查询gas费
        origin_response_body = requests.post(RPC_URL, json=request_body).json()
        gas = origin_response_body['result']
        # 根据参数直接在Ganache上预执行交易
        request_body['method'] = 'eth_sendTransaction'
        request_body['params'][0]['gasLimit'] = 5000000
        new_response_body = requests.post(GANACHE_URL, json=request_body).json()
        # 获取预执行的交易结果日志
        if 'result' in new_response_body:
            tx_hash = new_response_body['result']
            receipt_info = receipt_fetcher.get_receipts(tx_hash)
            env.set(EnvKey.WALLET_STATE, receipt_info)
        else:
            print('Fetch receipt error! Response is {}'.format(new_response_body))
            env.set(EnvKey.WALLET_STATE, {'has_error': True})
        # 解析完整交易信息

        request_params = list(filter(lambda item: type(item) == dict, request_body['params']))
        if len(request_params) > 0:
            request_params = request_params[0]
            tx = {
                'value': int(request_params['value'], 16),
                'gas': int(gas, 16),
                'from': request_params['from'],
                'to': request_params['to']
            }
            if request_params['data']:
                hex_sig = request_params['data'][:10]
                text_sig = web3_util.fetch_text_signature(hex_sig)
                methods = web3_util.tx_decoders(text_sig)
                for method in methods:
                    success, decoded_tx = method.decode_transaction(request_params['data'])
                    if success:
                        tx.update(decoded_tx)
            else:
                tx.update({
                    'method_name': 'transfer',
                    'value': request_params['value']
                })
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


def start_api_server(port: int = 8546, chain='eth'):
    def start_server():
        app.run(port=port)

    thread = threading.Thread(target=start_server, name=chain)
    thread.start()
    return thread


if __name__ == '__main__':
    start_api_server()
