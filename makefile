.PHONY: test

setup:
	npm install -g truffle
	npm install
	git clone https://github.com/poanetwork/solidity-flattener
	cd solidity-flattener && npm install

flat:
	./solidity-flattener/index.js ./contracts/Token.src.sol
	mv ./out/Token_flat.sol ./contracts/Token.sol
	rm -rf out

test:
	truffle test

deploy.ropsten:
	truffle migrate --network ropsten --reset
	# sometimes we might need using --reset
	# truffle migrate --network ropsten --reset
