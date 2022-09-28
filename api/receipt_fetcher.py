import json
import re
from typing import Tuple
import requests
from web3 import Web3, HTTPProvider

ganache_url = 'http://localhost:8545'
rpc_url = 'https://bsc-dataseed1.ninicoin.io'

ERC20_TRANSFER_EVENT = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
ERC20_APPROVAL_EVENT = '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
DEPOSIT_EVENT = '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c'
SWAP_EVENT = '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822'

w3 = Web3(HTTPProvider(rpc_url))

ERC20_LIKE_ABI = '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'


def getTokenSymbol(address):
    token_contract = w3.eth.contract(address=w3.toChecksumAddress(address), abi=ERC20_LIKE_ABI)
    symbol = token_contract.functions.symbol().call()
    return symbol


def getTokenDecimals(address):
    token_contract = w3.eth.contract(address=w3.toChecksumAddress(address), abi=ERC20_LIKE_ABI)
    symbol = token_contract.functions.decimals().call()
    return int(symbol)


def eth_call(payload):
    response = requests.post(rpc_url, payload)


def topic2Address(topic):
    return '0x' + topic[26:]


def data2Uint(data):
    return int(data, 16)


def isTransfer(log):
    topics = log['topics']
    event_sig = topics[0]
    if (event_sig != ERC20_TRANSFER_EVENT):
        return False
    from_addr = topic2Address(topics[1])
    to_addr = topic2Address(topics[2])
    data = data2Uint(log['data'])
    print('Transfer({}, {}, {}, {})'.format(log['address'], from_addr, to_addr, data))
    return True


def isSwap(tx):
    depositETH = False
    swap = False
    launcher = tx['from']
    sender = ''
    receiver = ''
    amountIn = ''
    amountOut = ''
    assetIn = ''
    assetOut = ''
    logs = tx['logs']
    for log in logs[::-1]:
        emitter = log['address']
        topics = log['topics']
        data = log['data']
        event_sig = topics[0]
        if event_sig == SWAP_EVENT:
            swap = True
            sender = topic2Address(topics[1])
            receiver = topic2Address(topics[2])
        elif event_sig == ERC20_TRANSFER_EVENT:
            src = topic2Address(topics[1])
            dst = topic2Address(topics[2])
            amount = float(data2Uint(data)) / float(10 ** getTokenDecimals(emitter))
            if dst == receiver and assetIn == '':
                assetIn = getTokenSymbol(emitter)
                amountIn = amount
            elif src == receiver and assetOut == '':
                assetOut = getTokenSymbol(emitter)
                amountOut = amount
        elif event_sig == DEPOSIT_EVENT:
            depositETH = True
            amount = float(data2Uint(data)) / float(10 ** 18)
            dopositer = tx['from']
            assetOut = 'ETH'
            amountOut = amount
    print('Swap({}, {}, {}, {})'.format(assetOut, amountOut, assetIn, amountIn))
    return isSwap


def isApproval(log):
    topics = log['topics']
    event_sig = topics[0]
    if (event_sig != ERC20_APPROVAL_EVENT):
        return
    owner = topic2Address(topics[1])
    spender = topic2Address(topics[2])
    data = data2Uint(log['data'])
    print('Approval({}, {}, {}, {})'.format(owner, spender, getTokenSymbol(log['address']), data))


def get_receipts(tx_hash):
    print('get_receipts: ', tx_hash)
    data = {
        "jsonrpc": "2.0",
        "method": "eth_getTransactionReceipt",
        "params": [tx_hash],
        "id": 1
    }

    response = requests.post(ganache_url, json.dumps(data))
    print('get_receipts: ', response.json())
    logs = response.json()['result']['logs']
    isSwap(response.json()['result'])
    for log in logs:
        isApproval(log)
# 0x55fab6168a18192c117bd318501a6ce900d7cb810f337cb050caf27e500d4053
# 0x55723091b98233768c9ef6cb9a41d1b77908df7588e5282569b11271ac279545
# get_receipts('0xddaa5412d8e0126904a0e42f48d64cba0950deabccf36cf787d3529e172cee5c')
# getTokenInfo('0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82')
