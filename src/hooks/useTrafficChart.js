import { useState, useEffect } from 'react';

/**
 * useTrafficChart Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/mock/traffic-chart.service.ts
 */
const trafficDataMap = {
  week: {
    totalSessions: '142,850',
    categories: [
      { name: 'Direct Traffic', percentage: 42, color: 'bg-indigo-500' },
      { name: 'Search Engines', percentage: 35, color: 'bg-emerald-500' },
      { name: 'Social Networks', percentage: 15, color: 'bg-amber-500' },
      { name: 'Referrals', percentage: 8, color: 'bg-rose-500' }
    ]
  },
  month: {
    totalSessions: '618,400',
    categories: [
      { name: 'Direct Traffic', percentage: 38, color: 'bg-indigo-500' },
      { name: 'Search Engines', percentage: 41, color: 'bg-emerald-500' },
      { name: 'Social Networks', percentage: 14, color: 'bg-amber-500' },
      { name: 'Referrals', percentage: 7, color: 'bg-rose-500' }
    ]
  },
  year: {
    totalSessions: '7,890,000',
    categories: [
      { name: 'Direct Traffic', percentage: 35, color: 'bg-indigo-500' },
      { name: 'Search Engines', percentage: 45, color: 'bg-emerald-500' },
      { name: 'Social Networks', percentage: 12, color: 'bg-amber-500' },
      { name: 'Referrals', percentage: 8, color: 'bg-rose-500' }
    ]
  }
};

export function useTrafficChart(initialPeriod = 'week') {
  const [period, setPeriod] = useState(initialPeriod);
  const [data, setData] = useState(trafficDataMap[initialPeriod] || trafficDataMap.week);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(trafficDataMap[period] || trafficDataMap.week);
  }, [period]);

  return {
    data,
    loading,
    error,
    period,
    setPeriod
  };
}


export default useTrafficChart;
