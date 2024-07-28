const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

function createDeploymentModule(contractName, args) {
    return buildModule("TokenModule", (m) => {
        const deployer = m.getAccount(0);

        const token = m.contract(contractName, args, { from: deployer });

        return { token };
    });
}

module.exports = createDeploymentModule;
