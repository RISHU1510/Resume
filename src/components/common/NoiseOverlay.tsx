import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 h-full w-full bg-grain opacity-40 mix-blend-overlay"
    />
  );
};
