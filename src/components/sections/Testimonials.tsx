import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { testimonialsData } from '../../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-[#0a0908] border-t border-[#f7f4ed]/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="10"
          tagline="COLLABORATOR VOICES"
          title="Endorsements & Recommendations"
          description="Reflections from lab researchers, design leads, and academic faculty who have observed my technical rigor and creative output first-hand."
        />

        <div className="relative max-w-4xl mx-auto rounded border border-[#f7f4ed]/10 bg-[#12100e] p-8 sm:p-12 md:p-16">
          <Quote className="w-12 h-12 text-[#881337]/30 mb-8" />

          {/* Testimonial Quote */}
          <div className="min-h-[160px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-serif-display text-xl sm:text-2xl md:text-3xl text-[#f7f4ed] font-light italic leading-relaxed">
                  "{current.quote}"
                </p>

                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#f7f4ed]/10">
                  <img
                    src={current.avatar}
                    alt={current.person}
                    className="w-12 h-12 rounded-full object-cover grayscale border border-[#881337]"
                  />
                  <div>
                    <h4 className="font-editorial-heading text-base font-semibold text-[#f7f4ed]">
                      {current.person}
                    </h4>
                    <p className="text-xs font-mono text-[#bbb5a7]">
                      {current.role} • <span className="text-[#881337]">{current.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#f7f4ed]/5">
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 transition-all rounded-full ${
                    currentIndex === i ? 'w-6 bg-[#881337]' : 'w-2 bg-[#f7f4ed]/20'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                data-cursor="PREV"
                className="p-2 rounded border border-[#f7f4ed]/10 hover:border-[#881337] text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                data-cursor="NEXT"
                className="p-2 rounded border border-[#f7f4ed]/10 hover:border-[#881337] text-[#bbb5a7] hover:text-[#f7f4ed] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
