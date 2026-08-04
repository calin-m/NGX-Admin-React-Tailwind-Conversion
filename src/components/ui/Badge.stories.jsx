import React from 'react';
import Badge from './Badge.jsx';

export default {
  title: 'Corporate/UI Primitives/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children: 'Badge',
  },
};

export const Blue = {
  args: {
    children: 'Corporate Badge',
    variant: 'blue',
  },
};
