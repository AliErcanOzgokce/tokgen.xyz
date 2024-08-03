require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    // INFURA
    sepolia: {
      // Tested
      url: "https://sepolia.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    ethereum: {
      // Tested
      url: "https://sepolia.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    linea: {
      // Tested
      url: "https://linea-sepolia.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    avalanche: {
      // Tested
      url: "https://avalanche-fuji.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    polygon: {
      // Tested
      url: "https://polygon-amoy.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    blast: {
      // Tested
      url: "https://blast-sepolia.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    optimism: {
      // Tested
      url: "https://optimism-sepolia.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    arbitrum: {
      // Tested
      url: "https://arbitrum-mainnet.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    celo: {
      // Tested
      url: "https://celo-alfajores.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    binance: {
      // Tested
      url: "https://bsc-testnet.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    // ALCHEMY
    base: {
      // Tested
      url: "https://base-sepolia.g.alchemy.com/v2/CsglrjoDtp4Zh507nMrgR8u-XXv3vb7W",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    fantom: {
      // Tested
      url: "https://fantom-testnet.g.alchemy.com/v2/CsglrjoDtp4Zh507nMrgR8u-XXv3vb7W",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    zetachain: {
      // Tested
      url: "https://zetachain-testnet.g.alchemy.com/v2/CsglrjoDtp4Zh507nMrgR8u-XXv3vb7W",
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    
  },
};
