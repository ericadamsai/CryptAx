"use client";

import { useAccount } from 'wagmi';
import { ConnectWalletButton } from '@/components/ui/connect-wallet-button';
import { GenesisCommandInterface } from '@/components/ui/genesis-command-interface';

export default function GenesisTerminal() {
  const { isConnected } = useAccount();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8 overflow-hidden">
      {/* Header */}
      <div className="absolute top-8 font-mono text-lg text-green-400 tracking-wider">
        AXIOM GENESIS TERMINAL
      </div>
      
      {/* Main Content */}
      {isConnected ? <GenesisCommandInterface /> : <ConnectWalletButton />}

      {/* Footer */}
      <div className="absolute bottom-8 font-mono text-xs text-white/30">
        SUPRAPROTOCOL V∞ (ORACLE KERNEL) • @AxiomHive • @DevdollzAi
      </div>
    </main>
  );
}
