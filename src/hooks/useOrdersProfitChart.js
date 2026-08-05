import { useState, useEffect } from 'react';

/**
 * useOrdersProfitChart Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/data/orders-profit-chart.ts
 */
const periodDataMap = {
  week: {
    profit: '$84,250',
    growth: '+14.5%',
    ordersCount: '1,840',
    barData: [
      { label: 'Mon', profit: 45, orders: 30 },
      { label: 'Tue', profit: 70, orders: 50 },
      { label: 'Wed', profit: 60, orders: 40 },
      { label: 'Thu', profit: 90, orders: 65 },
      { label: 'Fri', profit: 80, orders: 55 },
      { label: 'Sat', profit: 95, orders: 75 },
      { label: 'Sun', profit: 110, orders: 85 }
    ]
  },
  month: {
    profit: '$342,100',
    growth: '+22.8%',
    ordersCount: '7,420',
    barData: [
      { label: 'Wk 1', profit: 210, orders: 150 },
      { label: 'Wk 2', profit: 280, orders: 190 },
      { label: 'Wk 3', profit: 320, orders: 220 },
      { label: 'Wk 4', profit: 410, orders: 290 }
    ]
  },
  year: {
    profit: '$4,120,000',
    growth: '+38.4%',
    ordersCount: '89,500',
    barData: [
      { label: 'Q1', profit: 850, orders: 610 },
      { label: 'Q2', profit: 1120, orders: 780 },
      { label: 'Q3', profit: 1350, orders: 940 },
      { label: 'Q4', profit: 1680, orders: 1200 }
    ]
  }
};

export function useOrdersProfitChart(initialPeriod = 'week') {
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

export default useOrdersProfitChart;
