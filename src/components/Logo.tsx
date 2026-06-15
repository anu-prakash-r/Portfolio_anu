'use client';

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: {
      container: 'w-8 h-8',
      text: 'text-xs',
    },
    md: {
      container: 'w-10 h-10',
      text: 'text-sm',
    },
    lg: {
      container: 'w-12 h-12',
      text: 'text-base',
    },
  };

  return (
    <div className={`${sizeClasses[size].container} relative group`}>
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-md group-hover:bg-blue-500/20 transition-all duration-300" />

      {/* Main Logo */}
      <div
        className="
          relative
          w-full
          h-full
          rounded-full
          border
          border-blue-500/20
          bg-gradient-to-br
          from-slate-900
          via-slate-800
          to-slate-900
          flex
          items-center
          justify-center
          shadow-md
          overflow-hidden
          transition-all
          duration-300
          group-hover:border-blue-400/40
          group-hover:shadow-blue-500/20
        "
      >
        {/* Subtle Highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-blue-400/10" />

        {/* AP Monogram */}
        <span
          className={`
            relative
            z-10
            font-extrabold
            ${sizeClasses[size].text}
            bg-gradient-to-r
            from-white
            via-blue-100
            to-blue-400
            bg-clip-text
            text-transparent
            select-none
          `}
          style={{
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.08em',
            lineHeight: 1,
          }}
        >
          AP
        </span>

        {/* Accent Dot */}
        <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_#2563EB]" />
      </div>
    </div>
  );
}