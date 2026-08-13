import React from 'react';
import Sidebar from './Sidebar.jsx';

export default {
  title: 'Corporate/Sections/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Expanded = {
  args: {
    isCollapsed: false,
    activeTab: 'dashboard'
  }
};

export const Collapsed = {
  args: {
    isCollapsed: true,
    activeTab: 'dashboard'
  }
};
