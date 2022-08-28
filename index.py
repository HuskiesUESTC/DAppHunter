import time

from util import Chrome, Parser

if __name__ == '__main__':
    chrome = Chrome()
    parser = Parser(chrome)

    chrome.unlock_metamask()
    # for dapp, url in bnb_exchanges.items():
    chrome.url = "https://ampleswap.com/swap"
    time.sleep(1)
    parser.handle()
    chrome.driver.close()
