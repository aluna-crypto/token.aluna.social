pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

  string public name = "TestToken";
  string public symbol = "TTA";
  uint8 public decimals = 18;
  uint public INITIAL_SUPPLY = 100000000; // 100 000 000 - 100 million tokens

  constructor() public {
    _mint(msg.sender, INITIAL_SUPPLY);
  }

}
