import React from 'react';
import CircularProgress from './CircularProgress.jsx';

export default {
  title: 'UI/Primitives/CircularProgress',
  component: CircularProgress,
};

export const Default = {
  render: () => <CircularProgress value={75} size={140} strokeWidth={12} />,
};
