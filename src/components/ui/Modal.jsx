import React, { useEffect } from 'react';

/**
 * Modal UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Accessible modal overlay with backdrop blur, scale animation, header, close button, and Esc key listener.
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-md',
  className = '',
  ...props
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      onClick={onClose}
      {...props}
    >
      <div
        className={`w-full ${maxWidth} bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-5 animate-scale-in ${className}`}
        onClick={e => e.stopPropagation()}
      >
        {title && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base tracking-tight">
              {title}
            </h3>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-lg transition-colors cursor-pointer p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                aria-label="Close Modal"
              >
                ✕
              </button>
            )}
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
