// contract
const contract = require('truffle-contract')
const Token = contract(require('../build/contracts/Token.json'))

// application specific
require('dotenv').config()  // Store environment-specific variable from '.env' to process.env

const utils = require('ethereumjs-util')
const get_provider = require('./get_provider')
const Web3 = require('web3')

send_token = async (address, amount, network = "ropsten") => {

  console.log( "Instantiating contract")

  provider = get_provider(network)

  web3 = new Web3(provider)

  accounts = await web3.eth.getAccounts()

  Token.setProvider(provider)
  await Token.detectNetwork()
  Token.defaults({
    from: accounts[0],
    //gas: 400000
  })

  token = await Token.at(Token.address)
  balance = await token.balanceOf(accounts[0])
  balance = balance.toString()

  console.log(' - got token at:', Token.address)
  console.log(' - balance     :', balance)
  console.log('')
  console.log('sending:')
  console.log(' -   from :', accounts[0])
  console.log(' -     to :', address)
  console.log(' - amount :', amount)

  result = await token.transfer(address, amount)

  console.log("receipt: ", result.receipt)
}

address = process.argv[2] || "0xA8950F8C30595bE20A279b4F2ca54d140128AB1D"
amount  = process.argv[3] || 10
network = process.argv[4]

if(!utils.isValidAddress(address)){
  return console.error("address must be a valid ethereum address")
}

if(isNaN(amount)) {
  return console.error("amount must be a number")
}

send_token(address, amount, network)
