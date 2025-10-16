"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  type: ToastType;
  message: string;
  onClose: () => void;
}

const iconMap = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
};

const colorMap = {
  success: 'border-[#00FF99]/40 bg-[#00FF99]/10',
  error: 'border-[#FF3366]/40 bg-[#FF3366]/10',
  info: 'border-[#00CCFF]/40 bg-[#00CCFF]/10',
};

export function Toast({ type, message, onClose }: ToastProps) {
  const Icon = iconMap[type];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={cn(
        'flex items-center gap-3 px-6 py-4 rounded-lg border backdrop-blur-md',
        'shadow-lg font-mono text-sm',
        colorMap[type]
      )}
    >
      <Icon className="w-5 h-5" />
      <p className="flex-1">{message}</p>
      <button
        onClick={onClose}
        className="text-white/60 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
