import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  number: string;
  tagline: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tagline,
  title,
  description,
  align = 'left',
  id,
}) => {
  return (
    <div id={id} className={`mb-16 md:mb-24 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="font-mono text-xs text-[#881337] tracking-widest uppercase">
          [{number}]
        </span>
        <span className="h-px w-6 bg-[#881337]/50" />
        <span className="text-xs tracking-[0.25em] uppercase text-[#bbb5a7]">
          {tagline}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#f7f4ed] leading-[1.08]"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-[#bbb5a7] font-light leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>
      )}

      <div className={`mt-8 h-px bg-gradient-to-r from-[#f7f4ed]/10 via-[#881337]/30 to-transparent ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};
