import React, { useState } from 'react';
import FormInput from '../ui/FormInput.jsx';

export default function FormLayouts() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Form Layout Templates</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Horizontal & Grid Layout Form Cards</p>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent-light text-accent font-semibold transition-colors">
          &lt;ngx-form-layouts&gt;
        </span>
      </div>

      {submitted && (
        <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-700 dark:text-emerald-300 animate-in fade-in">
          ✓ Form submitted successfully for {formData.firstName} ({formData.email})!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="First Name"
            required
            placeholder="John"
            value={formData.firstName}
            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
            onClear={() => setFormData({ ...formData, firstName: '' })}
          />

          <FormInput
            label="Last Name"
            placeholder="Doe"
            value={formData.lastName}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
            onClear={() => setFormData({ ...formData, lastName: '' })}
          />
        </div>

        <FormInput
          label="Email Address"
          type="email"
          required
          placeholder="john.doe@example.com"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          onClear={() => setFormData({ ...formData, email: '' })}
        />

        <button type="submit" className="px-4 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-bold rounded-xl shadow-sm transition-all">
          Submit Form
        </button>

      </form>
    </div>
  );
}

