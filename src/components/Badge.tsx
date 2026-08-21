'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '',
  animated = true
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-white/5 border-white/10 text-white',
    gradient: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-300',
    outline: 'bg-transparent border-white/20 text-white',
    glow: 'bg-white/5 border-blue-500/50 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };

  const Component = animated ? motion.div : 'div';

  const animationProps = animated ? {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    transition: { duration: 0.3 },
  } : {};

  return (
    <Component
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...animationProps}
    >
      {children}
    </Component>
  );
}
