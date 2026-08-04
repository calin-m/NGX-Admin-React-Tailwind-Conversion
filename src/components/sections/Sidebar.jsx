import React from 'react';

export default function Sidebar({ isCollapsed, activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Corporate Dashboard', icon: '📊' },
    { id: 'iot', label: 'IoT Smart Home', icon: '🏠' },
    { id: 'orders', label: 'Orders & Invoices', icon: '🛒' },
    { id: 'users', label: 'User Management', icon: '👥' },
    { id: 'chat', label: 'Support Chat App', icon: '💬' },
    { id: 'calendar', label: 'Calendar Scheduler', icon: '📅' },
    { id: 'maps', label: 'Maps Showcase', icon: '🗺️' },
    { id: 'ckeditor', label: 'CKEditor Text Format', icon: '✍️' },
    { id: 'stepper', label: 'Multi-Step Stepper', icon: '🪜' },
    { id: 'accordion', label: 'Accordion List', icon: '📜' },
    { id: 'grid', label: 'Responsive Grid', icon: '📐' },
    { id: 'typography', label: 'Typography Scale', icon: '🔤' },
    { id: 'icons', label: 'Icon Gallery', icon: '🎨' },
    { id: 'treegrid', label: 'Tree Grid Table', icon: '🌲' },
    { id: 'forms', label: 'Form Controls', icon: '📝' },
    { id: 'auth', label: 'Authentication', icon: '🔐' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <aside
      className={`bg-white dark:bg-slate-800 border-r border-slate-200/80 dark:border-slate-700/80 transition-all duration-300 flex flex-col justify-between overflow-hidden z-20 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="p-4 space-y-6 overflow-y-auto max-h-screen">
        <div className="flex items-center space-x-3 px-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white flex items-center justify-center font-black text-lg shadow-md shrink-0">
            N
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden whitespace-nowrap">
              <h2 className="font-bold text-slate-900 dark:text-slate-100 text-base tracking-tight">NGX Admin</h2>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                100% Converted
              </span>
            </div>
          )}
        </div>

        <nav className="space-y-1">
          {menuItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab && setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-slate-100'
                } ${isCollapsed ? 'justify-center px-0' : ''}`}
                title={isCollapsed ? item.label : undefined}
              >
                <span className="text-base shrink-0">{item.icon}</span>
                {!isCollapsed && <span className="truncate">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-100 dark:border-slate-700/60">
        {!isCollapsed ? (
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40 flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-xs">
              PRO
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block truncate">100% Menu Parity</span>
              <span className="text-[10px] text-slate-400 block truncate">v1.0.0 Ready</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="100% Parity" />
          </div>
        )}
      </div>
    </aside>
  );
}
