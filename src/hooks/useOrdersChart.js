import { useState, useEffect } from 'react';

/**
 * useOrdersChart Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/data/orders-chart.ts
 */
const periodDataMap = {
  week: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    orders: [184, 267, 326, 366, 389, 399, 392],
    profit: [158, 178, 193, 205, 212, 213, 204]
  },
  month: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    orders: [1250, 1840, 2450, 3100],
    profit: [850, 1200, 1650, 2100]
  },
  year: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    orders: [14200, 22400, 31800, 45600],
    profit: [9400, 15100, 21200, 30800]
  }
};

export function useOrdersChart(initialPeriod = 'week') {
  const [period, setPeriod] = useState(initialPeriod);
  const [data, setData] = useState(periodDataMap[initialPeriod] || periodDataMap.week);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(periodDataMap[period] || periodDataMap.week);
  }, [period]);

  return {
    data,
    loading,
    error,
    period,
    setPeriod
  };
}

export default useOrdersChart;
