import React from 'react';

/**
 * FlipButton UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Reusable 3D vector flip card toggle button anchored at top-right corner.
 */
export default function FlipButton({ onFlip, isFlipped = false, title }) {
  const defaultTitle = isFlipped ? 'Flip to overview' : 'Flip to breakdown';
  const rotateClass = isFlipped ? 'group-hover:-rotate-180' : 'group-hover:rotate-180';

  return (
    <button
      type="button"
      onClick={onFlip}
      className="absolute top-0 right-0 p-2 rounded-xl text-slate-400 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors group z-20"
      title={title || defaultTitle}
      aria-label={title || defaultTitle}
    >
      <svg className={`w-4 h-4 transition-transform duration-500 animate-flip-teaser ${rotateClass}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 2.1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 21.9l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    </button>
  );
}
