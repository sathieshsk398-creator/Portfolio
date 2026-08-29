import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Terminal, 
  ArrowUp, 
  Mail, 
  Sparkles, 
  Clock, 
  ArrowUpRight, 
  Send, 
  MapPin 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Magnetic } from './Magnetic';
import { DotMatrixRed } from './DotMatrixRed';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#242428] bg-[#0D0D0D] pt-16 pb-12 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Bottom Red Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Brand & Monogram */}
          <div className="flex flex-col gap-2 max-w-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#EF4444] flex items-center justify-center font-black text-xs text-white shadow-[0_0_12px_rgba(239,68,68,0.5)]">
                SK
              </div>
              <div>
                <div className="text-base font-extrabold text-[#EDEDED] tracking-tight">
                  Sathiesh Kumar M
                </div>
                <div className="text-xs text-[#A1A1AA] font-mono">
                  Full Stack & AI Developer • Class of 2027
                </div>
              </div>
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed pt-1">
              Engineering full-stack systems and multimodal AI with deterministic validation architectures.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-[#A1A1AA]">
            <a href="#hero" className="hover:text-[#EF4444] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#EF4444] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#EF4444] transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-[#EF4444] transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-[#EF4444] transition-colors">Contact</a>
          </div>

          {/* Live Indian Standard Time (IST) Clock & Location */}
          <div className="px-4 py-2.5 rounded-2xl bg-[#141416] border border-[#242428] flex items-center gap-3">
            <div className="p-1.5 rounded-xl bg-[#EF4444]/15 text-[#EF4444]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1AA] font-bold">Coimbatore (IST)</div>
              <div className="text-xs font-mono font-bold text-[#EDEDED]">
                {currentTime || '05:30 PM (IST)'}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Row */}
        <div className="pt-8 border-t border-[#242428] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <div className="flex items-center gap-2">
            <DotMatrixRed cols={3} rows={2} size="w-1 h-1" />
            <span>© {new Date().getFullYear()} Sathiesh Kumar M. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#141416] hover:bg-[#1A1A1E] border border-[#242428] text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#141416] hover:bg-[#1A1A1E] border border-[#242428] text-zinc-400 hover:text-[#EF4444] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#141416] hover:bg-[#1A1A1E] border border-[#242428] text-zinc-400 hover:text-amber-400 transition-colors"
                aria-label="LeetCode Profile"
              >
                <Terminal className="w-3.5 h-3.5" />
              </a>
            </div>

            <Magnetic strength={0.3}>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-[#141416] hover:bg-[#1A1A1E] border border-[#242428] text-zinc-300 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                title="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4 text-[#EF4444]" />
              </button>
            </Magnetic>
          </div>
        </div>

      </div>
    </footer>
  );
};
