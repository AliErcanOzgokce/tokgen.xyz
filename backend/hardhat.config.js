require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    // INFURA
    ethereum: {
      // Tested
      url: "https://sepolia.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
    linea: {
      // Tested
      url: "https://linea-sepolia.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
    avalanche: {
      // Tested
      url: "https://avalanche-fuji.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
    polygon: {
      // Tested
      url: "https://polygon-amoy.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
    blast: {
      // Tested
      url: "https://blast-sepolia.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
    optimism: {
      // Tested
      url: "https://optimism-sepolia.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
    arbitrum: {
      // Tested
      url: "https://arbitrum-mainnet.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
    celo: {
      // Tested
      url: "https://celo-alfajores.infura.io/v3/c6f973393b1943528ef758d8a9e877ec",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
    // ALCHEMY
    base: {
      // Tested
      url: "https://base-sepolia.g.alchemy.com/v2/CsglrjoDtp4Zh507nMrgR8u-XXv3vb7W",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
    fantom: {
      // Tested
      url: "https://fantom-testnet.g.alchemy.com/v2/CsglrjoDtp4Zh507nMrgR8u-XXv3vb7W",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
    zetachain: {
      // Tested
      url: "https://zetachain-testnet.g.alchemy.com/v2/CsglrjoDtp4Zh507nMrgR8u-XXv3vb7W",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
    // OTHER
    binance: {
      // Tested
      url: "https://rpc.ankr.com/bsc_testnet_chapel",
      accounts: [
        "0x61b115a4e9e5c5906f53bb0150d80be67db5f598c1fc539517ec87c355004286",
      ],
    },
  },
};
