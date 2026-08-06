import React from 'react';

/**
 * Card UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Reusable container wrapper with header title, subtitle, extra actions, and dark mode support.
 */
export default function Card({
  title,
  subtitle,
  extra,
  children,
  className = '',
  padding = true,
  hoverable = false,
  ...props
}) {
  const hasHeader = Boolean(title || subtitle || extra);

  return (
    <div
      className={`w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg ${
        hoverable ? 'hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200' : ''
      } ${padding ? 'p-6' : ''} ${className}`.trim()}
      {...props}
    >
      {hasHeader && (
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700/60 ${padding ? 'pb-4 mb-6' : 'p-6 border-b'}`}>
          <div>
            {title && (
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-lg tracking-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
          {extra && (
            <div className="flex items-center space-x-2 shrink-0">
              {extra}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
