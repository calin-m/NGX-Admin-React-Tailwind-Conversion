import React, { useState } from 'react';
import Modal from './Modal.jsx';

export default {
  title: 'UI Primitives/Modal',
  component: Modal,
};

export const DefaultModal = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="p-6">
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-accent text-white rounded-xl text-xs font-semibold">
        Open Modal
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Enterprise Modal Container">
        <p className="text-xs text-slate-600 dark:text-slate-300">
          This is an accessible modal container featuring backdrop blur overlay, scale entry animation, and Esc key closing.
        </p>
      </Modal>
    </div>
  );
};
