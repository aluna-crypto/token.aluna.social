.PHONY: test

setup:
	npm install -g truffle
	npm install

test:
	truffle test

deploy.ropsten:
	truffle migrate --network ropsten
	# sometimes we might need using --reset
	# truffle migrate --network ropsten --reset
