import React, { useState } from 'react';
import useOrdersProfit from '../../hooks/useOrdersProfit.js';
import StatsCardFront from './profit-card/StatsCardFront.jsx';
import StatsCardBack from './profit-card/StatsCardBack.jsx';
import FlipCard from '../ui/FlipCard.jsx';

export default function ProfitCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { data, loading, period, setPeriod } = useOrdersProfit('week');

  const toggleFlip = () => setIsFlipped(prev => !prev);

  return (
    <FlipCard
      isFlipped={isFlipped}
      front={<StatsCardFront data={data} period={period} setPeriod={setPeriod} onFlip={toggleFlip} />}
      back={<StatsCardBack onFlip={toggleFlip} />}
    />
  );
}
