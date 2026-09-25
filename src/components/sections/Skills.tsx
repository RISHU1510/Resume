import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Cpu,
  Database,
  Cloud,
  BarChart3,
  Wrench,
  Globe,
  Sparkles,
  Info,
  CheckCircle,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { skillsData } from '../../data/portfolioData';
import { SkillItem } from '../../types';

type SkillCategory =
  | 'All'
  | 'Programming'
  | 'Web Development'
  | 'AI / Machine Learning'
  | 'Databases'
  | 'Cloud'
  | 'Data Analytics'
  | 'Tools';

const marqueeTechs = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'OpenCV',
  'React.js',
  'TypeScript',
  'Tailwind CSS',
  'Django',
  'C++',
  'FastAPI',
  'Microsoft Azure',
  'Docker',
  'Pandas',
  'Power BI',
  'PostgreSQL',
  'Git & GitHub',
  'Web Audio API',
  'LLM Fine-Tuning',
];

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(skillsData[0]);

  const categories: SkillCategory[] = [
    'All',
    'AI / Machine Learning',
    'Web Development',
    'Programming',
    'Data Analytics',
    'Databases',
    'Cloud',
    'Tools',
  ];

  const filteredSkills = skillsData.filter((skill) =>
    selectedCategory === 'All' ? true : skill.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code2 className="w-4 h-4" />;
      case 'Web Development':
        return <Globe className="w-4 h-4" />;
      case 'AI / Machine Learning':
        return <Cpu className="w-4 h-4 text-[#881337]" />;
      case 'Databases':
        return <Database className="w-4 h-4" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4" />;
      case 'Data Analytics':
        return <BarChart3 className="w-4 h-4" />;
      default:
        return <Wrench className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#0d0b0a] border-t border-[#f7f4ed]/5 relative overflow-hidden">
      {/* Infinite Subtle Floating Technology Ribbon / Marquee */}
      <div className="absolute top-0 left-0 right-0 py-3 bg-[#12100e]/50 border-b border-[#f7f4ed]/5 overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-[marquee_28s_linear_infinite] gap-8 items-center text-xs font-mono tracking-widest text-[#bbb5a7]/50 uppercase">
          {marqueeTechs.concat(marqueeTechs).map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-4">
              <span>{tech}</span>
              <span className="text-[#881337]">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8">
        <SectionHeading
          number="03"
          tagline="TECHNOLOGY STACK & EXPERTISE"
          title="The Technical Matrix & Tooling"
          description="Interactive breakdown of languages, frameworks, deep learning libraries, and architectural platforms I deploy to produce high-performance solutions."
        />

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 bg-[#12100e] p-1.5 rounded border border-[#f7f4ed]/10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              data-cursor="FILTER"
              className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all flex items-center gap-2 ${
                selectedCategory === category
                  ? 'bg-[#881337] text-white font-medium shadow-md'
                  : 'text-[#bbb5a7] hover:text-[#f7f4ed] hover:bg-[#181513]'
              }`}
            >
              {category !== 'All' && getCategoryIcon(category)}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Interactive Grid & Active Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skill Cards Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {filteredSkills.map((skill) => {
              const isSelected = activeSkill?.name === skill.name;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveSkill(skill)}
                  onMouseEnter={() => setActiveSkill(skill)}
                  data-cursor="DETAILS"
                  className={`cursor-pointer rounded p-4 border transition-all duration-300 relative group flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#881337] bg-[#1a1413] shadow-lg shadow-[#881337]/20 scale-[1.02]'
                      : 'border-[#f7f4ed]/10 bg-[#12100e]/80 hover:border-[#f7f4ed]/25 hover:bg-[#161311]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-editorial-heading text-base text-[#f7f4ed] font-medium tracking-wide">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#881337]" />
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-[#bbb5a7] mt-3 pt-2 border-t border-[#f7f4ed]/5">
                    <span className="text-[#881337]">{skill.level}</span>
                    <span className="text-[#6e685c]">{skill.category.split(' ')[0]}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Skill Inspector Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-28">
            <AnimatePresence mode="wait">
              {activeSkill ? (
                <motion.div
                  key={activeSkill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded border border-[#881337]/50 bg-[#141210] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden"
                >
                  {/* Subtle corner badge */}
                  <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <Cpu className="w-24 h-24 text-[#881337]" />
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#881337] mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Technology Inspector</span>
                  </div>

                  <h3 className="font-serif-display text-3xl sm:text-4xl text-[#f7f4ed] font-medium mb-1">
                    {activeSkill.name}
                  </h3>

                  <div className="flex items-center gap-3 my-4">
                    <span className="px-2.5 py-1 rounded bg-[#881337]/20 border border-[#881337]/50 text-xs font-mono text-[#f7f4ed]">
                      {activeSkill.level} Proficiency
                    </span>
                    <span className="text-xs font-mono text-[#bbb5a7]">
                      {activeSkill.category}
                    </span>
                  </div>

                  <p className="text-sm text-[#bbb5a7] font-light leading-relaxed mb-6">
                    {activeSkill.description}
                  </p>

                  <div className="pt-4 border-t border-[#f7f4ed]/10 space-y-2 text-xs font-mono text-[#bbb5a7]">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#881337]" />
                      <span>Production Deployments Tested</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#881337]" />
                      <span>Clean Modular Architecture Pattern</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#881337]" />
                      <span>Algorithmic Optimization & Testing</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="rounded border border-[#f7f4ed]/10 bg-[#12100e] p-8 text-center text-[#bbb5a7]">
                  <Info className="w-8 h-8 text-[#881337] mx-auto mb-3" />
                  <p className="text-sm font-mono">Hover or select any technology card to inspect depth</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
