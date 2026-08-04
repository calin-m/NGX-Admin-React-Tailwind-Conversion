import React from 'react';
import Card from './Card.jsx';

export default {
  title: 'Corporate/UI Primitives/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children: <p className="p-4 text-sm">Corporate UI Card Container</p>,
  },
};
