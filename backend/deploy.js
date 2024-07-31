const { spawn } = require("child_process");
const { error } = require("console");
const fs = require("fs");
const { ethers } = require("hardhat");
const path = require("path");

// Function to deploy contract
function deployContract(features, address, name, symbol, premint, chain) {
  return new Promise((resolve, reject) => {
    // Determine contract name based on features
    const contractName = `TokgenERC20${features.join("")}Ownable`;

    // Generate module code
    const moduleCode = `
  const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
  
  module.exports = buildModule("TokenModule", (m) => {
      const token = m.contract("${contractName}", ["${address}", "${name}", "${symbol}", ${premint}]);
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
    const command = `npx`;
    const args = [
      "hardhat",
      "ignition",
      "deploy",
      "ignition/modules/Token.js",
      "--network",
      chain,
      "--reset",
    ];

    console.log(`Command: ${command} ${args.join(" ")}`);

    // Execute the command with spawn to handle interaction
    const deployProcess = spawn(command, args);

    // Variables to capture output
    let stdoutData = "";
    let stderrData = "";

    // Listen for stdout data and respond to prompts
    deployProcess.stdout.on("data", (data) => {
      const output = data.toString();
      stdoutData += output; // Accumulate output

      console.log(`stdout: ${output}`);

      // Check for prompt and send 'y'
      if (output.includes("Confirm deploy to network")) {
        deployProcess.stdin.write("y\n");
      } else if (output.includes("Confirm reset of deployment")) {
        deployProcess.stdin.write("y\n");
      }
    });

    // Listen for stderr data
    deployProcess.stderr.on("data", (data) => {
      stderrData += data.toString();
      console.error(`stderr: ${data}`);
    });

    // Listen for process exit
    deployProcess.on("close", (code) => {
      console.log(`Deployment process exited with code ${code}`);

      // Check for successful deployment
      if (code === 0) {
        console.log("Deployment successful.");
        // Parse stdout for contract address
        const addressMatch = stdoutData.match(
          /TokenModule#TokgenERC20\w+ - (0x[a-fA-F0-9]{40})/
        );
        if (addressMatch) {
          const contractAddress = addressMatch[1];
          console.log(`Contract deployed at: ${contractAddress}`);
          resolve(contractAddress);
          
        } else {
          const errorMessage = "Could not find contract address in output.";
          console.log(errorMessage);
          reject(errorMessage);
        }
      } else {
        const errorMessage = "Deployment failed.";
        console.error(errorMessage);
        reject(errorMessage);
      }
    });
  });
}

module.exports = deployContract;

