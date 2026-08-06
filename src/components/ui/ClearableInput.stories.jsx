import React, { useState } from 'react';
import ClearableInput from './ClearableInput.jsx';

export default {
  title: 'UI/ClearableInput',
  component: ClearableInput,
};

export const Default = () => {
  const [val, setVal] = useState('Sample typed query');
  return (
    <div className="p-4 max-w-sm bg-white dark:bg-slate-800 rounded-xl">
      <ClearableInput
        value={val}
        onChange={e => setVal(e.target.value)}
        onClear={() => setVal('')}
        placeholder="Type a message or query..."
      />
    </div>
  );
};

export const WithIcon = () => {
  const [val, setVal] = useState('Search data...');
  return (
    <div className="p-4 max-w-sm bg-white dark:bg-slate-800 rounded-xl">
      <ClearableInput
        value={val}
        onChange={e => setVal(e.target.value)}
        onClear={() => setVal('')}
        icon="🔍"
        placeholder="Search metrics..."
      />
    </div>
  );
};
