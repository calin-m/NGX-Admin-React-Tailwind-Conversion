import React from 'react';

/**
 * Avatar UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Reusable user avatar with automated initials computation, image support, and online status dot.
 */
export default function Avatar({
  name,
  initials,
  src,
  status,
  size = 'md',
  className = '',
  ...props
}) {
  const getInitials = () => {
    if (initials) return initials;
    if (!name) return 'U';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.substring(0, 2).toUpperCase();
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { container: 'w-7 h-7 text-[10px]', statusDot: 'w-2 h-2 bottom-0 right-0 border' };
      case 'lg':
        return { container: 'w-12 h-12 text-sm', statusDot: 'w-3.5 h-3.5 bottom-0 right-0 border-2' };
      default:
        return { container: 'w-9 h-9 text-xs', statusDot: 'w-2.5 h-2.5 bottom-0 right-0 border-2' };
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'Online':
        return 'bg-emerald-500';
      case 'Busy':
        return 'bg-amber-500';
      case 'Offline':
        return 'bg-slate-300 dark:bg-slate-600';
      default:
        return null;
    }
  };

  const { container, statusDot } = getSizeStyles();
  const statusColor = getStatusColor();

  return (
    <div className="relative inline-flex shrink-0" {...props}>
      {src ? (
        <img
          src={src}
          alt={name || 'Avatar'}
          className={`${container} rounded-xl object-cover border border-slate-200 dark:border-slate-700 shadow-xs ${className}`}
        />
      ) : (
        <div
          className={`${container} rounded-xl bg-accent text-white font-bold flex items-center justify-center shadow-xs select-none ${className}`}
        >
          {getInitials()}
        </div>
      )}

      {statusColor && (
        <span
          className={`absolute ${statusDot} ${statusColor} rounded-full border-white dark:border-slate-800 shadow-xs`}
          title={`Status: ${status}`}
        />
      )}
    </div>
  );
}
