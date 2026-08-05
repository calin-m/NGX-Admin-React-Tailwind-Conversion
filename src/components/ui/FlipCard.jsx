import React from 'react';

export default function FlipCard({ isFlipped, front, back, className = '' }) {
  return (
    <div className={`perspective-1000 w-full min-h-[320px] ${className}`}>
      <div
        className={`relative w-full h-full min-h-[320px] transition-transform duration-600 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden flex flex-col justify-between bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 overflow-hidden">
          {front}
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex flex-col justify-between bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 overflow-hidden">
          {back}
        </div>
      </div>
    </div>
  );
}
