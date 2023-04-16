import { useEffect, useState } from "react";

import { ethers } from 'ethers';
import axios from "axios";

const Metamask = () => {

    const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
    const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);

    const [accountValue, setAccountValue] = useState<string | null>(null);
    const [accountValueEuro, setAccountValueEuro] = useState<number | null>(null);

    const [provider, setProvider] = useState<any>(null);

 
    useEffect(() => {
    if((window as any).ethereum){
        //check if Metamask wallet is installed
        setIsMetamaskInstalled(true);
    }
    },[]);

    useEffect(() => {
        async function getValue() {
            if(ethereumAccount){
                const balance = await provider.getBalance(ethereumAccount);
                const formattedBalance = ethers.utils.formatEther(balance);
                console.log(formattedBalance);
                setAccountValue(formattedBalance);

                const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur");
                const ethEurRate = response.data.ethereum.eur;
                const balanceInEuros = balance * ethEurRate;
                setAccountValueEuro(balanceInEuros);
                console.log(balanceInEuros)
            }
        }
        getValue();
    },[provider]);
    
 //Does the User have an Ethereum wallet/account?
 async function connectMetamaskWallet(): Promise<void> {
   //to get around type checking
   (window as any).ethereum
     .request({
         method: "eth_requestAccounts",
     })
     .then((accounts : string[]) => {
       setEthereumAccount(accounts[0]);
        setProvider(new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/3ca301557ed2414d97cee5fb60151ec4"))

     })
     .catch((error: any) => {
         alert(`Something went wrong: ${error}`);
     });

     
 }
 
 if (ethereumAccount === null) {
   return (
     <div className="App App-header">
       {
         isMetamaskInstalled ? (
           <div>
             <button onClick={connectMetamaskWallet}>Connect Your Metamask Wallet</button>
           </div>
         ) : (
           <p>Install Your Metamask wallet</p>
         )
       }
 
     </div>
   );
 }
 
 
 return (
   <div className="App">
     <header className="App-header">
       <p>
         ETH wallet connected as: {ethereumAccount}
         ETH in Wallet : {accountValue}
         Euro in Wallet : {accountValue}
       </p>
     </header>
   </div>
 );
}

export default Metamask