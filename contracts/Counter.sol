// SPDX-License-Identifier: MIT

pragma solidity >=0.8.27;
 
contract Counter {
    uint256 public value;
 
    function increase() external {
        value++;
    }
     
    function decrease() external {
        value--;
    }
}
