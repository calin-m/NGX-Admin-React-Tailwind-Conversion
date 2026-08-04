import React from 'react';
import NotificationDrawer from './NotificationDrawer.jsx';

export default {
  title: 'Corporate/Sections/NotificationDrawer',
  component: NotificationDrawer
};

export const Open = {
  args: {
    isOpen: true,
    onClose: () => {}
  }
};
