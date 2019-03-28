## 1. setup

- install metamask
- ask some ETH on ropsten using [this faucet](https://faucet.ropsten.be/)
- npm install

## 2. current deployed on Ropsten testnet

````bash
$ make deploy.ropsten
truffle migrate --network ropsten

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

   Deploying 'Migrations'
   ----------------------
   > account:             0xaadC6d30cb8941baE65402974C0417756325BFC3
   > balance:             0.99741838
   > gas used:            258162
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00258162 ETH

   -------------------------------------
   > Total cost:          0.00258162 ETH


2_deploy_contracts.js
=====================

   Deploying 'Token'
   -----------------
   > account:             0xaadC6d30cb8941baE65402974C0417756325BFC3
   > balance:             0.98684454
   > gas used:            1030356
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01030356 ETH

   -------------------------------------
   > Total cost:          0.01030356 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.01288518 ETH


Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 0x7a1200


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x2837b49e515525dced0ed155bfd2b5eff7b092f7733efb4309f35b8a3d72dc6f
   > Blocks: 1            Seconds: 28
   > contract address:    0x6EF1a5f5F0F297B16ce048Ead43122ADc5ed578D
   > account:             0xaadC6d30cb8941baE65402974C0417756325BFC3
   > balance:             0.99726838
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

   Deploying 'Token'
   -----------------
   > transaction hash:    0xd0ae7f22b494d9f27bcac95b18b1a35d121a3e7ef3e444229f807e52f69b6365
   > Blocks: 0            Seconds: 4
   > contract address:    0xdd7aAeE292eea23101cEb0456ce2b3ba565D03fe
   > account:             0xaadC6d30cb8941baE65402974C0417756325BFC3
   > balance:             0.98564454
   > gas used:            1120356
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01120356 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01120356 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.01393518 ETH
````
