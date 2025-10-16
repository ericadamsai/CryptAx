"use client";

import { useWeb3Modal } from '@web3modal/wagmi/react';
import { motion } from 'framer-motion';
import { Button } from './button';

export function ConnectWalletButton() {
  const { open } = useWeb3Modal();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <Button
        onClick={() => open()}
        className="px-10 py-7 bg-[#00FF99] text-black font-bold text-xl rounded-lg shadow-[0_0_25px_rgba(0,255,153,0.6)] hover:bg-white hover:shadow-[0_0_35px_rgba(0,255,153,0.8)] transition-all duration-300 font-mono"
      >
        CONNECT SOVEREIGN WALLET
      </Button>
    </motion.div>
  );
}
