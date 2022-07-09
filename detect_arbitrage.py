import logging
import time
import web3
from redis import StrictRedis, ConnectionPool
from concurrent.futures import ThreadPoolExecutor, as_completed, wait, ALL_COMPLETED

SIGPOOL = ConnectionPool.from_url('redis://localhost:6379', db=0)
GASPOOL = ConnectionPool.from_url('redis://localhost:6379', db=1)
BLOCKPOOL = ConnectionPool.from_url('redis://localhost:6379', db=2)

logging.getLogger().setLevel(logging.INFO)


def detect_arbitrage(startBn: str):
    approveCount = 1
    approveGas = 50000
    gasPerApprove = 0
    validatePool = ThreadPoolExecutor(max_workers=4)
    sigFetchPool = ThreadPoolExecutor(max_workers=64)

    def log_suspicious_tx(future):
        txReceipt = future.result()
        if txReceipt is not None:
            gas = int(txReceipt['result']['gasUsed'], base=16)
        # logging.info('{}'.format(json.dumps(txReceipt)))
        if gas >= gasPerApprove * 50:
            logging.warning(
                '{} gas burned, average {}'.format(gas, gasPerApprove))
            logging.warning(
                'suspicious tx={}'.format(txReceipt['result']['logs'][0]['transactionHash']))
            with open('suspecious.txt', 'a+') as f:
                f.write('suspicious tx={}\n'.format(
                    txReceipt['result']['logs'][0]['transactionHash']))
        nonlocal approveCount
        nonlocal approveGas
        approveCount += 1
        approveGas += gas

    bn = startBn
    while True:
        st = time.time()
        #
        blk = web3.fetchBlock(bn, True)
        transactions = blk['transactions'] if blk is not None else []
        sigs = set()
        for tx in transactions:
            inputData = tx['input']
            # 非transfer Exact ETH或空交易
            if inputData is not None and inputData != '0x':
                sigs.add(inputData[:10])
                # 处理approve交易
                if inputData[:10] == '0x095ea7b3':
                    gasPerApprove = approveGas / approveCount
                    gas = int(tx['gas'], base=16)
                    if gas >= gasPerApprove * 16:
                        # 查询实际使用gas
                        validatePool.submit(
                            web3.getTransactionReceipt, tx['hash']).add_done_callback(log_suspicious_tx)
                    else:
                        approveCount += 1
                        approveGas += gas

        logging.info('{} unique signatures in block {}'.format(len(sigs), bn))
        # 拉取函数签名
        for hexSig in sigs:
            sigFetchPool.submit(web3.fetchTextSig, hexSig)
        # 计时
        decimalBn = int(bn, 16)
        decimalBn += 1
        bn = hex(decimalBn)
        now = time.time()
        if now - st >= 3.0:
            continue
        else:
            time.sleep(3.0 - now + st)


if __name__ == '__main__':
    detect_arbitrage('0x10c517e')
