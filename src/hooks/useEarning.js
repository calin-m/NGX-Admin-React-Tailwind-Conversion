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
              { name: 'Bitcoin', value: 50, color: 'bg-amber-500', hex: '#f59e0b' },
              { name: 'Tether', value: 25, color: 'bg-teal-600', hex: '#0d9488' },
              { name: 'Ethereum', value: 25, color: 'bg-emerald-500', hex: '#10b981' },
            ]
          },
          month: {
            totalEarnings: '$284.5k',
            dailyRate: '$9,480 / day',
            growth: '+24.6%',
            portfolio: [
              { name: 'Bitcoin', value: 55, color: 'bg-amber-500', hex: '#f59e0b' },
              { name: 'Tether', value: 20, color: 'bg-teal-600', hex: '#0d9488' },
              { name: 'Ethereum', value: 25, color: 'bg-emerald-500', hex: '#10b981' },
            ]
          },
          year: {
            totalEarnings: '$1.42M',
            dailyRate: '$3,890 / day',
            growth: '+32.1%',
            portfolio: [
              { name: 'Bitcoin', value: 60, color: 'bg-amber-500', hex: '#f59e0b' },
              { name: 'Tether', value: 25, color: 'bg-teal-600', hex: '#0d9488' },
              { name: 'Ethereum', value: 15, color: 'bg-emerald-500', hex: '#10b981' },
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

