const OrochimaryToken = artifacts.require("OrochimaryToken");

contract('OrochimaryToken', (accounts) => {
  it('should put 10000 OrochimaryToken in the first account', async () => {
    const orochimaryTokenInstance = await OrochimaryToken.deployed();
    const balance = await orochimaryTokenInstance.getBalance.call(accounts[0]);

    assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  });
  it('should call a function that depends on a linked library', async () => {
    const orochimaryTokenInstance = await OrochimaryToken.deployed();
    const orochimaryTokenBalance = (await orochimaryTokenInstance.getBalance.call(accounts[0])).toNumber();
    const orochimaryTokenEthBalance = (await orochimaryTokenInstance.getBalanceInEth.call(accounts[0])).toNumber();

    assert.equal(orochimaryTokenEthBalance, 2 * orochimaryTokenBalance, 'Library function returned unexpected function, linkage may be broken');
  });
  it('should send token correctly', async () => {
    const orochimaryTokenInstance = await OrochimaryToken.deployed();

    // Setup 2 accounts.
    const accountOne = accounts[0];
    const accountTwo = accounts[1];

    // Get initial balances of first and second account.
    const accountOneStartingBalance = (await orochimaryTokenInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoStartingBalance = (await orochimaryTokenInstance.getBalance.call(accountTwo)).toNumber();

    // Make transaction from first account to second.
    const amount = 10;
    await orochimaryTokenInstance.sendToken(accountTwo, amount, { from: accountOne });

    // Get balances of first and second account after the transactions.
    const accountOneEndingBalance = (await orochimaryTokenInstance.getBalance.call(accountOne)).toNumber();
    const accountTwoEndingBalance = (await orochimaryTokenInstance.getBalance.call(accountTwo)).toNumber();


    assert.equal(accountOneEndingBalance, accountOneStartingBalance - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(accountTwoEndingBalance, accountTwoStartingBalance + amount, "Amount wasn't correctly sent to the receiver");
  });
});
