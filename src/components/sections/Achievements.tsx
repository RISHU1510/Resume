import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, CheckCircle2, Trophy, ShieldCheck, Terminal, Star, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { achievementsData, statistics } from '../../data/portfolioData';

// Counter component that smoothly counts up when in view
const StatCounter: React.FC<{ target: number; suffix: string; label: string; description: string }> = ({
  target,
  suffix,
  label,
  description,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="p-6 md:p-8 rounded border border-[#f7f4ed]/10 bg-[#12100e]/80 hover:border-[#881337]/50 transition-all duration-300 group"
    >
      <div className="font-serif-display text-5xl sm:text-6xl md:text-7xl text-[#f7f4ed] font-light tracking-tight group-hover:text-[#f7f4ed] transition-colors flex items-baseline">
        <span>{count}</span>
        <span className="text-3xl sm:text-4xl text-[#881337] font-normal ml-1">
          {suffix}
        </span>
      </div>
      <h3 className="mt-3 font-editorial-heading text-base sm:text-lg text-[#f7f4ed] font-medium tracking-wide">
        {label}
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-[#bbb5a7] font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const Achievements: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Certification', 'Competition', 'Milestone'];

  const filtered = achievementsData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic':
        return <Award className="w-4 h-4 text-[#881337]" />;
      case 'Certification':
        return <ShieldCheck className="w-4 h-4 text-[#881337]" />;
      case 'Competition':
        return <Trophy className="w-4 h-4 text-[#881337]" />;
      default:
        return <Star className="w-4 h-4 text-[#881337]" />;
    }
  };

  return (
    <section id="achievements" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0908] border-t border-[#f7f4ed]/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="02"
          tagline="RECOGNITION & METRICS"
          title="Milestones, Certifications & Proven Impact"
          description="A documented track record of academic distinction, industry credentials, and competitive engineering."
        />

        {/* Dynamic Statistics Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {statistics.map((stat, idx) => (
            <StatCounter
              key={idx}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>

        {/* Categories Filter Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest text-[#881337] uppercase">
              // RECOGNITION REGISTRY
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-[#12100e] p-1 rounded border border-[#f7f4ed]/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                  activeCategory === cat
                    ? 'bg-[#881337] text-white font-medium'
                    : 'text-[#bbb5a7] hover:text-[#f7f4ed]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative rounded border border-[#f7f4ed]/10 bg-[#12100e]/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#881337]/50 hover:bg-[#161311] hover:-translate-y-1"
            >
              {/* Top Row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#881337] font-semibold">
                    [{item.number}]
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#bbb5a7] px-2 py-0.5 rounded bg-[#181513] border border-[#f7f4ed]/5">
                      {item.category}
                    </span>
                    <div className="p-1.5 rounded-full bg-[#881337]/10 border border-[#881337]/20">
                      {getCategoryIcon(item.category)}
                    </div>
                  </div>
                </div>

                <h3 className="font-serif-display text-2xl text-[#f7f4ed] font-medium leading-snug group-hover:text-[#f7f4ed] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#bbb5a7] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Row: Issuer & Year */}
              <div className="pt-4 border-t border-[#f7f4ed]/5 flex items-center justify-between text-xs font-mono text-[#bbb5a7]">
                <span>{item.issuer || 'Official Issuer'}</span>
                <span className="text-[#881337]">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
