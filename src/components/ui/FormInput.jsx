import React, { useState } from 'react';
import ClearableInput from './ClearableInput.jsx';

/**
 * FormInput UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Single unified form control component handling text, email, password, select, toggle, and checkbox variants.
 */
export default function FormInput({
  label,
  type = 'text',
  value,
  onChange,
  onClear,
  placeholder,
  icon,
  options = [],
  helpText,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  // Render input field based on type
  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <div className="relative w-full">
            <select
              value={value || ''}
              onChange={onChange}
              disabled={disabled}
              className={`w-full px-3.5 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-700 border ${
                error ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-600 focus:ring-accent'
              } text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 transition-all cursor-pointer ${className}`}
              {...props}
            >
              {options.map((opt, idx) => {
                const isObj = typeof opt === 'object' && opt !== null;
                const val = isObj ? opt.value : opt;
                const lbl = isObj ? opt.label : opt;
                return (
                  <option key={idx} value={val}>
                    {lbl}
                  </option>
                );
              })}
            </select>
          </div>
        );

      case 'toggle':
        const isChecked = Boolean(value);
        return (
          <div className="flex items-center space-x-3">
            <button
              type="button"
              disabled={disabled}
              onClick={() => onChange && onChange(!isChecked)}
              className={`w-11 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer ${
                isChecked ? 'bg-accent' : 'bg-slate-300 dark:bg-slate-600'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform duration-200 shadow-xs ${
                  isChecked ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            {placeholder && (
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {placeholder}
              </span>
            )}
          </div>
        );

      case 'checkbox':
        return (
          <label className={`flex items-center space-x-2 cursor-pointer text-xs text-slate-700 dark:text-slate-300 ${className}`}>
            <input
              type="checkbox"
              checked={Boolean(value)}
              onChange={e => onChange && onChange(e.target.checked)}
              disabled={disabled}
              className="rounded border-slate-300 dark:border-slate-600 text-accent focus:ring-accent"
              {...props}
            />
            {placeholder && <span>{placeholder}</span>}
          </label>
        );

      case 'password':
        return (
          <div className="space-y-1 w-full">
            <ClearableInput
              type={showPassword ? 'text' : 'password'}
              value={value}
              onChange={onChange}
              onClear={onClear}
              placeholder={placeholder || '••••••••'}
              icon={icon}
              disabled={disabled}
              required={required}
              className={className}
              {...props}
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="text-[11px] font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer"
              >
                {showPassword ? '🙈 Hide Password' : '👁️ Show Password'}
              </button>
            </div>
          </div>
        );

      default:
        return (
          <ClearableInput
            type={type}
            value={value}
            onChange={onChange}
            onClear={onClear}
            placeholder={placeholder}
            icon={icon}
            disabled={disabled}
            required={required}
            className={className}
            {...props}
          />
        );
    }
  };

  return (
    <div className="space-y-1 w-full">
      {label && (
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
          {label}
          {required && <span className="text-rose-500 ml-0.5 font-bold">*</span>}
        </label>
      )}

      {renderInput()}

      {error && (
        <p className="text-[10px] font-semibold text-rose-500 dark:text-rose-400 mt-1">
          ⚠️ {error}
        </p>
      )}

      {helpText && !error && (
        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">
          {helpText}
        </p>
      )}
    </div>
  );
}
