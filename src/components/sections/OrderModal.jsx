import React, { useState } from 'react';
import FormInput from '../ui/FormInput.jsx';
import Modal from '../ui/Modal.jsx';

export default function OrderModal({ isOpen, onClose, onSubmit }) {
  const [customer, setCustomer] = useState('');
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('Credit Card');

  const handleSubmit = e => {
    e.preventDefault();
    if (!customer || !amount) return;
    if (onSubmit) {
      onSubmit({ customer, total: parseFloat(amount), method });
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Order">
      <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Customer Name"
            required
            placeholder="e.g. Sarah Jenkins"
            value={customer}
            onChange={e => setCustomer(e.target.value)}
            onClear={() => setCustomer('')}
          />

          <FormInput
            label="Order Amount ($)"
            type="number"
            required
            step="0.01"
            placeholder="e.g. 1250.00"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            onClear={() => setAmount('')}
          />

          <FormInput
            label="Payment Method"
            type="select"
            value={method}
            onChange={e => setMethod(e.target.value)}
            options={['Credit Card', 'PayPal', 'Apple Pay', 'Wire Transfer']}
          />

          <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100 dark:border-slate-700/60">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold bg-accent hover:bg-accent-hover text-white rounded-xl shadow-sm transition-colors"

            >
              Create Order
            </button>
          </div>
        </form>
    </Modal>
  );
}
