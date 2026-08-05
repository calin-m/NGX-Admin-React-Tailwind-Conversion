import React, { useState } from 'react';
import useOrdersProfit from '../../hooks/useOrdersProfit.js';
import StatsCardFront from './profit-card/StatsCardFront.jsx';
import StatsCardBack from './profit-card/StatsCardBack.jsx';

export default function ProfitCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { data, loading, period, setPeriod } = useOrdersProfit('week');

  const toggleFlip = () => setIsFlipped(prev => !prev);

  return (
    <div className="relative w-full min-h-[320px] rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 flex flex-col justify-between overflow-hidden transition-all duration-300">
      {!isFlipped ? (
        <StatsCardFront data={data} period={period} setPeriod={setPeriod} onFlip={toggleFlip} />
      ) : (
        <StatsCardBack onFlip={toggleFlip} />
      )}

    </div>
  );
}
