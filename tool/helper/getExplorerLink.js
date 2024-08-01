const explorerLinks = {
    ethereum: "https://etherscan.io/",
    binance: "https://bscscan.com/",
    polygon: "https://polygonscan.com/",
    arbitrum: "https://arbiscan.io/",
    avalanche: "https://subnets.avax.network/c-chain",
    fantom: "https://ftmscan.com/",
    celo: "https://explorer.celo.org/mainnet",
    optimism: "https://optimistic.etherscan.io/",
    base: "https://basescan.org/",
    blast: "https://blastscan.io/",
    linea: "https://lineascan.build/",
    zetachain: "https://explorer.zetachain.com/cc"
  };
  
export default function getExplorerLink(chain, address) {
    const baseUrl = explorerLinks[chain];
    if (!baseUrl) {
      throw new Error(`Unsupported chain: ${chain}`);
    }
    return `${baseUrl}address/${address}`;
  }