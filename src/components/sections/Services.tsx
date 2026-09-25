import React from 'react';
import { motion } from 'motion/react';
import { Layers, Sparkles, Cpu, BarChart3, Palette, Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { servicesData } from '../../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#881337]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#881337]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#881337]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#881337]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#881337]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#881337]" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#0d0b0a] border-t border-[#f7f4ed]/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="07"
          tagline="CAPABILITIES & PRACTICES"
          title="Services & Engineering Offerings"
          description="A multi-disciplinary skill set combining software architecture, artificial intelligence research, and tactile creative development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative rounded-sm border border-[#f7f4ed]/10 bg-[#12100e] p-8 flex flex-col justify-between transition-all duration-400 hover:border-[#881337]/50 hover:bg-[#161311] hover:-translate-y-1"
            >
              {/* Header Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#881337] font-semibold">
                    [{service.number}]
                  </span>
                  <div className="p-2 rounded bg-[#181513] border border-[#f7f4ed]/10 group-hover:border-[#881337]/40 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                </div>

                <h3 className="font-serif-display text-2xl text-[#f7f4ed] font-medium leading-snug group-hover:text-[#f7f4ed] transition-colors">
                  {service.title}
                </h3>

                <p className="font-mono text-xs text-[#881337] uppercase tracking-wider mt-1 mb-4">
                  {service.tagline}
                </p>

                <p className="text-sm text-[#bbb5a7] font-light leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-6 border-t border-[#f7f4ed]/5 space-y-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#6e685c] block mb-2">
                  KEY DELIVERABLES:
                </span>
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#bbb5a7]">
                    <span className="text-[#881337]">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
