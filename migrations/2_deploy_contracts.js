const Token = artifacts.require("Token");
const Payments = artifacts.require("Payments");
const LiquidityPool = artifacts.require("LiquidityPool");
const MoonRekt = artifacts.require("MoonRekt");

module.exports = async function(deployer) {
  await deployer.deploy(Token);

  await deployer.deploy(LiquidityPool);

  await deployer.deploy(Payments, Token.address, LiquidityPool.address);

  await deployer.deploy(MoonRekt, Token.address, LiquidityPool.address);
};
