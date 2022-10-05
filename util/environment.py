import enum
from util.exception import CustomError


class EnvKey(enum.Enum):
    PAGE_STATE = 'front_end_page_state',
    TX_TYPE = 'transaction_type',
    CHAIN_TYPE = 'chain_type',


class TxType(enum.Enum):
    SWAP = 'swap'


class ChainType(enum.Enum):
    BNB = 'bnb'
    ETH = 'eth'


# 全局环境工具类
class Environment:

    def __init__(self):
        self.data = {}

    # 设置key
    def set(self, key, value):
        self.data[key] = value

    # 获取key
    def get(self, key, default_value=None):
        return self.data.get(key, default_value)

    # 清除key，keys参数可为多个
    # 如果keys为空，则清空所有
    def clear(self, *keys):
        if keys is None or len(keys) == 0:
            self.data.clear()
            return
        for key in keys:
            if keys in self.data:
                self.data.pop(key)


env = Environment()
