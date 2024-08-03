require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    // INFURA
    // FOR TESTING PURPOSES
    // sepolia: {
    //   // Tested
    //   url: "https://sepolia.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
    //   accounts: [
    //     process.env.PRIVATE_KEY,
    //   ],
    // },
    ethereum: {
      // Tested
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    linea: {
      // Tested
      url: `https://linea-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    avalanche: {
      // Tested
      url: `https://avalanche-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    polygon: {
      // Tested
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    blast: {
      // Tested
      url: `https://blast-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    optimism: {
      // Tested
      url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    arbitrum: {
      // Tested
      url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    celo: {
      // Tested
      url: `https://celo-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    binance: {
      // Tested
      url: `https://bsc-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    // ALCHEMY
    base: {
      // Tested
      url: `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    fantom: {
      // Tested
      url: `https://fantom-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    zetachain: {
      // Tested
      url: `https://zetachain-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [
        process.env.PRIVATE_KEY,
      ],
    },
    
  },
};
