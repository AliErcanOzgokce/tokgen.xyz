const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const createDeploymentModule = require("./createDeploymentModule");

// Function to deploy contract
function deployContract(features, name, symbol, premint, chain) {
    // Determine contract name based on features
    const contractName = `TokgenERC20${features.join('')}Ownable`;

    // Generate module code
    const moduleCode = `
    const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
    
    module.exports = buildModule("TokenModule", (m) => {
        const token = m.contract("${contractName}", ["0xf1bb52640B43c157Bb429EB4d1F0F7Ae4e58f427", "${name}", "${symbol}", ${premint}]);
        return { token };
    });
    `;

    console.log("Deploying contract...");

    // Ensure the directory exists
    const moduleDir = path.join(__dirname, "ignition", "modules");
    if (!fs.existsSync(moduleDir)) {
        fs.mkdirSync(moduleDir, { recursive: true });
    }

    console.log("Writing module to file...");

    // Write module to file
    const modulePath = path.join(moduleDir, "Token.js");
    fs.writeFileSync(modulePath, moduleCode);

    console.log("Executing deployment command...");

    // Command to deploy the contract
    const command = `npx hardhat ignition deploy ignition/modules/Token.js --network ${chain}`;

    console.log(`Command: ${command}`);

    // Execute the command
    exec(command, (error, stdout, stderr) => {
        console.log("Deployment complete.");
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }

        // Parse stdout for contract address
        const addressMatch = stdout.match(/TokenModule#TokgenERC20\w+ - (0x[a-fA-F0-9]{40})/);
        if (addressMatch) {
            const contractAddress = addressMatch[1];
            console.log(`Contract deployed at: ${contractAddress}`);
        } else {
            console.log("Could not find contract address in output.");
        }
    });
}

// Example usage
deployContract(["Mintable", "Burnable"], "MyToken", "MTK", 1000, "binance");
