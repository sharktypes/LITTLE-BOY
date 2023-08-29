import { Chain } from 'wagmi'

export const octa = {
  id: 800001,
  name: 'Octa Space',
  network: 'Octa',
  nativeCurrency: {
    decimals: 18,
    name: 'Octa Space',
    symbol: 'OCTA',
  },
  rpcUrls: {
    public: { http: ['https://rpc.octa.space/'] },
    default: { http: ['https://rpc.octa.space/'] },
  },
  blockExplorers: {
    etherscan: { name: 'OctaSpace', url: 'https://explorer.octa.space/' },
    default: { name: 'OctaSpace', url: 'https://explorer.octa.space/' },
  },
} as const satisfies Chain
