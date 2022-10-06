import sys
import time

from util import Chrome, Parser, analyzer
import getopt
from api.rpc_delegate import start_api_server


def parse_args(argv):
    name, url, chain = None, None, None
    try:
        opts, args = getopt.getopt(argv, "hn:u:c", ["name=", "url=", "chain="])
    except getopt.GetoptError:
        print('dapphunter.py -n <name> -u <url> -c <chain>')
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print('dapphunter.py -i <dapp-name> -u <dapp-url> -c <chain>')
            sys.exit()
        elif opt in ['-n', '--name']:
            name = arg
        elif opt in ['-u', '--url']:
            url = arg
        elif opt in ['-c', '--chain']:
            chain = arg
    if all(map(lambda item: not item, [name, url, chain])):
        print('the input arguments are invalid')
        print('dapphunter.py -i <dapp-name> -u <dapp-url> -c <chain>')
        sys.exit()
    return name, url, chain


def main(argv):
    # 解析 DApp 的 name、url
    # name, url, chain = parse_args(argv)
    name, url, chain = 'test', 'https://www.pandaswap.xyz/#/swap', 'bnb'
    # 启动服务
    api_server = start_api_server(port=8546, chain=chain)
    try:
        # 打开浏览器，解锁钱包
        chrome = Chrome()
        chrome.unlock_metamask()
        # 执行检测算法
        chrome.url = url
        parser = Parser(chrome)
        parser.handle()
    except Exception as e:
        print(e)
    finally:
        time.sleep(5)
        # 分析检测结果
        result = analyzer.analyze()
        print('detect result is {}'.format(result))
        sys.exit(0)


if __name__ == '__main__':
    main(sys.argv[1:])
