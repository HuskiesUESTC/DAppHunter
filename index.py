import time

from util import Chrome, Parser, bnb_exchanges

if __name__ == '__main__':
    chrome = Chrome()
    parser = Parser(chrome)

    chrome.unlock_metamask()
    for dapp, url in bnb_exchanges.items():
        print(dapp)
        chrome.url = url
        time.sleep(1)
        parser.handle()
    chrome.driver.close()
