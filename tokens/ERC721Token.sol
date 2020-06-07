pragma solidity ^0.5.0;

import "contracts/helpers/ERC721Mintable.sol";

import "contracts/helpers/Ownable.sol";


contract ERC721Token is ERC721Mintable, Ownable {

  constructor() public ERC721Mintable() {}

}