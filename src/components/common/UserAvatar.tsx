import React, { useState } from 'react';

interface UserAvatarProps {
  photoURL?: string | null;
  displayName?: string | null;
  email?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showStatusDot?: boolean;
}

const sizeClasses = {
  xs: 'w-6 h-6 text-[10px]',
  sm: 'w-8 h-8 text-xs',
  md: 'w-9 h-9 text-xs',
  lg: 'w-11 h-11 text-sm',
  xl: 'w-14 h-14 text-base font-semibold',
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  photoURL,
  displayName,
  email,
  size = 'md',
  className = '',
  showStatusDot = false,
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  const initial = (displayName?.trim()?.[0] || email?.trim()?.[0] || 'U').toUpperCase();

  // If Google photo URL, request higher resolution version if ending with =s96-c
  const optimizedPhotoURL = photoURL
    ? photoURL.replace(/=s\d+(-c)?$/, '=s192-c')
    : null;

  return (
    <div className={`relative shrink-0 aspect-square select-none ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden shrink-0 aspect-square ring-1 ring-[#881337]/50 bg-[#1c1617] shadow-sm flex items-center justify-center`}
      >
        {optimizedPhotoURL && !imageFailed ? (
          <img
            src={optimizedPhotoURL}
            alt={displayName || 'User Profile'}
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover object-center aspect-square shrink-0 block"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-rose-950 via-rose-900 to-rose-700 text-[#f7f4ed] font-medium flex items-center justify-center aspect-square">
            {initial}
          </div>
        )}
      </div>

      {showStatusDot && (
        <span
          className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0a0908]"
          title="Firebase Connected"
        />
      )}
    </div>
  );
};
