
  const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
  
  module.exports = buildModule("TokenModule", (m) => {
      const token = m.contract("TokgenERC20MintableOwnable", ["0x39AE624E86EC7Ebaad9830Ebe8b191d9e9C985A7", "TokevnName", "ThKN", 1000]);
      return { token };
  });
  