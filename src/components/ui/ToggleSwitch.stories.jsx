import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch.jsx';

export default {
  title: 'UI Primitives/ToggleSwitch',
  component: ToggleSwitch,
};

export const Interactive = {
  render: function RenderToggleSwitch() {
    const [enabled, setEnabled] = useState(false);
    return (
      <div className="flex items-center space-x-3 p-4 bg-white dark:bg-slate-800 rounded-xl">
        <ToggleSwitch enabled={enabled} onChange={setEnabled} label="Enable Feature" />
        <span className="text-xs text-slate-600 dark:text-slate-300">Status: {enabled ? 'ON' : 'OFF'}</span>
      </div>
    );
  },
};
