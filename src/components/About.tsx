'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code2, Smartphone, Sparkles, MapPin, Milestone } from 'lucide-react';

export default function About() {
  const containerRef = useRef(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // 3D tilt effect calculations on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Max 10 degrees tilt
    const rotateX = -(mouseY / (height / 2)) * 8;
    const rotateY = (mouseX / (width / 2)) * 8;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const strengths = [
    {
      icon: Award,
      title: "1.6+ Years Experience",
      desc: "Delivering polished mobile applications in startup ecosystems.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code2,
      title: "React Native Specialist",
      desc: "Deep knowledge of Metro bundler, Reanimated, and native bridges.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Smartphone,
      title: "Cross Platform Developer",
      desc: "Unified codebases for iOS & Android with platform-specific adjustments.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Sparkles,
      title: "Mobile UI Expert",
      desc: "Crafting fluid 60/120fps layouts that match design mocks exactly.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="py-24 px-6 md:px-12 relative flex flex-col items-center justify-center overflow-hidden border-t border-white/5 bg-zinc-950/40"
    >
      {/* Background radial accent */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-2">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-500"
          >
            About Me
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Crafting Fluid Mobile Experiences
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />
        </div>

        {/* Large Profile Bento Card */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, y: 50, rotateX: 0, rotateY: 0 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 50,
            rotateX: tilt.x,
            rotateY: tilt.y
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full glass-card rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-default select-none overflow-hidden relative"
        >
          {/* Spotlight highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-transparent pointer-events-none" />

          {/* Left Side: Avatar/Graphics */}
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-start" style={{ transform: 'translateZ(30px)' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-zinc-900/60 border border-white/10 flex items-center justify-center overflow-hidden group">
              
              {/* Spinning Accent Border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-transparent to-purple-600 opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity duration-500 animate-spin" style={{ animationDuration: '12s' }} />

              {/* Futuristic SVG Avatar */}
              <svg 
                viewBox="0 0 200 200" 
                className="w-48 h-48 md:w-60 md:h-60 relative z-10"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Grid inside avatar */}
                <defs>
                  <linearGradient id="svg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  </linearGradient>
                  <radialGradient id="radial-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx="100" cy="100" r="80" fill="url(#radial-glow)" />
                <circle cx="100" cy="100" r="75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <circle cx="100" cy="100" r="65" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="5 3" />

                {/* Rotating gear or ring outer */}
                <motion.circle 
                  cx="100" 
                  cy="100" 
                  r="55" 
                  stroke="url(#svg-grad)" 
                  strokeWidth="2"
                  strokeDasharray="40 10 15 5 8 12"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '100px 100px' }}
                />

                {/* Developer Core Terminal Graphics inside avatar */}
                <g transform="translate(65, 75)">
                  {/* Laptop Mockup */}
                  <rect x="5" y="10" width="60" height="38" rx="3" fill="#0c0a09" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <line x1="2" y1="48" x2="68" y2="48" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                  
                  {/* Code symbols inside screen */}
                  <text x="12" y="22" fill="#3B82F6" fontSize="7" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
                  <text x="12" y="32" fill="#8B5CF6" fontSize="5.5" fontFamily="monospace">React Native</text>
                  <rect x="12" y="38" width="20" height="2" fill="rgba(255,255,255,0.2)" />
                  <rect x="35" y="38" width="10" height="2" fill="#A1A1AA" />
                  
                  {/* React Native symbol mock (overlapping circles) */}
                  <ellipse cx="50" cy="22" rx="7" ry="2.5" stroke="#60A5FA" strokeWidth="0.8" transform="rotate(30 50 22)" />
                  <ellipse cx="50" cy="22" rx="7" ry="2.5" stroke="#60A5FA" strokeWidth="0.8" transform="rotate(-30 50 22)" />
                  <circle cx="50" cy="22" r="1.5" fill="#60A5FA" />
                </g>

                {/* Status indicator */}
                <circle cx="140" cy="140" r="6" fill="#10B981" stroke="#000" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Right Side: Description & Strengths Grid */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-6" style={{ transform: 'translateZ(20px)' }}>
            
            {/* Bio info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                <MapPin size={16} className="text-blue-500" />
                <span>Tenkasi, India</span>
                <span className="text-zinc-600">|</span>
                <Milestone size={16} className="text-purple-500" />
                <span>Active Contributor</span>
              </div>
              <h3 className="text-xl font-bold text-white">Anu Prakash</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Highly focused React Native Developer specialized in structuring cross-platform mobile apps from scratch. Equipped with deep familiarity in hybrid app architecture, fast UI renderings, and clean state-management flows. Known for bridging custom native code components and prioritizing smooth UX details.
              </p>
            </div>

            {/* Strengths 2x2 bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {strengths.map((str, idx) => {
                const Icon = str.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.06)' }}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 flex items-start gap-3.5"
                  >
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${str.color} bg-opacity-10 text-white flex-shrink-0 shadow-lg`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-0.5">{str.title}</h4>
                      <p className="text-[11px] text-zinc-400 leading-normal font-light">{str.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
