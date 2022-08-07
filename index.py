import time

from util import Chrome, Parser, bnb_exchanges

if __name__ == '__main__':
    chrome = Chrome()
    parser = Parser(chrome)

    chrome.unlock_metamask()
    # for dapp, url in bnb_exchanges.items():
    chrome.url = "https://swap.app.sokuswap.finance/swap"
    time.sleep(1)
    parser.handle()
    chrome.driver.close()
