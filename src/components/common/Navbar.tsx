import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

const navItems = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#0a0908]/85 backdrop-blur-md border-b border-[#f7f4ed]/10 shadow-2xl shadow-black/60'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            data-cursor="TOP"
            className="group flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#f7f4ed]/20 bg-[#141210] transition-colors group-hover:border-[#881337] group-hover:bg-[#881337]/20">
              <span className="font-serif-display text-base font-semibold text-[#f7f4ed]">
                {personalInfo.monogram}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial-heading text-sm tracking-wider font-semibold text-[#f7f4ed] group-hover:text-[#f7f4ed] transition-colors">
                {personalInfo.name.toUpperCase()}
              </span>
              <span className="text-[10px] tracking-widest text-[#bbb5a7] uppercase font-mono hidden sm:inline">
                CREATIVE DEV / AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[#f7f4ed]/10 bg-[#12100e]/70 px-4 py-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  data-cursor="GO"
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-[#f7f4ed] font-medium' : 'text-[#bbb5a7] hover:text-[#f7f4ed]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-[#881337]/30 border border-[#881337]/60"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions & Availability */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenResume}
              data-cursor="RESUME"
              className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors px-3 py-1.5 rounded border border-[#f7f4ed]/10 hover:border-[#881337]/50 bg-[#13110f]/60"
            >
              <FileText className="w-3.5 h-3.5 text-[#881337]" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => handleNavClick('#contact')}
              data-cursor="CONNECT"
              className="group relative overflow-hidden rounded bg-[#881337] hover:bg-[#9f1239] px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-[#f7f4ed] transition-colors duration-300"
            >
              <span className="flex items-center gap-1.5">
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded border border-[#f7f4ed]/15 bg-[#141210] text-[#f7f4ed]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#0a0908]/95 backdrop-blur-xl border-b border-[#f7f4ed]/10 px-8 py-8 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#881337]">
                // NAVIGATION
              </span>
              {navItems.map((item, idx) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center justify-between text-left py-2 border-b border-[#f7f4ed]/5 text-lg font-serif-display text-[#f7f4ed] hover:text-[#881337] transition-colors"
                >
                  <span className="text-xl">{item.label}</span>
                  <span className="font-mono text-xs text-[#6e685c]">0{idx + 1}</span>
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded border border-[#f7f4ed]/20 py-3 font-mono text-xs tracking-wider uppercase text-[#f7f4ed]"
                >
                  <FileText className="w-4 h-4 text-[#881337]" />
                  <span>View Resume / CV</span>
                </button>

                <button
                  onClick={() => handleNavClick('#contact')}
                  className="flex w-full items-center justify-center gap-2 rounded bg-[#881337] py-3 font-mono text-xs tracking-wider uppercase text-white font-medium"
                >
                  <span>Initiate Contact</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
