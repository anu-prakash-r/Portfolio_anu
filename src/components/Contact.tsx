'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, CheckCircle, AlertTriangle } from 'lucide-react';
import emailjs from 'emailjs-com';

const GithubIcon = ({ className, size = 16 }: { className?: string; size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={{ width: size, height: size }}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className, size = 16 }: { className?: string; size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={{ width: size, height: size }}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Send email using EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Anu Prakash',
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
    )
    .then((result) => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      console.error('EmailJS error:', error);
      const errorMessage = error.text || error.message || JSON.stringify(error);
      alert(`Failed to send message: ${errorMessage}. Please try again.`);
    });
  };

  // Button click ripple effect handler
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple: Ripple = {
      x,
      y,
      id: Date.now(),
    };
    
    setRipples((prev) => [...prev, newRipple]);
    
    // Cleanup ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  // Input glow tracking
  const handleInputMouseMove = (e: React.MouseEvent<HTMLDivElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="py-24 px-6 md:px-12 relative flex flex-col items-center justify-center overflow-hidden border-t border-white/5 bg-black"
    >
      {/* Background soft glow orbs */}
      <div className="absolute left-1/4 bottom-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 top-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl z-10">
        
        {/* Section title */}
        <div className="text-center mb-16 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-500">Contact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Get In Touch</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details & Socials */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between space-y-8 p-6 md:p-8 glass-card rounded-3xl">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Let&apos;s build something great</h3>
              <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                Have an app idea or looking to scale up your React Native engineering team? Drop a line, let&apos;s schedule a call to sync.
              </p>
            </div>

            {/* Direct Contact Metrics */}
            <div className="space-y-4 pt-4">
              <a 
                href="mailto:anuprakash@email.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <Mail size={16} />
                </div>
                <span className="text-xs font-mono">anuprakash@email.com</span>
              </a>
            </div>

            {/* Social pills */}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/5">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Find me on</p>
              <div className="flex flex-wrap gap-3">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/anu-prakash-r-a9b517277" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-xs font-semibold text-zinc-300 hover:text-white"
                >
                  <LinkedinIcon size={14} className="text-[#0077B5]" />
                  <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/anu-prakash-r" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-xs font-semibold text-zinc-300 hover:text-white"
                >
                  <GithubIcon size={14} className="text-white" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Luxurious Contact Form */}
          <div className="col-span-1 lg:col-span-7 glass-card rounded-3xl p-6 md:p-8 relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Form Input fields */}
              <div className="space-y-1 text-left relative">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider pl-1">Name</label>
                <div 
                  onMouseMove={handleInputMouseMove}
                  className="spotlight-card relative rounded-xl overflow-hidden"
                >
                  <div className="spotlight-card-border" />
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name" 
                    className="w-full bg-zinc-950/80 border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-zinc-600 focus:outline-none transition-all duration-300 relative z-10"
                  />
                </div>
              </div>

              <div className="space-y-1 text-left relative">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider pl-1">Email Address</label>
                <div 
                  onMouseMove={handleInputMouseMove}
                  className="spotlight-card relative rounded-xl overflow-hidden"
                >
                  <div className="spotlight-card-border" />
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@company.com" 
                    className="w-full bg-zinc-950/80 border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-zinc-600 focus:outline-none transition-all duration-300 relative z-10"
                  />
                </div>
              </div>

              <div className="space-y-1 text-left relative">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider pl-1">Message</label>
                <div 
                  onMouseMove={handleInputMouseMove}
                  className="spotlight-card relative rounded-xl overflow-hidden"
                >
                  <div className="spotlight-card-border" />
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Your message details..." 
                    className="w-full bg-zinc-950/80 border border-white/5 focus:border-blue-500/50 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-zinc-600 focus:outline-none transition-all duration-300 relative z-10 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button with Ripple Effect */}
              <button
                type="submit"
                disabled={isSubmitting}
                onMouseDown={handleButtonClick}
                className="group relative w-full py-3.5 rounded-xl text-xs md:text-sm font-semibold overflow-hidden bg-white text-black hover:text-white transition duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.1)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0" />
                
                {/* Ripple render mapping */}
                {ripples.map((ripple) => (
                  <span
                    key={ripple.id}
                    className="absolute bg-white/25 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: '60px',
                      height: '60px',
                      animationDuration: '0.6s',
                      pointerEvents: 'none',
                    }}
                  />
                ))}

                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin group-hover:border-white group-hover:border-t-transparent" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              {/* Toast Messages */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-2.5 text-emerald-400 text-xs font-medium"
                  >
                    <CheckCircle size={15} />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
