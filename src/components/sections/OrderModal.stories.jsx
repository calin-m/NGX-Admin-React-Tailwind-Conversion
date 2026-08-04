import React from 'react';
import OrderModal from './OrderModal.jsx';

export default {
  title: 'Corporate/Sections/OrderModal',
  component: OrderModal
};

export const Open = {
  args: {
    isOpen: true,
    onClose: () => {}
  }
};
