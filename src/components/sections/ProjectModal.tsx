import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle,
  ArrowRight,
  Layers,
  Target,
  AlertCircle,
  BarChart,
  Bookmark,
  BookmarkCheck,
  LogIn,
} from 'lucide-react';
import { Project } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { toggleProjectBookmark, fetchUserBookmarks } from '../../lib/firebase';
import { FirebaseIcon } from '../common/FirebaseIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { user, loginWithGoogle } = useAuth();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isSavingBookmark, setIsSavingBookmark] = useState(false);

  useEffect(() => {
    if (user && project) {
      checkBookmark();
    } else {
      setIsBookmarked(false);
    }
  }, [user, project]);

  const checkBookmark = async () => {
    if (!user || !project) return;
    try {
      const bookmarks = await fetchUserBookmarks(user.uid);
      setIsBookmarked(bookmarks.includes(project.id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleBookmarkToggle = async () => {
    if (!project) return;
    if (!user) {
      await loginWithGoogle();
      return;
    }

    setIsSavingBookmark(true);
    try {
      const added = await toggleProjectBookmark(user.uid, project.id);
      setIsBookmarked(added);
    } catch (err) {
      console.error('Bookmark error:', err);
    } finally {
      setIsSavingBookmark(false);
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0a0908]/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl rounded-sm border border-[#f7f4ed]/15 bg-[#12100e] text-[#f7f4ed] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#f7f4ed]/10 bg-[#161311]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#881337] font-semibold">
                [{project.number}]
              </span>
              <span className="h-3 w-px bg-[#f7f4ed]/20" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#bbb5a7]">
                Case Study // {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              data-cursor="CLOSE"
              className="p-1.5 rounded hover:bg-[#881337]/20 text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Body */}
          <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-10">
            {/* Title & Subtitle */}
            <div>
              <div className="flex flex-wrap items-baseline gap-4 mb-2">
                <h2 className="font-serif-display text-3xl sm:text-5xl text-[#f7f4ed] font-medium">
                  {project.title}
                </h2>
                <span className="text-xs font-mono text-[#881337] px-2.5 py-1 rounded bg-[#881337]/15 border border-[#881337]/30">
                  {project.year}
                </span>
              </div>
              <p className="font-mono text-sm text-[#bbb5a7] uppercase tracking-wider">
                {project.subtitle}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-[#881337] hover:bg-[#9f1239] px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-[#f7f4ed]/20 bg-[#161311] hover:border-[#881337] px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#f7f4ed] transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4 text-[#881337]" />
                  <span>Source Repository</span>
                </a>

                {/* Firestore Bookmark Button */}
                <button
                  onClick={handleBookmarkToggle}
                  disabled={isSavingBookmark}
                  data-cursor="BOOKMARK"
                  className={`inline-flex items-center gap-2 rounded border px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    isBookmarked
                      ? 'bg-rose-950/40 border-rose-600/70 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.2)]'
                      : 'border-[#f7f4ed]/20 bg-[#161311] hover:border-rose-600/50 text-[#bbb5a7] hover:text-[#f7f4ed]'
                  }`}
                  title={user ? 'Save to your Firestore bookmarks' : 'Sign in with Google to bookmark'}
                >
                  {isBookmarked ? (
                    <>
                      <BookmarkCheck className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Saved in Firestore</span>
                    </>
                  ) : user ? (
                    <>
                      <Bookmark className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span>Bookmark Project</span>
                    </>
                  ) : (
                    <>
                      <FirebaseIcon className="w-4 h-4 shrink-0" />
                      <span>Sign in to Bookmark</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Hero Project Visual */}
            <div className="relative rounded overflow-hidden aspect-[16/9] border border-[#f7f4ed]/10 bg-[#171412]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Problem & Goal Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded border border-[#f7f4ed]/10 bg-[#141210]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#881337] mb-3">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Challenge &amp; Problem</span>
                </div>
                <p className="text-sm leading-relaxed text-[#ded8cb]">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div className="p-6 rounded border border-[#f7f4ed]/10 bg-[#141210]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#881337] mb-3">
                  <Target className="w-4 h-4" />
                  <span>Objective &amp; Requirements</span>
                </div>
                <p className="text-sm leading-relaxed text-[#ded8cb]">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Technical Stack Tags */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#881337]">
                <Layers className="w-4 h-4" />
                <span>Technologies &amp; Architecture</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1.5 rounded-full border border-[#f7f4ed]/15 bg-[#161311] text-[#bbb5a7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverables & Outcomes */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#881337]">
                <CheckCircle className="w-4 h-4" />
                <span>Key Deliverables &amp; Outcomes</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(project.caseStudy.developmentProcess || []).map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded border border-[#f7f4ed]/10 bg-[#141210]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#881337] shrink-0 mt-2" />
                    <span className="text-xs leading-relaxed text-[#ded8cb]">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
