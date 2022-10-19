from collections import defaultdict
from functools import lru_cache
import json
import logging
from random import Random
from hashlib import md5
import redis
import requests
from eth_abi import decode_abi
from operator import itemgetter

from api.cache import POOL
from util.configuration import config

SIGNATURE_PROVIDER, RPC_DELEGATE, RPC_PROVIDERS = \
    itemgetter(*['signature-url', 'delegate-url', 'provider-urls'])(config['rpc'])

fail_counts = defaultdict(int)
rpc_call_count = 0


class Method:

    def __init__(self, method_name: str, param_list: [str]) -> None:
        self._method_name = method_name
        self._param_list = param_list

    @property
    def method_name(self):
        return self._method_name

    @method_name.setter
    def method_name(self, name: str):
        self._method_name = name

    @property
    def param_list(self):
        return self._param_list

    @param_list.setter
    def param_list(self, param_list: [str]):
        self._param_list = param_list

    @property
    def abi(self):
        return self._param_list

    def from_text_sig(self, text_sig: str):
        sp = text_sig.rstrip(')').split('(')
        self._method_name = sp[0]
        self._param_list = sp[1].split(',')

    def decode_transaction(self, raw_data: str) -> (bool, {}):
        tx = {
            'method': self._method_name,
            'params': {},
        }
        success = False
        try:
            data_to_decode = bytes.fromhex(raw_data[10:])
            decoded_abi = decode_abi(self.abi, data_to_decode)
            if len(decoded_abi) == len(self.abi):
                success = True
                tx['params'] = []
                for i in range(len(decoded_abi)):
                    tx['params'].append({
                        self.abi[i]: decoded_abi[i]
                    })
        except Exception:
            success = False
        return success, tx


def select_rpc_provider(body: {}) -> str:
    cur_hash = json.dumps(body)
    candidates = set()
    num_of_providers = len(RPC_PROVIDERS)
    min_fail = 0
    suitable_provider = ''
    while len(candidates) < 4:
        cur_hash = md5(cur_hash.encode('utf-8')).hexdigest()
        cur_index = int(cur_hash, base=16) % num_of_providers
        if cur_index not in candidates:
            candidates.add(cur_index)
            cur_provider = RPC_PROVIDERS[cur_index]
            fail_count = fail_counts[cur_provider]
            if min_fail > fail_count:
                suitable_provider = cur_provider
                min_fail = fail_count
    return suitable_provider


@lru_cache(maxsize=128)
def fetch_text_signature(hex_sig: str) -> [str]:
    methods = []
    r = redis.StrictRedis(connection_pool=POOL)
    if r.llen(hex_sig) != 0:
        for v in r.lrange(hex_sig, 0, -1):
            methods.append(v.decode('utf-8'))
        return methods
    payload = {
        'hex_signature': hex_sig
    }
    response = requests.get(SIGNATURE_PROVIDER, params=payload)
    if response.status_code == 200:
        result = response.json()
        for res in result['results']:
            textSig = res['text_signature']
            methods.append(textSig)
            # 缓存函数签名到redis
            r = redis.StrictRedis(connection_pool=POOL)
            r.lpush(hex_sig, textSig)
    return methods


@lru_cache(maxsize=128)
def parse_text_sig(text_sig: str) -> Method:
    sp = text_sig.rstrip(')').split('(')
    method_name = sp[0]
    param_list = sp[1].split(',')
    return Method(method_name, param_list)


def tx_decoders(text_sigs: [str]) -> [Method]:
    return list(map(lambda text_sig: parse_text_sig(text_sig), text_sigs))


def eth_rpc(method, params) -> {}:
    # 使用全局变量
    global rpc_call_count, fail_counts
    rpc_call_count += 1
    # 生成随机id
    random = Random()
    random_id = ''.join([str(random.randint(0, 9)) for _ in range(16)])
    # 拼接body
    request_body = {
        'id': random_id,
        'method': method,
        'params': params,
        'jsonrpc': '2.0'
    }
    # 选择provider
    rpc_provider = select_rpc_provider(request_body)

    # 每进行100次rpc调用 清空失败次数
    if rpc_call_count % 100 == 0:
        fail_counts = defaultdict(int)

    result = {}
    try:
        response = requests.post(rpc_provider, json=request_body)
        if response.status_code == 200:
            result = response.json()
    except Exception:
        # 如果失败 记录次数增加
        fail_counts[rpc_provider] += 1
        logging.error('rpc call error', rpc_provider)

    return result


def fetch_block_number() -> str:
    result = eth_rpc(method='eth_blockNumber', params=[])
    return result.get('result', None)


@lru_cache(maxsize=128)
def fetch_block(block_number: str, txs: bool = False) -> dict:
    result = eth_rpc(method='eth_getBlockByNumber', params=[block_number, txs])
    return result.get('result', None)


def get_transaction_by_hash(tx_hash: str) -> dict:
    return eth_rpc(method='eth_getTransactionByHash', params=[tx_hash])


def get_transaction_receipt(tx_hash: str) -> {}:
    return eth_rpc(method='eth_getTransactionReceipt', params=[tx_hash])
