import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Terminal, 
  Sparkles, 
  Activity, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Github, 
  Linkedin,
  FileBadge,
  Code2,
  Layers,
  Palette
} from 'lucide-react';
import { metricStats, certifications, personalInfo, skillsList } from '../data/portfolioData';
import { Magnetic } from './Magnetic';
import { MagneticCard } from './MagneticCard';
import { DotMatrixRed } from './DotMatrixRed';

export const AchievementsBento: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 relative">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2.5 mb-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EDEDED]">
              Technical Skills & Credentials
            </h2>
            <DotMatrixRed cols={3} rows={2} size="w-1.5 h-1.5" />
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-xl font-normal leading-relaxed">
            Categorized technical skill proficiencies, competitive programming problem-solving record, and industry-certified accreditations.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* ========================================================================= */}
          {/* CARD 1: Categorized Technical Skills Containers (Spans 6 cols)            */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 h-full"
          >
            <MagneticCard
              tiltStrength={2}
              spotlightColor="rgba(239, 68, 68, 0.12)"
              className="bg-[#141416] border border-[#242428] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl hover:border-[#EF4444]/40 h-full transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold font-mono">
                      Technical Competencies
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#EF4444] font-bold px-2.5 py-0.5 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20">
                    9 CORE SKILLS
                  </span>
                </div>

                {/* Categorized Skills Grid */}
                <div className="space-y-3">
                  {/* Category 1: Languages */}
                  <div className="p-3 rounded-2xl bg-[#1A1A1E] border border-[#242428] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider font-bold">
                        Programming Languages
                      </span>
                      <span className="text-[9px] font-mono text-zinc-500">4 Languages</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-xs font-bold text-white">Java</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#EF4444]/15 text-[#EF4444] font-bold">Medium</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-xs font-bold text-white">JavaScript</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#EF4444]/15 text-[#EF4444] font-bold">Medium</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-xs font-bold text-white">TypeScript</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 font-bold">Basic</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-xs font-bold text-white">SQL</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#EF4444]/15 text-[#EF4444] font-bold">Medium</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 2: Frontend */}
                  <div className="p-3 rounded-2xl bg-[#1A1A1E] border border-[#242428] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider font-bold">
                        Frontend Development
                      </span>
                      <span className="text-[9px] font-mono text-zinc-500">UI / UX Architecture</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-xs font-bold text-white">React.js</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#EF4444]/15 text-[#EF4444] font-bold">Medium</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-xs font-bold text-white">HTML5 / CSS3</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">Advanced</span>
                      </div>
                    </div>
                  </div>

                  {/* Category 3: Backend, AI & Tools */}
                  <div className="p-3 rounded-2xl bg-[#1A1A1E] border border-[#242428] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider font-bold">
                        AI, Backend & Tooling
                      </span>
                      <span className="text-[9px] font-mono text-zinc-500">APIs & Infrastructure</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="flex flex-col p-2 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-[11px] font-bold text-white truncate">Gemini API</span>
                        <span className="text-[9px] font-mono text-[#EF4444] font-bold mt-0.5">Advanced</span>
                      </div>
                      <div className="flex flex-col p-2 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-[11px] font-bold text-white">MySQL</span>
                        <span className="text-[9px] font-mono text-amber-400 font-bold mt-0.5">Medium</span>
                      </div>
                      <div className="flex flex-col p-2 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-[11px] font-bold text-white">Git & GitHub</span>
                        <span className="text-[9px] font-mono text-blue-400 font-bold mt-0.5">Basic</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#242428] flex items-center justify-between text-[10px] font-mono text-[#A1A1AA]">
                <span>Full Stack & AI Engineer Profile</span>
                <span className="text-emerald-400 font-bold">Verified Stack</span>
              </div>
            </MagneticCard>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 2: LeetCode & TCS CodeVita Problem Solving (Spans 6 cols)            */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-6 h-full"
          >
            <MagneticCard
              tiltStrength={2}
              spotlightColor="rgba(239, 68, 68, 0.12)"
              className="bg-[#141416] border border-[#242428] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-[#EF4444]/40 h-full transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold font-mono">
                      Algorithmic Problem Solving
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#EF4444] font-bold px-2.5 py-0.5 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20">
                    LEETCODE VERIFIED
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#1A1A1E] border border-[#242428] mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#A1A1AA]">Total Problems Solved</div>
                      <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#EF4444] tracking-tight">120+</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#A1A1AA]">Profile Handle</div>
                      <div className="text-xs font-mono font-bold text-[#EDEDED]">Sathiesh_Kumar-SK17</div>
                    </div>
                  </div>

                  <div className="mt-3.5 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-[9px] text-[#A1A1AA] font-mono font-bold uppercase">Base</div>
                      <div className="text-xs font-bold text-emerald-400 font-mono">Data Structures</div>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-[9px] text-[#A1A1AA] font-mono font-bold uppercase">Core Focus</div>
                      <div className="text-xs font-bold text-amber-400 font-mono">Algorithms & DP</div>
                    </div>
                    <div className="p-2 rounded-xl bg-black/40 border border-white/5">
                      <div className="text-[9px] text-[#A1A1AA] font-mono font-bold uppercase">Competitive</div>
                      <div className="text-xs font-bold text-[#EF4444] font-mono">TCS CodeVita</div>
                    </div>
                  </div>
                </div>

                {/* TCS CodeVita Callout */}
                <div className="p-3.5 rounded-2xl bg-[#1A1A1E] border border-[#242428] space-y-1 mb-2">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#EF4444]" />
                    <span>TCS CodeVita Season 13 Global Rank</span>
                  </div>
                  <p className="text-[11px] text-[#A1A1AA] leading-relaxed">
                    Global competitive programming olympiad testing complex algorithms under tight runtime constraints.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#242428]">
                <Magnetic strength={0.35}>
                  <a
                    href={personalInfo.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full theme-pill-btn-red text-xs flex items-center justify-center gap-2 cursor-pointer font-bold"
                  >
                    <span>View LeetCode Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Magnetic>
              </div>
            </MagneticCard>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 3: Professional Certifications (Spans full 12 cols)                  */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-12"
          >
            <MagneticCard
              tiltStrength={1.5}
              spotlightColor="rgba(239, 68, 68, 0.12)"
              className="bg-[#141416] border border-[#242428] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-[#EF4444]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold font-mono">
                      Professional Accreditations
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#EF4444] font-bold">
                    5 VERIFIED CREDENTIALS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
                      className="p-4 rounded-2xl bg-[#1A1A1E] hover:bg-[#242428] border border-[#242428] hover:border-[#EF4444]/40 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#EF4444] transition-colors leading-snug">
                              {cert.title}
                            </h4>
                            <span className="text-[11px] text-[#A1A1AA]">
                              {cert.issuer}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/25">
                          {cert.badgeText}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono">
                          {selectedCert === cert.id ? "Close ▲" : "Details ▼"}
                        </span>
                      </div>

                      {/* Expandable highlight */}
                      {selectedCert === cert.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-2.5 pt-2 border-t border-white/10 text-xs text-[#EDEDED] leading-relaxed"
                        >
                          {cert.highlights}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#242428] flex items-center justify-between text-[10px] font-mono text-[#A1A1AA]">
                <span>Issued by NPTEL (IIT), Infosys Springboard & TCS</span>
                <span className="text-emerald-400 font-bold">100% Industry Recognized</span>
              </div>
            </MagneticCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
