// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokgenERC20MintableBurnableOwnable is ERC20, ERC20Burnable, Ownable {
    constructor(
        address initialOwner,
        string memory name,
        string memory symbol,
        uint256 premint
    ) ERC20(name, symbol) Ownable(initialOwner) {
        _mint(msg.sender, premint * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
