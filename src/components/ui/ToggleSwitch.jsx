import React from 'react';

/**
 * ToggleSwitch UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Reusable interactive toggle switch with accessible ARIA state and smooth knob animation.
 */
export default function ToggleSwitch({
  enabled = false,
  onChange,
  label,
  disabled = false,
  activeColor = 'bg-accent',
  className = ''
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
        enabled ? activeColor : 'bg-slate-200 dark:bg-slate-700'
      } ${className}`}
      title={label}
      aria-label={label}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
          enabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
}
