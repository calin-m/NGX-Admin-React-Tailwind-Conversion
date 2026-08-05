import React, { useState } from 'react';
import useTrafficChart from '../../hooks/useTrafficChart.js';
import useTrafficList from '../../hooks/useTrafficList.js';
import TrafficFrontCard from './traffic-reveal/TrafficFrontCard.jsx';
import TrafficBackCard from './traffic-reveal/TrafficBackCard.jsx';
import RevealCard from '../ui/RevealCard.jsx';

export default function TrafficRevealCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { data: chartData, period, setPeriod } = useTrafficChart('week');
  const { data: listData } = useTrafficList();

  const toggleFlip = () => setIsFlipped(prev => !prev);

  return (
    <RevealCard
      isRevealed={isFlipped}
      front={<TrafficFrontCard data={chartData} period={period} setPeriod={setPeriod} onFlip={toggleFlip} />}
      back={<TrafficBackCard onFlip={toggleFlip} />}
    />
  );
}
