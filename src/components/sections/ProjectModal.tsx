import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle, ArrowRight, Layers, Target, AlertCircle, BarChart } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
              className="p-1.5 rounded hover:bg-[#881337]/20 text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors"
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
                  className="inline-flex items-center gap-2 rounded bg-[#881337] hover:bg-[#9f1239] px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-[#f7f4ed]/20 bg-[#161311] hover:border-[#881337] px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#f7f4ed] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#881337]" />
                  <span>Source Repository</span>
                </a>
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
                  <span>The Challenge & Problem</span>
                </div>
                <p className="text-sm sm:text-base text-[#bbb5a7] font-light leading-relaxed">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div className="p-6 rounded border border-[#f7f4ed]/10 bg-[#141210]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#881337] mb-3">
                  <Target className="w-4 h-4" />
                  <span>The Objective & Goal</span>
                </div>
                <p className="text-sm sm:text-base text-[#bbb5a7] font-light leading-relaxed">
                  {project.caseStudy.goal}
                </p>
              </div>
            </div>

            {/* The Solution & Architecture */}
            <div className="p-6 sm:p-8 rounded border border-[#881337]/30 bg-[#151211]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#881337] mb-3">
                <Layers className="w-4 h-4" />
                <span>Architecture & Solution</span>
              </div>
              <p className="text-base sm:text-lg text-[#f7f4ed] font-light leading-relaxed mb-6">
                {project.caseStudy.solution}
              </p>

              {/* Technologies list badges */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#f7f4ed]/10">
                <span className="text-xs font-mono text-[#bbb5a7] mr-2">Stack:</span>
                {project.caseStudy.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded bg-[#1c1816] text-[#f7f4ed] border border-[#f7f4ed]/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Development Process Steps */}
            <div>
              <h3 className="font-serif-display text-2xl text-[#f7f4ed] font-medium mb-4">
                Engineering & Development Lifecycle
              </h3>
              <div className="space-y-3">
                {project.caseStudy.developmentProcess.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded border border-[#f7f4ed]/5 bg-[#141210]"
                  >
                    <span className="font-mono text-xs text-[#881337] font-semibold mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-sm text-[#bbb5a7] font-light leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Results & Verified Metrics */}
            <div className="p-6 rounded border border-[#f7f4ed]/10 bg-[#13110f]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#881337] mb-3">
                <BarChart className="w-4 h-4" />
                <span>Verifiable Impact & Outcome</span>
              </div>
              <p className="text-base text-[#f7f4ed] font-light leading-relaxed mb-4">
                {project.caseStudy.result}
              </p>

              {project.caseStudy.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#f7f4ed]/10">
                  {project.caseStudy.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#bbb5a7]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#881337] shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
