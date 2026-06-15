'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, MessageSquare, Trophy, ShieldAlert, Laptop, Users, BarChart3, Radio, Lock } from 'lucide-react';



// Define categories
type Category = 'all' | 'mobile' | 'web';

const projectsData = [
  {
    id: 'karma-league',
    category: 'mobile',
    title: 'Karma League',
    subtitle: 'Featured Mobile App',
    description: 'A premium, gamified gaming tournament platform built with React Native. Features real-time match room chat channels, active leaderboard standings, and community feed updates with high-performance gesture physics.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'WebSockets', 'Reanimated'],
    playStore: 'https://play.google.com/store/apps/details?id=com.karmaleague.iamversemobileapp&pcampaignid=web_share',
    appStore: 'https://apps.apple.com/us/app/karma-league/id6742407217',
    type: 'featured-mobile',
  },
  {
    id: 'admin-dashboard',
    category: 'web',
    title: 'Admin Dashboard CMS',
    subtitle: 'Featured Web Application',
    description: 'A luxury, Vercel-inspired SaaS content management console and analytics portal. Features live stats tracking, interactive SVG charts, chat room moderation panels, and security privilege configurations.',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Tremor/Charts', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://github.com',
    type: 'featured-web',
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const dashboardCardRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [dashTilt, setDashTilt] = useState({ x: 0, y: 0 });

  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });

  // 3D Tilt calculation for Web Dashboard CMS mockup
  const handleDashMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dashboardCardRef.current) return;
    const rect = dashboardCardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    const rotateX = -(mouseY / (height / 2)) * 6; // Max 6 degrees
    const rotateY = (mouseX / (width / 2)) * 6;
    
    setDashTilt({ x: rotateX, y: rotateY });
  };

  const handleDashMouseLeave = () => {
    setDashTilt({ x: 0, y: 0 });
  };



  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const featuredMobile = projectsData.find((p) => p.id === 'karma-league')!;
  const featuredWeb = projectsData.find((p) => p.id === 'admin-dashboard')!;

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="py-24 px-6 md:px-12 relative flex flex-col items-center justify-center overflow-hidden border-t border-white/5 bg-zinc-950/30"
    >
      {/* Background decorations */}
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-5xl z-10">
        
        {/* Section title */}
        <div className="text-center mb-16 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans">Featured Work</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Dynamic Category Filter pills */}
        <div className="flex justify-center items-center gap-2 mb-16">
          {(['all', 'mobile', 'web'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                activeCategory === cat ? 'text-black font-semibold' : 'text-zinc-400 hover:text-white border border-white/5 bg-white/[0.02]'
              }`}
            >
              {activeCategory === cat && (
                <motion.span 
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-white rounded-full z-0 shadow-lg"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <span className="relative z-10">{cat === 'all' ? 'All Work' : cat === 'mobile' ? 'Mobile Apps' : 'Web Dashboards'}</span>
            </button>
          ))}
        </div>

        {/* Category Showcases Container */}
        <div className="space-y-24">
          
          {/* SHOWCASE 1: Karma League (Mobile Showcase) */}
          {(activeCategory === 'all' || activeCategory === 'mobile') && (
            <motion.div 
              initial={{ opacity: 0, y: 45 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Details */}
              <div className="col-span-1 lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold font-mono text-blue-500 uppercase tracking-wider">{featuredMobile.subtitle}</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">{featuredMobile.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {featuredMobile.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredMobile.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-zinc-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <a 
                    href={featuredMobile.playStore} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <span>Play Store</span>
                  </a>
                  <a 
                    href={featuredMobile.appStore} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    <span>App Store</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Dynamic Overlapping Phone Screen Stack */}
              <div className="col-span-1 lg:col-span-6 flex justify-center items-center h-[320px] relative mt-8 lg:mt-0 select-none">
                
                {/* Chat Module Card */}
                <motion.div 
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                  className="absolute left-[5%] md:left-[15%] top-0 w-[190px] h-[260px] rounded-2xl glass-card border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.8)] p-3.5 flex flex-col justify-between"
                  style={{ rotate: '-6deg', transformOrigin: 'bottom center' }}
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-[10px] font-bold flex items-center gap-1.5"><MessageSquare size={11} className="text-blue-400" /> Match Chat</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2 py-3 flex-1 flex flex-col justify-end font-sans">
                    <div className="bg-white/5 border border-white/5 rounded-xl p-1.5 text-[8px] max-w-[90%]">
                      <p className="text-[7px] text-zinc-500 mb-0.5">@ash</p>
                      <p className="text-zinc-200">Got 24 kills in round 3! 🔥</p>
                    </div>
                    <div className="bg-blue-600 rounded-xl p-1.5 text-[8px] max-w-[90%] self-end">
                      <p className="text-white">Sick! MVP score confirmed.</p>
                    </div>
                  </div>
                  <div className="h-6 bg-zinc-900 border border-white/5 rounded-lg px-2 flex items-center text-[7px] text-zinc-500">Send message...</div>
                </motion.div>

                {/* Leaderboard Module Card (Centered & Highlighted) */}
                <motion.div 
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                  className="absolute left-[30%] md:left-[38%] top-[-20px] w-[200px] h-[280px] rounded-2xl bg-zinc-900/90 border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.9)] p-4 flex flex-col justify-between z-10"
                  style={{ rotate: '2deg' }}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[10px] font-bold flex items-center gap-1.5"><Trophy size={11} className="text-yellow-400" /> Standings</span>
                    <span className="text-[8px] text-zinc-500">Live</span>
                  </div>
                  <div className="space-y-1.5 py-3 flex-1">
                    {[
                      { rank: 1, name: 'Anu Prakash', xp: '24,500' },
                      { rank: 2, name: 'Siddharth M', xp: '22,100' },
                      { rank: 3, name: 'Vikram S', xp: '19,800' },
                    ].map((user) => (
                      <div key={user.rank} className="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-[8px]">
                        <span className="font-bold text-zinc-400">#{user.rank}</span>
                        <span className="text-zinc-200 font-medium truncate max-w-[65px]">{user.name}</span>
                        <span className="font-mono text-zinc-400">{user.xp} XP</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-[7px] text-zinc-500 tracking-wider">Swipe for full scoreboard</div>
                </motion.div>

                {/* Community Posts Module Card */}
                <motion.div 
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                  className="absolute right-[5%] md:right-[15%] top-[10px] w-[190px] h-[260px] rounded-2xl glass-card border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.8)] p-3.5 flex flex-col justify-between"
                  style={{ rotate: '8deg', transformOrigin: 'bottom center' }}
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-[10px] font-bold flex items-center gap-1.5"><ShieldAlert size={11} className="text-purple-400" /> Community</span>
                  </div>
                  <div className="flex-1 py-3 space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="w-4.5 h-4.5 rounded-full bg-indigo-500" />
                      <span className="text-[7.5px] font-bold text-zinc-200">@sprint_dev</span>
                    </div>
                    <p className="text-[8px] text-zinc-400 leading-normal">
                      Deployed standard Reanimated 3 transitions. Super solid performance!
                    </p>
                    <div className="w-full h-12 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-[7px] text-zinc-600 font-mono">
                      PREVIEW
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          )}

          {/* SHOWCASE 2: Admin Dashboard CMS (Web Showcase) */}
          {(activeCategory === 'all' || activeCategory === 'web') && (
            <motion.div 
              initial={{ opacity: 0, y: 45 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8"
            >
              {/* Left Column: Desktop Laptop Mockup with 3D Hover tilt */}
              <div className="col-span-1 lg:col-span-7 order-last lg:order-first flex justify-center items-center">
                <motion.div
                  ref={dashboardCardRef}
                  onMouseMove={handleDashMouseMove}
                  onMouseLeave={handleDashMouseLeave}
                  animate={{ rotateX: dashTilt.x, rotateY: dashTilt.y }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative w-full max-w-[500px] h-[290px] md:h-[310px] rounded-2xl bg-zinc-950 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden cursor-default select-none"
                >
                  {/* Laptop screen reflective shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/3 via-transparent to-transparent pointer-events-none z-30" />

                  {/* Browser Bar */}
                  <div className="h-7 border-b border-white/8 bg-zinc-900/60 px-4 flex items-center gap-1.5 z-20 relative">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    <div className="mx-auto bg-black/45 border border-white/5 rounded-md px-10 py-0.5 text-[8px] text-zinc-400 font-mono">
                      cms.karmaleague.com
                    </div>
                  </div>

                  {/* Mock Dashboard CMS layout */}
                  <div className="flex h-[calc(100%-28px)] text-[9.5px]">
                    {/* Sidebar */}
                    <div className="w-28 border-r border-white/5 bg-zinc-900/40 p-2.5 space-y-3 shrink-0">
                      <div className="font-bold text-[9px] text-white flex items-center gap-1.5">
                        <Laptop size={11} className="text-blue-500" /> Karma Admin
                      </div>
                      <div className="space-y-1">
                        <div className="px-2 py-1 bg-white/5 rounded-md text-white font-medium flex items-center gap-1.5">
                          <BarChart3 size={10} className="text-blue-400" /> Analytics
                        </div>
                        <div className="px-2 py-1 text-zinc-400 hover:text-white flex items-center gap-1.5">
                          <Users size={10} /> Users
                        </div>
                        <div className="px-2 py-1 text-zinc-400 hover:text-white flex items-center gap-1.5">
                          <Radio size={10} /> Live Channels
                        </div>
                        <div className="px-2 py-1 text-zinc-400 hover:text-white flex items-center gap-1.5">
                          <Lock size={10} /> Security
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Contents */}
                    <div className="flex-1 p-3.5 space-y-3 overflow-hidden bg-black/20">
                      {/* Metric blocks */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 text-left">
                          <p className="text-[7.5px] text-zinc-500 uppercase font-bold tracking-wider">Total Users</p>
                          <p className="text-xs font-bold text-white font-mono mt-0.5">14,250</p>
                        </div>
                        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 text-left">
                          <p className="text-[7.5px] text-zinc-500 uppercase font-bold tracking-wider">Revenue</p>
                          <p className="text-xs font-bold text-emerald-400 font-mono mt-0.5">$3,420</p>
                        </div>
                        <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 text-left">
                          <p className="text-[7.5px] text-zinc-500 uppercase font-bold tracking-wider">Match Rooms</p>
                          <p className="text-xs font-bold text-purple-400 font-mono mt-0.5">85 Active</p>
                        </div>
                      </div>

                      {/* SVG Line Graph Mock */}
                      <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 h-[115px] flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[7.5px] text-zinc-500">
                          <span>TRAFFIC FLOW MONITOR</span>
                          <span className="text-blue-400">● Live (60s)</span>
                        </div>
                        <svg className="w-full h-16 pt-1 text-blue-500" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path 
                            d="M0 25 C10 20, 15 28, 25 15 C35 2, 45 18, 55 10 C65 2, 75 14, 85 8 C95 2, 98 5, 100 2" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round"
                          />
                          <path 
                            d="M0 25 C10 20, 15 28, 25 15 C35 2, 45 18, 55 10 C65 2, 75 14, 85 8 C95 2, 98 5, 100 2 V30 H0 Z" 
                            fill="url(#dash-chart-grad)"
                          />
                          <defs>
                            <linearGradient id="dash-chart-grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Details */}
              <div className="col-span-1 lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold font-mono text-purple-500 uppercase tracking-wider">{featuredWeb.subtitle}</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">{featuredWeb.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {featuredWeb.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredWeb.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-zinc-300 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </div>



      </div>
    </section>
  );
}
