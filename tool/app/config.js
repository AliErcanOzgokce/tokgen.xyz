import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia, optimism, arbitrum, avalanche, polygon, base, bsc, fantom, celo, linea, zetachain, blast } from '@wagmi/core/chains'

// Create a config object
export const config = createConfig({
  chains: [mainnet, sepolia, optimism, arbitrum, avalanche, polygon, base, bsc, fantom, celo, linea, zetachain, blast],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [avalanche.id]: http(),
    [polygon.id]: http(),
    [base.id]: http(),
    [bsc.id]: http(),
    [fantom.id]: http(),
    [celo.id]: http(),
    [linea.id]: http(),
    [zetachain.id]: http(),
    [blast.id]: http(),
  },
})