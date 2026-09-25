import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowUpRight,
  FileText,
  Github,
  LogIn,
  LogOut,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { useAuth } from '../../context/AuthContext';
import { UserAvatar } from './UserAvatar';
import { FirebaseIcon } from './FirebaseIcon';

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
  const { user, loginWithGoogle, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Monogram */}
            <a
              href="#hero"
              data-cursor="TOP"
              className="group flex items-center gap-3 text-left focus:outline-none"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-sm border border-[#f7f4ed]/20 bg-[#141210] font-serif text-lg font-bold text-[#f7f4ed] transition-colors group-hover:border-[#881337] group-hover:bg-[#1a0f12]">
                <span>RS</span>
                <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-[#881337]" />
              </div>
              <div className="hidden sm:block">
                <span className="block font-editorial-heading text-sm font-semibold tracking-wider text-[#f7f4ed]">
                  {personalInfo.name.toUpperCase()}
                </span>
                <span className="block text-[10px] font-mono tracking-widest text-[#bbb5a7]">
                  DATA ANALYST / AI-ML
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[#f7f4ed]/10 bg-[#141210]/80 px-4 py-1.5 backdrop-blur-md">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    data-cursor="GO"
                    className={`relative px-3 py-1 text-xs font-mono tracking-wider uppercase transition-colors ${
                      isActive ? 'text-[#f7f4ed]' : 'text-[#bbb5a7] hover:text-[#f7f4ed]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-[#881337]/30 border border-[#881337]/60"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Actions & Availability */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* GitHub Button */}
              <a
                href="https://github.com/RISHU1510?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                aria-label="Rishu Singh GitHub Repositories"
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors px-2.5 py-1.5 rounded border border-[#f7f4ed]/10 hover:border-[#881337]/50 bg-[#13110f]/60"
              >
                <Github className="w-3.5 h-3.5 text-rose-400" />
                <span>GitHub</span>
              </a>

              {/* Resume Button */}
              <button
                onClick={onOpenResume}
                data-cursor="RESUME"
                className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors px-2.5 py-1.5 rounded border border-[#f7f4ed]/10 hover:border-[#881337]/50 bg-[#13110f]/60"
              >
                <FileText className="w-3.5 h-3.5 text-[#881337]" />
                <span>Resume</span>
              </button>

              {/* Firebase User Auth */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    data-cursor="ACCOUNT"
                    className="flex items-center gap-2 py-1 px-1.5 pr-2.5 rounded-full border border-rose-900/60 bg-[#161213] hover:border-rose-600/80 transition-all cursor-pointer group shadow-sm"
                    title={`Signed in as ${user.displayName || user.email}`}
                  >
                    <div className="relative shrink-0">
                      <UserAvatar
                        photoURL={user.photoURL}
                        displayName={user.displayName}
                        email={user.email}
                        size="xs"
                      />
                      <span className="absolute -bottom-0.5 -right-0.5 p-0.5 rounded-full bg-[#161213] border border-amber-500/50 flex items-center justify-center">
                        <FirebaseIcon className="w-2 h-2" />
                      </span>
                    </div>
                    <span className="text-xs font-medium text-[#ded8cb] group-hover:text-[#f7f4ed] max-w-[85px] truncate leading-none">
                      {user.displayName?.split(' ')[0] || 'User'}
                    </span>
                    <ChevronDown
                      className={`w-3 h-3 text-zinc-400 group-hover:text-rose-400 transition-transform duration-200 ${
                        userDropdownOpen ? 'rotate-180 text-rose-400' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {userDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#141110] border border-rose-950/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] z-50 text-left backdrop-blur-md"
                      >
                        {/* Profile Header with Crisp Avatar */}
                        <div className="flex items-center gap-3 pb-3 border-b border-rose-950/50 mb-3">
                          <UserAvatar
                            photoURL={user.photoURL}
                            displayName={user.displayName}
                            email={user.email}
                            size="md"
                            showStatusDot={true}
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold text-[#f7f4ed] truncate">
                              {user.displayName || 'Portfolio Guest'}
                            </p>
                            <p className="text-[10px] text-[#9c9485] truncate font-mono">
                              {user.email}
                            </p>
                            <div className="flex items-center gap-1.5 mt-1">
                              <FirebaseIcon className="w-3 h-3 shrink-0" />
                              <span className="text-[10px] font-mono text-amber-300">
                                Firebase Verified
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Nav shortcut */}
                        <div className="space-y-1 pb-2">
                          <a
                            href="#projects"
                            onClick={() => setUserDropdownOpen(false)}
                            className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 hover:bg-rose-950/40 text-xs text-[#ded8cb] hover:text-[#f7f4ed] transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                              <span>Featured Projects</span>
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400">View</span>
                          </a>
                        </div>

                        {/* Sign Out Button */}
                        <button
                          onClick={() => {
                            logout();
                            setUserDropdownOpen(false);
                          }}
                          className="w-full mt-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/50 text-rose-300 hover:text-white text-xs font-medium transition-all cursor-pointer"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Sign Out</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={loginWithGoogle}
                  data-cursor="SIGN IN"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-rose-900/50 hover:border-rose-600 bg-rose-950/20 text-xs font-mono text-rose-300 hover:text-white transition-all cursor-pointer shadow-sm"
                  title="Sign in with Google (Firebase)"
                >
                  <FirebaseIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>Google Auth</span>
                </button>
              )}

              {/* Let's Talk CTA */}
              <button
                onClick={() => handleNavClick('#contact')}
                data-cursor="CONNECT"
                className="group relative overflow-hidden rounded bg-[#881337] hover:bg-[#9f1239] px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#f7f4ed] transition-colors duration-300"
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
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden border-b border-[#f7f4ed]/15 bg-[#0a0908]/95 p-6 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left font-mono text-sm tracking-wider uppercase text-[#bbb5a7] hover:text-[#f7f4ed] py-2 border-b border-[#f7f4ed]/5 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">

                <a
                  href="https://github.com/RISHU1510?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded border border-[#f7f4ed]/20 py-3 font-mono text-xs tracking-wider uppercase text-[#f7f4ed] hover:border-[#881337] transition-colors"
                >
                  <Github className="w-4 h-4 text-rose-400" />
                  <span>GitHub Repositories (@RISHU1510)</span>
                </a>

                {user ? (
                  <div className="p-3.5 rounded-2xl bg-[#161213] border border-rose-950/80 flex items-center justify-between gap-3 shadow-md">
                    <div className="flex items-center gap-3 min-w-0">
                      <UserAvatar
                        photoURL={user.photoURL}
                        displayName={user.displayName}
                        email={user.email}
                        size="md"
                        showStatusDot={true}
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[#f7f4ed] truncate">
                          {user.displayName || 'Portfolio Guest'}
                        </p>
                        <p className="text-[10px] text-amber-300 font-mono flex items-center gap-1 mt-0.5">
                          <FirebaseIcon className="w-2.5 h-2.5 shrink-0" />
                          <span>Firebase Auth Active</span>
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="p-2 rounded-xl bg-rose-950/60 border border-rose-900 text-rose-300 hover:text-white transition-colors cursor-pointer shrink-0"
                      title="Sign Out"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      loginWithGoogle();
                      setMobileMenuOpen(false);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-rose-600/60 bg-gradient-to-r from-rose-950 to-rose-900 py-3 font-mono text-xs tracking-wider uppercase text-white shadow-lg cursor-pointer"
                  >
                    <FirebaseIcon className="w-4 h-4 shrink-0" />
                    <span>Sign in with Google (Firebase)</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded border border-[#881337] py-3 font-mono text-xs tracking-wider uppercase text-[#f7f4ed]"
                >
                  <FileText className="w-4 h-4 text-[#881337]" />
                  <span>View &amp; Download Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
