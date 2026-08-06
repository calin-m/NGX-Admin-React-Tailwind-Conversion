import React from 'react';
import AlertBanner from '../ui/AlertBanner.jsx';

export default function Alert() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-4">
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Alert Banner Showcase</h3>
      <AlertBanner variant="info" title="System Maintenance" message="System maintenance scheduled for midnight UTC." />
      <AlertBanner variant="success" title="Target Reached" message="Quarterly revenue target of $1.2M reached!" />
      <AlertBanner variant="error" title="Connection Timeout" message="Failed to connect to secondary database cluster." />
    </div>
  );
}
