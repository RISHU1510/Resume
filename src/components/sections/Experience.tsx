import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { experienceData } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#0d0b0a] border-t border-[#f7f4ed]/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="05"
          tagline="WORK HISTORY & ROLES"
          title="Professional Experience & Industry Tenure"
          description="Deploying engineering solutions within fast-paced labs, research organizations, and collaborative software studios."
        />

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group rounded-sm border border-[#f7f4ed]/10 bg-[#12100e] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-[#881337]/50 hover:bg-[#151210]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Role, Company & Meta (4 cols) */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#881337] uppercase tracking-widest">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.type}</span>
                    </div>

                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#f7f4ed] font-medium leading-snug">
                      {exp.role}
                    </h3>

                    <p className="font-editorial-heading text-base text-[#f7f4ed] font-semibold mt-1">
                      {exp.company}
                    </p>

                    <div className="flex flex-col gap-1.5 mt-4 text-xs font-mono text-[#bbb5a7]">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#881337]" />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#881337]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-6 pt-4 border-t border-[#f7f4ed]/5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#181513] text-[#bbb5a7] border border-[#f7f4ed]/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Responsibilities & Achievements (8 cols) */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#bbb5a7] mb-3">
                      Key Responsibilities & System Contributions
                    </h4>
                    <ul className="space-y-2.5 text-sm sm:text-base text-[#bbb5a7] font-light leading-relaxed">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#881337] font-mono text-sm mt-0.5">↳</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="p-4 rounded border border-[#881337]/20 bg-[#171312] mt-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#881337] block mb-2">
                        Measurable Impact:
                      </span>
                      <div className="space-y-1.5">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#f7f4ed]">
                            <CheckCircle2 className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
