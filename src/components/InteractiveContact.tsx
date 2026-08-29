import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  CheckCircle2, 
  Send, 
  Github, 
  Linkedin, 
  Terminal, 
  ArrowUpRight,
  Download,
  Clock,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Magnetic } from './Magnetic';
import { MagneticCard } from './MagneticCard';
import { DotMatrixRed } from './DotMatrixRed';

export const InteractiveContact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);

      // Open mailto fallback pre-filled
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Sender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setSentSuccess(false);
      }, 4000);
    }, 800);
  };

  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Sathiesh Kumar M
N:M;Sathiesh;Kumar;;
TITLE:Full Stack & AI Developer
TEL;TYPE=CELL:${personalInfo.phone}
EMAIL;TYPE=INTERNET:${personalInfo.email}
URL:${personalInfo.links.linkedin}
NOTE:Computer Science Engineer (2023-2027) specializing in React, Node.js, and Google Gemini API.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Sathiesh_Kumar_M.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Section Header matching Figma Reference: "Let's Connect :::" */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2.5 mb-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EDEDED]">
              Let's Connect
            </h2>
            <DotMatrixRed cols={3} rows={2} size="w-1.5 h-1.5" />
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-xl font-normal leading-relaxed">
            Interested in collaborating on full-stack web applications, AI integrations, or discussing internship opportunities? Let's connect.
          </p>
        </div>

        {/* Contact Bento Box Layout in Figma Dark Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Left Column: Direct Info & Quick Copy Badges (Spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 h-full"
          >
            <MagneticCard
              tiltStrength={2}
              spotlightColor="rgba(239, 68, 68, 0.12)"
              className="bg-[#141416] border border-[#242428] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl h-full hover:border-[#EF4444]/40 transition-all"
            >
              <div>
                {/* Availability Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/25 text-[10px] font-bold uppercase tracking-wider text-[#EF4444] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse shadow-[0_0_8px_#EF4444]" />
                  <span>{personalInfo.availability}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  Building intelligent digital reality together.
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  Feel free to reach out directly via email, phone, or LinkedIn. Responses typically sent within 24 hours.
                </p>

                {/* Direct Info Cards with 1-Click Copy */}
                <div className="space-y-3">
                  {/* Email Box */}
                  <div 
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-3.5 rounded-2xl bg-[#1A1A1E] hover:bg-[#242428] border border-[#242428] hover:border-[#EF4444]/40 transition-all cursor-pointer group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-[#A1A1AA] uppercase font-bold">Email Address</div>
                        <div className="text-xs sm:text-sm font-mono font-bold text-[#EDEDED] group-hover:text-[#EF4444] transition-colors">
                          {personalInfo.email}
                        </div>
                      </div>
                    </div>

                    <button className="text-xs text-[#A1A1AA] group-hover:text-white p-1.5 rounded-full bg-white/5 cursor-pointer">
                      {copiedField === 'email' ? (
                        <span className="text-[#EF4444] text-xs font-mono font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Copied
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Phone Box */}
                  <div 
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-3.5 rounded-2xl bg-[#1A1A1E] hover:bg-[#242428] border border-[#242428] hover:border-emerald-500/40 transition-all cursor-pointer group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-[#A1A1AA] uppercase font-bold">Phone / WhatsApp</div>
                        <div className="text-xs sm:text-sm font-mono font-bold text-[#EDEDED] group-hover:text-emerald-400 transition-colors">
                          {personalInfo.phone}
                        </div>
                      </div>
                    </div>

                    <button className="text-xs text-[#A1A1AA] group-hover:text-white p-1.5 rounded-full bg-white/5 cursor-pointer">
                      {copiedField === 'phone' ? (
                        <span className="text-emerald-400 text-xs font-mono font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Copied
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Location Box */}
                  <div className="p-3.5 rounded-2xl bg-[#1A1A1E] border border-[#242428] flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#A1A1AA] uppercase font-bold">Current Base</div>
                      <div className="text-xs sm:text-sm font-bold text-[#EDEDED]">
                        {personalInfo.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-[#242428] flex items-center justify-between">
                <Magnetic strength={0.3}>
                  <button
                    onClick={generateVCard}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#EF4444]" />
                    <span>Save Contact (vCard)</span>
                  </button>
                </Magnetic>
                <span className="text-[10px] font-mono text-[#A1A1AA] font-bold">IST (UTC+5:30)</span>
              </div>
            </MagneticCard>
          </motion.div>

          {/* Right Column: Direct Message Composer (Spans 7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 h-full"
          >
            <MagneticCard
              tiltStrength={2}
              spotlightColor="rgba(239, 68, 68, 0.12)"
              className="bg-[#141416] border border-[#242428] rounded-3xl p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between hover:border-[#EF4444]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                    <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-bold font-mono">
                      Send a Message
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#EF4444] font-bold">INBOX READY</span>
                </div>

                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] font-mono text-[#A1A1AA] uppercase font-bold mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Henderson"
                        className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1E] border border-[#242428] focus:border-[#EF4444] focus:outline-none text-xs text-white placeholder:text-[#52525B] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] font-mono text-[#A1A1AA] uppercase font-bold mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1E] border border-[#242428] focus:border-[#EF4444] focus:outline-none text-xs text-white placeholder:text-[#52525B] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] font-mono text-[#A1A1AA] uppercase font-bold mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Sathiesh, let's discuss an engineering opportunity or full-stack project..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#1A1A1E] border border-[#242428] focus:border-[#EF4444] focus:outline-none text-xs text-white placeholder:text-[#52525B] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <span className="text-[11px] text-[#A1A1AA] text-center sm:text-left">
                      Dispatches directly to Sathiesh's inbox
                    </span>

                    <Magnetic strength={0.35}>
                      <button
                        type="submit"
                        disabled={isSending || sentSuccess}
                        className="w-full sm:w-auto px-8 py-3.5 theme-pill-btn-red flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                      >
                        {isSending ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Dispatching...</span>
                          </>
                        ) : sentSuccess ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-white" />
                            <span>Message Dispatched!</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </form>
              </div>
            </MagneticCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
