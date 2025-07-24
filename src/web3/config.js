import { cookieStorage, createStorage } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { bsc, mainnet, polygon, sepolia } from '@reown/appkit/networks';

export const projectId = "fc0b7f76086b5fccf0fc5d12449e7d3e";

if (!projectId) {
    throw new Error('Project ID is not defined');
}

export const networks = [bsc, mainnet, sepolia, polygon];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
      storage: cookieStorage
    }),
    ssr: true,
    projectId,
    networks
  })

export const config = wagmiAdapter.wagmiConfig;