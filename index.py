import time

from util.chrome import Chrome
from util.parser import Parser


if __name__ == '__main__':
    chrome = Chrome()
    try:
        chrome.unlock_metamask()
        chrome.set_url("https://ampleswap.com/swap")
        parser = Parser(chrome)
        time.sleep(1)
        parser.handle()
        print("end")
    except Exception as e:
        print(e)
    # chrome.driver.close()
