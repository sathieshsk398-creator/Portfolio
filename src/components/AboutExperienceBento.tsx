import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  Fingerprint, 
  Database,
  ArrowUpRight,
  Code2,
  FileCheck2,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';
import { experiences, patents, educationList } from '../data/portfolioData';
import { Magnetic } from './Magnetic';
import { MagneticCard } from './MagneticCard';
import { DotMatrixRed } from './DotMatrixRed';

export const AboutExperienceBento: React.FC = () => {
  const [patentSimulated, setPatentSimulated] = useState(false);
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'verified'>('idle');

  const handleSimulateScan = () => {
    if (scanState !== 'idle') return;
    setScanState('scanning');
    setTimeout(() => {
      setScanState('verified');
      setPatentSimulated(true);
      setTimeout(() => {
        setScanState('idle');
      }, 3500);
    }, 1200);
  };

  const experience = experiences[0];
  const patent = patents[0];
  const college = educationList[0];
  const school = educationList[1];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header matching Figma Reference: "Project Overview :::" */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2.5 mb-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EDEDED]">
              Project Overview & Experience
            </h2>
            <DotMatrixRed cols={3} rows={2} size="w-1.5 h-1.5" />
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-xl font-normal leading-relaxed">
            Hands-on full-stack development, published research in biometric anomaly detection, and academic track record.
          </p>
        </div>

        {/* Bento Box Grid Matching Figma Dark Charcoal + Red Theme */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* ========================================================================= */}
          {/* GRID ITEM 1: Experience at Viruzverse Solutions (Spans 7 cols on Desktop) */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <MagneticCard
              id="bento-experience-card"
              tiltStrength={2}
              spotlightColor="rgba(239, 68, 68, 0.12)"
              className="bg-[#141416] hover:bg-[#17171B] border border-[#242428] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-red-500/60 shadow-2xl hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 h-full transition-all duration-300 ease-in-out"
            >
              <div>
                {/* Top Row: Tag & Period */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold font-mono">
                      Internship • 2024
                    </span>
                  </div>
                  <span className="text-[#EF4444] text-[10px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20">
                    COIMBATORE, INDIA
                  </span>
                </div>

                {/* Title & Company */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                  {experience.company}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] mb-4">
                  {experience.role}
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                  {experience.summary}
                </p>

                {/* Bullet Points with Red Dot Accent */}
                <div className="space-y-2 mb-6">
                  {experience.achievements.map((achievement, idx) => (
                    <div key={idx} className="text-xs text-[#EDEDED] flex items-start">
                      <span className="w-1.5 h-1.5 bg-[#EF4444] rounded-full mr-2.5 mt-1.5 shrink-0 shadow-[0_0_6px_#EF4444]" />
                      <span className="leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech Tags */}
              <div className="pt-4 border-t border-[#242428] flex flex-wrap items-center justify-between gap-2 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {experience.skills.map((skill) => (
                    <Magnetic key={skill} strength={0.2}>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#1A1A1E] hover:bg-[#222228] border border-[#242428] hover:border-red-500/40 text-[#A1A1AA] hover:text-white transition-all duration-300 ease-in-out">
                        {skill}
                      </span>
                    </Magnetic>
                  ))}
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  REST API & SQL Optimization
                </span>
              </div>
            </MagneticCard>
          </motion.div>

          {/* ========================================================================= */}
          {/* GRID ITEM 2: Innovation / Patent (Spans 5 cols on Desktop)                */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5"
          >
            <MagneticCard
              id="bento-patent-card"
              tiltStrength={2}
              spotlightColor="rgba(239, 68, 68, 0.12)"
              className="bg-[#141416] hover:bg-[#17171B] border border-[#242428] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-red-500/60 shadow-2xl hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 h-full transition-all duration-300 ease-in-out"
            >
              {/* Top Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold font-mono">
                    Intellectual Property
                  </span>
                </div>
                <div className="bg-[#EF4444]/15 text-[#EF4444] px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#EF4444]/30">
                  Patent Published
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold leading-snug text-white mb-2">
                  {patent.title}
                </h3>
                <p className="text-[#A1A1AA] text-xs leading-relaxed mb-4">
                  {patent.abstract}
                </p>

                {/* Innovation Highlights */}
                <div className="space-y-2 mb-6">
                  {patent.keyInnovations.map((inn, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#EF4444] shrink-0 mt-0.5" />
                      <span className="leading-snug">{inn}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Number & Scanner Demo */}
              <div className="pt-4 border-t border-[#242428] flex items-center justify-between mt-auto">
                <div>
                  <div className="text-[9px] uppercase font-bold tracking-widest text-[#A1A1AA]">App No. (India)</div>
                  <div className="text-[11px] font-mono font-bold text-[#EDEDED]">{patent.applicationNo}</div>
                </div>

                <Magnetic strength={0.35}>
                  <button
                    onClick={handleSimulateScan}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all duration-300 ease-in-out cursor-pointer ${
                      scanState === 'scanning'
                        ? 'bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/40 animate-pulse'
                        : scanState === 'verified'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-[#1A1A1E] hover:bg-[#242428] hover:border-red-500/40 text-zinc-200 border border-[#242428]'
                    }`}
                  >
                    <Fingerprint className="w-3.5 h-3.5 text-[#EF4444]" />
                    <span>
                      {scanState === 'scanning' ? 'Verifying...' : scanState === 'verified' ? 'Verified ✓' : 'Test Scan'}
                    </span>
                  </button>
                </Magnetic>
              </div>
            </MagneticCard>
          </motion.div>

          {/* ========================================================================= */}
          {/* GRID ITEM 3: Education & Academic Track (Spans 6 cols on Desktop)         */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6"
          >
            <MagneticCard
              id="bento-education-card"
              tiltStrength={2}
              spotlightColor="rgba(239, 68, 68, 0.12)"
              className="bg-[#141416] hover:bg-[#17171B] border border-[#242428] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-red-500/60 shadow-2xl hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 h-full transition-all duration-300 ease-in-out"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold font-mono">
                    Academic Background
                  </span>
                </div>

                <div className="mt-2">
                  <h4 className="text-lg font-bold text-white">{college.degree}</h4>
                  <p className="text-[#A1A1AA] text-xs mt-0.5">{college.institution}</p>
                  <p className="text-[11px] font-mono text-zinc-400 mt-1">{college.period} • {college.focus}</p>

                  {/* Big Score Display */}
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#EF4444] font-mono">
                      {college.score}
                    </span>
                    <span className="text-xs font-mono text-[#A1A1AA] font-bold">CGPA</span>
                  </div>
                </div>

                {/* Higher Secondary School */}
                <div className="mt-5 pt-4 border-t border-[#242428] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{school.degree}</div>
                    <div className="text-[11px] text-[#A1A1AA]">{school.institution}</div>
                  </div>
                  <div className="text-sm font-bold font-mono text-emerald-400">
                    {school.score}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#242428] flex justify-between items-center text-[10px] font-mono text-[#A1A1AA]">
                <span>Degree: B.E. Computer Science</span>
                <span className="text-[#EF4444] font-bold">Class of 2027</span>
              </div>
            </MagneticCard>
          </motion.div>

          {/* ========================================================================= */}
          {/* GRID ITEM 4: System Architecture & Deterministic AI (Spans 6 cols)        */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-6"
          >
            <MagneticCard
              id="bento-philosophy-card"
              tiltStrength={2}
              spotlightColor="rgba(239, 68, 68, 0.12)"
              className="bg-[#141416] hover:bg-[#17171B] border border-[#242428] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-red-500/60 shadow-2xl hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1 h-full transition-all duration-300 ease-in-out"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold font-mono">
                      System Architecture
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#EF4444] font-bold">
                    DETERMINISTIC AI
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2">
                  Bridging LLM Reasoning with Production Backends
                </h4>

                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-5">
                  Specializing in full-stack architectures where Google Gemini multimodal AI is paired with strict JSON validation schemas and deterministic price computation matrices.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#1A1A1E] hover:bg-[#202026] border border-[#242428] hover:border-red-500/40 hover:scale-[1.02] p-3 rounded-2xl transition-all duration-300 ease-in-out">
                    <div className="text-xs font-bold text-white mb-0.5">Zero-Hallucination</div>
                    <div className="text-[10px] text-[#A1A1AA]">Strict JSON schema validation & repair cost matrix matching.</div>
                  </div>
                  <div className="bg-[#1A1A1E] hover:bg-[#202026] border border-[#242428] hover:border-red-500/40 hover:scale-[1.02] p-3 rounded-2xl transition-all duration-300 ease-in-out">
                    <div className="text-xs font-bold text-white mb-0.5">High Concurrency</div>
                    <div className="text-[10px] text-[#A1A1AA]">Tested for 10,000+ daily hospital operational records.</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#242428] flex items-center justify-between text-[10px] font-mono text-[#A1A1AA]">
                <span>Stack: React • Node • Spring Boot • Gemini</span>
                <span className="text-[#EF4444] font-bold">Production-Grade</span>
              </div>
            </MagneticCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
