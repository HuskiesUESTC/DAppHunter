# DAppHunter
This is the repo of DAppHunter, which is a prototype system for identifying inconsistent behaviors of DApps. We will clean up the code, and make a demo video as soon as possible.

---

### 1. Install the Python dependencies
`pip3 install -r requirements.txt`

### 2. Install ganache and fork the Ethereum Mainnet and BSC Mainnet as the local node
Install ganache

`npm install ganache --global`

Fork the mainnet and unlock the big whale accounts, you can also unlock your account here

`ganache --chain.chainId 1 --f your fork rpc provider --verbose --unlock 0x686667d62d19d1e259aFf5966Eb39c93A5ca8c6C --unlock 0x8894E0a0c962CB723c1976a4421c95949bE2D4E3 --unlock 0x0d53966B549D66f3800C8Dc51461c9Ad4974b079 --unlock 0xf977814e90da44bfa03b6295a0616a897441acec`

`ganache --chain.chainId 56 --f your fork rpc provider --verbose --unlock 0x686667d62d19d1e259aFf5966Eb39c93A5ca8c6C --unlock 0x8894E0a0c962CB723c1976a4421c95949bE2D4E3 --unlock 0x0d53966B549D66f3800C8Dc51461c9Ad4974b079 --port 8546`

### 3. Compile the crafted MetaMask
See https://github.com/HuskiesUESTC/metamask-extension to build and install the crafted MetaMask
`git clone https://github.com/HuskiesUESTC/metamask-extension`

### 4. Configure the profile of Chrome

- Visit chrome://version in your Chrome browser
- You will see the profile files in the "Profile Path", for example：

```
/Users/jiangtianxing/Library/Application Support/Google/Chrome/Profile 1
```

- Copy the profile path(exclude `Profile 1`)，e.g.：

```
/Users/jiangtianxing/Library/Application Support/Google/Chrome
```

### 5. Download Chrome Driver and add it to path (https://chromedriver.chromium.org/downloads)

### 6. Install the crafted MetaMask

- You can use the scripts below to open Chrome and test the previous steps

```Python
from selenium import webdriver

if __name__ == '__main__':
    option = webdriver.ChromeOptions()
    option.add_argument('--headless')
    # This is your Profile path
    option.add_argument('--user-data-dir=/Users/jiangtianxing/Desktop/Chrome')
    driver = webdriver.Chrome(options=option)
```

- Install MetaMask，and record its extension id
- Create an empty wallet

### 6. Configure the config.yml

- Set **chrome.profile.dir** to your  **Profile path.**
- Set **chrome.metamask.id** to your **MetaMask extension id.**

```YAML
# Directories
dirs:
  base: &base-dir /Users/jiangtianxing/code/ScamHunter
  webdriver: &webdriver-path /Users/jiangtianxing/code/webdriver/chromedriver
  pattern: !join [ *base-dir, /pattern ]
  chrome-profile: &chrome-profile-dir /Users/jiangtianxing/Library/Application Support/Google/Chrome

# Chrome config 
chrome:
  # webdriver path
  webdriver: *webdriver-path
  # Wait time for a front-end action
  wait-time: 10
  # Profile path
  profile:
    dir: *chrome-profile-dir
  # MeatMask config
  metamask:
    # Extension id
    id: Your MetaMask extension id
    password: Your password
    # Wallet phrase（not used）
    phrase: rigid pool noise wasp toast entry entire jump visual invite avocado hotel
    # Wallet private key（not used）
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

# Debug mode config
debug:
  # Show dom tree
  display-dom-tree: False
  # Show action path
  display-detect-path: True
  debug-node:
    status: True
    names:
      - select-currency
  # Show exceptions
  display-exception: True
  # Show xpath
  display-element-xpath: True
```

### 7. run DAppHunter on a inconsistent DApp demo

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
