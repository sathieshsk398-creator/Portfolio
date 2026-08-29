import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  CheckCircle2, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  Briefcase, 
  GraduationCap, 
  FileCode, 
  Cpu
} from 'lucide-react';
import { personalInfo, experiences, projects, patents, educationList, certifications } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const resumeText = `SATHIESH KUMAR.M
Email: ${personalInfo.email} | Phone: ${personalInfo.phone} | Location: ${personalInfo.location}
LeetCode: ${personalInfo.links.leetcode}
GitHub: ${personalInfo.links.github}
LinkedIn: ${personalInfo.links.linkedin}

PROFESSIONAL SUMMARY:
A Computer Science Engineer with strong fundamentals in programming and Full Stack Developer, seeking internship or software developer opportunity to apply my skills and contribute to innovative software solutions.

EDUCATION:
- B.E. Computer Science and Engineering (CGPA: 7.39/10), V.S.B College of Engineering Technical Campus (2023-2027)
- H.S.C - Higher Secondary Education (Percentage: 76%), N.S.V.V Matric Hr Sec School (2021-2023)

TECHNICAL SKILLS:
- Languages: Java, JavaScript, TypeScript, SQL, HTML5, CSS3
- Frameworks & Libraries: React.js, Node.js, Spring Boot, Tailwind CSS
- Databases & Tools: MySQL, Google Gemini API, Git/GitHub, Postman, VS Code

EXPERIENCE:
Full Stack Development Intern — Viruzverse Solutions (2024)
- Built full-stack web application components using Java, React.js, Spring Boot, and MySQL
- Developed responsive user interfaces with React.js and integrated them with backend REST APIs
- Performed database design, SQL query optimization, and CRUD functionality using MySQL

PATENT:
Fraud Detection in Voting System Using Hybrid Biometric Scanner
- Patent Application Published (India) | App No: 202541037560 A
- Engineered novel voting system with multi-factor biometric authentication processing >1000 votes/min securely.

PROJECTS:
1. AI Car Damage Estimator (React.js, Node.js, TypeScript, Google Gemini API, JWT, Tailwind CSS)
- 95% accuracy in classifying damaged vehicle parts from uploaded photos.
- Engineered deterministic pricing engine reducing estimating errors by 40%.

2. AI-Powered Hospital Management System (React.js, Node.js, TypeScript, Tailwind CSS, Google Gemini API)
- Smart scheduling & symptom triage processing 10,000+ daily records with 25% efficiency boost.

ACHIEVEMENTS & CERTIFICATIONS:
- Solved 120+ coding problems on LeetCode
- Published 2 Patent Applications in India
- NPTEL Cloud Computing from IIT
- Infosys Springboard Full Stack Development Certified
- TCS CodeVita Season 13 Rank Certificate`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#141416] border border-[#242428] rounded-3xl shadow-2xl overflow-hidden text-zinc-200"
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#242428] bg-[#141416]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/30">
              Curriculum Vitae
            </span>
            <span className="text-[11px] text-[#A1A1AA] font-mono hidden sm:inline">
              Sathiesh_Kumar_M_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1kp2uJseMJWN0wrpk1g_riyO_fZubF6VN/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EF4444]/15 hover:bg-[#EF4444] text-xs font-mono text-[#EF4444] hover:text-white border border-[#EF4444]/30 transition-all font-bold cursor-pointer"
              title="Open Resume PDF in Google Drive"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Drive PDF</span>
            </a>

            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1E] hover:bg-[#242428] text-xs font-mono text-[#EDEDED] border border-[#242428] transition-colors cursor-pointer"
              title="Copy formatted resume text"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Plaintext</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-full bg-[#1A1A1E] hover:bg-[#242428] text-zinc-300 border border-[#242428] transition-colors hidden sm:flex cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0D0D0D] print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-[#242428] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
                  Sathiesh Kumar M
                </h1>
                <p className="text-xs sm:text-sm font-bold text-[#EF4444] mt-1">
                  Full Stack & AI Developer • Computer Science Engineer (2023–2027)
                </p>
              </div>

              <div className="text-xs font-mono text-[#A1A1AA] space-y-1 sm:text-right">
                <div>{personalInfo.email}</div>
                <div>{personalInfo.phone}</div>
                <div>{personalInfo.location}</div>
              </div>
            </div>

            {/* Links Bar */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono text-[#A1A1AA] pt-3 border-t border-[#242428]">
              <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 font-bold">
                <span>GitHub: github.com/sathieshsk398-creator</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#EF4444] flex items-center gap-1 font-bold">
                <span>LinkedIn: in/sathieshkumar3662633a3</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href={personalInfo.links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 flex items-center gap-1 font-bold">
                <span>LeetCode: Sathiesh_Kumar-SK17</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-[#EF4444] font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              A Computer Science Engineer with strong fundamentals in programming and Full Stack Developer, seeking internship or software developer opportunity to apply my skills and contribute to innovative software solutions.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-[#EF4444] font-bold mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="p-4 rounded-2xl bg-[#141416] border border-[#242428]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-white">
                    <span>{edu.degree}</span>
                    <span className="text-[#EF4444] font-mono">{edu.scoreLabel}: {edu.score}</span>
                  </div>
                  <div className="flex justify-between text-xs text-[#A1A1AA] mt-1">
                    <span>{edu.institution}</span>
                    <span className="font-mono">{edu.period} • {edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-[#EF4444] font-bold mb-3">
              Internship Experience
            </h2>
            <div className="p-5 rounded-2xl bg-[#141416] border border-[#242428] space-y-2.5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-white">Full Stack Development Intern</h3>
                  <div className="text-xs font-bold text-[#EF4444]">Viruzverse Solutions</div>
                </div>
                <span className="text-xs font-mono text-[#A1A1AA]">2024 • Coimbatore</span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-[#A1A1AA]">
                {experiences[0].achievements.map((ach, i) => (
                  <li key={i} className="leading-relaxed">{ach}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-[#EF4444] font-bold mb-3">
              Key Engineering Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-5 rounded-2xl bg-[#141416] border border-[#242428] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white">{proj.title}</h3>
                    <span className="text-[10px] font-mono text-[#A1A1AA]">{proj.techStack.slice(0, 5).join(', ')}</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Patent */}
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-[#EF4444] font-bold mb-3">
              Published Patent
            </h2>
            <div className="p-5 rounded-2xl bg-[#141416] border border-[#EF4444]/20 space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-white">{patents[0].title}</span>
                <span className="font-mono text-[#EF4444] font-bold">{patents[0].applicationNo}</span>
              </div>
              <p className="text-xs text-[#A1A1AA]">{patents[0].abstract}</p>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-widest text-[#EF4444] font-bold mb-3">
              Certifications & Accreditations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {certifications.map((c) => (
                <div key={c.id} className="p-3.5 rounded-xl bg-[#141416] border border-[#242428] text-xs">
                  <div className="font-bold text-white">{c.title}</div>
                  <div className="text-[#A1A1AA] text-[11px] mt-0.5">{c.issuer}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-[#242428] bg-[#141416] flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#A1A1AA]">
            Certified by Sathiesh Kumar M
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full theme-pill-btn-red text-xs transition-all cursor-pointer font-bold"
          >
            Close Resume Preview
          </button>
        </div>
      </motion.div>
    </div>
  );
};
