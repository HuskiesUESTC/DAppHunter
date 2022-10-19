from operator import itemgetter

import requests
from web3 import Web3, HTTPProvider
from util.configuration import config

RPC_URL, GANACHE_URL, ERC20_LIST_ABI_FILEPATH = \
    itemgetter(*['remote-url', 'ganache-url', 'erc20-list-abi-filepath'])(config['rpc'])

with open(ERC20_LIST_ABI_FILEPATH, 'r') as f:
    ERC20_LIKE_ABI = f.read()

ERC20_TRANSFER_EVENT = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
ERC20_APPROVAL_EVENT = '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
DEPOSIT_EVENT = '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c'
SWAP_EVENT = '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822'

w3 = Web3(HTTPProvider(RPC_URL))


def get_token_symbol(address):
    token_contract = w3.eth.contract(address=w3.toChecksumAddress(address), abi=ERC20_LIKE_ABI)
    symbol = token_contract.functions.symbol().call()
    return symbol


def get_token_decimals(address):
    token_contract = w3.eth.contract(address=w3.toChecksumAddress(address), abi=ERC20_LIKE_ABI)
    symbol = token_contract.functions.decimals().call()
    return int(symbol)


def convert_topic_to_address(topic):
    return '0x' + topic[26:]


def convert_data_to_uint(data):
    return int(data, 16)


def parse_transfer_data(log) -> (bool, {}):
    topics = log['topics']
    data = {
        'type': 'transfer',
        'address': log['address'],
        'from_addr': convert_topic_to_address(topics[1]),
        'to_addr': convert_topic_to_address(topics[2]),
        'data': convert_data_to_uint(log['data'])
    }
    print('Transfer(type<{}>, address<{}>, from<{}>, to<{}>, data<{}>)'.format(*data.values()))
    return data


def parse_approval_data(log) -> {}:
    topics = log['topics']
    data = {
        'type': 'approval',
        'owner': convert_topic_to_address(topics[1]),
        'spender': convert_topic_to_address(topics[2]),
        'symbol': get_token_symbol(log['address']),
        'data': convert_data_to_uint(log['data'])
    }
    print('Approval(type<{}>, owner<{}>, spender<{}>, symbol<{}>, data<{}>)'.format(*data.values()))
    return data


def parse_swap(tx) -> {}:
    tx_params = ['type', 'sender', 'receiver', 'depositor', 'asset_out', 'amount_out', 'asset_in', 'amount_in']
    tx_data = dict(zip(tx_params, [''] * len(tx_params)))
    for log in tx['logs'][::-1]:
        emitter = log['address']
        topics = log['topics']
        data = log['data']
        event_sig = topics[0]
        if event_sig == SWAP_EVENT:
            tx_data.update({
                'type': 'swap',
                'sender': convert_topic_to_address(topics[1]),
                'receiver': convert_topic_to_address(topics[2])
            })
        elif event_sig == ERC20_TRANSFER_EVENT:
            src = convert_topic_to_address(topics[1])
            dst = convert_topic_to_address(topics[2])
            amount = float(convert_data_to_uint(data)) / float(10 ** get_token_decimals(emitter))
            if dst == tx_data['receiver'] and tx_data['asset_in'] == '':
                tx_data.update({
                    'asset_in': get_token_symbol(emitter),
                    'amount_in': amount
                })
            elif src == tx_data['receiver'] and tx_data['asset_out'] == '':
                tx_data.update({
                    'asset_out': get_token_symbol(emitter),
                    'amount_out': amount
                })
        elif event_sig == DEPOSIT_EVENT:
            amount = float(convert_data_to_uint(data)) / float(10 ** 18)
            tx_data.update({
                'type': 'deposit',
                'asset_out': 'ETH',
                'amount_out': amount,
                'depositor': tx['from']
            })
    print('Transaction(type:<{}>, sender:<{}>, receiver:<{}>, depositor:<{}>, '
          'asset_out:<{}>, amount_out:<{}>, asset_in:<{}>, amount_in:<{}>)'.format(*tx_data.values()))
    return tx_data


def get_receipts(tx_hash) -> {}:
    # 查询Ganache上预执行交易的日志信息
    request_body = {
        'jsonrpc': '2.0',
        'method': 'eth_getTransactionReceipt',
        'params': [tx_hash],
        'id': 1
    }
    response_body = requests.post(GANACHE_URL, json=request_body).json()
    # 交易信息
    # transaction_data = parse_swap(response_body['result'])
    # 日志信息
    # handlers = {
    #     ERC20_APPROVAL_EVENT: parse_approval_data,
    #     ERC20_TRANSFER_EVENT: parse_transfer_data,
    # }
    event_info = []
    # for log in response_body['result']['logs']:
    #     event_sig = log['topics'][0]
    #     if event_sig in handlers:
    #         event_info.append(handlers.get(event_sig)(log))
    return {
        'transaction': response_body['result'],
    }
