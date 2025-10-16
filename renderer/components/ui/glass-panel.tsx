"use client";

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassPanelProps extends HTMLMotionProps<"div"> {
  variant?: 'low' | 'medium' | 'high' | 'ultra';
  glow?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  low: 'bg-white/5 border-white/10 backdrop-blur-sm',
  medium: 'bg-white/10 border-white/20 backdrop-blur-md',
  high: 'bg-white/15 border-white/30 backdrop-blur-lg',
  ultra: 'bg-white/20 border-white/40 backdrop-blur-xl',
};

export function GlassPanel({ 
  variant = 'medium', 
  glow = false, 
  children, 
  className,
  ...motionProps 
}: GlassPanelProps) {
  return (
    <motion.div
      className={cn(
        'border rounded-xl relative overflow-hidden',
        variantStyles[variant],
        glow && 'shadow-[0_0_25px_rgba(0,255,153,0.3)]',
        className
      )}
      {...motionProps}
    >
      {/* Gradient Border Effect */}
      {glow && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00FF99]/20 via-transparent to-[#00FFFF]/20 pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
