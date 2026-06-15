'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

// Import components
import BackgroundGrid from '@/components/BackgroundGrid';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple-like smooth scroll
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate entry page loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  const marqueeItems = [
    'React Native Specialist',
    '●',
    'EAS Submit',
    '●',
    '120 FPS Performance',
    '●',
    'Expo SDK 51',
    '●',
    'Metro Bundler',
    '●',
    'Fluid Gesture Animations',
    '●',
    'Strict TypeScript',
    '●',
  ];

  return (
    <>
      {/* Premium Loader Overlay */}
      {loading && (
        <motion.div 
          className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center gap-4 select-none cursor-default"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-white/5 border-t-blue-500 animate-spin" />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 font-mono"
          >
            Anu Prakash PORTFOLIO
          </motion.p>
        </motion.div>
      )}

      {/* Main Portfolio Layout */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen bg-black overflow-hidden"
        >
          {/* Scroll progress bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 origin-left z-[9999]"
            style={{ scaleX: scrollYProgress }}
          />

          {/* Interactive Global Elements */}
          <CustomCursor />
          <BackgroundGrid />
          <Navbar />

          {/* Sections Stack */}
          <Hero />

          {/* Infinite Marquee Strength band */}
          <div className="py-6 border-y border-white/5 bg-zinc-950/40 relative overflow-hidden select-none">
            <div className="marquee-container">
              <div className="marquee-content text-zinc-500 text-[10px] uppercase font-bold tracking-widest font-mono">
                {/* Loop 1 */}
                {marqueeItems.map((item, idx) => (
                  <span 
                    key={`m1-${idx}`} 
                    className={item === '●' ? 'text-blue-500/50' : 'text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-200'}
                  >
                    {item}
                  </span>
                ))}
                {/* Loop 2 */}
                {marqueeItems.map((item, idx) => (
                  <span 
                    key={`m2-${idx}`} 
                    className={item === '●' ? 'text-blue-500/50' : 'text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-200'}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
}
