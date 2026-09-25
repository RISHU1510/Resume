import React from 'react';

interface FirebaseIconProps {
  className?: string;
  size?: number;
}

export const FirebaseIcon: React.FC<FirebaseIconProps> = ({ className = 'w-4 h-4', size }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Firebase"
    >
      <path
        d="M4.68 18.52L6.87 5.06c.07-.46.61-.69.97-.41l3.52 2.76 2.05-3.89c.21-.4.78-.4 1 0l6.39 12.15-7.46 4.19c-.44.25-.98.25-1.42 0L4.68 18.52z"
        fill="#FF9100"
      />
      <path
        d="M14.41 3.52c-.22-.4-.79-.4-1 0L11.36 7.4 7.84 4.65c-.36-.28-.9-.05-.97.41L4.68 18.52l7.24 4.07c.22.12.46.19.72.19.25 0 .5-.06.72-.19l7.46-4.19L14.41 3.52z"
        fill="url(#firebase-grad-1)"
      />
      <path
        d="M12.64 22.71c-.44.25-.98.25-1.42 0L4.68 18.52l.06-.39 7.18 4.04c.22.12.46.19.72.19.25 0 .5-.06.72-.19l7.46-4.19.06.39-7.78 4.34z"
        fill="#FFA000"
      />
      <path
        d="M12.08 7.42l-4.24-3.32c-.36-.28-.9-.05-.97.41L4.68 18.52l7.4-11.1z"
        fill="#FFC107"
      />
      <defs>
        <linearGradient
          id="firebase-grad-1"
          x1="5.14"
          y1="19.4"
          x2="17.8"
          y2="7.34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6D00" />
          <stop offset="1" stopColor="#FF9100" />
        </linearGradient>
      </defs>
    </svg>
  );
};
