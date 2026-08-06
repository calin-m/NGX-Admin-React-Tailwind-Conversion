import React, { useState } from 'react';
import FormInput from './FormInput.jsx';

export default {
  title: 'UI Primitives/FormInput',
  component: FormInput,
  tags: ['autodocs'],
};

export const TextWithClearableBadge = () => {
  const [val, setVal] = useState('Sarah Jenkins');
  return (
    <div className="p-6 max-w-sm bg-white dark:bg-slate-800 rounded-xl">
      <FormInput
        label="Customer Name"
        required
        icon="👤"
        value={val}
        onChange={e => setVal(e.target.value)}
        onClear={() => setVal('')}
        placeholder="Enter name..."
      />
    </div>
  );
};

export const PasswordWithShowHide = () => {
  const [pass, setPass] = useState('SecretP@ssword123');
  return (
    <div className="p-6 max-w-sm bg-white dark:bg-slate-800 rounded-xl">
      <FormInput
        label="Password"
        type="password"
        required
        value={pass}
        onChange={e => setPass(e.target.value)}
        onClear={() => setPass('')}
      />
    </div>
  );
};

export const SelectDropdown = () => {
  const [role, setRole] = useState('Editor');
  return (
    <div className="p-6 max-w-sm bg-white dark:bg-slate-800 rounded-xl">
      <FormInput
        label="User Access Role"
        type="select"
        value={role}
        onChange={e => setRole(e.target.value)}
        options={['Admin', 'Editor', 'Viewer']}
      />
    </div>
  );
};

export const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="p-6 max-w-sm bg-white dark:bg-slate-800 rounded-xl">
      <FormInput
        label="Daily Email Summary"
        type="toggle"
        value={enabled}
        onChange={setEnabled}
        helpText="Receive daily revenue updates via email."
      />
    </div>
  );
};
