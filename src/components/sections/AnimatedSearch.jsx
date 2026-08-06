import React, { useState } from 'react';
import ClearableInput from '../ui/ClearableInput.jsx';

export default function AnimatedSearch() {
  const [expanded, setExpanded] = useState(true);
  const [query, setQuery] = useState('');

  const sampleResults = [
    'Orders & Invoices Dashboard',
    'E-Commerce Analytics Overview',
    'User Permissions & Role Settings',
    'IoT Thermostat & Climate Control',
    'Smart Table Inline Data Grid'
  ];

  const filteredResults = query
    ? sampleResults.filter(r => r.toLowerCase().includes(query.toLowerCase()))
    : sampleResults;

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Animated Search Bar</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Expandable Live Filter Query Control</p>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-semibold">
          &lt;ngx-search&gt;
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => setExpanded(prev => !prev)}
          className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-xs"
        >
          🔍
        </button>
        {expanded && (
          <div className="flex-1">
            <ClearableInput
              placeholder="Search components or metrics..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              onClear={() => setQuery('')}
            />
          </div>
        )}
      </div>

      {expanded && (
        <div className="space-y-1.5 pt-2">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
            <span>Query Results</span>
            <span>{filteredResults.length} Found</span>
          </div>
          {filteredResults.map((res, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50">
              ⚡ {res}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

