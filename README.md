# orochimary token
Blockchain related course work for UNIBIT to created my own cryptocurrency.

## Resources
1. https://ethereum.org - official ethereum site with docs  
2. https://trufflesuite.com - official truffle site with docs  
3. https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity - a solidity plugin for .sol file styling and snippets  
4. https://trufflesuite.com/docs/truffle/getting-started/using-truffle-develop-and-the-console - truffle docs for using the develop console for testing  
5. https://github.com/trufflesuite/truffle/issues/943 - issue helping to understand how to use the truffle console  
6. https://trufflesuite.com/docs/truffle/reference/truffle-commands - truffle command breakdown  

## Creation process
1. Install the Truffle npm package
```
npm i truffle
```

2. Enter the develop console which starts a local server for testing  
```
npx truffle develop
```

- When starting the server, it generates addresses for testing, that look like the following:  
```
Truffle Develop started at http://localhost:9545/

Accounts:
(0) 0x65bf9790a259a98b8eaa9ad85b07e48d1af8e675
(1) 0x20d19591794912ec351251767f38bfeead6cecb9
(2) 0x08a5f58cfb8b825d7cf75761f2f07edbaa26b01a
(3) 0x83c1dc149ead8d290b92b75ff8b9a62c1198b1a6
(4) 0xef61e02066b988cf6e9b782c701a53eb2af06795
(5) 0x95499978968e610b7d0a1816c46fbeb13cfdbf51
(6) 0x1eb5cf6b8b1495d16dd633d42733b6534d43ec88
(7) 0x7ca262acc8d9dc29b466713c19a85345544f9b54
(8) 0xa1f227bfd47bac1a592b49f567f8a65e5d4255c5
(9) 0xb1bc6ba8ed961962158e0273ab068b9ba97723fb

Private Keys:
(0) 798bfa4c7e3b5959ecf9abb480a2c17799c03520612da2603c64d4f64fea2852
(1) c48580fd15863d85de67b17efa136b7d7de7d68e4ffc7af6345cdddad45c9e55
(2) 068f99e4d4ce0af4b00f606ae730e462182ffddefd4623a2847fa5f2815f8cbb
(3) 74b7bec18d519be9cff863e9a73ca0617dd876db4b2c6ec17f50d412d40e363d
(4) 85f7da0042b657511a2ef9d830d99aa53f4fdfb44fc687f7af5c7c36bc60e07d
(5) 546c50710e5ae7fac842a71cd99cc8473478abfa8eec689860cfa2e8f11a4a66
(6) e82ff55a95e6109834fda23b5d6c9e40fc1bcb2ebb45c80e3c87c539d40640b4
(7) 529c16338f611d2034806356f210278051b55c96df7cd00586ecd3a211297e17
(8) c084599d9155f439741fbfe51a95e30e3e5606d26c0ba70867cded43c1892e3c
(9) c925a250009610a64a0c21b09de47ea02f3457d9f678f9e8a302f3d01064ac68

Mnemonic: always impact rent dial behave front tongue fee way damage morning message
```

3. Enter the following command to create a build folder and use it in testing (in the develop console)  
```
truffle(develop) > migrate
```

4. We can get the instace of our built coin with the following  
```
truffle(develop)> let instance = await OrochimaryToken.deployed()
truffle(develop)> instance
```
* Instance prints all the data of the contract, available methods and etc.  

5. Making a call (calls don't require gas fees)  
```
truffle(develop)> let balance = await instance.getBalance(accounts[0])
truffle(develop)> balance.toNumber()
truffle(develop)> let balance2 = await instance.getBalance(accounts[1])
truffle(develop)> balance2.toNumber()
```

* We can make a call to a specific address on the blockchain with the following  
```
truffle(develop)> let balance3 = await instance.getBalance('0x0f764073545a4fafdbe07c00004a44afdf63465f')
truffle(develop)> balance3.toNumber()
```

6. Making a transaction (transactions require gas fees)  
```
truffle(develop)> let accounts = await web3.eth.getAccounts()
truffle(develop)> instance.sendToken(accounts[1], 10, {from: accounts[0]})
```

7. If we run the balance command again, we see the balance was changed  
```
truffle(develop)> balance = await instance.getBalance(accounts[0])
truffle(develop)> balance.toNumber()
truffle(develop)> balance2 = await instance.getBalance(accounts[1])
truffle(develop)> balance2.toNumber()
```

8. We can put the transaction in a variable to get a result  
```
truffle(develop)> let result = await instance.sendToken(accounts[1], 10, {from: accounts[0]})
truffle(develop)> result
```

* The result includes the following
```
result.tx (string) - Transaction hash
result.logs (array) - Decoded events (logs)
result.receipt (object) - Transaction receipt (includes the amount of gas used)
```