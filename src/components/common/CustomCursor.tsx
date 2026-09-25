import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CustomCursorProps {
  cursorText?: string;
  cursorVariant?: 'default' | 'link' | 'project' | 'button';
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  cursorText = '',
  cursorVariant = 'default',
}) => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  useEffect(() => {
    // Only enable on desktop / devices with pointer:fine
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element with custom data-cursor attributes
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input, textarea, select');
        setIsPointer(!!interactive);

        const customCursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
        setActiveBadge(customCursorAttr || null);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const currentText = activeBadge || cursorText;
  const isEnlarged = isPointer || !!currentText || cursorVariant !== 'default';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer follow ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full border border-[#f7f4ed]/40 mix-blend-difference"
        animate={{
          x: mousePosition.x - (isEnlarged ? 36 : 16),
          y: mousePosition.y - (isEnlarged ? 36 : 16),
          width: isEnlarged ? 72 : 32,
          height: isEnlarged ? 72 : 32,
          borderColor: isEnlarged ? 'rgba(225, 29, 72, 0.8)' : 'rgba(247, 244, 237, 0.4)',
          backgroundColor: isEnlarged ? 'rgba(159, 18, 57, 0.15)' : 'rgba(247, 244, 237, 0.02)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      >
        <AnimatePresence>
          {currentText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="text-[10px] font-semibold tracking-wider uppercase text-[#f7f4ed]"
            >
              {currentText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tiny inner precision dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-[#f7f4ed]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: currentText ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 800,
        }}
      />
    </div>
  );
};
