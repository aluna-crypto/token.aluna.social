const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = (network = 'ropsten') => {
  const url = `https://${network}.infura.io/v3/`

  return new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/v3/" + process.env.INFURA_API_KEY)
}
