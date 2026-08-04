import React, { useState } from 'react';

export default function InfiniteList() {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => `News Item Article #${i + 1}`));

  const loadMore = () => {
    setItems(prev => [...prev, ...Array.from({ length: 5 }, (_, i) => `News Item Article #${prev.length + i + 1}`)]);
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Infinite Scroll List</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Dynamic Lazy Loaded Articles</p>
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
        {items.map((item, idx) => (
          <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-700/40 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200">
            📰 {item}
          </div>
        ))}
      </div>

      <button onClick={loadMore} className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all">
        Load More Items
      </button>
    </div>
  );
}
