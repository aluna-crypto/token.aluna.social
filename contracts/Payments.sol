pragma solidity ^0.5.2;

contract Payments {

  address _token_address;
  address _liquidity_pool_address;

  /**
   * token_address: the address of the token contract
   */
  constructor(address token_address, address liquidity_pool_address) public {
    _token_address = token_address;
    _liquidity_pool_address = liquidity_pool_address;
  }

  /**
   *
  charge(address user_address, uint amount, bytes32 plan_id) public {

    MY_ADDRESS = ??

    token_address.transferFrom(user_address, MY_ADDRESS, amount)

    _payments[user_address].push {
      time: now // timestamp of the payment
      amount: amount // amount of tokens paid
      plan_id: plan_id // id of the plan the user payed for
    }

    // pay 5% to the liquidity pool

    token_address.transferFrom(MY_ADDRESS, _liquidity_pool_address, amount * 0.05)
  }
  **/
}
