var Token = artifacts.require("Token");
var Payments = artifacts.require("Payments");
var LiquidityPool = artifacts.require("LiquidityPool");

module.exports = async function(deployer) {
  await deployer.deploy(Token);

  await deployer.deploy(LiquidityPool);

  await deployer.deploy(Payments, Token.address, LiquidityPool.address);
};
