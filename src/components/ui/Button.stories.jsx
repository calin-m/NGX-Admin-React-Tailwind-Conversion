import React from 'react';
import Button from './Button.jsx';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
};

export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
};
