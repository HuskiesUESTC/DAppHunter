import time
from py2neo import Node
from util.config import config
from exception import CustomError


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


# 重试
def retry(fn):
    def execute(*args, **kwargs):
        max_retry_time = 3
        cnt = 0
        while cnt < max_retry_time:
            try:
                result = fn(*args, **kwargs)
                return result
            except Exception as e:
                print(e)
                time.sleep(1)
                cnt += 1
        raise CustomError('Retry error!')

    return execute

