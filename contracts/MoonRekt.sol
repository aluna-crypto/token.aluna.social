pragma solidity ^0.5.2;

contract Payments {

  address _token_address;
  address _liquidity_pool_address;

  /**
   * token_address: the address of the token contract
   * liquidity_pool_address: address of the liquidity pool
   */
  constructor(address token_address, address liquidity_pool_address) public {
    _token_address = token_address;
    _liquidity_pool_address = liquidity_pool_address;
  }

}
