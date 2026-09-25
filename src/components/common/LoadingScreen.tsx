import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Elegant numerical progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onLoadingComplete, 600);
          }, 300);
          return 100;
        }
        // Organic step increments
        const jump = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + jump, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0a0908] p-8 md:p-14 text-[#f7f4ed]"
        >
          {/* Top metadata */}
          <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#bbb5a7]">
            <span className="font-mono">RISHU SINGH // 2026</span>
            <span className="hidden sm:inline">CREATIVE DEVELOPER & AI/ML ENGINEER</span>
            <span className="font-mono">{progress}%</span>
          </div>

          {/* Center Brand typography */}
          <div className="flex flex-col items-center justify-center my-auto text-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <h1 className="font-serif-display text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#f7f4ed]">
                Rishu Singh
              </h1>
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#881337]" />
                <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#bbb5a7]">
                  Portfolio 2026
                </p>
                <span className="h-px w-8 bg-[#881337]" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-3 text-[11px] font-mono uppercase text-[#6e685c]">
              <span>INITIALIZING SYSTEM</span>
              <span>SYNCHRONIZING ASSETS</span>
            </div>
            <div className="h-[2px] w-full bg-[#1e1b18] overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#881337] via-[#be123c] to-[#f7f4ed]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
