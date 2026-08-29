import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Send, 
  Menu, 
  X, 
  ChevronRight 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Magnetic } from './Magnetic';
import { DotMatrixRed } from './DotMatrixRed';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:py-5 transition-all duration-300">
      <nav 
        id="main-navbar"
        className={`w-full max-w-6xl transition-all duration-300 flex items-center justify-between px-6 sm:px-8 py-3.5 rounded-full ${
          scrolled 
            ? 'bg-[#0D0D0D]/90 backdrop-blur-xl border border-[#242428] shadow-2xl shadow-black/90' 
            : 'bg-[#141416]/60 backdrop-blur-md border border-[#242428]/60'
        }`}
      >
        {/* Brand Logo with Figma-style red geometric mark */}
        <Magnetic strength={0.25}>
          <a 
            href="#hero" 
            id="nav-brand-logo"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            {/* Red geometric icon */}
            <div className="w-7 h-7 rounded-lg bg-[#EF4444] flex items-center justify-center font-black text-xs text-white shadow-[0_0_12px_rgba(239,68,68,0.5)] group-hover:scale-105 transition-transform">
              <span className="tracking-tighter">SK</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-[#EDEDED] group-hover:text-[#EF4444] transition-colors">
                Sathiesh
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse" />
            </div>
          </a>
        </Magnetic>

        {/* Desktop Nav Links in Figma Clean Style */}
        <div className="hidden md:flex items-center space-x-6 text-xs font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Magnetic key={link.label} strength={0.15}>
                <a
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  className={`transition-all duration-150 relative py-1 px-1 text-xs tracking-wide ${
                    isActive 
                      ? 'text-white font-bold' 
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#EF4444] shadow-[0_0_6px_#EF4444]"
                    />
                  )}
                </a>
              </Magnetic>
            );
          })}
        </div>

        {/* Right Action: Figma-Style Vibrant Red Pill "Get in Touch" Button & Resume */}
        <div className="hidden sm:flex items-center space-x-3">
          <Magnetic strength={0.3}>
            <a
              id="nav-resume-btn"
              href="https://drive.google.com/file/d/1kp2uJseMJWN0wrpk1g_riyO_fZubF6VN/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#A1A1AA] hover:text-white px-3.5 py-2 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="View Sathiesh's Resume"
            >
              <FileText className="w-3.5 h-3.5 text-[#EF4444]" />
              <span>Resume</span>
            </a>
          </Magnetic>

          <Magnetic strength={0.35}>
            <button
              id="nav-contact-btn"
              onClick={onOpenContact}
              className="theme-pill-btn-red px-5 py-2.5 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </Magnetic>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-zinc-300 hover:text-white bg-[#1A1A1E] border border-[#242428] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 bg-[#141416] border border-[#242428] rounded-3xl p-5 shadow-2xl z-50 flex flex-col gap-3 md:hidden backdrop-blur-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#EF4444]" />
              </a>
            ))}

            <div className="pt-3 border-t border-[#242428] flex gap-2">
              <a
                href="https://drive.google.com/file/d/1kp2uJseMJWN0wrpk1g_riyO_fZubF6VN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full text-xs font-bold text-white bg-white/5 border border-white/10"
              >
                <FileText className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>Resume</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex-1 theme-pill-btn-red py-2.5 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Get in Touch</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
