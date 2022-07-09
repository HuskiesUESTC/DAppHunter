# 全局环境工具类
class Environment:

    def __init__(self):
        self.data = {}

    # 设置key
    def set(self, key, value):
        self.data[key] = value

    # 获取key
    def get(self, key):
        if key not in self.data:
            return None
        return self.data[key]

    # 清除key，keys参数可为多个
    # 如果keys为空，则清空所有
    def clear(self, *keys):
        if keys is None or len(keys) == 0:
            self.data.clear()
            return
        for key in keys:
            if keys in self.data:
                self.data.pop(key)
