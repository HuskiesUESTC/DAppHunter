# ScamHunter项目部署

---
### 1. 安装 docker 环境
### 2. 拉取 Ethereum 容器化部署库（[LocalNode](https://github.com/HuskiesUESTC/LocalNode)）
### 3. 查看 Chrome 浏览器 用户Profile 文件夹地址

- 在Chrome地址栏中，输入chrome://version  
- 在个人资料路径一行，可得到Chrome配置文件所在路径 ，例如：
```
/Users/jiangtianxing/Library/Application Support/Google/Chrome/Profile 1
```
- 记录除最后一级的文件夹路径复制下来(`Profile 1`不需要)，例如：
```
/Users/jiangtianxing/Library/Application Support/Google/Chrome
```

### 4. [下载 Chrome Driver 并将其部署至全局环境](https://chromedriver.chromium.org/downloads)
### 5. 在自动化测试环境下打开浏览器，安装 MetaMask 钱包
- 通过以下脚本在自动化测试环境下打开 Chrome 浏览器
```Python
from selenium import webdriver

if __name__ == '__main__':
    option = webdriver.ChromeOptions()
    option.add_argument('--headless')
    # 此处的地址设置为 用户Profile 文件夹地址
    option.add_argument('--user-data-dir=/Users/jiangtianxing/Desktop/Chrome')
    driver = webdriver.Chrome(options=option)
```
- 安装MetaMask钱包插件，并记录其浏览器插件id
- 创建钱包账户，并导入私钥（该地址是以太坊本地节点coinbase的地址）
```
e6a6c3d551247545f311d8a7080d92df990b08d93c95b8393f3b7c260252b2e2
```
### 6. 配置文件 config.yml
- 需要将 **chrome.profile.dir** 修改为 **用户Profile 文件夹地址；**
- 需要将 **chrome.metamask.id** 修改为 自动化测试环境下 **MetaMask钱包插件id.**
```YAML
# chrome 环境配置
# chrome 环境配置
chrome:
  # webdriver 路径
  webdriver: /Users/jiangtianxing/code/DAppHunter/chromedriver
  # 获取元素默认等待相应时间，显示等待
  wait-time: 20
  # 配置了 MetaMask 钱包插件的谷歌浏览器 Profile 目录
  profile:
    dir: /Users/jiangtianxing/Library/Application Support/Google/Chrome
  # MeatMask 钱包插件配置
  metamask:
    # 浏览器插件ID
    id: obdlokclfmbpnnhgpdihalflheoafeme
    # 钱包密码
    password: jiangtianxing
    # 钱包助记词（项目中未使用，此处仅为方便记忆）
    phrase: rigid pool noise wasp toast entry entire jump visual invite avocado hotel
    # 钱包倒入私钥（项目中未使用，此处仅为方便记忆）
    secret: e6a6c3d551247545f311d8a7080d92df990b08d93c95b8393f3b7c260252b2e2

# 华为ocr配置
huawei-ocr:
  token: MIIWrQYJKoZIhvcNAQcCoIIWnjCCFpoCAQExDTALBglghkgBZQMEAgEwghS-BgkqhkiG9w0BBwGgghSwBIIUrHsidG9rZW4iOnsiZXhwaXJlc19hdCI6IjIwMjItMDYtMDVUMDM6NDA6MzEuNDQwMDAwWiIsIm1ldGhvZHMiOlsicGFzc3dvcmQiXSwiY2F0YWxvZyI6W10sInJvbGVzIjpbeyJuYW1lIjoidGVfYWRtaW4iLCJpZCI6IjAifSx7Im5hbWUiOiJ0ZV9hZ2VuY3kiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3Nfc3BvdF9pbnN0YW5jZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2l2YXNfdmNyX3ZjYSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfY24tc291dGgtNGMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3Nfa2FlMSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2R3c19wb2MiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jYnJfZmlsZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19rYzFfdXNlcl9kZWZpbmVkIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfbWVldGluZ19lbmRwb2ludF9idXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tYXBfbmxwIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWdfY24iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9zaXNfc2Fzcl9lbiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3NhZF9iZXRhIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfc2VydmljZXN0YWdlX21ncl9kdG1fZW4iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9yZWRpczYtZ2VuZXJpYy1pbnRsIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZXZzX3ZvbHVtZV9yZWN5Y2xlX2JpbiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Rjc19kY3MyLWVudGVycHJpc2UiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF92Y3AiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jdnIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tYXMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tdWx0aV9iaW5kIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWlwX3Bvb2wiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lciIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfYXAtc291dGhlYXN0LTNkIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfcHJvamVjdF9kZWwiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9zaGFyZUJhbmR3aWR0aF9xb3MiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jZXIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jY2lfb2NlYW4iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jZXNfcmVzb3VyY2Vncm91cF90YWciLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ldnNfcmV0eXBlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZWNzX2lyM3giLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2NuLXNvdXRod2VzdC0yYiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2NpZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Nmc3R1cmJvIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfdnBjX25hdCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Zwbl92Z3dfaW50bCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2h2X3ZlbmRvciIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfY24tbm9ydGgtNGUiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2NuLW5vcnRoLTRkIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZGF5dV9kbG1fY2x1c3RlciIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19hYzciLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9pbnRsX2NvbmZpZ3VyYXRpb24iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jY2VfbWNwX3RoYWkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jb21wYXNzIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfc2VydmljZXN0YWdlX21ncl9kdG0iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2NuLW5vcnRoLTRmIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY3BoIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfc21uX2FwcGxpY2F0aW9uIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfb3BfZ2F0ZWRfb25ldGFsayIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3VjcyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19ncHVfZzVyIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfd2tzX2twIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY2NpX2t1bnBlbmciLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9yaV9kd3MiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9vcF9nYXRlZF9tc3NpIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfb3BfZ2F0ZWRfbXNzZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3RyYWRldGVzdCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3ZwY19mbG93X2xvZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2F0YyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FhZF9iZXRhX2lkYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2NzYnNfcmVwX2FjY2VsZXJhdGlvbiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19kaXNrQWNjIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYWlzX2FwaV9pbWFnZV9hbnRpX2FkIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZHNzX21vbnRoIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY3NnIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZGVjX21vbnRoX3VzZXIiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9pZWZfZWRnZWF1dG9ub215IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfdmlwX2JhbmR3aWR0aCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19vbGRfcmVvdXJjZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3dlbGlua2JyaWRnZV9lbmRwb2ludF9idXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9kY3NfZGNzMi1yZWRpczYtZ2VuZXJpYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc190aGlyZF9pbWFnZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2llZi1pbnRsIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfcHN0bl9lbmRwb2ludF9idXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9tYXBfb2NyIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZGx2X29wZW5fYmV0YSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2llcyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX29ic19kdWFsc3RhY2siLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lZGNtIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfY3Nic19yZXN0b3JlIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfaXZzY3MiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfYzZhIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfdnBuX3ZndyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX3Ntbl9jYWxsbm90aWZ5IiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfS29vTWVzc2FnZUNPQlQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jYWUtYmV0YSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2NjZV9hc21faGsiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jc2JzX3Byb2dyZXNzYmFyIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfZ2FfY24iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3Nfb2ZmbGluZV9hYzciLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfczciLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9ldnNfcG9vbF9jYSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2RldmNsb3VkX292ZXJzZWFfYmV0YSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2JjZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19vZmZsaW5lX2Rpc2tfNCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2ludGxfY29tcGFzcyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Nicl9maWxlc19iYWNrdXAiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lcHMiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9jc2JzX3Jlc3RvcmVfYWxsIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfbDJjZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2ludGxfdnBjX25hdCIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Zjc19wYXkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9sMmNnX2ludGwiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2FwLXNvdXRoZWFzdC0xZSIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfcnUtbW9zY293LTFiIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfYV9hcC1zb3V0aGVhc3QtMWQiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2FwLXNvdXRoZWFzdC0xZiIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2R3cl9iZXRhIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfb3BfZ2F0ZWRfbWVzc2FnZW92ZXI1ZyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2Vjc19jNyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX21hcF92aXNpb24iLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9lY3NfcmkiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9kY3MzLWVudGVycHJpc2UiLCJpZCI6IjAifSx7Im5hbWUiOiJvcF9nYXRlZF9hX2FwLXNvdXRoZWFzdC0xYyIsImlkIjoiMCJ9LHsibmFtZSI6Im9wX2dhdGVkX2FfcnUtbm9ydGh3ZXN0LTJjIiwiaWQiOiIwIn0seyJuYW1lIjoib3BfZ2F0ZWRfaWVmX3BsYXRpbnVtIiwiaWQiOiIwIn1dLCJwcm9qZWN0Ijp7ImRvbWFpbiI6eyJuYW1lIjoiaHc1MDM3NDc0OSIsImlkIjoiMDc0MmM4ZTg2NDAwMGY2ZTBmMmZjMDA0OWZiYjJhNjAifSwibmFtZSI6ImNuLXNvdXRoLTEiLCJpZCI6IjA3NTM5NDY4ZGM4MDI2MTgyZjBmYzAwNGZiOGQ3MzJmIn0sImlzc3VlZF9hdCI6IjIwMjItMDYtMDRUMDM6NDA6MzEuNDQwMDAwWiIsInVzZXIiOnsiZG9tYWluIjp7Im5hbWUiOiJodzUwMzc0NzQ5IiwiaWQiOiIwNzQyYzhlODY0MDAwZjZlMGYyZmMwMDQ5ZmJiMmE2MCJ9LCJuYW1lIjoiaHc1MDM3NDc0OSIsInBhc3N3b3JkX2V4cGlyZXNfYXQiOiIiLCJpZCI6IjA3NDJjOGU5YWM4MDBmNjcxZmMzYzAwNDA1NDAxZTI4In19fTGCAcEwggG9AgEBMIGXMIGJMQswCQYDVQQGEwJDTjESMBAGA1UECAwJR3VhbmdEb25nMREwDwYDVQQHDAhTaGVuWmhlbjEuMCwGA1UECgwlSHVhd2VpIFNvZnR3YXJlIFRlY2hub2xvZ2llcyBDby4sIEx0ZDEOMAwGA1UECwwFQ2xvdWQxEzARBgNVBAMMCmNhLmlhbS5wa2kCCQDcsytdEGFqEDALBglghkgBZQMEAgEwDQYJKoZIhvcNAQEBBQAEggEAVeo4Lg8bI5kwLW+RegQTQEycUzFhE2ML59CL0cemgBLqMzOydJg4+9i3CCxKNBTOAPWacinZQMebboZTjRvDmltMB949fTZOn4RxhQSLbleACZhtHr2bCIJsu9MJGF3MZo09IJsZFKDHh9Vgf-c+x7oegCawrKtdjZQBTxVkRL5rvc7NAI1BiPzXIGUnv1Kggv5S1u440CX9eXSUdi0-s+3kY24mt5h4YNmrpFO1-XvUyWDdci5u+oxGxEvJDRKRqe1mu6UsCUYxe68lRIfKJeywdWQdhLc984Gc0DwTSUTBXkifVPBMKHblXDAWf9+hS57uiqbi3QMuGI-S-Q0TWA==
  project-id: 07539468dc8026182f0fc004fb8d732f

ali-ocr:
  url: https://gjbsb.market.alicloudapi.com/ocrservice/advanced
  app-code: 331b1519662b4c9e8d22e9035a5962c8

# 文件目录配置
dir:
  pattern: /Users/jiangtianxing/code/DAppHunter/pattern

neo4j:
  host: bolt://localhost:7687
  name:
  username: neo4j
  password: jiangtianxing

mysql:
  user: root
  password: jiangtianxing
  database: dapp

dapp:
  input-amount: 0.01
  wait-time: 7

# 是否为调试模式
debug:
  # 是否显示当前页面的dom树
  display-dom-tree: False
  # 是否显示当前页面的检测路径
  display-detect-path: True
  # 是否需要对节点进行调试
  debug-node:
    status: True
    names:
      - input-amount
  # 检测是否输出exception信息
  display-exception: True
  # 显示click元素的xpath
  display-click-element-xpath: True
```

### 7. 框架运行

```Bash
cd ~/path/ScamHunter
python3 main.py -url http://localhost/apporve/
```

### Results
Inconsistent DApps


| Symbol        | Name          | Address                            | Website       |
| ------------- | ------------- | ---------------------------------- | ------------- |
| Velo  | Velochain.io  | 0xc7ef1bff46cd025509cf5e55fa5cd5c14793cbff | DEAD
| FLUX  | GoFlux.io  | 0xb16600c510b0f323dee2cb212924d90e58864421 | DEAD 
| VERA | TheVera.io |  0x0df62d2cd80591798721ddc93001afe868c367ff | DEAD
| ALICE | Alicedrop.com | 0x89e0262ec34311564b4e43d416218d38d4db879c | DEAD
| EVER | TheEver.io | 0x5190b01965b6e3d786706fd4a999978626c19880 | DEAD
| BSCTOKEN | BSCTOKEN.IO | 0x569b2cf0b745ef7fad04e8ae226251814b3395f9 | DEAD
| AIR | BestAir.io | 0xbc6675de91e3da8eac51293ecb87c359019621cf | Redirected
| ABFIN | ABFIN.org | 0xb8a9704d48c3e3817cc17bc6d350b00d7caaecf6 | DEAD
| Zepe.io | Zepe.io | 0x119e2ad8f0c85c6f61afdf0df69693028cdc10be | DEAD
| SSX | StakeShare | 0x9e2d266d6c90f6c0d80a88159b15958f7135b8af | DEAD
| xch5.net | xch5.net | 0x4827405d992d4d42f9ff4bb9d13ec9b616a75278 | DEAD
| BeezEX | BeezEX.Net | 0xa39b14f57087aa5f16b941e5ec182b84a5432aa7 | SSL Warning
| Tu7.org | Tu7.org | 0x442b656f5a5c3dd09790951810c5a15ea5295b51 | DEAD
| LinkP.io | LinkP.io | 0xd5e3bf9045cfb1e6ded4b35d1b9c34be16d6eec3 | Redirected
| Mello | BSCmello.io | 0x0198be93b7cae38da7e2fd966946412cc36447bf | DEAD
| H3X | H3X.Exchange | 0x892C8aE31c809a2E9DEa97e10d09457a685c8E15 | DEAD
| Dex88.org | Dex88.org | 0x27b880865395da6cda9c407e5edfcc32184cf429 | DEAD
| AGMC.io | AGMC.io | 0xef27b9cb67aa93ec3494a60f1ea9380e86175b26 | DEAD
| ARKR.org | ARKR.org | 0x04645027122c9f152011f128c7085449b27cb6d7 | DEAD
| GemSwap.net | GemSwap.net | 0x0d05a204e27e4815f1f5afdb9d82aa221aa0bdfa | DEAD
| PowNFT.net | PowNFT.net | 0x893c25c46bfaa9b66cd557837d32af3fe264a07b | DEAD
| LELX.IO | LELX.IO | 0x22e51bae3f545255e115090202a23c7ede0b00b9 | SSL Warning
| VSGA.CC | VSGA.CC | 0x71122B3aADcE1eF7Bc5bB4A2A644Af0B478aF548 | DEAD
| 1gas.org | 1gas.org | 0x1b4640d79a124520a73ed6284a549e89f52dae54 | DEAD
| SHIBAIN | shibainu-dividend.com | 0xdddf82fb98530243fcf8d4b8dc452f918c3ac4ac | DEAD
| PDot.io | PDot.io | 0x8bd0e87273364ebbe3482efc166f7e0d34d82c25 | DEAD
| ABOYS | Rocketboys.io | 0xeade8e37700a34b196142d9962858d2a137e6eb8 |  DEAD
| BUSD* | BUSDSWAP.NET | 0xcd0a62a8e7080ffba5373c2c759f896b2518f846 | DEAD
| BUSD* | BUSDSWAP.IO | 0x3529EAdAcb3375eD37124c40Ada9827A6B0eC2e1 | DEAD
| gaxy.io | gaxy.io | 0xed61629b32991c8143ec6fae9dd2b90850bf78ec | DEAD
| MATICSWAP.NET | MATICSWAP.NET | 0x14f2c84a58e065c846c5fdddade0d3548f97a517 | DEAD
| MMdex.io | MMdex.io | 0xdc4cb4c3587532409a4545aa79a15d967bed1c08 | DEAD
|ALPINECARS.IO | Alpinecars.io | 0xf53f0e1e271693382c1bd3e774b9c2f644b3add0 | DEAD
| BSTAKE | bstake.net | | DEAD
