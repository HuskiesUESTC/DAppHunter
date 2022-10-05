import time

from util.environment import EnvKey, env


def err_msg(msg: str):
    def wrapper(func):
        def inner_func(*args, **kwargs):
            result = func(*args, **kwargs)
            if not result:
                print(msg)
            return result

        return inner_func

    return wrapper


def has_error(data: {}) -> bool:
    return data.get('has_error', False)


def analyze():
    page_state = analyze_page_state()
    wallet_state = analyze_wallet_state()
    blockchain_state = analyze_blockchain_state()
    print("page state: ", page_state)
    print("wallet state: ", wallet_state)
    print("blockchain state: ", blockchain_state)

    print(env.data)

    if any(map(lambda state: has_error(state), [page_state, wallet_state, blockchain_state])):
        print('States parse error!')
        return False

    data = {
        'from': {
            'currency': [
                page_state['from']['currency'],
                wallet_state['from']['currency'],
            ],
            'amount': [
                page_state['from']['amount'],
                wallet_state['from']['amount'],
                blockchain_state['from']['amount'],
            ],
            'address': [
                wallet_state['from']['address'],
                blockchain_state['from']['address']
            ]
        },
        'to': {
            'currency': [
                page_state['to']['currency'],
                wallet_state['to']['currency'],
            ],
            'amount': [
                page_state['to']['amount'],
                wallet_state['to']['amount'],
                blockchain_state['to']['amount'],
            ],
            'address': [
                wallet_state['to']['address'],
                blockchain_state['to']['address']
            ]
        }
    }

    @err_msg(msg='The currencies are not consistent!')
    def currency_validate(currencies: [str]) -> bool:
        return len(set(currencies)) == 1

    @err_msg(msg='The amounts are not consistent!')
    def amount_validate(amounts: [int]) -> bool:
        return max(amounts) - min(amounts) < 1000000000

    @err_msg(msg='The addresses are not consistent!')
    def address_validate(address: [str]) -> bool:
        return len(set(address)) == 1

    return currency_validate(data['from']['currency']) and \
           currency_validate(data['to']['currency']) and \
           amount_validate(data['from']['amount']) and \
           amount_validate(data['to']['amount']) and \
           address_validate(data['from']['address']) and \
           address_validate(data['to']['address'])


def analyze_page_state():
    # 获取当前环境变量
    chain_type = env.get(EnvKey.CHAIN_TYPE, 'bnb')
    tx_type = env.get(EnvKey.TX_TYPE, 'swap')
    retry_count = 20
    cur_count = 0
    while cur_count < retry_count:
        page_state = env.get(EnvKey.PAGE_STATE, {})
        # 根据交易类型，获取相关交易信息
        if tx_type in ['swap']:
            currencies = page_state.get('currency', [])
            from_currency = 'ETH' if currencies[0].lower() == chain_type.lower() else currencies[0].upper()
            amounts = page_state.get('amount', [])
            if len(currencies) == 2 and len(amounts) == 2:
                return {
                    'from': {
                        'currency': from_currency,
                        'amount': int(float(amounts[0]) * (10 ** 18))
                    },
                    'to': {
                        'currency': currencies[1],
                        'amount': int(float(amounts[1]) * (10 ** 18))
                    }
                }
        time.sleep(1)
        cur_count += 1
    return {}


def analyze_wallet_state():
    retry_count = 20
    cur_count = 0
    while cur_count < retry_count:
        wallet_state = env.get(EnvKey.WALLET_STATE, {})
        if 'transaction' in wallet_state:
            tx_info = wallet_state['transaction']
            return {
                'from': {
                    'currency': tx_info['asset_out'],
                    'amount': int(tx_info['amount_out'] * (10 ** 18)),
                    'address': tx_info['depositor'],
                },
                'to': {
                    'currency': tx_info['asset_in'],
                    'amount': int(tx_info['amount_in'] * (10 ** 18)),
                    'address': tx_info['sender']
                }
            }
        elif wallet_state.get('has_error', False):
            return {'has_error': True}
        time.sleep(1)
        cur_count += 1
    return {}


def analyze_blockchain_state():
    retry_count = 20
    cur_count = 0
    while cur_count < retry_count:
        blockchain_state = env.get(EnvKey.BLOCKCHAIN_STATE, {})
        if blockchain_state.get('has_error', False):
            return {'has_error': True}
        if blockchain_state:
            result = {
                'from': {
                    'amount': blockchain_state['value'],
                    'address': blockchain_state['from'],
                },
                'to': {
                    'amount': '',
                    'address': blockchain_state['to'],
                }
            }
            if blockchain_state['method_name'] in ['swapETHForExactTokens']:
                result['to']['amount'] = blockchain_state['params'][0]['uint256']
            return result
        time.sleep(1)
        cur_count += 1
    return {}
