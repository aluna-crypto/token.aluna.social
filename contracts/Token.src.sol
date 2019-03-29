pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

  string public name = "Aluna TestToken";
  string public symbol = "ATT";
  uint8 public decimals = 0; // leaving without decimals for now
  uint public INITIAL_SUPPLY = 100000000 * (10 ** uint256(decimals)); // 100 000 000 - 100 million tokens

  constructor() public {
    _mint(msg.sender, INITIAL_SUPPLY);
  }

}
