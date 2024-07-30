import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia, optimism, arbitrum, avalanche, polygon, base, bsc, fantom, celo, linea, zetachain, blast } from "wagmi/chains";

export const projectId = "bf361af9c264c8b4829b2210c59b6239";

if (!projectId) throw new Error("Project ID is not defined", projectId);

const metadata = {
  name: "tokgen.xyz",
  description: "tokgen.xyz | Token Generator App",
  url: "http://localhost:3000/",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [
  mainnet,
  sepolia,
  optimism,
  arbitrum,
  avalanche,
  polygon,
  base,
  bsc,
  fantom,
  celo,
  linea,
  zetachain,
  blast
];
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});
