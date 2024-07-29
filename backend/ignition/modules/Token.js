
  const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
  
  module.exports = buildModule("TokenModule", (m) => {
      const token = m.contract("TokgenERC20MintableBurnableOwnable", ["0xF6F2336D394c1AD1C71D935Eb77016B5Ac5734b5", "Gülme Sakın", "ALLAH", 1000000000]);
      return { token };
  });
  