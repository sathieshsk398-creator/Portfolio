import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MapPin, 
  Copy, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  Terminal, 
  ArrowUpRight, 
  Mail,
  Send,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Magnetic } from './Magnetic';
import { MagneticCard } from './MagneticCard';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6 overflow-hidden">
      
      {/* Figma Reference: Subtle Large Background Watermark Typography ("SK") */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] sm:text-[300px] md:text-[380px] lg:text-[440px] font-black watermark-text opacity-30 select-none pointer-events-none -z-10 tracking-tighter leading-none">
        SK
      </div>

      {/* Subtle Red & Dark Radial Atmosphere Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: FIGMA HEADLINE & ACTIONS ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1E] border border-[#242428] text-xs font-mono text-[#D4D4D8] mb-6 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse shadow-[0_0_8px_#EF4444]" />
              <span className="text-[#EDEDED] font-semibold">{personalInfo.name}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-[#A1A1AA] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#EF4444]" />
                {personalInfo.location}
              </span>
            </motion.div>

            {/* Display Headline matching Figma Reference with Red Box Highlight on 'Ideas' */}
            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#EDEDED] leading-[1.04] mb-6"
            >
              Turning{' '}
              <span className="inline-block border-2 border-[#EF4444] rounded-lg px-2.5 sm:px-3 py-0.5 text-[#EF4444] font-normal tracking-normal shadow-[0_0_20px_rgba(239,68,68,0.25)] mx-1">
                Ideas
              </span>{' '}
              Into <br className="hidden sm:inline" />
              Digital Reality
            </motion.h1>

            {/* Subheadline description */}
            <motion.p
              id="hero-subheadline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-[#A1A1AA] max-w-xl leading-relaxed mb-8 font-normal"
            >
              Computer Science Engineer (2023–2027) building high-impact full-stack applications with <strong className="text-[#EDEDED] font-semibold">React</strong>, <strong className="text-[#EDEDED] font-semibold">Node.js</strong>, and <strong className="text-[#EDEDED] font-semibold">Spring Boot</strong>, integrated with multimodal <strong className="text-[#EF4444] font-semibold">Google Gemini AI</strong>.
            </motion.p>

            {/* Action Buttons Row matching Figma Reference */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-5 mb-10"
            >
              {/* Primary Red Pill Button: "Start a Project" / "Get in Touch" */}
              <Magnetic strength={0.35}>
                <button
                  onClick={onOpenContact}
                  id="hero-get-in-touch-btn"
                  className="theme-pill-btn-red px-8 py-3.5 flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Start a Project</span>
                </button>
              </Magnetic>

              {/* Secondary Arrow Link: "See Our Work →" */}
              <Magnetic strength={0.2}>
                <a
                  href="#projects"
                  id="hero-view-work-btn"
                  className="text-sm font-semibold text-[#EDEDED] hover:text-[#EF4444] transition-colors flex items-center gap-2 py-2 group cursor-pointer"
                >
                  <span>See Our Work</span>
                  <ArrowRight className="w-4 h-4 text-[#EF4444] group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
            </motion.div>

            {/* Social Links & 1-Click Copy Email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#242428]"
            >
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1A1A1E] hover:bg-[#242428] border border-[#242428] text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1A1A1E] hover:bg-[#242428] border border-[#242428] text-zinc-300 hover:text-[#EF4444] transition-colors cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1A1A1E] hover:bg-[#242428] border border-[#242428] text-zinc-300 hover:text-amber-400 transition-colors cursor-pointer"
                  aria-label="LeetCode Profile"
                >
                  <Terminal className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 1-Click Copy Email */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1E] hover:bg-[#242428] border border-[#242428] text-xs font-mono text-[#EDEDED] transition-colors cursor-pointer ml-auto"
              >
                <Mail className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>{personalInfo.email}</span>
                {copiedEmail ? (
                  <span className="text-[#EF4444] font-bold text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3 h-3 text-[#A1A1AA]" />
                )}
              </button>
            </motion.div>

          </div>

          {/* ================= RIGHT COLUMN: SATHIESH'S REAL PROFILE PHOTO ================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative max-w-[340px] sm:max-w-[380px] w-full"
            >
              {/* Subtle Crimson Glowing Ambient Backlight */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-red-600/25 via-red-500/10 to-transparent blur-2xl opacity-70 pointer-events-none -z-10" />

              {/* Sleek Dark Frame Card */}
              <MagneticCard
                tiltStrength={2}
                spotlightColor="rgba(239, 68, 68, 0.15)"
                className="bg-[#141416] border border-[#242428] rounded-3xl p-3 sm:p-3.5 shadow-2xl shadow-black relative overflow-hidden group hover:border-[#EF4444]/50 transition-all"
              >
                {/* Strictly using local /profile.jpg file */}
                <div className="relative rounded-2xl overflow-hidden bg-[#0D0D0D]">
                  <img
                    id="hero-profile-portrait"
                    src="/profile.jpg"
                    alt="Sathiesh Kumar M"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Dark Glass Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse shadow-[0_0_8px_#EF4444]" />
                      <span className="text-[#EDEDED] font-bold text-[11px] font-mono">Full Stack & AI</span>
                    </div>
                    <span className="text-[#A1A1AA] text-[10px] font-mono">CSE • 2023–2027</span>
                  </div>
                </div>
              </MagneticCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
