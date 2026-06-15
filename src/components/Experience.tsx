'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Milestone, Star, Zap } from 'lucide-react';

const experienceData = [
  {
    phase: "Q1 - Foundation",
    title: "Core Architecture & API Setup",
    company: "Chainscript Pvt Ltd",
    description: "Designed core Axios wrapper client with custom intercepters, unified token refresh sequences, and styled core reusable layouts.",
    achievements: ["Configured strict TypeScript interfaces", "Integrated REST endpoints", "Constructed generic UI component primitives"],
    color: "from-blue-600 to-cyan-500",
  },
  {
    phase: "Q2 - Realtime Feed",
    title: "Chat System & Community Posts",
    company: "Chainscript Pvt Ltd",
    description: "Architected real-time WebSocket communication flows for live room chat modules and community feeds featuring hearts/comments.",
    achievements: ["Implemented WebSocket socket.io client", "Built cache synchronization state engine", "Crafted touch-gesture animations"],
    color: "from-purple-600 to-indigo-500",
  },
  {
    phase: "Q3 - Gamification",
    title: "Leaderboard & Scoring Systems",
    company: "Chainscript Pvt Ltd",
    description: "Constructed dynamic gamified XP leaderboard screens with local quick-sort sorting, animated counter tickers, and trend lines.",
    achievements: ["Engineered layout animation triggers", "Reduced render frame drop by 25%", "Configured client-side state caching"],
    color: "from-pink-600 to-rose-500",
  },
  {
    phase: "Q4 - Optimization",
    title: "Performance & EAS Bundling",
    company: "Chainscript Pvt Ltd",
    date: "May 2025 - Present",
    description: "Optimized app bundles, resolved memory leaks inside virtualized lists, and built staging deployment configurations via Expo EAS.",
    achievements: ["Maintained 120 FPS scrolling speeds", "Configured Dev Client config plugins", "Reduced cold boot startup time by 1.2s"],
    color: "from-amber-600 to-orange-500",
  },
];

interface TimelineCardProps {
  item: typeof experienceData[0];
  index: number;
}

function TimelineCard({ item, index }: TimelineCardProps) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: '-10% 0px' });
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-12 md:mb-16 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Spacer for desktop layout (half the grid width) */}
      <div className="hidden md:block w-[45%]" />

      {/* Timeline Node Center Pin */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-zinc-800 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
        <motion.div 
          initial={{ scale: 0 }}
          animate={isCardInView ? { scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          className={`w-3.5 h-3.5 rounded-full bg-gradient-to-br ${item.color} shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
        />
      </div>

      {/* Timeline Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40, y: 30 }}
        animate={isCardInView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-[calc(100%-48px)] ml-12 md:ml-0 md:w-[45%] glass-card rounded-2xl p-5 md:p-6 text-left relative overflow-hidden group"
      >
        {/* Subtle accent border at card side */}
        <div className={`absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b ${item.color}`} />
        
        {/* Phase Tag */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold font-mono text-zinc-500 uppercase tracking-wider bg-white/5 border border-white/5 px-2 py-0.5 rounded-full">
            {item.phase}
          </span>
        </div>

        {/* Title & Company */}
        <div className="space-y-1 mb-3">
          <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-xs font-semibold text-zinc-400">{item.company}</p>
        </div>

        {/* Desc */}
        <p className="text-[11px] text-zinc-400 font-light leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Achievements list */}
        <div className="space-y-2">
          {item.achievements.map((ach, idx) => (
            <div key={idx} className="flex items-start gap-2 text-[10px] text-zinc-300">
              <CheckCircle2 size={12} className="text-emerald-500 mt-0.5 shrink-0" />
              <span className="font-light">{ach}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Transform scroll progress to vertical height percent
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="py-24 px-6 md:px-12 relative flex flex-col items-center justify-center overflow-hidden border-t border-white/5 bg-zinc-950/20"
    >
      <div className="w-full max-w-5xl z-10">
        
        {/* Section title */}
        <div className="text-center mb-20 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">Timeline</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Professional Experience</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative w-full">
          {/* Main track line (grey backdrop) */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-zinc-800/40 rounded-full" />
          
          {/* Animated scroll-driven path line */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] rounded-full overflow-hidden">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 origin-top"
            />
          </div>

          {/* Timeline Nodes */}
          <div className="w-full">
            {experienceData.map((item, index) => (
              <TimelineCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
