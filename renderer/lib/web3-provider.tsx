"use client";

import React, { ReactNode } from 'react';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { arbitrum, mainnet } from 'wagmi/chains';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'YOUR_PROJECT_ID_HERE';

if (projectId === 'YOUR_PROJECT_ID_HERE') {
  console.warn('⚠️  Get your Project ID from https://cloud.walletconnect.com');
  console.warn('⚠️  Add it to renderer/.env.local: NEXT_PUBLIC_PROJECT_ID=your_project_id');
}

const metadata = {
  name: 'Axiom Genesis Terminal',
  description: 'The final step is sovereignty.',
  url: 'https://axiomhive.ai',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet, arbitrum] as const;
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

export function Web3Provider({ children }: { children: ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
