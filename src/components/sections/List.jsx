import React from 'react';

export default function List() {
  const users = [
    { name: 'Carla Firth', role: 'UI/UX Designer', status: 'Online' },
    { name: 'Janice Morgan', role: 'Software Engineer', status: 'Offline' },
    { name: 'Asher Blake', role: 'Product Manager', status: 'Busy' }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Users List</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Standard User List View</p>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
        {users.map((u, i) => (
          <div key={i} className="py-3 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200">{u.name}</h4>
              <span className="text-[10px] text-slate-400">{u.role}</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">{u.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
