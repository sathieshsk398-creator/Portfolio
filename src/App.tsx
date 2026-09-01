/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, Variants } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutExperienceBento } from './components/AboutExperienceBento';
import { ProjectShowcase } from './components/ProjectShowcase';
import { TechStackMarquee } from './components/TechStackMarquee';
import { AchievementsBento } from './components/AchievementsBento';
import { InteractiveContact } from './components/InteractiveContact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';

const sectionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#EDEDED] flex flex-col relative selection:bg-[#EF4444]/30 selection:text-white font-sans">
      {/* Background Interactive Crimson Constellation Network */}
      <ParticleBackground fixed={true} />

      {/* Ambient Glowing Cursor Light Follower (Without white dots/circles) */}
      <CustomCursor />

      {/* Scroll Progress Bar at the Top */}
      <ScrollProgress />

      {/* Navigation Bar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections with Reveal Animations */}
      <main className="flex-1 flex flex-col relative z-10">
        {/* 1. Hero Section with 2-column layout and portrait photo */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Hero 
            onOpenContact={handleOpenContact}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        </motion.div>

        {/* 2. Bento Grid: Viruzverse Experience, Published Patent & Education */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <AboutExperienceBento />
        </motion.div>

        {/* 3. Interactive Project Showcase */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <ProjectShowcase />
        </motion.div>

        {/* 4. Continuous Marquee Ticker */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <TechStackMarquee />
        </motion.div>

        {/* 5. Verified Credentials, LeetCode, Certifications & Mentorship */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <AchievementsBento />
        </motion.div>

        {/* 6. Interactive Contact Card with 1-Click vCard and Email */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <InteractiveContact />
        </motion.div>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Full Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
