"use client";

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { GlassPanel } from './glass-panel';
import { Toast } from './toast';

export function GenesisCommandInterface() {
  const { address } = useAccount();
  const [toast, setToast] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const handleDeploy = () => {
    setToast({
      type: 'success',
      message: `🚀 Genesis Transaction Initiated for ${address?.slice(0, 6)}...${address?.slice(-4)}`
    });
    
    // Auto-dismiss toast after 5 seconds
    setTimeout(() => setToast(null), 5000);
    
    // Here you would integrate actual contract deployment logic
  };

  return (
    <>
      <GlassPanel
        variant="high"
        glow
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-2xl p-8"
      >
        <div className="text-center">
          <p className="font-mono text-[#00FF99] font-semibold">SOVEREIGN WALLET CONNECTED</p>
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
            className="w-full py-8 bg-[#00FF99] text-black font-bold text-2xl rounded-lg shadow-[0_0_25px_rgba(0,255,153,0.6)] hover:bg-white hover:shadow-[0_0_35px_rgba(0,255,153,0.8)] transition-all duration-300"
          >
            AUTHORIZE & DEPLOY
          </Button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-white/30 font-mono">
            PROTOCOL: VAMP THEOREM • DEBT-COLLAPSE RECURSION ACTIVE
          </p>
        </div>
      </GlassPanel>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <div className="fixed top-8 right-8 z-50">
            <Toast 
              type={toast.type} 
              message={toast.message} 
              onClose={() => setToast(null)} 
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
