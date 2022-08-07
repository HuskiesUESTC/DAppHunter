import yaml


def get_config(filepath):
    with open(filepath, 'r', encoding="utf-8") as config_file:
        return yaml.load(config_file, Loader=yaml.FullLoader)


config = get_config('./config.yaml')

bnb_exchanges = {
    'Knight': 'https://dex.knightswap.financial/#/swap',
    'AmpleSwap': 'https://ampleswap.com/swap',
    'LAUNCH': 'https://liquidity.lz.finance/#/swap',
    'PanckeSwap': 'https://pancakeswap.finance/swap',
    'cheeseswap': 'https://cheeseswap.app/#/swap',
    'Pandaswap': 'https://www.pandaswap.xyz/#/swap',
    'Bunicorn': 'https://bunicorn.exchange/#/trade/tokens',
    'Transit Swap': 'https://swap.transit.finance/?locale=zh#/',
    'Bogged': 'https://app.bogged.finance/bsc/trade?type=buy&tokenIn=BNB&tokenOut',
    'XY Finance xx': 'https://app.xy.finance/',
    'DonkSwap': 'https://www.donkswap.com/#/swap',
    'BenSwap': 'https://dex.benswap.finance/#/swap',
    'NeverSwap': 'https://neverswap.com/#/swap',
    'SokuSwap': 'https://swap.app.sokuswap.finance/swap',
    'PinkSwap': 'https://exchange.pinkswap.finance/#/swap',
    'JetSwap': 'https://exchange.jetswap.finance/#/swap',
    'SheepDex': 'https://sheepdex.org/#/swap',
    'BirdSwap': 'https://birbswap.finance/swap',
    'TwinDex': 'https://exchange.twindex.com/#/swap',
    'Gswap': 'https://gswap.exchange/swap?network=56',
    'YouSwap': 'https://swap.youswap.pro/#/swap',
    'Rara Exchange': 'https://www.exchange.rara.farm/#/swap',
    'Game X Fiance': 'https://game-x.finance/swap',
    'Reba Swap': 'https://rebaswap.finance/swap',
    'CobraSwap': 'https://www.cobraswap.net',
    'PyeSwap': 'https://pyeswap.com/swap',
    'Position': 'https://position.exchange/swap/#/BNB/POSI',
    'oni': 'https://swap.oni.exchange/#/swap'
}

eth_exchanges = {
    'CexiSwap': 'https://app.cexiswap.io/#/swap',
    'WinSwap': 'https://winswap.win/#/simple-swap/market?lp=1',
    'KyberSwap': 'https://kyberswap.com/swap#/about',
    'JustMoney': 'https://just.money/?from=TRX&n=TRON&t=swap&to=JM',
    'Atomex DEX': 'https://dex.atomex.me/swaps',
    'Crypto Swap': 'https://crypto.com/defi/swap',
    'Kwik Swap': 'https://app.kwikswap.org/swap',
    'Polyient DEX': 'https://dex.polyient.games/#/swap',
    'OneSwap': 'https://www.oneswap.net/eth/swap',
    'DefiPlaza': 'https://app.defiplaza.net/swap',
    'Capital DEX': 'https://capitaldex.exchange/#/swap',
    'Swapr': 'https://swapr.eth.link/#/swap?chainId=1',
    'VulcanDEX': 'https://vulcandex.vulcanforged.com/swap#/'
}

other_exchanges = {
    'Metroswap': 'https://app.metroswap.org/#/swap',
    'BloctoSwap': 'https://swap.blocto.app/#/swap',
    'Jswap Finance': 'https://app.jswap.finance/#/swap',
    'dForce DApp': 'https://trade.dforce.network/#/Bridge/mainnet?AssetsType=Lend&currentPool=general'
}
