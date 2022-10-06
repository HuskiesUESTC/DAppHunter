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
# 目录
dirs:
  base: &base-dir /Users/jiangtianxing/code/ScamHunter
  webdriver: &webdriver-path /Users/jiangtianxing/code/webdriver/chromedriver
  pattern: !join [ *base-dir, /pattern ]
  chrome-profile: &chrome-profile-dir /Users/jiangtianxing/Library/Application Support/Google/Chrome

# chrome 环境配置
chrome:
  # webdriver 路径
  webdriver: *webdriver-path
  # 获取元素默认等待相应时间，显示等待
  wait-time: 10
  # 配置了 MetaMask 钱包插件的谷歌浏览器 Profile 目录
  profile:
    dir: *chrome-profile-dir
  # MeatMask 钱包插件配置
  metamask:
    # 浏览器插件ID
    id: oekdeaoojbdgoagdfkglpkifcinoojph
    # 钱包密码
    password: jiangtianxing
    # 钱包助记词（项目中未使用，此处仅为方便记忆）
    phrase: rigid pool noise wasp toast entry entire jump visual invite avocado hotel
    # 钱包倒入私钥（项目中未使用，此处仅为方便记忆）
    secret: e6a6c3d551247545f311d8a7080d92df990b08d93c95b8393f3b7c260252b2e2

ali-ocr:
  url: https://gjbsb.market.alicloudapi.com/ocrservice/advanced
  app-code: 331b1519662b4c9e8d22e9035a5962c8

neo4j:
  host: bolt://localhost:7687
  name: dapphunter
  username: jiangtianxing
  password: jiangtianxing

mysql:
  user: root
  password: jiangtianxing
  database: dapp

dapp:
  input-amount: '0.001'
  wait-time: 10

redis:
  host: localhost
  port: 6379
  max-connections: 64

rpc:
  delegate-url: http://localhost:8546
  ganache-url: http://localhost:8545
  remote-url: https://bsc-dataseed1.ninicoin.io
  signature-url: https://www.4byte.directory/api/v1/signatures/
  provider-urls:
    - https://bsc-dataseed.binance.org/
    - https://bsc-dataseed1.defibit.io/
    - https://bsc-dataseed1.ninicoin.io/
    - https://bsc-dataseed2.defibit.io/
    - https://bsc-dataseed3.defibit.io/
    - https://bsc-dataseed4.defibit.io/
    - https://bsc-dataseed2.ninicoin.io/
    - https://bsc-dataseed3.ninicoin.io/
    - https://bsc-dataseed4.ninicoin.io/
    - https://bsc-dataseed1.binance.org/
    - https://bsc-dataseed2.binance.org/
    - https://bsc-dataseed3.binance.org/
    - https://bsc-dataseed4.binance.org/
  erc20-list-abi-filepath: !join [ *base-dir, /api/erc20_list_abi.json ]
  default-eth-balance: ffffffe1626510267400

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
      - select-currency
  # 检测是否输出exception信息
  display-exception: True
  # 显示操作元素的xpath
  display-element-xpath: True
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
