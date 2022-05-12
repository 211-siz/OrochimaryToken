const ConvertLib = artifacts.require("ConvertLib");
const OrochimaryToken = artifacts.require("OrochimaryToken");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, OrochimaryToken);
  deployer.deploy(OrochimaryToken);
};
