import React, { useState } from 'react';

export default function FormButtons() {
  const [clickCount, setClickCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [size, setSize] = useState('md');

  const triggerLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setClickCount(prev => prev + 1);
    }, 800);
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-[11px]',
    md: 'px-4 py-2 text-xs',
    lg: 'px-5 py-2.5 text-sm'
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Button Showcase & Controls</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Interactive Button Variants & Size Switcher</p>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent-light text-accent font-semibold transition-colors">
          &lt;ngx-button&gt;
        </span>
      </div>

      {/* Size Selector */}
      <div className="flex items-center space-x-2">
        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Button Size:</span>
        {['sm', 'md', 'lg'].map(s => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`px-3 py-1 rounded-lg text-xs font-bold uppercase transition-all ${
              size === s
                ? 'bg-accent text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Interactive Buttons */}
      <div className="flex flex-wrap gap-3 items-center">
        <button
          onClick={triggerLoading}
          disabled={isLoading}
          className={`${sizeClasses[size]} bg-accent hover:bg-accent-hover text-white rounded-xl font-bold shadow-sm transition-all disabled:opacity-60`}
        >

          {isLoading ? 'Loading...' : `Primary (Clicked ${clickCount})`}
        </button>
        <button onClick={() => setClickCount(prev => prev + 1)} className={`${sizeClasses[size]} bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-sm transition-all`}>
          Success Action
        </button>
        <button onClick={() => setClickCount(0)} className={`${sizeClasses[size]} bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold shadow-sm transition-all`}>
          Reset Counter
        </button>
        <button className={`${sizeClasses[size]} bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold shadow-sm transition-all`}>
          Warning
        </button>
      </div>
    </div>
  );
}

