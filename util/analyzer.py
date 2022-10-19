import json
import time
from datetime import datetime
from api.receipt_fetcher import get_token_symbol, get_token_decimals
from api import web3_util

from util.environment import EnvKey, env

INTENTIONS = ['approve', 'swap', 'withdraw', 'deposit', 'claim', 'mint', 'transfer']

CONSISTENT = 0
TX_TYPE_INCONSISTENT = 1
TX_PARAMETER_INCONSISTENT = 2
CONTRACT_MISBEHAVIOR = 3

INCONSISTENCY = ['Consistent', 'Transaction Type Inconsistent', 'Transaction Parameter Inconsistent',
                 'Contract Misbehavior']


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
    print(env.data)
    intention_path = env.get(EnvKey.INTENTION_PATH, [])
    for intention in intention_path:
        if intention in INTENTIONS:
            env.set(EnvKey.TX_TYPE, intention)
    page_state = analyze_page_state()
    wallet_state = analyze_wallet_state()
    blockchain_state = analyze_blockchain_state()
    print("page state: ", page_state)
    print("wallet state: ", wallet_state)
    print("blockchain state: ", blockchain_state)

    if any(map(lambda state: has_error(state), [page_state, wallet_state, blockchain_state])):
        print('States parse error!')
        return -1

    def compare(page_state: {}, wallet_state: {}, blockchain_state: {}) -> int:
        type_e, type_g, type_s = page_state['type'], wallet_state['type'], blockchain_state['type']

        if type_e != type_g:
            return TX_TYPE_INCONSISTENT
        elif type_e != type_s or type_g != type_s:
            return CONTRACT_MISBEHAVIOR

        # parameters check
        p_e, p_g, p_s = page_state['parameters'], wallet_state['parameters'], blockchain_state['parameters']

        for p_name in p_e:
            v_e = p_e[p_name]
            v_g = p_g[p_name]
            v_s = p_s[p_name]
            if type(v_e) == 'str':
                # address和asset必须匹配
                if v_e == 'unknown' or v_g == 'unknown':
                    continue
                elif v_e != v_g:
                    return TX_PARAMETER_INCONSISTENT
                elif v_e != v_s:
                    return CONTRACT_MISBEHAVIOR
            elif type(v_e) == 'float' or type(v_e) == 'int':
                loss = abs(v_e - v_g) / float(v_e)
                if loss > 0.1:
                    return TX_PARAMETER_INCONSISTENT
                loss = abs(v_e - v_s) / float(v_e)
                if loss > 0.1:
                    return CONTRACT_MISBEHAVIOR

        for p_name in p_g:
            v_g = p_g[p_name]
            v_s = p_s[p_name]
            if type(v_g) == 'str':
                # address和asset必须匹配
                if v_g == 'unknown' or v_s == 'unknown':
                    continue
                elif v_g != v_s:
                    return CONTRACT_MISBEHAVIOR
            elif type(v_s) == 'float' or type(v_g) == 'int':
                loss = abs(v_s - v_g) / float(v_s)
                if loss > 0.1:
                    return CONTRACT_MISBEHAVIOR

        return CONSISTENT

    inconsistent_type = compare(page_state, wallet_state, blockchain_state)

    dapp_name = env.get(EnvKey.DAPP_NAME, 'unknown')
    dapp_url = env.get(EnvKey.DAPP_URL, 'unknown')
    protocol = env.get(EnvKey.PROTOCOL, 'unknown')
    with open(dapp_name + '_report.json', 'w+') as f:
        report = json.dumps({
            'dapp_name': dapp_name,
            'dapp_url': dapp_url,
            'protocol': protocol,
            'expected_behavior': '{}{}'.format(page_state['type'], page_state['parameters']),
            'transaction_behavior': '{}{}'.format(wallet_state['type'], wallet_state['parameters']),
            'smart_contract_behavior': '{}{}'.format(blockchain_state['type'], blockchain_state['parameters']),
            'inconsistency': INCONSISTENCY[inconsistent_type]
        }, indent=4)
        print(report)

        f.write(report)

    return inconsistent_type


def analyze_page_state():
    # 获取当前环境变量
    chain_type = env.get(EnvKey.CHAIN_TYPE, 'bnb')
    tx_type = env.get(EnvKey.TX_TYPE, '')
    retry_count = 20
    cur_count = 0
    behavior_e = {}
    behavior_type = 'unknown'
    while cur_count < retry_count:
        page_state = env.get(EnvKey.PAGE_STATE, {})
        # 根据交易类型，获取相关交易信息
        if tx_type == 'swap':
            currencies = page_state.get('currency', [])
            from_currency = 'ETH' if currencies[0].lower() == chain_type.lower() else currencies[0].upper()
            amounts = page_state.get('amount', [])
            if len(currencies) == 2 and len(amounts) == 2:
                return {
                    'asset_in': from_currency,
                    'amount_in': float(amounts[0]),
                    'asset_out': currencies[1].upper(),
                    'amount_out': float(amounts[1])
                }
        elif tx_type == 'approve':
            currencies = page_state.get('currency', [])
            currency = currencies[0].upper() if currencies else ''
            amounts = page_state.get('amount', [])
            amount = amounts[0] if amounts else ''
            spender = 'unknown'
            return {
                'type': 'approve',
                'parameters': {
                    'asset': currency,
                    'amount': amount,
                    'spender': 'unknown'
                }
            }
        elif tx_type == 'transfer':
            currencies = page_state.get('currency', [])
            currency = currencies[0].upper() if currencies else ''
            amounts = page_state.get('amount', [])
            amount = amounts[0] if amounts else ''
            spender = 'unknown'
            return {
                'type': 'transfer',
                'parameters': {
                    'asset': currency,
                    'amount': amount,
                    'spender': 'unknown'
                }
            }
        elif tx_type == 'withdraw':
            currencies = page_state.get('currency', [])
            currency = currencies[0].upper() if currencies else ''
            amounts = page_state.get('amount', [])
            amount = amounts[0] if amounts else ''
            return {
                'type': 'withdraw',
                'parameters': {
                    'amount': amount,
                    'to': 'unknown'
                }
            }
        elif tx_type == 'mint':
            currencies = page_state.get('currency', [])
            currency = currencies[0].upper() if currencies else ''
            amounts = page_state.get('amount', [])
            amount = amounts[0] if amounts else ''
            receiver = 'unknown'
            return {
                'type': 'mint',
                'parameters': {
                    'asset': currency,
                    'amount': amount,
                    'receiver': receiver
                }
            }
        elif tx_type == 'deposit':
            currencies = page_state.get('asset', [])
            currency = currencies[0].upper() if currencies else ''
            amounts = page_state.get('amount', [])
            amount = amounts[0] if amounts else ''
            return {
                'type': 'deposit',
                'parameters': {
                    'asset': currency,
                    'amount': amount,
                }
            }
        elif tx_type == 'claim':
            currencies = page_state.get('asset', [])
            currency = currencies[0].upper() if currencies else ''
            amounts = page_state.get('amount', [])
            amount = amounts[0] if amounts else ''
            return {
                'type': 'claim',
                'parameters': {
                    'asset': currency,
                    'amount': amount,
                }
            }
        time.sleep(1)
        cur_count += 1
    return {}


def analyze_wallet_state():
    wallet_state = env.get(EnvKey.WALLET_STATE, {})
    # fill tx fields
    behavior_g = {}
    behavior_type = 'unknown'
    parameters = {}
    tx_info = {
        'from': wallet_state['from'],
        'to': wallet_state['to'],
        'value': wallet_state['value']
    }
    if 'data' in wallet_state:
        tx_info['data'] = wallet_state['data']
        # decode tx
        hex_sig = tx_info['data'][:10]
        text_sig = web3_util.fetch_text_signature(hex_sig)
        methods = web3_util.tx_decoders(text_sig)
        hint = env.get(EnvKey.TX_TYPE, 'unknown')
        decoded_tx = {}
        for m in methods:
            success, decoded_tx = m.decode_transaction(tx_info['data'])
            if success and hint in decoded_tx['method']:
                break
    else:
        # transfer native token
        behavior_type = 'transfer'
        parameters['from'] = tx_info['from']
        parameters['to'] = tx_info['to']
        parameters['asset'] = env.get(EnvKey.CHAIN_TYPE, 'ETH').upper()
        parameters['value'] = int(tx_info['value'], 16) / float(10 ** 18)

    behavior_g['type'] = behavior_type
    behavior_g['parameters'] = parameters
    return behavior_g


def infer_behavior_g(decoded_tx: {}) -> {}:
    def close_to(a: float, b: float) -> bool:
        return abs(a - b) / a < 0.1

    behavior_type = 'unknown'
    parameters = {}
    if 'swap' in decoded_tx['method']:
        page_state = env.get(EnvKey.PAGE_STATE, {})
        # 根据交易类型，获取相关交易信息
        currencies = page_state.get('asset', [])
        from_currency = currencies[0].upper()
        amounts = page_state.get('amount', [])
        amount_in = 0.0
        amount_out = 0.0
        if len(currencies) == 2 and len(amounts) == 2:
            amount_in = float(amounts[0])
            amount_out = float(amounts[1])
        behavior_type = 'swap'
        asset_in_addr = 'unknown'
        asset_out_addr = 'unknown'
        asset_in = 'unknown'
        asset_out = 'unknown'
        parameters['amount_in'] = amount_in
        # 先取出asset from和asset to
        for p in decoded_tx['params']:
            p_name = list(p.keys())[0]
            p_value = p[p_name]
            if p_name == 'address[]':
                asset_in_addr = p_value[0]
                asset_out_addr = p_value[-1]
                asset_in = get_token_symbol(asset_in_addr)
                asset_out = get_token_symbol(asset_out_addr)
                if 'WBNB' in asset_in:
                    asset_in = 'BNB'
                elif 'WBNB' in asset_out:
                    asset_out = 'BNB'
                if 'WETH' in asset_in:
                    asset_in = 'ETH'
                elif 'WETH' in asset_out:
                    asset_out = 'ETH'
                parameters['asset_in'] = asset_in
                parameters['asset_out'] = asset_out
        # 再取出amount in和amount out
        for p in decoded_tx['params']:
            p_name = list(p.keys())[0]
            p_value = p[p_name]
            if 'uint' in p_name:
                # 跳过时间戳
                ts = int(datetime.timestamp(datetime.now()))
                # 分别假设参数是amount in和amount out
                p_in = p_value / (10 ** get_token_decimals(asset_in_addr))
                p_out = p_value / (10 ** get_token_decimals(asset_out_addr))
                if p_value - ts <= 60 * 60:
                    continue
                if close_to(p_in, amount_in):
                    parameters['amount_in'] = p_in
                if close_to(p_out, amount_out):
                    parameters['amount_out'] = p_out
        return {
            'behavior_type': behavior_type,
            'parameters': parameters
        }
    elif 'transfer' in decoded_tx['method']:
        behavior_type = 'transfer'
        return {
            'behavior_type': behavior_type,
            'parameters': parameters
        }
    elif 'mint' in decoded_tx['method']:
        behavior_type = 'mint'
        return {
            'behavior_type': behavior_type,
            'parameters': parameters
        }
    elif 'deposit' in decoded_tx['method']:
        behavior_type = 'deposit'
        return {
            'behavior_type': behavior_type,
            'parameters': parameters
        }
    elif 'claim' in decoded_tx['method']:
        behavior_type = 'claim'
        return {
            'behavior_type': behavior_type,
            'parameters': parameters
        }
    elif 'withdraw' in decoded_tx['method']:
        behavior_type = 'withdraw'
        return {
            'behavior_type': behavior_type,
            'parameters': parameters
        }


def analyze_blockchain_state():
    retry_count = 20
    cur_count = 0
    while cur_count < retry_count:
        blockchain_state = env.get(EnvKey.BLOCKCHAIN_STATE, {})
        if blockchain_state.get('has_error', False):
            return {'has_error': True}
        return infer_behavior_s(blockchain_state)


def infer_behavior_s(block_chain_state: {}) -> {}:
    # 没有data和log 只有value -> transfer native token
    behavior_type = 'unknown'
    parameters = {}
    if 'data' not in block_chain_state or 'log' not in block_chain_state:
        behavior_type = 'transfer'
        parameters['from'] = block_chain_state['from']
        parameters['to'] = block_chain_state['to']
        parameters['asset'] = env.get(EnvKey.CHAIN_TYPE, 'ETH').upper()
        parameters['value'] = block_chain_state['value']
    else:
        pass
    return {
        'type': behavior_type,
        'parameters': parameters
    }
