'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-black text-zinc-500 text-xs text-center relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Branding & Info */}
        <div className="space-y-1 text-center md:text-left">
          <p className="text-zinc-400 font-medium">© {new Date().getFullYear()} Anu Prakash. All rights reserved.</p>
          <p className="text-[10px] font-light text-zinc-600">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>

        {/* Scroll to top button */}
        <motion.button
          onClick={handleScrollToTop}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center justify-center"
          title="Scroll to Top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
