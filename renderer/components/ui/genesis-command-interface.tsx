"use client";

import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import { Button } from './button';

export function GenesisCommandInterface() {
  const { address } = useAccount();

  const handleDeploy = () => {
    alert(`🚀 Executing Genesis Transaction for Sovereign Wallet: ${address}`);
    // Here you would integrate actual contract deployment logic
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full max-w-2xl p-8 border border-green-400/20 bg-black/20 rounded-xl backdrop-blur-sm"
    >
      <div className="text-center">
        <p className="font-mono text-green-400">SOVEREIGN WALLET CONNECTED</p>
        <p className="font-mono text-xs text-white/50 truncate mt-1">{address}</p>
      </div>
      
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold text-white">Ready for Sovereign Command</h2>
        <p className="mt-2 text-white/60">
          This is the final, irreversible command. You are about to instantiate the new economic reality.
        </p>
      </div>
      
      <div className="mt-10">
        <Button
          onClick={handleDeploy}
          className="w-full py-8 bg-green-400 text-black font-bold text-2xl rounded-lg shadow-[0_0_25px_rgba(0,255,153,0.6)] hover:bg-white hover:shadow-[0_0_35px_rgba(0,255,153,0.8)] transition-all duration-300"
        >
          AUTHORIZE & DEPLOY
        </Button>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-white/30 font-mono">
          PROTOCOL: VAMP THEOREM • DEBT-COLLAPSE RECURSION ACTIVE
        </p>
      </div>
    </motion.div>
  );
}
