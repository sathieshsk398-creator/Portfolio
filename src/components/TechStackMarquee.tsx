import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Database, 
  Cpu, 
  Sparkles, 
  Server, 
  Palette, 
  GitBranch, 
  Send, 
  Cloud, 
  Coffee, 
  CheckCircle, 
  FileCode, 
  Layout, 
  Network 
} from 'lucide-react';
import { skillsList } from '../data/portfolioData';
import { SkillItem } from '../types';
import { DotMatrixRed } from './DotMatrixRed';

export const TechStackMarquee: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const categories = ['All', 'Languages', 'Frontend', 'Backend & AI', 'Databases & Tools'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsList
    : skillsList.filter(s => s.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-4 h-4 text-[#EF4444]" />;
      case 'Code': return <Code2 className="w-4 h-4 text-amber-400" />;
      case 'FileCode': return <FileCode className="w-4 h-4 text-blue-400" />;
      case 'Database': return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Layers': return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-[#EF4444]" />;
      case 'GitBranch': return <GitBranch className="w-4 h-4 text-orange-400" />;
      default: return <Code2 className="w-4 h-4 text-[#EF4444]" />;
    }
  };

  const marqueeItems = [...skillsList, ...skillsList, ...skillsList];

  return (
    <section id="skills-marquee" className="py-12 px-4 sm:px-6 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Dynamic Continuous Marquee Banner */}
        <div className="relative w-full py-4 overflow-hidden rounded-3xl bg-[#141416] border border-[#242428] shadow-xl">
          {/* Gradient fade masks on left and right edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#141416] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#141416] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Marquee Container */}
          <div className="animate-marquee-infinite flex items-center gap-3.5 py-1">
            {[...skillsList, ...skillsList].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#1A1A1E] border border-[#242428] hover:border-[#EF4444]/60 text-zinc-200 hover:text-white hover:bg-[#202026] transition-all cursor-pointer shrink-0 shadow-sm"
              >
                <div className="shrink-0">{getSkillIcon(skill.iconName)}</div>
                <span className="text-xs font-bold tracking-tight whitespace-nowrap">
                  {skill.name}
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-[#A1A1AA] border border-white/5">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
