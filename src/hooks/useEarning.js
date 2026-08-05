import { useState, useEffect } from 'react';

/**
 * useEarning Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/data/earning.ts
 */
export function useEarning(initialPeriod = 'week') {
  const [period, setPeriod] = useState(initialPeriod);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) {
        const periodData = {
          week: {
            totalEarnings: '$64.2k',
            dailyRate: '$2,450 / day',
            growth: '+18.2%',
            portfolio: [
              { name: 'Bitcoin', value: 50, color: 'bg-amber-500', hex: '#f59e0b', strokeDash: '50, 100', strokeOffset: '0' },
              { name: 'Tether', value: 25, color: 'bg-indigo-500', hex: '#6366f1', strokeDash: '25, 100', strokeOffset: '-50' },
              { name: 'Ethereum', value: 25, color: 'bg-emerald-500', hex: '#10b981', strokeDash: '25, 100', strokeOffset: '-75' },
            ]
          },
          month: {
            totalEarnings: '$284.5k',
            dailyRate: '$9,480 / day',
            growth: '+24.6%',
            portfolio: [
              { name: 'Bitcoin', value: 55, color: 'bg-amber-500', hex: '#f59e0b', strokeDash: '55, 100', strokeOffset: '0' },
              { name: 'Tether', value: 20, color: 'bg-indigo-500', hex: '#6366f1', strokeDash: '20, 100', strokeOffset: '-55' },
              { name: 'Ethereum', value: 25, color: 'bg-emerald-500', hex: '#10b981', strokeDash: '25, 100', strokeOffset: '-75' },
            ]
          },
          year: {
            totalEarnings: '$1.42M',
            dailyRate: '$3,890 / day',
            growth: '+32.1%',
            portfolio: [
              { name: 'Bitcoin', value: 60, color: 'bg-amber-500', hex: '#f59e0b', strokeDash: '60, 100', strokeOffset: '0' },
              { name: 'Tether', value: 25, color: 'bg-indigo-500', hex: '#6366f1', strokeDash: '25, 100', strokeOffset: '-60' },
              { name: 'Ethereum', value: 15, color: 'bg-emerald-500', hex: '#10b981', strokeDash: '15, 100', strokeOffset: '-85' },
            ]
          }
        };

        setData(periodData[period] || periodData.week);
        setLoading(false);
      }
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [period]);

  return {
    data,
    loading,
    error,
    period,
    setPeriod
  };
}

export default useEarning;

