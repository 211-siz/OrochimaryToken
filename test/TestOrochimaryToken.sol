pragma solidity >=0.4.25 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/OrochimaryToken.sol";

contract TestOrochimaryToken {

  function testInitialBalanceUsingDeployedContract() public {
    OrochimaryToken meta = OrochimaryToken(DeployedAddresses.OrochimaryToken());

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 OrochimaryToken initially");
  }

  function testInitialBalanceWithNewOrochimaryToken() public {
    OrochimaryToken meta = new OrochimaryToken();

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 OrochimaryToken initially");
  }
}