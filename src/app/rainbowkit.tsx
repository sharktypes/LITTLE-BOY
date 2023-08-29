'use client'

import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { octa } from '@/config/chains'

const W3M_ID = process.env.NEXT_PUBLIC_W3M_ID

const { chains, publicClient } = configureChains([octa], [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: 'EZ Digital',
  projectId: W3M_ID,
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

export default function RainbowKitWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  )
}
