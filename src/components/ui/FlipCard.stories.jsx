import React from 'react';
import FlipCard from './FlipCard.jsx';

export default {
  title: 'UI/FlipCard',
  component: FlipCard,
};

export const Default = () => (
  <FlipCard
    isFlipped={false}
    front={<div className="p-4 font-bold text-center">Front Side</div>}
    back={<div className="p-4 font-bold text-center text-indigo-500">Back Side</div>}
  />
);

export const Flipped = () => (
  <FlipCard
    isFlipped={true}
    front={<div className="p-4 font-bold text-center">Front Side</div>}
    back={<div className="p-4 font-bold text-center text-indigo-500">Back Side</div>}
  />
);
