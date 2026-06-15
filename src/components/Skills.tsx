'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Database, Code, ShieldCheck, Cpu, Layout, Globe, Sparkles, Sliders } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface SkillCardProps {
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  span: string; // Tailwind grid span class
  children?: React.ReactNode;
}

function SkillCard({ title, subtitle, icon: Icon, span, children }: SkillCardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`spotlight-card group relative overflow-hidden glass-card rounded-2xl p-6 flex flex-col justify-between cursor-default min-h-[170px] ${span}`}
    >
      {/* Glow border ring */}
      <div className="spotlight-card-border" />
      
      {/* Subtle Background Icon */}
      <div className="absolute -right-8 -bottom-8 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-500 text-white pointer-events-none">
        <Icon size={160} />
      </div>

      <div className="relative z-10 space-y-3">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
              <Icon size={18} />
            </div>
            <h3 className="font-semibold text-sm tracking-wide text-zinc-100">{title}</h3>
          </div>
          <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">{subtitle}</span>
        </div>

        {/* Content container */}
        {children && <div className="pt-2">{children}</div>}
      </div>

      <div className="relative z-10 pt-4 text-[10px] text-zinc-500 tracking-wide font-light">
        Verified expertise
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-24 px-6 md:px-12 relative flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl z-10">
        
        {/* Section title */}
        <div className="text-center mb-16 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-500">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Modern Bento Skills</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Bento Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {/* React Native Card - Large */}
          <SkillCard 
            title="React Native" 
            subtitle="Core" 
            icon={Cpu} 
            span="sm:col-span-2 md:col-span-2"
          >
            <div className="flex flex-col gap-2.5">
              <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                Architecting hybrid apps, native bridging, optimizing rendering lists, thread allocation, custom UI components, and Fast Refresh integrations.
              </p>
              {/* Mini visual */}
              <div className="flex items-center gap-2 p-2 bg-zinc-900/60 border border-white/5 rounded-xl font-mono text-[9px] text-green-400">
                <span className="animate-pulse">●</span>
                <span>Metro bundler online: 100% chunks loaded</span>
              </div>
            </div>
          </SkillCard>

          {/* TypeScript Card */}
          <SkillCard 
            title="TypeScript" 
            subtitle="Strict" 
            icon={Code} 
            span="sm:col-span-1"
          >
            <div className="space-y-2 font-mono text-[9.5px]">
              <div className="p-2 rounded-xl bg-zinc-900/40 border border-white/5 text-blue-300">
                <span className="text-purple-400">type</span> <span className="text-white">User</span> = &#123;
                <div className="pl-3">id: <span className="text-yellow-400">string</span>;</div>
                <div className="pl-3">role: <span className="text-amber-400">&apos;admin&apos;</span>;</div>
                &#125;;
              </div>
            </div>
          </SkillCard>

          {/* Expo Card */}
          <SkillCard 
            title="Expo" 
            subtitle="SDK 51" 
            icon={Sparkles} 
            span="sm:col-span-1"
          >
            <div className="flex flex-col gap-2.5">
              <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                EAS Build, EAS Submit, Expo Router filesystem, Dev Clients, and config plugins.
              </p>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[95%]" />
              </div>
            </div>
          </SkillCard>

          {/* Redux Card */}
          <SkillCard 
            title="Redux Toolkit" 
            subtitle="Store" 
            icon={Database} 
            span="sm:col-span-1"
          >
            <div className="space-y-1 text-zinc-400 text-[11px] font-light">
              <p>Slice-based store setup, middleware, custom Thunks, persist configs, and fast state subscriptions.</p>
            </div>
          </SkillCard>

          {/* React.js Card */}
          <SkillCard 
            title="React.js" 
            subtitle="Web Core" 
            icon={Sliders} 
            span="sm:col-span-1"
          >
            <div className="space-y-2">
              <p className="text-[11px] text-zinc-400 font-light">Next.js App router, server actions, hooks optimization, and static rendering.</p>
            </div>
          </SkillCard>

          {/* REST APIs Card - Large */}
          <SkillCard 
            title="REST APIs" 
            subtitle="HTTP / JSON" 
            icon={Globe} 
            span="sm:col-span-2 md:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                Axios wrappers, bearer authentication, token refresh interception, rate limiting, and cache sync.
              </p>
              <div className="flex flex-col gap-1.5 p-2 bg-zinc-900/60 border border-white/5 rounded-xl font-mono text-[9px]">
                <div className="text-zinc-500">GET /api/v1/user</div>
                <div className="text-green-400">200 OK (24ms)</div>
                <div className="text-purple-400">{"{ name: 'Anu' }"}</div>
              </div>
            </div>
          </SkillCard>

          {/* GitHub Card */}
          <SkillCard 
            title="GitHub / Git" 
            subtitle="Devops" 
            icon={GithubIcon} 
            span="sm:col-span-1"
          >
            <div className="flex flex-col gap-2 font-mono text-[9px] text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="text-blue-500">main</span>
                <span>$ git commit -m &quot;feat&quot;</span>
              </div>
              <div className="flex items-center gap-1.5 text-green-500">
                <span>✓</span>
                <span>Push success to origin</span>
              </div>
            </div>
          </SkillCard>

          {/* Tailwind CSS Card */}
          <SkillCard 
            title="Tailwind CSS" 
            subtitle="Styling" 
            icon={Layout} 
            span="sm:col-span-1"
          >
            <div className="space-y-1.5 text-[11px] text-zinc-400 font-light">
              <p>Speedy utility configuration, v4 variables, glassmorphic styling, and container queries.</p>
            </div>
          </SkillCard>

          {/* Figma Card */}
          <SkillCard 
            title="Figma" 
            subtitle="UI/UX" 
            icon={Terminal} 
            span="sm:col-span-2"
          >
            <div className="flex items-center gap-4">
              <p className="text-[11px] text-zinc-400 font-light leading-relaxed flex-1">
                Translating vector constraints, gradients, and custom micro-spacing layout tokens directly into JSX layouts.
              </p>
              {/* Figma Vector Node mock */}
              <div className="w-16 h-16 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center relative shrink-0">
                <div className="w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                </div>
                <span className="absolute -top-1 -left-1 text-[8px] bg-blue-600 text-white px-1 rounded">Pen</span>
              </div>
            </div>
          </SkillCard>
        </motion.div>
      </div>
    </section>
  );
}
