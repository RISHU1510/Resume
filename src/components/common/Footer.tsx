import React, { useEffect, useState } from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTime(`${timeStr} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Top', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
    { label: 'Hoops Club', href: '#basketball-club' },
  ];

  return (
    <footer className="py-16 px-6 sm:px-8 lg:px-12 bg-[#080706] border-t border-[#f7f4ed]/10 text-[#f7f4ed]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-serif-display text-2xl sm:text-3xl text-[#f7f4ed]">
                {personalInfo.name}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#881337]" />
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#bbb5a7]">
              {personalInfo.title}
            </p>
            <p className="text-xs text-[#6e685c] mt-2 font-mono">
              Designed with dark editorial aesthetics • Engineered with React 19 & Tailwind CSS
            </p>
          </div>

          {/* Quick Section Anchors */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-[#bbb5a7]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#f7f4ed] hover:underline underline-offset-4 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-[#f7f4ed]/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6e685c]">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} RISHU SINGH</span>
            <span>•</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Live Clock */}
            <div className="flex items-center gap-2 text-[#bbb5a7]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{time || 'LIVE'}</span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              data-cursor="TOP"
              className="flex items-center gap-1.5 text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
