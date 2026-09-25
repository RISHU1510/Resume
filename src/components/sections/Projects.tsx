import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, BookOpen, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { projectsData } from '../../data/portfolioData';
import { Project } from '../../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'editorial' | 'compact'>('editorial');

  const categories = ['All', 'AI/ML', 'Web Development', 'Data Analytics', 'IoT & Embedded'];

  const filteredProjects = projectsData.filter((p) =>
    selectedCategory === 'All' ? true : p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0908] border-t border-[#f7f4ed]/5 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="04"
          tagline="FEATURED IMPLEMENTATIONS"
          title="Engineered Projects & Systems"
          description="A showcase of machine learning predictive suites, NLP behavioral trait detection, responsive corporate portals, and real-time IoT seismic sensing systems."
        />

        {/* Filter & View Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 bg-[#12100e] p-1.5 rounded border border-[#f7f4ed]/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                data-cursor="FILTER"
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#881337] text-white font-medium'
                    : 'text-[#bbb5a7] hover:text-[#f7f4ed]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#bbb5a7]">
            <span className="text-[#6e685c]">VIEW:</span>
            <button
              onClick={() => setViewMode('editorial')}
              className={`px-3 py-1 rounded border transition-colors ${
                viewMode === 'editorial'
                  ? 'border-[#881337] text-[#f7f4ed] bg-[#881337]/20'
                  : 'border-[#f7f4ed]/10 text-[#bbb5a7] hover:text-[#f7f4ed]'
              }`}
            >
              EDITORIAL
            </button>
            <button
              onClick={() => setViewMode('compact')}
              className={`px-3 py-1 rounded border transition-colors ${
                viewMode === 'compact'
                  ? 'border-[#881337] text-[#f7f4ed] bg-[#881337]/20'
                  : 'border-[#f7f4ed]/10 text-[#bbb5a7] hover:text-[#f7f4ed]'
              }`}
            >
              GRID
            </button>
          </div>
        </div>

        {/* EDITORIAL LARGE CARDS VIEW */}
        {viewMode === 'editorial' ? (
          <div className="space-y-20 md:space-y-28">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative rounded-sm border border-[#f7f4ed]/10 bg-[#12100e]/80 overflow-hidden transition-all duration-500 hover:border-[#881337]/50"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 md:p-12 items-center">
                  {/* Left Column: Details & Narrative (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between order-2 lg:order-1">
                    <div>
                      {/* Top Meta */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-sm text-[#881337] font-semibold">
                          [{project.number}]
                        </span>
                        <span className="h-px w-6 bg-[#881337]/40" />
                        <span className="text-xs font-mono uppercase tracking-widest text-[#bbb5a7]">
                          {project.category}
                        </span>
                        <span className="text-[#6e685c]">•</span>
                        <span className="text-xs font-mono text-[#881337]">
                          {project.year}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3
                        onClick={() => setActiveModalProject(project)}
                        className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#f7f4ed] font-light leading-tight cursor-pointer hover:text-[#bbb5a7] transition-colors"
                      >
                        {project.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm font-mono tracking-wider uppercase text-[#bbb5a7]">
                        {project.subtitle}
                      </p>

                      {/* Short Description */}
                      <p className="mt-6 text-base sm:text-lg text-[#bbb5a7] font-light leading-relaxed">
                        {project.shortDescription}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap items-center gap-2 mt-8">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-3 py-1 rounded bg-[#181513] text-[#f7f4ed] border border-[#f7f4ed]/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center gap-4 mt-10 pt-6 border-t border-[#f7f4ed]/10">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        data-cursor="CASE STUDY"
                        className="inline-flex items-center gap-2 rounded bg-[#881337] hover:bg-[#9f1239] px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white transition-colors"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Read Case Study</span>
                      </button>

                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="DEMO"
                        className="inline-flex items-center gap-2 rounded border border-[#f7f4ed]/20 bg-[#161311] hover:border-[#881337] px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-[#f7f4ed] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#881337]" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="CODE"
                        className="inline-flex items-center gap-2 rounded border border-[#f7f4ed]/10 hover:border-[#f7f4ed]/30 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Hero Visual (5 cols) */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    data-cursor="VIEW"
                    className="lg:col-span-5 relative order-1 lg:order-2 aspect-[16/10] lg:aspect-[4/3] rounded overflow-hidden border border-[#f7f4ed]/10 bg-[#161311] cursor-pointer group/image"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-110 transition-all duration-700 group-hover/image:scale-105 group-hover/image:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent opacity-60 group-hover/image:opacity-30 transition-opacity" />

                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-[#0a0908]/80 backdrop-blur-md px-3 py-1 border border-[#f7f4ed]/20 text-[11px] font-mono text-[#f7f4ed]">
                      <Eye className="w-3 h-3 text-[#881337]" />
                      <span>Inspect</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* COMPACT GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded border border-[#f7f4ed]/10 bg-[#12100e] overflow-hidden flex flex-col justify-between hover:border-[#881337]/50 transition-all group"
              >
                <div>
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative aspect-video overflow-hidden cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0a0908]/80 backdrop-blur-md px-2 py-0.5 rounded font-mono text-xs text-[#881337]">
                      [{project.number}]
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#bbb5a7]">
                      {project.category} • {project.year}
                    </span>
                    <h4
                      onClick={() => setActiveModalProject(project)}
                      className="font-serif-display text-xl text-[#f7f4ed] font-medium mt-1 cursor-pointer hover:text-[#881337] transition-colors"
                    >
                      {project.title}
                    </h4>
                    <p className="text-xs text-[#bbb5a7] mt-2 line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#f7f4ed]/5 mt-4 flex items-center justify-between text-xs font-mono">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-[#881337] hover:text-[#be123c] uppercase font-semibold flex items-center gap-1"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#bbb5a7] hover:text-[#f7f4ed]"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Case Study Full Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
