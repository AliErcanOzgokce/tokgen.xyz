
  const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
  
  module.exports = buildModule("TokenModule", (m) => {
      const token = m.contract("TokgenERC20MintableBurnablePermitOwnable", ["0xF6F2336D394c1AD1C71D935Eb77016B5Ac5734b5", "Test", "TST", 10]);
      return { token };
  });
  