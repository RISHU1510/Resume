import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, BookOpen, Check } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { journeyMilestones } from '../../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0908] border-t border-[#f7f4ed]/5 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="08"
          tagline="THE EVOLUTIONARY ARC"
          title="The Story Behind the Code"
          description="A chronicle of obsession, curiosity, and transformation — from writing initial algorithmic loops in C to constructing autonomous neural architectures."
        />

        {/* Narrative Chapters Timeline */}
        <div className="relative border-l border-[#f7f4ed]/10 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 md:pl-16 space-y-16 md:space-y-24">
          {journeyMilestones.map((milestone, idx) => (
            <motion.div
              key={milestone.id || `${milestone.year}-${idx}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Year Marker on Left Axis */}
              <div className="absolute -left-[35px] sm:-left-[51px] md:-left-[75px] top-0 flex items-center justify-center">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#f7f4ed]/20 bg-[#0a0908] text-[#881337] group-hover:border-[#881337] group-hover:bg-[#881337]/10 transition-colors">
                  <span className="font-mono text-xs sm:text-sm font-semibold">{idx + 1}</span>
                </div>
              </div>

              {/* Story Content Block */}
              <div className="rounded border border-[#f7f4ed]/10 bg-[#12100e]/70 p-6 sm:p-10 transition-all duration-300 hover:border-[#881337]/40 hover:bg-[#151210]">
                {/* Year and Subtitle */}
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="font-serif-display text-4xl sm:text-5xl text-[#881337] font-light">
                    {milestone.year}
                  </span>
                  <span className="h-px w-6 bg-[#f7f4ed]/20" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#bbb5a7]">
                    {milestone.subtitle}
                  </span>
                </div>

                {/* Chapter Title */}
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#f7f4ed] font-medium mt-1 mb-4">
                  {milestone.title}
                </h3>

                {/* Narrative Paragraph */}
                <p className="text-base sm:text-lg text-[#bbb5a7] font-light leading-relaxed mb-6 max-w-3xl">
                  {milestone.description}
                </p>

                {/* Milestones / Highlights */}
                <div className="pt-4 border-t border-[#f7f4ed]/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {milestone.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs font-mono text-[#f7f4ed]">
                      <span className="text-[#881337] mt-0.5">✦</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
