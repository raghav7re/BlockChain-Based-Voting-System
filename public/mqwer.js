
        //import Web3 from web3;
        var web3 = new Web3(Web3.givenProvider || "HTTP://0.0.0.0:7545");

        var myContract;
        async function CheckMetamaskConnection() {
            //var Web3 = require(['web3']);
            /*
            window.addEventListener('load', function() {
            let web3 = window.web3
            window.web3 = new Web3(web3.currentProvider);
            console.log(web3.version)
        })*/

            ethereum.request('eth_requestAccounts');
            window.ethereum.enable();
            // Modern dapp browsers...
            if (window.ethereum) {
                window.ethereum.enable();
                window.web3 = new Web3(window.ethereum);

                try {
                    // Request account access if needed
                    await window.ethereum.request({method: 'eth_requestAccounts'});
                    // Acccounts now exposed
                    return true;
                } catch (error) {
                    // User denied account access...
                    return false;
                    
                }
                //window.ethereum.enable();
            }
            // Legacy dapp browsers...
            else if (window.web3) {
                
                window.web3 = new Web3(web3.currentProvider.enable());
                // Acccounts always exposed

                return true;
            }
            // Non-dapp browsers...
            else {
                console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
                return false;
            }
        }

        $(document).ready(async function () {
            var IsMetamask = await CheckMetamaskConnection();
            if (IsMetamask) {
                var version =web3.version;
                console.log(version);
                //myContract = new web3.eth.Contract(SmartContractABI,SmartContractAddress);
                
                myContract = new web3.eth.Contract([
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_candidateid",
				"type": "address"
			}
		],
		"name": "eventVote",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "getcandi",
		"outputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendBJP",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendCONG",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendMAM",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendRAJAap",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendRAJBJP",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendRAJCong",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendRAJJD",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendUPBJP",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendUPBSP",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendUPCONG",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sendUPSP",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "candidatecount",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "voter",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],web3.utils.toChecksumAddress('0xa6E940d07E214Da2b9e6580318383D40F10557AB'));

                var bjpRaj	="0x690854ccAae9A9B581B12a40A035b7B5e4788ABe";
                var congRaj ="0x12cF65d7A64794D157b70B8B7703fDC518c24a30";
                var aapRaj = "0xb40E9B0198eb166D8FAbCD03F94322C9427b702F";
                var jdRaj	="0xa54ec29fC6bB89b413A3d04dF16C03D25fb05F3A";
                
                
                getCandidate(bjpRaj);
                getCandidate(congRaj);
                getCandidate(aapRaj);
                getCandidate(jdRaj);
                var bttn = document.getElementById("ClickMe").innerHTML;
                //document.getElementById("ClickMe").addEventListener("click", Vote(0x690854ccAae9A9B581B12a40A035b7B5e4788ABe));
         
                //bttn.onclick=Vote(0x690854ccAae9A9B581B12a40A035b7B5e4788ABe);
                console.log("addreses ", bjpRaj,congRaj,aapRaj,jdRaj);
                
                await myContract.events.eventVote({
                    fromBlock:0
                }, function(err, event){
                    console.log("event :", event);
                    //getCandidate(event.args._candidateid);
                });
                console.log("myContract :", myContract);
                console.log("Metamask detected!")
            } else {
                console.log("Metamask not detected");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Metamask not detected!',
                    onClose() {
                    location.reload();
                }
            });
            }


		$("#button").click(function() {

			Vote(0x690854ccAae9A9B581B12a40A035b7B5e4788ABe);
		});
        });
        
        async function getCandidate(cad){
            await myContract.methods.candidates(cad).call(function(err, result){
                var dac;
                console.log("cad :",cad);
                if (!err) {
                    console.log("result : ", result);
                    //await myContract.methods.sendRAJBJP().send({from:0xaDa50cA0B525f202c706791c4c3c802D0dD6Be5E,value: 1e18  },function(err, result){});
                       
                    if (cad=="0x690854ccAae9A9B581B12a40A035b7B5e4788ABe")
                    {
                        dac=8;
                        
                    }
                    else if(cad=="0x12cF65d7A64794D157b70B8B7703fDC518c24a30")
                    {
                        dac=9;
                    }
                else if (cad == "0xb40E9B0198eb166D8FAbCD03F94322C9427b702F") 
                {
                    dac=10;
                }
                else if (cad == "0xa54ec29fC6bB89b413A3d04dF16C03D25fb05F3A") 
                {
                        dac=11;
                    }
                    else {
                      dac=0;  
                    }
                    console.log("dac :",dac);
                    document.getElementById("cad" + dac).innerHTML = result[1];
                    document.getElementById("cad"+dac+'count').innerHTML = result[2];
                   
                }
            });
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
         let account = accounts[0];

         //myContract.methods.sendRAJBJP().send({from:web3.utils.toChecksumAddress(account),value: 1e18  },function(err, result){});
         
        } 
        
          
         
         
            async function Vote( cad){
              //console.log(myContract);
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
         let account = accounts[0];

         await myContract.methods.sendRAJBJP().send({from:web3.utils.toChecksumAddress(account),value: 1e18  },function(err, result){});
            //myContract.methods.sendRAJBJP().send({from:0xaDa50cA0B525f202c706791c4c3c802D0dD6Be5E,value: 1e18  },function(err, result){})
            if (cad==0x690854ccAae9A9B581B12a40A035b7B5e4788ABe)
                   {
					await myContract.methods.sendRAJBJP().send({from:web3.utils.toChecksumAddress(account),value: 1e18  },function(err, result){});  
                      // await myContract.methods.sendRAJBJP().send({from:0xaDa50cA0B525f202c706791c4c3c802D0dD6Be5E,value: 1e18  },function(err, result){})
                        //await myContract.sendRAJBJP({value: 1e18 }, function(err, result){})
                    }
                else if(cad==0x12cF65d7A64794D157b70B8B7703fDC518c24a30)
                {	
					await myContract.methods.sendRAJCong().send({from:web3.utils.toChecksumAddress(account),value: 1e18  },function(err, result){});
                    //await myContract.methods.sendRAJCong().send({value: 1e18  },function(err, result){})
                      //  await myContract.sendRAJCong({value: 1e18 },function(err, result){})
                    }
                    else if (cad == 0xb40E9B0198eb166D8FAbCD03F94322C9427b702F) 
                    {
						await myContract.methods.sendRAJJD().send({from:web3.utils.toChecksumAddress(account),value: 1e18  },function(err, result){});
                        //myContract.methods.sendRAJJD().send({value: 1e18  },function(err, result){})
                        //await myContract.sendRAJJD( {value: 1e18 },function(err, result){})
                    }
                else if (cad == 0xa54ec29fC6bB89b413A3d04dF16C03D25fb05F3A) 
                {	
					await myContract.methods.sendRAJAap().send({from:web3.utils.toChecksumAddress(account),value: 1e18  },function(err, result){});
                    //myContract.methods.sendRAJAap().send({value: 1e18  },function(err, result){})
                    //await myContract.sendRAJAap( {value: 1e18 },function(err, result){})
                }
                else {
                       console.log(cad+"vote is not working"); 
                    }
                    /* await myContract.vote(cad, function(err, result){
                        
                if(!err){
                    console.log("We are winning!");
                } else{
                    console.log("Can not connect to the smart contract");
                }
            
            })*/
        }

        
        
/*

*/ 
export {Vote} ;