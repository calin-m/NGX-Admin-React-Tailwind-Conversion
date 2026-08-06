import React from 'react';
import Button from './Button.jsx';

export default {
  title: 'UI Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export const Primary = {
  args: {
    children: 'Primary Action',
    variant: 'primary',
  },
};

export const Outline = {
  args: {
    children: 'Secondary Action',
    variant: 'outline',
  },
};
