'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, ExternalLink, Mail } from 'lucide-react';

interface FloatingActionButtonProps {
  icon?: React.ReactNode;
  onClick?: () => void;
  position?: 'bottom-right' | 'bottom-left';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function FloatingActionButton({
  icon,
  onClick,
  position = 'bottom-right',
  size = 'md',
  variant = 'primary',
}: FloatingActionButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = onClick || scrollToTop;

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-br from-blue-600 to-purple-600 text-white',
    secondary: 'bg-white/10 backdrop-blur-md border border-white/20 text-white',
    accent: 'bg-gradient-to-br from-pink-600 to-rose-600 text-white',
  };

  const positionClasses = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={handleClick}
          className={`fixed ${positionClasses[position]} ${sizeClasses[size]} ${variantClasses[variant]} rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] flex items-center justify-center z-50 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95`}
        >
          {icon || <ArrowUp size={size === 'sm' ? 18 : size === 'md' ? 20 : 24} />}
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Multi-action FAB with expandable menu
export function MultiActionFAB() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: <ExternalLink size={20} />, label: 'GitHub', href: 'https://github.com/anu-prakash-r' },
    { icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3"
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <span className="text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {action.label}
                </span>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  {action.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(59,130,246,0.4)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.6)] cursor-pointer transition-all duration-300"
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
}
