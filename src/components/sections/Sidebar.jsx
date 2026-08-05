import React from 'react';

export default function Sidebar({ isCollapsed, activeTab, setActiveTab, onToggleSidebar }) {
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

  const handleTabClick = (id) => {
    if (setActiveTab) setActiveTab(id);
    if (!isCollapsed && onToggleSidebar && typeof window !== 'undefined' && window.innerWidth < 768) {
      onToggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay when Drawer is Open on Mobile */}
      {!isCollapsed && (
        <div
          className="md:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 transition-opacity cursor-pointer"
          onClick={() => onToggleSidebar && onToggleSidebar()}
        />
      )}

      <aside
        className={`bg-white dark:bg-slate-800 border-r border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between overflow-hidden z-40 shrink-0 transition-all duration-300 ease-in-out ${
          isCollapsed
            ? 'w-20 max-md:-translate-x-full max-md:w-0'
            : 'w-64 max-md:fixed max-md:top-0 max-md:bottom-0 max-md:left-0 max-md:h-full max-md:shadow-2xl'
        } md:sticky md:top-16 md:h-[calc(100vh-4rem)]`}
      >
        <div className="p-3 space-y-6 flex-1 overflow-y-auto relative scrollbar-collapsed-hover">
          {/* Logo Section & Mobile Close Button */}
          <div className={`flex items-center justify-between px-1 ${isCollapsed ? 'justify-center px-0' : ''}`}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-black text-lg shadow-md shrink-0 transition-colors">
                N
              </div>
              {!isCollapsed && (
                <div className="overflow-hidden whitespace-nowrap">
                  <h2 className="font-bold text-slate-900 dark:text-slate-100 text-base tracking-tight">NGX Admin</h2>
                </div>
              )}
            </div>

            {/* Mobile Drawer Top-Right Close Button (✕) */}
            {!isCollapsed && (
              <button
                type="button"
                onClick={() => onToggleSidebar && onToggleSidebar()}
                className="md:hidden w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 flex items-center justify-center text-sm font-bold transition-colors shrink-0"
                title="Close Navigation Menu"
              >
                ✕
              </button>
            )}
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1 relative">
            {menuItems.map(item => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full flex items-center rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-accent text-white shadow-md transition-colors'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-slate-100'
                  } ${isCollapsed ? 'justify-center p-0' : 'space-x-3 px-1 py-0.5'}`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-base">
                    {item.icon}
                  </div>
                  {!isCollapsed && <span className="truncate pr-2">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Badge Section with Collapsed Scroll Indicator Fade */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-700/60 relative">
          {isCollapsed && (
            <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-white dark:from-slate-800 to-transparent pointer-events-none opacity-80" />
          )}
          {!isCollapsed ? (
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold flex items-center justify-center text-xs shrink-0">
                PRO
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block truncate">Corporate Edition</span>
                <span className="text-[10px] text-slate-400 block truncate">React 18 & Tailwind</span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center py-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Corporate Edition Active" />
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
