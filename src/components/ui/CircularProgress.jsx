import React from 'react';

/**
 * CircularProgress UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Reusable animated SVG circular progress ring for displaying percentage metrics.
 */
export default function CircularProgress({
  value = 0,
  size = 120,
  strokeWidth = 10,
  colorClass = 'stroke-accent',
  bgStrokeClass = 'stroke-slate-100 dark:stroke-slate-700/60',
  label,
  className = ''
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const normalizedValue = Math.min(Math.max(value, 0), 100);
  const strokeDashoffset = circumference - (normalizedValue / 100) * circumference;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          className={`fill-none ${bgStrokeClass}`}
        />
        {/* Foreground Animated Progress Ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`fill-none ${colorClass} transition-all duration-1000 ease-out`}
        />
      </svg>
      {/* Inner Label Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {label ? label : <span className="text-xl font-extrabold text-slate-900 dark:text-slate-100">{normalizedValue}%</span>}
      </div>
    </div>
  );
}
