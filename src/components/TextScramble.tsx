'use client';

import React, { useState, useEffect } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
}

const characters = '!<>-_\\/[]{}—=+*^?#________';

export default function TextScramble({ text, className = '', duration = 50 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const scramble = () => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    };

    interval = setInterval(scramble, duration);

    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{displayText}</span>;
}
