from util.environment import EnvKey, env
from util.exception import CustomError


def analyze_page_state():
    # 获取当前环境变量
    chain_type = env.get(EnvKey.CHAIN_TYPE, 'bnb')
    tx_type = env.get(EnvKey.TX_TYPE, 'swap')
    page_state = env.get(EnvKey.PAGE_STATE, {})
    # 根据交易类型，获取相关交易信息
    if tx_type in ['swap']:
        currencies = page_state.get('currency', [])
        amounts = page_state.get('amount', [])
        print(page_state)
        if len(currencies) != 2 or len(amounts) != 2:
            raise CustomError('the currency and amount page states is invalid')
        return {
            'from': {
                'currency': currencies[0],
                'amount': amounts[0]
            },
            'to': {
                'currency': currencies[1],
                'amount': amounts[1]
            }
        }
    return {}
