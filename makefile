setup:
	npm install -g truffle

deploy.ropsten:
	truffle migrate --network ropsten
	# sometimes we might need using --reset
	# truffle migrate --network ropsten --reset
