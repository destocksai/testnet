import { http, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

const projectId = '3fbb6bba6f1de962d911bb5b5c9dba88';

export const config = createConfig({
  chains: [sepolia, mainnet],
  connectors: [injected(), walletConnect({ projectId })],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
