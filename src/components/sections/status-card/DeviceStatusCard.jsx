import React from 'react';
import ToggleSwitch from '../../ui/ToggleSwitch.jsx';

export default function DeviceStatusCard({ title, detail, icon, on, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-36 ${
        on
          ? 'bg-white dark:bg-slate-800 border-accent shadow-md shadow-accent/10'
          : 'bg-slate-50/80 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/60 opacity-70'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-colors ${
            on ? 'bg-accent-light text-accent dark:bg-accent/20 dark:text-accent-light' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
          }`}
        >
          {icon}
        </div>

        <div onClick={(e) => e.stopPropagation()}>
          <ToggleSwitch checked={on} onChange={onToggle} />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{title}</h4>
          <span className={`text-[10px] font-extrabold uppercase tracking-wider ${on ? 'text-accent' : 'text-slate-400'}`}>
            {on ? 'ON' : 'OFF'}
          </span>
        </div>
        <span className="text-[10px] text-slate-400 font-medium block">{detail}</span>
      </div>
    </div>
  );
}
