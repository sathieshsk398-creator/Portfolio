import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Eye,
  Github,
  Layers,
  Activity,
  ShieldCheck
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { Magnetic } from './Magnetic';
import { MagneticCard } from './MagneticCard';
import { DotMatrixRed } from './DotMatrixRed';

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header matching Figma Reference: "Our Projects :::" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EDEDED]">
                Our Projects
              </h2>
              <DotMatrixRed cols={3} rows={2} size="w-1.5 h-1.5" />
            </div>
            <p className="text-sm text-[#A1A1AA] max-w-xl font-normal leading-relaxed">
              Production-ready full-stack and multimodal AI systems engineered with deterministic pricing engines, high-concurrency throughput, and modern reactive UIs.
            </p>
          </div>

          {/* Right Action: Figma-style "Show All" Pill Button */}
          <div className="shrink-0">
            <Magnetic strength={0.3}>
              <a
                href="https://github.com/sathieshsk398-creator?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#141416] hover:bg-[#1C1C20] border border-[#242428] text-xs font-semibold text-[#EDEDED] hover:text-white transition-all cursor-pointer"
              >
                <span>Show All</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#EF4444]" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Project Cards Grid in Floating Glassmorphism Style from Figma Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const isCarProject = project.id === 'ai-car-damage';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="h-full"
              >
                <MagneticCard
                  id={`project-card-${project.id}`}
                  tiltStrength={2}
                  spotlightColor="rgba(239, 68, 68, 0.12)"
                  className="group relative bg-[#141416] rounded-3xl border border-[#242428] hover:border-[#EF4444]/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl h-full transition-all duration-300 overflow-hidden"
                >
                  {/* Visual Mockup Preview Card (Mirroring Figma's Floating Mockup Layout) */}
                  <div className="relative w-full rounded-2xl overflow-hidden mb-6 border border-[#242428] bg-gradient-to-br from-[#1C1C22] to-[#0D0D0D] p-5">
                    
                    {/* Background Glow */}
                    <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-40 ${
                      isCarProject ? 'bg-red-600/30' : 'bg-red-500/25'
                    }`} />

                    {/* Simulated App Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                        {isCarProject ? "gemini-1.5-vision // v1.2" : "hospital-ops // 10k throughput"}
                      </span>
                    </div>

                    {/* Inner Mockup UI Presentation */}
                    <div className="grid grid-cols-2 gap-3 mb-2">
                      {isCarProject ? (
                        <>
                          <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/5">
                            <span className="text-[10px] text-zinc-400 font-mono">Classification</span>
                            <div className="text-xl font-bold font-mono text-[#EF4444]">95% ACC</div>
                            <span className="text-[9px] text-zinc-500">Damage Taxonomy</span>
                          </div>
                          <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/5">
                            <span className="text-[10px] text-zinc-400 font-mono">Price Error</span>
                            <div className="text-xl font-bold font-mono text-emerald-400">-40% ERR</div>
                            <span className="text-[9px] text-zinc-500">Deterministic Matrix</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/5">
                            <span className="text-[10px] text-zinc-400 font-mono">Throughput</span>
                            <div className="text-xl font-bold font-mono text-[#EF4444]">10,000+</div>
                            <span className="text-[9px] text-zinc-500">Daily Records</span>
                          </div>
                          <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/5">
                            <span className="text-[10px] text-zinc-400 font-mono">Triage Speed</span>
                            <div className="text-xl font-bold font-mono text-emerald-400">+25%</div>
                            <span className="text-[9px] text-zinc-500">Optimized Wait Times</span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* App Category Label in Figma Reference style ("App Design" / "Berkshire Hathaway" vibe) */}
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-white tracking-tight">{project.title}</div>
                        <div className="text-[11px] text-[#A1A1AA]">{project.category}</div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-[#EF4444] shadow-[0_0_8px_#EF4444]" />
                    </div>
                  </div>

                  <div>
                    {/* Project Title & Description */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#EF4444] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-5">
                      {project.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#EF4444] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <Magnetic key={tech} strength={0.2}>
                          <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#1A1A1E] border border-[#242428] text-[#A1A1AA] hover:text-white hover:border-[#EF4444]/40 transition-colors">
                            {tech}
                          </span>
                        </Magnetic>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-4 border-t border-[#242428] flex items-center justify-between mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-medium text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>

                    <Magnetic strength={0.35}>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="theme-pill-btn-red px-5 py-2 flex items-center gap-1.5 cursor-pointer text-xs"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Architecture</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </Magnetic>
                  </div>
                </MagneticCard>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Details & Sandbox Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
