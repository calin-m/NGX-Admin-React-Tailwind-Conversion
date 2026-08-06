import React from 'react';
import FlipButton from './FlipButton.jsx';

export default {
  title: 'UI/Primitives/FlipButton',
  component: FlipButton,
};

export const Default = {
  render: () => (
    <div className="relative w-64 h-32 p-4 bg-white dark:bg-slate-800 border rounded-2xl">
      <FlipButton onFlip={() => alert('Flipped!')} />
      <p className="text-xs text-slate-500">Card Front Content</p>
    </div>
  ),
};
