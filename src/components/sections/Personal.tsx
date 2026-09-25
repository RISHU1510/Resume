import React from 'react';
import { motion } from 'motion/react';
import { Compass, BookOpen, ShieldCheck, Heart, Sparkles, Activity, Film } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { personalInterests } from '../../data/portfolioData';

export const Personal: React.FC = () => {
  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#881337]" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#881337]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#881337]" />;
      default:
        return <Heart className="w-5 h-5 text-[#881337]" />;
    }
  };

  return (
    <section id="personal" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#0d0b0a] border-t border-[#f7f4ed]/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="09"
          tagline="BEYOND THE TERMINAL"
          title="Curiosity, Disciplines & Perspective"
          description="The human impulses and intellectual pursuits that fuel creative engineering, analytical resilience, and enduring focus."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {personalInterests.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded border border-[#f7f4ed]/10 bg-[#12100e] p-8 flex flex-col justify-between hover:border-[#881337]/50 hover:bg-[#151210] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono tracking-widest uppercase text-[#881337]">
                    {item.category}
                  </span>
                  <div className="p-2 rounded bg-[#181513] border border-[#f7f4ed]/5 group-hover:border-[#881337]/30 transition-colors">
                    {getInterestIcon(item.icon)}
                  </div>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#f7f4ed] font-medium mb-3">
                  {item.title}
                </h3>

                <p className="text-base text-[#bbb5a7] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f7f4ed]/5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded bg-[#181513] text-[#bbb5a7] border border-[#f7f4ed]/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
