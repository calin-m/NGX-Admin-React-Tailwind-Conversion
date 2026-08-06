import React from 'react';
import GlassCard from './GlassCard.jsx';

export default {
  title: 'UI Primitives/GlassCard',
  component: GlassCard,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children: <p className="p-4 text-sm">Glassmorphic UI Card Container</p>,
  },
};
