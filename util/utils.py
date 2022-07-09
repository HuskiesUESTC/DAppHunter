# 加载配置文件
import json
from py2neo import Node
import requests
from util.config import config


# 记录检测日志的执行路径
def detect_path_trace(fn):
    def log(*args, **kwargs):
        # 方法执行前记录
        empty = '-'
        node_name = None
        if config['debug']['display-detect-path']:
            for arg in args:
                if type(arg) == Node:
                    node_name = arg.get('name')
                    if 'Intention' not in arg.labels:
                        empty = '---'
                    print(empty, node_name)
                    break
        # 方法执行
        if config['debug']['debug-node']['status']:
            debug_node_names = config['debug']['debug-node']['names']
            for debug_node_name in debug_node_names:
                if debug_node_name == node_name:
                    print('--------start debug--------')
                    break
        item = fn(*args, **kwargs)
        # 方法执行后记录
        # if config['debug']['display-detect-path'] and item is not None:
        #     if type(item) == bool:
        #         print(empty * 2, item)
        # 返回方法执行的结果
        return item

    return log


def ocr(base64_image: str) -> {str: [[int]]}:
    url = "https://ocr.cn-south-1.myhuaweicloud.com/v2/07539468dc8026182f0fc004fb8d732f/ocr/web-image"
    payload = {
        'image': base64_image
    }
    headers = {
        'X-Auth-Token': config['huawei-ocr']['token'],
        'Content-Type': 'application/json'
    }

    count = 3
    for i in range(count):
        try:
            response = requests.request("POST", url, headers=headers, data=json.dumps(payload))
            if response.status_code / 100 != 2:
                print(response.text)
                continue
            data = json.loads(response.text)
            result = {}
            for word_info in data['result']['words_block_list']:
                result[word_info['words']] = word_info['location']
            return result
        except Exception as e:
            print(e)
    return {}

