var Token = artifacts.require("./Token.sol");

require('chai').should();

contract('Token', accounts => {

  const _name = "TestToken";
  const _symbol = "TTA";
  const _decimals = 18;

  beforeEach(async function () {
    this.token = await Token.new();
  });

  describe('token attributes', () => {
    it('has the correct name', async function() {
      const name = await this.token.name ();
      name.should.equal(_name);
    });

    it('has the correct symbol', async function() {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    });

    it('has the correct decimals', async function() {
      const decimals = await this.token.decimals();
      decimals.toNumber().should.be.equal(_decimals)
    });

  });

});
