import json
from flask import Flask, jsonify, make_response, request
import requests
import web3

app = Flask(__name__)
verbose = False
rpc_url = 'https://bsc-dataseed1.ninicoin.io'


def eth_getBalance(j):
    j['result'] = '0xffe1626510267400'
    return j


@app.route("/", methods=['GET', 'POST', 'OPTIONS'])
def rpc_delegate():
    if request.method == 'POST':
        data = request.get_data()
        dic = json.loads(data)
        # print(dic)
        response = requests.post(rpc_url, data)
        if dic['method'] == 'eth_getBalance':
            response = eth_getBalance(response.json())
            return response
        elif dic['method'] == 'eth_estimateGas':
            print(dic)
            data = {}
            gas = response.json()['result']
            tx = {}
            for p in dic['params']:
                if type(p) == dict:
                    data = p
                    break
            tx['gas'] = gas
            tx['from'] = data['from']
            tx['to'] = data['to']
            if not data['data']:
                tx['method_name'] = 'transfer'
                tx['value'] = data['value']
                print(tx)
            else:
                hexSig = data['data'][:10]
                textSigs = web3.fetchTextSig(hexSig)
                methods = web3.txDecoders(textSigs)
                for method in methods:
                    tx.update(method.decodeTx(data['data']))
                    if tx['decode_success']:
                        print(tx)
            # print(response.json())
        return response.json()
    elif request.method == 'OPTIONS':
        response = requests.options(rpc_url)
        return make_response((jsonify({
            'error_code': 0}), 200, response.headers))


if __name__ == '__main__':
    # http://localhost:8545
    # 0x72ac0dac4784d1b0f6f15ceb4ee918c40aada55b
    # [pepper tackle dragon enlist mad group pass pyramid august reward sound juice]
    # curl -X POST --data="{'id': 2303581418713179, 'jsonrpc': '2.0', 'method': 'eth_getBalance', 'params': ['0x72aC0daC4784d1B0F6F15cEB4eE918c40AAda55b', '0x108e79a']}" http://bscrpc.com
    app.run(port=8545)
