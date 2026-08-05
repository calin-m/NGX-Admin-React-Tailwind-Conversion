import React from 'react';

export default function RevealCard({ isRevealed, front, back, className = '' }) {
  return (
    <div className={`relative w-full min-h-[320px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg overflow-hidden ${className}`}>
      {/* Front Face Layer */}
      <div className="w-full h-full min-h-[320px] p-6 flex flex-col justify-between">
        {front}
      </div>

      {/* Vertical Slide Reveal Back Layer */}
      <div
        className={`absolute inset-0 w-full h-full bg-white dark:bg-slate-800 p-6 flex flex-col justify-between transition-transform duration-500 ease-in-out z-10 ${
          isRevealed ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {back}
      </div>
    </div>
  );
}
