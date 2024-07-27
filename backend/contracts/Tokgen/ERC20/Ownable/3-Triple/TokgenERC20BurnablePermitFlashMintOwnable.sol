// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokgenERC20BurnablePermitFlashMintOwnable is
    ERC20,
    ERC20Burnable,
    ERC20Permit,
    ERC20FlashMint,
    Ownable
{
    constructor(
        address initialOwner,
        string memory name,
        string memory symbol,
        uint8 premint
    ) ERC20(name, symbol) ERC20Permit(name) Ownable(initialOwner) {
        _mint(msg.sender, premint * 10 ** decimals());
    }
}
