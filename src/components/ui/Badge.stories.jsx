import React from 'react';
import Badge from './Badge.jsx';

export default {
  title: 'UI/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'blue', 'green', 'amber', 'rose']
    }
  }
};

export const Default = {
  args: {
    children: 'Default Badge',
    variant: 'default'
  }
};

export const Blue = {
  args: {
    children: 'Blue Badge',
    variant: 'blue'
  }
};
