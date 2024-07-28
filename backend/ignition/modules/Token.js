
  const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
  
  module.exports = buildModule("TokenModule", (m) => {
      const token = m.contract("TokgenERC20MintableBurnableOwnable", ["0xf1bb52640B43c157Bb429EB4d1F0F7Ae4e58f427", "HarunS", "HRNS", 1000000]);
      return { token };
  });
  