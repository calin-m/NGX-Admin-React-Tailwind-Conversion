import React from 'react';

/**
 * AlertBanner UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Reusable alert callout banner supporting success, error, warning, and info variants.
 */
export default function AlertBanner({
  variant = 'info',
  title,
  message,
  children,
  onDismiss,
  className = '',
  ...props
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          icon: '✓',
          bg: 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
        };
      case 'error':
        return {
          icon: '⚠️',
          bg: 'bg-rose-50 dark:bg-rose-900/30 border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300'
        };
      case 'warning':
        return {
          icon: '🔔',
          bg: 'bg-amber-50 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300'
        };
      default:
        return {
          icon: 'ℹ️',
          bg: 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300'
        };
    }
  };

  const { icon, bg } = getVariantStyles();
  const content = message || children;

  return (
    <div
      role="alert"
      className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-between gap-3 animate-fade-in ${bg} ${className}`}
      {...props}
    >
      <div className="flex items-center space-x-2">
        <span className="text-sm shrink-0">{icon}</span>
        <div>
          {title && <h5 className="font-bold mb-0.5">{title}</h5>}
          <div className="leading-snug">{content}</div>
        </div>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="text-current opacity-70 hover:opacity-100 transition-opacity cursor-pointer text-sm p-1"
          aria-label="Dismiss alert"
        >
          ✕
        </button>
      )}
    </div>
  );
}
