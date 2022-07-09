from collections import defaultdict
from functools import lru_cache
import json
import logging
import queue
from random import Random
from hashlib import md5
import redis
from cache import POOL
import requests
from eth_abi import decode_abi, encode_abi


apiProvider = 'https://www.4byte.directory/api/v1/signatures/'
rpcDelegate = 'http://localhost:8545'
rpcProviders = ['https://bsc-dataseed.binance.org/',
                'https://bsc-dataseed1.defibit.io/',
                'https://bsc-dataseed1.ninicoin.io/',
                'https://bsc-dataseed2.defibit.io/',
                'https://bsc-dataseed3.defibit.io/',
                'https://bsc-dataseed4.defibit.io/',
                'https://bsc-dataseed2.ninicoin.io/',
                'https://bsc-dataseed3.ninicoin.io/',
                'https://bsc-dataseed4.ninicoin.io/',
                'https://bsc-dataseed1.binance.org/',
                'https://bsc-dataseed2.binance.org/',
                'https://bsc-dataseed3.binance.org/',
                'https://bsc-dataseed4.binance.org/']

fails = defaultdict(int)
rpcCallCount = 0


def load_balance(func):
    def wrapper(*args, **kw):
        try:
            ret = func(*args, **kw)
            return ret
        except Exception:
            return None

    return wrapper


class Method:
    __methodName = ''
    __paramList = []

    def __init__(self, methodName: str = '', paramList: list[str] = []) -> None:
        self.__methodName = methodName
        self.__paramList = paramList

    @property
    def methodName(self):
        return self.__methodName

    @methodName.setter
    def methodName(self, name: str):
        self.__methodName = name

    @property
    def paramList(self):
        return self.__paramList

    @paramList.setter
    def paramList(self, paramList: list[str]):
        self.__paramList = paramList

    @property
    def ABI(self):
        return self.__paramList

    def fromTextSig(self, textSig: str):
        sp = textSig.rstrip(')').split('(')
        self.__methodName = sp[0]
        self.__paramList = sp[1].split(',')

    def decodeTx(self, rawData: str) -> dict:
        rawDataWithOutSig = rawData[10:]
        dataToDecode = bytes.fromhex(rawDataWithOutSig)
        # print(self.__methodName)
        tx = {}
        tx['method_name'] = self.methodName__methodName
        tx['params'] = {}
        tx['decode_success'] = False
        try:
            t = decode_abi(self.ABI, dataToDecode)
            if len(t) == len(self.ABI):
                tx['decode_success'] = True
                for i in range(len(t)):
                    tx['params'][self.ABI[i]] = t[i]
        except Exception:
            pass
        return tx


@lru_cache(maxsize=128)
def parseTextSig(textSig: str) -> Method:
    sp = textSig.rstrip(')').split('(')
    methodName__methodName = sp[0]
    paramList = []
    if sp[1].find(',') != -1:
        paramList = sp[1].split(',')
    method = Method(methodName__methodName, paramList)
    return method


def selectRPCProvider(req: str) -> str:
    # 哈希负载均衡 根据请求 映射到对应rpc服务器上
    # 做4次哈希 映射到4个服务器上 再选择最近失败次数最少的
    h1 = md5(req.encode('utf-8')).hexdigest()
    h2 = md5(h1.encode('utf-8')).hexdigest()
    h3 = md5(h2.encode('utf-8')).hexdigest()
    h4 = md5(h3.encode('utf-8')).hexdigest()
    numOfProviders = len(rpcProviders)
    # print(h1, h2, h3, h4)
    # 选择n<=4个服务器
    q = queue.PriorityQueue()
    candidates = [int(h1, base=16) % numOfProviders, int(h2, base=16) % numOfProviders, int(
        h3, base=16) % numOfProviders, int(h4, base=16) % numOfProviders]
    for c in candidates:
        # 优先级-失败次数 值-rpc下标
        provider = rpcProviders[c]
        q.put((fails[provider], provider))
    # 返回堆顶-失败次数最少的节点
    if not q.empty():
        return q.get()[1]
    return None


@lru_cache(maxsize=128)
def fetchTextSig(hexSig: str) -> list[str]:
    methods = []
    r = redis.StrictRedis(connection_pool=POOL)
    if r.llen(hexSig) != 0:
        for v in r.lrange(hexSig, 0, -1):
            methods.append(v.decode('utf-8'))
        return methods
    payload = {'hex_signature': hexSig}
    resp = requests.get(apiProvider, params=payload)
    if resp.status_code == 200:
        j = resp.json()
        for res in j['results']:
            textSig = res['text_signature']
            methods.append(textSig)
            # 缓存函数签名到redis
            r = redis.StrictRedis(connection_pool=POOL)
            r.lpush(hexSig, textSig)
    return methods


def txDecoders(textSigs: list[str]) -> list[Method]:
    methods = []
    for ts in textSigs:
        methods.append(parseTextSig(ts))
    return methods


def eth_rpc(rpcProvider, payload) -> dict:
    # 每进行100次rpc调用 清空失败次数
    global rpcCallCount
    if rpcCallCount % 100 == 0:
        for k in fails:
            fails[k] = 0
    # 尝试调用rpc
    rpcCallCount += 1
    try:
        response = requests.post(rpcProvider, payload)
    except Exception:
        # 如果失败 记录次数增加
        fails[rpcProvider] += 1
        logging.error('rpc call error', rpcProvider)
        return None
    return response


def fetchBlockNumber() -> str:
    payload = json.dumps({'id': randomID(),
                          'jsonrpc': '2.0', 'method': 'eth_blockNumber', 'params': []})
    rpcProvider = selectRPCProvider(payload)
    response = eth_rpc(rpcProvider, payload)
    if response is not None:
        return response.json()['result']


@lru_cache(maxsize=128)
def fetchBlock(blockNumber: str, txs: bool = False) -> dict:
    payload = json.dumps({'id': randomID(), 'jsonrpc': '2.0',
                          'method': 'eth_getBlockByNumber', 'params': [blockNumber, txs]})
    rpcProvider = selectRPCProvider(payload)
    response = eth_rpc(rpcProvider, payload)
    if response is not None:
        blk = response.json()
        # 处理异常
        if 'result' in blk.keys():
            return blk['result']
        else:
            return None
    else:
        return None


def getTransactionByHash(txHash: str) -> dict:
    payload = json.dumps({'id': randomID(), 'jsonrpc': '2.0', 'method': 'eth_getTransactionByHash',
                          'params': [txHash]})
    rpcProvider = selectRPCProvider(payload)
    response = eth_rpc(rpcProvider, payload)
    if response is not None:
        return response.json()
    else:
        return None


def getTransactionReceipt(txHash: str) -> dict:
    payload = json.dumps({"id": randomID(), "method": "eth_getTransactionReceipt", "params": [
        txHash], "jsonrpc": "2.0"})
    rpcProvider = selectRPCProvider(payload)
    response = eth_rpc(rpcProvider, payload)
    if response is not None:
        return response.json()
    else:
        return None


def randomID() -> str:
    length = 16
    table = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    id = []
    for i in range(length):
        id.append(table[Random().randint(0, 9)])
    return ''.join(id)
