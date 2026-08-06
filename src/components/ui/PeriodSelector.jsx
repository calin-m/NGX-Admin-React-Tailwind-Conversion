import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

/**
 * PeriodSelector UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Reusable animated tab control for selecting time periods (week, month, year, etc.)
 * Uses dynamic offset DOM measurement for pixel-perfect active pill sliding & natural padding
 */
export default function PeriodSelector({
  periods = ['week', 'month', 'year'],
  selected,
  onChange,
  activeColorClass = 'text-accent dark:text-accent-light'
}) {
  const buttonRefs = useRef([]);
  const [pillStyle, setPillStyle] = useState({ left: 4, width: 0 });

  // Use useLayoutEffect / useEffect to measure exact active button geometry
  const updatePill = () => {
    const selectedIndex = Math.max(periods.indexOf(selected), 0);
    const activeBtn = buttonRefs.current[selectedIndex];
    if (activeBtn) {
      const nextLeft = activeBtn.offsetLeft || 0;
      const nextWidth = activeBtn.offsetWidth || 0;
      setPillStyle(prev => {
        if (prev.left === nextLeft && prev.width === nextWidth) {
          return prev;
        }
        return { left: nextLeft, width: nextWidth };
      });
    }
  };

  const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsoLayoutEffect(() => {
    updatePill();
  }, [selected, periods]);

  // Recalculate on window resize for responsive stability
  useEffect(() => {
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [selected, periods]);

  const selectedIndex = Math.max(periods.indexOf(selected), 0);
  const itemPercent = 100 / periods.length;
  const isMeasured = pillStyle.width > 0;

  const activePillStyle = isMeasured
    ? { left: `${pillStyle.left}px`, width: `${pillStyle.width}px` }
    : { left: `calc(${selectedIndex * itemPercent}% + 0.25rem)`, width: `calc(${itemPercent}% - 0.5rem)` };

  return (
    <div className="relative inline-flex items-center bg-slate-100 dark:bg-slate-700/60 p-1 rounded-xl text-xs font-semibold shrink-0">
      {/* Sliding Active Pill Background Indicator */}
      <div
        style={activePillStyle}
        className="absolute top-1 bottom-1 bg-white dark:bg-slate-800 rounded-lg shadow-xs transition-all duration-300 ease-out pointer-events-none"
      />

      {periods.map((p, idx) => {
        const isActive = selected === p;
        return (
          <button
            key={p}
            ref={el => (buttonRefs.current[idx] = el)}
            type="button"
            onClick={() => onChange && onChange(p)}
            className={`relative z-10 px-3 py-1 text-center transition-colors duration-300 capitalize ${
              isActive
                ? `${activeColorClass}`
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
}
