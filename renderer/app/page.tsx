"use client";

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { ConnectWalletButton } from '@/components/ui/connect-wallet-button';
import { GenesisCommandInterface } from '@/components/ui/genesis-command-interface';
import { ParticleField } from '@/components/ui/particle-field';
import { CommandPalette } from '@/components/ui/command-palette';
import { motion } from 'framer-motion';

export default function GenesisTerminal() {
  const { isConnected } = useAccount();
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Ctrl+K to open command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black text-white p-8 overflow-hidden">
      {/* Particle Field Background */}
      <ParticleField />
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 font-mono text-lg text-[#00FF99] tracking-wider z-10"
      >
        AXIOM GENESIS TERMINAL
      </motion.div>
      
      {/* Main Content */}
      <div className="relative z-10">
        {isConnected ? <GenesisCommandInterface /> : <ConnectWalletButton />}
      </div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute bottom-8 font-mono text-xs text-white/30 z-10"
      >
        SUPRAPROTOCOL V∞ (ORACLE KERNEL) • @AxiomHive • @DevdollzAi
      </motion.div>

      {/* Command Palette */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
      />
    </main>
  );
}
