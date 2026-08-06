import React, { useState } from 'react';
import FormInput from '../ui/FormInput.jsx';

export default function Settings() {
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [compactView, setCompactView] = useState(false);
  const [apiKey, setApiKey] = useState('ngx_live_98410294810294');

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/60 pb-4">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-lg">Corporate Settings & System Preferences</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Configure Dashboard Layout, Security Keys, and Notifications</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        {/* Preference 1 */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30">
          <FormInput
            label="Email Digest Notifications"
            type="toggle"
            value={emailNotifs}
            onChange={setEmailNotifs}
            helpText="Receive daily summary reports of orders and revenue targets."
          />
        </div>

        {/* Preference 2 */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30">
          <FormInput
            label="Compact Dashboard Cards"
            type="toggle"
            value={compactView}
            onChange={setCompactView}
            helpText="Reduce spacing and padding for high-density displays."
          />
        </div>

        {/* Preference 3 */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 space-y-2">
          <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">Corporate API Key</h4>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              readOnly
              value={apiKey}
              className="flex-1 px-3 py-2 text-xs font-mono rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200"
            />
            <button
              onClick={() => alert('API Key copied to clipboard!')}
              className="px-3 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg text-xs font-semibold transition-colors"
            >

              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
