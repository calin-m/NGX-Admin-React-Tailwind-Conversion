import React from 'react';

/**
 * TrendBadge UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Reusable percentage growth/delta badge (+14.5%, -3.2%, etc.)
 */
export default function TrendBadge({ value, type = 'positive', className = '' }) {
  if (!value) return null;

  const isPositive = type === 'positive' || (typeof value === 'string' && value.startsWith('+'));
  const isNegative = type === 'negative' || (typeof value === 'string' && value.startsWith('-'));

  const colorStyles = isPositive
    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
    : isNegative
    ? 'text-rose-600 dark:text-rose-400 bg-rose-500/10'
    : 'text-amber-600 dark:text-amber-400 bg-amber-500/10';

  return (
    <span className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${colorStyles} ${className}`}>
      {value}
    </span>
  );
}
