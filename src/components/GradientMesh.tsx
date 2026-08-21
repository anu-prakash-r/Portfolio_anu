'use client';

import React, { useRef, useEffect } from 'react';

export default function GradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Gradient orbs
    const orbs = [
      { x: 0.2, y: 0.3, radius: 400, color: 'rgba(59, 130, 246, 0.15)', speedX: 0.0003, speedY: 0.0002 },
      { x: 0.8, y: 0.7, radius: 350, color: 'rgba(139, 92, 246, 0.12)', speedX: -0.0002, speedY: 0.0003 },
      { x: 0.5, y: 0.5, radius: 300, color: 'rgba(236, 72, 153, 0.1)', speedX: 0.00025, speedY: -0.00025 },
      { x: 0.3, y: 0.8, radius: 250, color: 'rgba(16, 185, 129, 0.08)', speedX: -0.00015, speedY: -0.0002 },
    ];

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.001;

      orbs.forEach((orb, index) => {
        // Update position with smooth movement
        orb.x += orb.speedX + Math.sin(time + index) * 0.0001;
        orb.y += orb.speedY + Math.cos(time + index) * 0.0001;

        // Keep orbs within bounds
        orb.x = Math.max(0, Math.min(1, orb.x));
        orb.y = Math.max(0, Math.min(1, orb.y));

        // Draw gradient orb
        const gradient = ctx.createRadialGradient(
          orb.x * canvas.width,
          orb.y * canvas.height,
          0,
          orb.x * canvas.width,
          orb.y * canvas.height,
          orb.radius
        );

        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(0.5, orb.color.replace(/[\d.]+\)$/, '0.05)'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
