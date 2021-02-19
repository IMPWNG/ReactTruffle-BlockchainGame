// SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MemoryToken is ERC721 {

    constructor() ERC721("Memory Token", "MEMORY") {
    }

      function totalSupply() public returns (uint256) {
        uint256 _tokenId = totalSupply().add(1);
    }

    function mint(address _to, string memory _tokenURI) public returns(bool) {
       _mint(_to);
       _setTokenURI(_tokenURI);
       return true;
    }
}
