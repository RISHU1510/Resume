import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Twitter, FileText, Sparkles, Phone, Download } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';
import { downloadResumePDF } from '../../utils/resumeDownload';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return <Github className="w-4 h-4" />;
      case 'LinkedIn':
        return <Linkedin className="w-4 h-4" />;
      case 'Phone':
        return <Phone className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-8 lg:px-12 bg-[#0a0908] overflow-hidden select-none"
    >
      {/* Background Interactive Mesh */}
      <HeroCanvas />

      {/* Subtle radial ambient spotlight behind typography */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-[#881337]/15 via-transparent to-transparent blur-3xl opacity-70"
        style={{
          transform: `translate(calc(-50% + ${mouseOffset.x * 1.5}px), calc(-50% + ${mouseOffset.y * 1.5}px))`,
        }}
      />

      {/* Top Status & Year Badge */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-[#f7f4ed]/10 bg-[#13110f]/80 px-3.5 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono tracking-wider uppercase text-[#f7f4ed]">
            {personalInfo.availability}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#bbb5a7] uppercase"
        >
          <span className="text-[#881337]">//</span>
          <span>GURGAON, HARYANA (SEC 108)</span>
          <span className="text-[#6e685c]">•</span>
          <span>INDIA</span>
        </motion.div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Headline & Description */}
          <div className="lg:col-span-8 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-8 bg-[#881337]" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#bbb5a7]">
                {personalInfo.title}
              </span>
            </motion.div>

            {/* Hero Main Name Display */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-display text-6xl sm:text-8xl md:text-9xl lg:text-[110px] xl:text-[128px] font-normal tracking-tight text-[#f7f4ed] leading-[0.92]"
            >
              RISHU <br />
              <span className="italic font-light text-[#f7f4ed] hover:text-[#bbb5a7] transition-colors">
                SINGH
              </span>
            </motion.h1>

            {/* Short Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-lg sm:text-xl md:text-2xl font-light text-[#bbb5a7] max-w-2xl leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                data-cursor="WORKS"
                className="group relative inline-flex items-center gap-2 rounded bg-[#881337] px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-[#f7f4ed] transition-all duration-300 hover:bg-[#9f1239] hover:shadow-lg hover:shadow-[#881337]/30"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => scrollToSection('about')}
                data-cursor="ABOUT"
                className="group inline-flex items-center gap-2 rounded border border-[#f7f4ed]/20 bg-[#13110f]/70 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-[#f7f4ed] backdrop-blur-md transition-all duration-300 hover:border-[#881337] hover:bg-[#1c1815]"
              >
                <span>About Journey</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#881337]" />
              </button>

              <button
                onClick={onOpenResume}
                data-cursor="CV"
                className="group inline-flex items-center gap-2 rounded border border-[#f7f4ed]/10 px-5 py-3.5 font-mono text-xs uppercase tracking-wider text-[#bbb5a7] transition-all duration-300 hover:text-[#f7f4ed] hover:border-[#f7f4ed]/30"
              >
                <FileText className="w-4 h-4 text-[#881337]" />
                <span>Resume / CV</span>
              </button>
            </motion.div>
          </div>

          {/* Right Side Editorial Dossier / Profile Card (No Image) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="relative w-full max-w-[360px] rounded border border-[#f7f4ed]/10 bg-[#12100e]/95 p-6 backdrop-blur-md shadow-2xl flex flex-col justify-between"
            >
              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#881337]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#881337]" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#881337]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#881337]" />

              <div className="space-y-6">
                {/* Status indicator */}
                <div className="flex items-center justify-between border-b border-[#f7f4ed]/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-mono tracking-wider text-emerald-400 uppercase">
                      Active Candidate
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#bbb5a7] uppercase tracking-widest">
                    ID: RS-2025
                  </span>
                </div>

                {/* Candidate title & domain */}
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-widest text-[#881337]">
                    Role Specialization
                  </p>
                  <h3 className="font-serif-display text-2xl text-[#f7f4ed] font-medium mt-1 leading-snug">
                    Data Analyst / Junior Data Analyst
                  </h3>
                  <p className="text-xs font-mono text-[#bbb5a7] mt-1.5 flex items-center gap-1.5">
                    <span className="text-[#881337]">📍</span> Sector 108, Gurgaon, Haryana
                  </p>
                </div>

                {/* Quantitative Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded bg-[#181513] border border-[#f7f4ed]/5">
                    <div className="text-[10px] font-mono text-[#bbb5a7] uppercase">Experience</div>
                    <div className="font-serif-display text-xl text-[#f7f4ed] mt-0.5">1 Year</div>
                    <div className="text-[10px] font-mono text-[#881337] mt-0.5">ML & Analytics</div>
                  </div>
                  <div className="p-3 rounded bg-[#181513] border border-[#f7f4ed]/5">
                    <div className="text-[10px] font-mono text-[#bbb5a7] uppercase">Certifications</div>
                    <div className="font-serif-display text-xl text-[#f7f4ed] mt-0.5">10</div>
                    <div className="text-[10px] font-mono text-[#881337] mt-0.5">MS, Oracle, Infosys</div>
                  </div>
                  <div className="p-3 rounded bg-[#181513] border border-[#f7f4ed]/5">
                    <div className="text-[10px] font-mono text-[#bbb5a7] uppercase">Education</div>
                    <div className="font-serif-display text-sm text-[#f7f4ed] mt-0.5">B-Tech CSE</div>
                    <div className="text-[10px] font-mono text-[#881337] mt-0.5">AI & ML (6.22 CGPA)</div>
                  </div>
                  <div className="p-3 rounded bg-[#181513] border border-[#f7f4ed]/5">
                    <div className="text-[10px] font-mono text-[#bbb5a7] uppercase">Core Tooling</div>
                    <div className="font-serif-display text-sm text-[#f7f4ed] mt-0.5">Python & SQL</div>
                    <div className="text-[10px] font-mono text-[#881337] mt-0.5">Scikit, Pandas, Tableau</div>
                  </div>
                </div>

                {/* Actions inside Card */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => downloadResumePDF('Rishu_Singh_Resume.pdf')}
                    data-cursor="DOWNLOAD"
                    className="w-full flex items-center justify-between p-2.5 rounded bg-[#881337] hover:bg-[#9f1239] transition-all text-xs font-mono text-white shadow-md active:scale-98 group"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-3.5 h-3.5" />
                      <span className="font-semibold tracking-wider uppercase">Download Resume (PDF)</span>
                    </span>
                    <ArrowDown className="w-3.5 h-3.5 text-white/80 transition-transform group-hover:translate-y-0.5" />
                  </button>

                  <button
                    onClick={onOpenResume}
                    data-cursor="CV"
                    className="w-full flex items-center justify-between p-2.5 rounded bg-[#181513] border border-[#f7f4ed]/10 hover:border-[#881337]/50 hover:bg-[#201c19] transition-colors text-xs font-mono text-[#bbb5a7] hover:text-[#f7f4ed] group"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-[#881337]" />
                      <span>View Online CV & Credentials</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#bbb5a7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Social Links & Scroll Down Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#f7f4ed]/10">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-5"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor={link.name.toUpperCase()}
              aria-label={`Open ${link.name}`}
              className="flex items-center gap-1.5 text-xs font-mono text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors"
            >
              {getSocialIcon(link.name)}
              <span className="hidden md:inline">{link.name}</span>
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="group flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors cursor-pointer"
        >
          <span>Scroll to Explore</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#f7f4ed]/15 transition-colors group-hover:border-[#881337] group-hover:text-[#f7f4ed]">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </motion.button>
      </div>
    </section>
  );
};
