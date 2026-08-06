import React from 'react';

/**
 * ClearableInput UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Reusable input field featuring ✕ ESC clear badge and Esc key listener.
 */
export default function ClearableInput({
  value,
  onChange,
  onClear,
  placeholder = 'Type here...',
  type = 'text',
  className = '',
  icon,
  ...props
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      if (onClear) onClear();
      else if (onChange) onChange({ target: { value: '' } });
    }
  };

  const handleClear = () => {
    if (onClear) onClear();
    else if (onChange) onChange({ target: { value: '' } });
  };

  const hasValue = Boolean(value && String(value).length > 0);

  return (
    <div className="relative flex items-center w-full">
      {icon && (
        <span className="absolute left-3 text-slate-400 text-sm pointer-events-none z-10">
          {icon}
        </span>
      )}
      <input
        type={type}
        value={value || ''}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`w-full ${icon ? 'pl-9' : 'pl-4'} ${hasValue ? 'pr-16' : 'pr-4'} py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-accent transition-all ${className}`}
        {...props}
      />
      {hasValue && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-2.5 flex items-center space-x-1 px-1.5 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-600/80 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer z-10"
          title="Clear field (Press Esc)"
          aria-label="Clear field"
        >
          <span className="text-[10px] font-bold leading-none">✕</span>
          <kbd className="font-mono text-[9px] font-bold uppercase tracking-wider opacity-75">ESC</kbd>
        </button>
      )}
    </div>
  );
}
