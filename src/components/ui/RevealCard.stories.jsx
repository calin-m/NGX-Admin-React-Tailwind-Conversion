import React from 'react';
import RevealCard from './RevealCard.jsx';

export default {
  title: 'UI Primitives/RevealCard',
  component: RevealCard,
};

export const Default = () => (
  <RevealCard
    isRevealed={false}
    front={<div className="p-4 font-bold text-center">Front View</div>}
    back={<div className="p-4 font-bold text-center text-emerald-500">Back Revealed View</div>}
  />
);

export const Revealed = () => (
  <RevealCard
    isRevealed={true}
    front={<div className="p-4 font-bold text-center">Front View</div>}
    back={<div className="p-4 font-bold text-center text-emerald-500">Back Revealed View</div>}
  />
);
