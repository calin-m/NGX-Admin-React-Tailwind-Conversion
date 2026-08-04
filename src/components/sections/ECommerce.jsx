import React from 'react';

export default function ECommerce() {
  const stats = [
    { title: 'Total Revenue', val: '$248,500', change: '+12.4%', icon: '💎', color: 'text-indigo-500 bg-indigo-500/10' },
    { title: 'Total Orders', val: '14,820', change: '+8.1%', icon: '📦', color: 'text-emerald-500 bg-emerald-500/10' },
    { title: 'Conversion Rate', val: '3.42%', change: '+0.6%', icon: '🎯', color: 'text-amber-500 bg-amber-500/10' },
    { title: 'Avg Order Value', val: '$167.50', change: '+4.2%', icon: '💳', color: 'text-purple-500 bg-purple-500/10' }
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s, idx) => (
        <div key={idx} className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-5 flex items-center justify-between hover:shadow-xl transition-shadow">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{s.title}</span>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">{s.val}</h3>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{s.change}</span>
            </div>
          </div>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${s.color}`}>
            {s.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
