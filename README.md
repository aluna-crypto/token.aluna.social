## 1. setup

- install metamask
- ask some ETH on ropsten using [this faucet](https://faucet.ropsten.be/)
- npm install

## 2. TODO

- verify code on etherscan as [described here](https://blog.fundrequest.io/verifying-your-truffle-solidity-contracts-on-etherscan-87cb374e2adc)

## 3. Currently compiled
```bash
$truffle compile

Compiling your contracts...
===========================
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/Token.sol
> Artifacts written to /Users/h/git/aluna/token/build/contracts
> Compiled successfully using:
   - solc: 0.5.2+commit.1df8f40c.Emscripten.clang
```

## 4. current deployed on Ropsten testnet

````bash
make deploy.ropsten
truffle migrate --network ropsten --reset

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'ropsten-fork'
> Network id:      3
> Block gas limit: 0x7a1200


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > account:             0xaadC6d30cb8941baE65402974C0417756325BFC3
   > balance:             0.967647201
   > gas used:            258162
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00258162 ETH

   -------------------------------------
   > Total cost:          0.00258162 ETH


2_deploy_contracts.js
=====================

   Replacing 'Token'
   -----------------
   > account:             0xaadC6d30cb8941baE65402974C0417756325BFC3
   > balance:             0.957220801
   > gas used:            1015612
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01015612 ETH

   -------------------------------------
   > Total cost:          0.01015612 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.01273774 ETH


Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 0x7a1200


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0xac4b575ea170d0e5dad7ad67bb9183b0741db050fe88805e6c8c8c0e685b7380
   > Blocks: 0            Seconds: 20
   > contract address:    0xC5C50C37D4b974C8F2c133B1074bc50D0dd30800
   > account:             0xaadC6d30cb8941baE65402974C0417756325BFC3
   > balance:             0.967497201
   > gas used:            273162
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00273162 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00273162 ETH


2_deploy_contracts.js
=====================

   Replacing 'Token'
   -----------------
   > transaction hash:    0x030042c083e91e373810d9706fc9d14907ca197cc19adf231db3460c457183d9
   > Blocks: 2            Seconds: 16
   > contract address:    0x388b38d09c3ff51BDA7b451108C78918f95d2Ed8
   > account:             0xaadC6d30cb8941baE65402974C0417756325BFC3
   > balance:             0.956020801
   > gas used:            1105612
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01105612 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01105612 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.01378774 ETH

# sometimes we might need using --reset
# truffle migrate --network ropsten --reset
````
