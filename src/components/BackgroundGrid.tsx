'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundGrid() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effect for the background blobs
  const yBlob1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const yBlob2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const yBlob3 = useTransform(scrollY, [0, 1000], [0, -50]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-black select-none pointer-events-none">
      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black, transparent 80%)',
        }}
      />

      {/* Subtle Dot Matrix in background */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute inset-0 filter blur-[120px] md:blur-[160px] opacity-40 mix-blend-screen">
        {/* Blob 1: Blue Glow (Top Left) */}
        <motion.div 
          style={{ y: yBlob1 }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/10 animate-pulse-slow"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Blob 2: Purple Glow (Middle Right) */}
        <motion.div 
          style={{ y: yBlob2 }}
          className="absolute top-[35%] -right-[10%] w-[45vw] h-[45vw] max-w-[550px] rounded-full bg-gradient-to-tr from-purple-600/25 to-pink-500/10"
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Blob 3: Accent Glow (Bottom Center) */}
        <motion.div 
          style={{ y: yBlob3 }}
          className="absolute -bottom-[10%] left-[25%] w-[40vw] h-[40vw] max-w-[500px] rounded-full bg-gradient-to-b from-blue-500/20 to-purple-600/20"
          animate={{
            x: [0, 20, -30, 0],
            y: [0, 20, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Ambient center light */}
      <div 
        className="absolute inset-0 bg-radial-gradient"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(10, 10, 10, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
        }}
      />
    </div>
  );
}
