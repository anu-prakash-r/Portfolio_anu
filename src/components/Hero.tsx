'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, ArrowRight, Signal, Wifi, Battery, MessageSquare, Trophy, Flame, ShieldAlert, Heart, Star, Radio, Play, Pause, SkipForward, SkipBack, Volume2, Music, User, Settings, Home, Bell, Clock, BarChart3, MapPin, Calendar } from 'lucide-react';

// Typewriter strings
const words = ['React Native Specialist', 'Mobile UI/UX Expert', 'Cross-Platform Developer', 'Vibe Coder'];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // App screen slideshow inside iPhone
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  // Rotate screen inside iPhone every 4 seconds
  useEffect(() => {
    const screenInterval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 7);
    }, 4000);
    return () => clearInterval(screenInterval);
  }, []);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center px-6 md:px-12 pt-24 pb-16 md:py-32 overflow-hidden"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side Content */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left space-y-6 md:space-y-8">
          
          {/* Subtle Accent Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="self-start px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            Available for Freelance & Full-time
          </motion.div>

          {/* Large Title */}
          <div className="space-y-3">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400"
            >
              Anu Prakash R
            </motion.h1>

            {/* Typewriter Subtitle */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-10 text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400"
            >
              {currentText}
              <span className="animate-pulse text-zinc-100 font-normal ml-0.5">|</span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed font-light"
          >
            Building high-performance, custom-crafted, native-feeling mobile applications with clean architecture and immersive fluid interfaces.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* View Projects Button */}
            <button
              onClick={handleScrollToProjects}
              className="group relative px-6 py-3 rounded-full text-sm font-semibold overflow-hidden bg-white text-black hover:text-white transition duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0" />
              <span className="relative z-10 flex items-center gap-2">
                View Projects 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Download Resume / CV Button */}
            <a
              href="/Resume_Anu_Prakash.pdf"
              download
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <FileText size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Floating iPhone Mockup */}
        <div className="col-span-1 lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Soft decorative glow background rings behind phone */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
            
            {/* Floating and tilt animation wrapper */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateZ: [0, 1.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[280px] h-[570px] md:w-[300px] md:h-[600px] rounded-[50px] border-[10px] border-zinc-900 bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden"
              style={{
                boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.08), 0 25px 60px -15px rgba(0, 0, 0, 0.9)',
              }}
            >
              {/* iPhone Reflection shine */}
              <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-30 skew-y-12" />

              {/* Status Bar */}
              <div className="absolute top-0 inset-x-0 h-10 flex items-center justify-between px-6 z-40 text-white font-sans text-xs">
                <span className="font-semibold text-[11px]">9:41</span>
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4.5 bg-black rounded-full shadow-[0_1px_2px_rgba(255,255,255,0.05)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full ml-auto mr-3" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px]">
                  <Signal size={10} className="fill-white" />
                  <Wifi size={10} />
                  <Battery size={13} className="text-zinc-200" />
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-40" />

              {/* iPhone Live App Screen Contents */}
              <div className="relative w-full h-full pt-10 pb-6 flex flex-col bg-zinc-950">
                {/* Screen slideshow transition */}
                {activeScreen === 0 && (
                  <motion.div 
                    key="screen-chat"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col p-4 space-y-4"
                  >
                    {/* App Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs">K</div>
                        <div>
                          <p className="text-[11px] font-bold">Karma Chat</p>
                          <p className="text-[8px] text-green-400">● Live Match Room</p>
                        </div>
                      </div>
                      <Star size={12} className="text-zinc-500 fill-zinc-500" />
                    </div>

                    {/* Messages */}
                    <div className="flex-1 flex flex-col justify-end space-y-3 pb-4">
                      <div className="self-start max-w-[80%] bg-zinc-900 border border-white/5 rounded-2xl rounded-tl-sm p-2.5 text-[10px]">
                        <p className="text-zinc-400 text-[8px] font-semibold mb-0.5">@alex_r</p>
                        <p className="text-white/90">Who is ready for the tournament match tonight? 🔥</p>
                      </div>
                      <div className="self-end max-w-[80%] bg-blue-600 rounded-2xl rounded-tr-sm p-2.5 text-[10px]">
                        <p className="text-white">Count me in! Just updated my squad loadout.</p>
                      </div>
                      <div className="self-start max-w-[80%] bg-zinc-900 border border-white/5 rounded-2xl rounded-tl-sm p-2.5 text-[10px]">
                        <p className="text-zinc-400 text-[8px] font-semibold mb-0.5">@karma_admin</p>
                        <p className="text-white/90">Tournament starts in 10 mins. Final matches locked!</p>
                      </div>
                    </div>

                    {/* Chat Input Bar */}
                    <div className="h-9 bg-zinc-900 border border-white/5 rounded-full px-3 flex items-center justify-between">
                      <span className="text-[9px] text-zinc-500">Send message...</span>
                      <MessageSquare size={12} className="text-blue-500" />
                    </div>
                  </motion.div>
                )}

                {activeScreen === 1 && (
                  <motion.div 
                    key="screen-leaderboard"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col p-4 space-y-4"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <div>
                        <p className="text-[11px] font-bold flex items-center gap-1">
                          <Trophy size={11} className="text-yellow-500" /> 
                          Leaderboard
                        </p>
                        <p className="text-[8px] text-zinc-500">Global Standings</p>
                      </div>
                      <Flame size={12} className="text-orange-500 fill-orange-500" />
                    </div>

                    {/* Standings List */}
                    <div className="flex-1 flex flex-col space-y-2">
                      {[
                        { rank: 1, name: 'Anu Prakash', score: '24,500', trend: 'up', color: 'text-yellow-500' },
                        { rank: 2, name: 'Siddharth M', score: '22,100', trend: 'up', color: 'text-zinc-300' },
                        { rank: 3, name: 'Jessica Carter', score: '21,950', trend: 'down', color: 'text-amber-600' },
                        { rank: 4, name: 'Vikram Singh', score: '19,800', trend: 'up', color: 'text-zinc-500' },
                        { rank: 5, name: 'Clara Oswald', score: '18,400', trend: 'none', color: 'text-zinc-500' },
                      ].map((player, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between p-2 rounded-xl bg-zinc-900/50 border border-white/5"
                        >
                          <div className="flex items-center gap-2">
                            <span className={`text-[9px] font-bold w-4 text-center ${player.color}`}>
                              #{player.rank}
                            </span>
                            <div className="w-5 h-5 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[8px] font-bold">
                              {player.name[0]}
                            </div>
                            <span className="text-[10px] text-white/90 font-medium truncate max-w-[80px]">
                              {player.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] text-zinc-400 font-mono">{player.score} XP</span>
                            <span className="text-[8px]">{player.trend === 'up' ? '▲' : player.trend === 'down' ? '▼' : '●'}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeScreen === 2 && (
                  <motion.div 
                    key="screen-posts"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col p-4 space-y-3 overflow-hidden"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-[11px] font-bold">Community Board</span>
                      <ShieldAlert size={12} className="text-zinc-500" />
                    </div>

                    {/* Feed Post Card */}
                    <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/5 flex flex-col gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5.5 h-5.5 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500" />
                        <div>
                          <p className="text-[9px] font-bold">@sprint_dev</p>
                          <p className="text-[6.5px] text-zinc-500">2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-[9px] text-zinc-300 leading-normal">
                        Just deployed the React Native Reanimated v3 transition physics. Super smooth 120Hz performance! 🚀📱
                      </p>
                      {/* Media Image Mock */}
                      <div className="w-full h-20 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
                        <span className="text-[7.5px] text-zinc-500 tracking-wider">PREVIEW COMPONENT</span>
                      </div>
                      {/* Stats */}
                      <div className="flex items-center gap-3 text-zinc-500 text-[8px] pt-1">
                        <span className="flex items-center gap-0.5 hover:text-red-500 transition-colors">
                          <Heart size={9} className="fill-red-500/10" /> 42
                        </span>
                        <span className="flex items-center gap-0.5 hover:text-blue-400 transition-colors">
                          <MessageSquare size={9} /> 12
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeScreen === 3 && (
                  <motion.div 
                    key="screen-fm"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col p-4 space-y-4"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <div className="flex items-center gap-2">
                        <Radio size={14} className="text-purple-500 fill-purple-500/20" />
                        <div>
                          <p className="text-[11px] font-bold">FM Radio</p>
                          <p className="text-[8px] text-zinc-500">Live Broadcast</p>
                        </div>
                      </div>
                      <div className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30">
                        <p className="text-[7px] text-green-400 font-semibold">ON AIR</p>
                      </div>
                    </div>

                    {/* Frequency Display */}
                    <div className="flex flex-col items-center py-4 space-y-2">
                      <div className="text-4xl font-bold text-white tracking-wider font-mono">
                        98.5
                      </div>
                      <div className="text-[9px] text-zinc-500 uppercase tracking-widest">MHz</div>
                      <div className="text-[10px] text-purple-400 font-medium mt-1">Vibe FM - Hits & Chill</div>
                    </div>

                    {/* Visualizer Bars */}
                    <div className="flex items-end justify-center gap-1 h-12 px-4">
                      {[40, 65, 45, 80, 55, 90, 70, 50, 85, 60, 75, 45].map((height, idx) => (
                        <motion.div
                          key={idx}
                          animate={{
                            height: [`${height}%`, `${height * 0.6}%`, `${height}%`],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.05,
                          }}
                          className="w-1.5 bg-gradient-to-t from-purple-600 to-pink-500 rounded-full"
                        />
                      ))}
                    </div>

                    {/* Audio Controls */}
                    <div className="flex items-center justify-between px-4 pt-2">
                      <SkipBack size={18} className="text-zinc-400 hover:text-white transition-colors cursor-pointer" />
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                        <Pause size={20} className="text-black fill-black" />
                      </div>
                      <SkipForward size={18} className="text-zinc-400 hover:text-white transition-colors cursor-pointer" />
                    </div>

                    {/* Volume & Info */}
                    <div className="flex items-center justify-between px-4 pt-2">
                      <div className="flex items-center gap-2">
                        <Volume2 size={14} className="text-zinc-500" />
                        <div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                        </div>
                      </div>
                      <div className="text-[8px] text-zinc-500">
                        Now Playing: Midnight City
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeScreen === 4 && (
                  <motion.div 
                    key="screen-music"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col p-4 space-y-4"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <div className="flex items-center gap-2">
                        <Music size={14} className="text-pink-500 fill-pink-500/20" />
                        <div>
                          <p className="text-[11px] font-bold">Now Playing</p>
                          <p className="text-[8px] text-zinc-500">From Playlist: Chill Vibes</p>
                        </div>
                      </div>
                      <Heart size={14} className="text-pink-500 fill-pink-500" />
                    </div>

                    {/* Album Art */}
                    <div className="flex-1 flex flex-col items-center justify-center py-4">
                      <div className="w-full h-32 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.2),_transparent)]" />
                        <Music size={40} className="text-white/80" />
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-[12px] font-bold text-white">Blinding Lights</p>
                        <p className="text-[9px] text-zinc-400">The Weeknd</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="px-2">
                      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                      </div>
                      <div className="flex justify-between text-[8px] text-zinc-500 mt-1">
                        <span>2:34</span>
                        <span>3:45</span>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between px-4">
                      <SkipBack size={18} className="text-zinc-400 hover:text-white transition-colors cursor-pointer" />
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                        <Pause size={22} className="text-black fill-black" />
                      </div>
                      <SkipForward size={18} className="text-zinc-400 hover:text-white transition-colors cursor-pointer" />
                    </div>
                  </motion.div>
                )}

                {activeScreen === 5 && (
                  <motion.div 
                    key="screen-profile"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col p-4 space-y-4"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <span className="text-[11px] font-bold">Profile</span>
                      <Settings size={14} className="text-zinc-400" />
                    </div>

                    {/* Profile Card */}
                    <div className="flex flex-col items-center py-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        AP
                      </div>
                      <p className="text-[12px] font-bold text-white mt-2">Anu Prakash</p>
                      <p className="text-[9px] text-zinc-400">@anuprakash_dev</p>
                      <div className="flex gap-4 mt-3">
                        <div className="text-center">
                          <p className="text-[11px] font-bold text-white">24</p>
                          <p className="text-[7px] text-zinc-500">Projects</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[11px] font-bold text-white">1.2K</p>
                          <p className="text-[7px] text-zinc-500">Followers</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[11px] font-bold text-white">89</p>
                          <p className="text-[7px] text-zinc-500">Following</p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col space-y-2">
                      {[
                        { icon: Bell, label: 'Notifications', color: 'text-blue-400' },
                        { icon: Calendar, label: 'Schedule', color: 'text-green-400' },
                        { icon: MapPin, label: 'Location', color: 'text-red-400' },
                        { icon: User, label: 'Account Settings', color: 'text-purple-400' },
                      ].map((item, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900/80 transition-colors cursor-pointer"
                        >
                          <item.icon size={14} className={item.color} />
                          <span className="text-[10px] text-white/90">{item.label}</span>
                          <ArrowRight size={10} className="ml-auto text-zinc-600" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeScreen === 6 && (
                  <motion.div 
                    key="screen-dashboard"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex-1 flex flex-col p-4 space-y-3"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex items-center gap-2">
                        <Home size={14} className="text-blue-500" />
                        <span className="text-[11px] font-bold">Dashboard</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={10} className="text-zinc-500" />
                        <span className="text-[8px] text-zinc-500">Today</span>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20">
                        <div className="flex items-center gap-1.5 mb-1">
                          <BarChart3 size={12} className="text-blue-400" />
                          <span className="text-[8px] text-zinc-400">Revenue</span>
                        </div>
                        <p className="text-[13px] font-bold text-white">$12.4K</p>
                        <p className="text-[7px] text-green-400">+23.5%</p>
                      </div>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Trophy size={12} className="text-purple-400" />
                          <span className="text-[8px] text-zinc-400">Tasks</span>
                        </div>
                        <p className="text-[13px] font-bold text-white">89/100</p>
                        <p className="text-[7px] text-zinc-400">89% done</p>
                      </div>
                    </div>

                    {/* Activity List */}
                    <div className="flex-1 flex flex-col space-y-2">
                      <p className="text-[9px] text-zinc-500 font-semibold">Recent Activity</p>
                      {[
                        { title: 'Project Alpha', time: '2h ago', icon: '🚀', color: 'bg-blue-500/10' },
                        { title: 'Meeting with Team', time: '4h ago', icon: '👥', color: 'bg-purple-500/10' },
                        { title: 'Code Review', time: '6h ago', icon: '✅', color: 'bg-green-500/10' },
                      ].map((activity, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2.5 p-2 rounded-lg bg-zinc-900/50 border border-white/5"
                        >
                          <div className={`w-7 h-7 rounded-lg ${activity.color} flex items-center justify-center text-xs`}>
                            {activity.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-[9px] text-white/90 font-medium">{activity.title}</p>
                            <p className="text-[7px] text-zinc-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Extra overlapping floating badge for high depth */}
            <motion.div
              animate={{
                y: [-6, 6, -6],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -right-6 top-[25%] p-3 rounded-2xl glass-card border border-white/15 shadow-2xl flex items-center gap-2 select-none"
            >
              <div className="w-6.5 h-6.5 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400">
                🚀
              </div>
              <div>
                <p className="text-[9px] text-zinc-400 uppercase font-bold tracking-wider">Fast Refresh</p>
                <p className="text-[11px] text-white font-bold">120 FPS UI</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [8, -8, 8],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2
              }}
              className="absolute -left-8 bottom-[18%] p-3 rounded-2xl glass-card border border-white/15 shadow-2xl flex items-center gap-2.5 select-none"
            >
              <div className="w-6.5 h-6.5 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                ⚛️
              </div>
              <div>
                <p className="text-[9px] text-zinc-400 uppercase font-bold tracking-wider">Arch</p>
                <p className="text-[11px] text-white font-bold">Expo SDK 51</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
