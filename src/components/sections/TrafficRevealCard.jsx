import React, { useState } from 'react';
import useTrafficChart from '../../hooks/useTrafficChart.js';
import useTrafficList from '../../hooks/useTrafficList.js';
import TrafficFrontCard from './traffic-reveal/TrafficFrontCard.jsx';
import TrafficBackCard from './traffic-reveal/TrafficBackCard.jsx';

export default function TrafficRevealCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { data: chartData, period, setPeriod } = useTrafficChart('week');
  const { data: listData } = useTrafficList();

  const toggleFlip = () => setIsFlipped(prev => !prev);

  return (
    <div className="relative w-full min-h-[320px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between overflow-hidden transition-all duration-300">
      {!isFlipped ? (
        <TrafficFrontCard period={period} setPeriod={setPeriod} onFlip={toggleFlip} />
      ) : (
        <TrafficBackCard onFlip={toggleFlip} />
      )}
    </div>
  );
}
