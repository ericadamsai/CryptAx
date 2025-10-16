"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Zap, Wallet, Settings, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const commands = [
  { id: 'deploy', label: 'Deploy Contract', icon: Zap, shortcut: 'Ctrl+D' },
  { id: 'wallet', label: 'Connect Wallet', icon: Wallet, shortcut: 'Ctrl+W' },
  { id: 'settings', label: 'Settings', icon: Settings, shortcut: 'Ctrl+,' },
  { id: 'help', label: 'Help & Docs', icon: HelpCircle, shortcut: 'Ctrl+?' },
];

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);
  
  const filtered = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );
  
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected(s => (s + 1) % filtered.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected(s => (s - 1 + filtered.length) % filtered.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        console.log('Execute:', filtered[selected]?.id);
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selected, onClose]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-xl z-50"
          >
            <div className="bg-neutral-900/90 border border-[#00FF99]/30 rounded-xl shadow-2xl backdrop-blur-lg overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <Command className="w-5 h-5 text-[#00FF99]" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 font-mono"
                  autoFocus
                />
              </div>
              
              {/* Command List */}
              <div className="max-h-80 overflow-y-auto">
                {filtered.map((cmd, idx) => {
                  const Icon = cmd.icon;
                  return (
                    <motion.div
                      key={cmd.id}
                      onClick={() => {
                        console.log('Execute:', cmd.id);
                        onClose();
                      }}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors',
                        idx === selected
                          ? 'bg-[#00FF99]/20 text-white'
                          : 'text-white/70 hover:bg-white/5'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="flex-1 font-mono">{cmd.label}</span>
                      <kbd className="px-2 py-1 rounded bg-white/10 text-xs font-mono">
                        {cmd.shortcut}
                      </kbd>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
