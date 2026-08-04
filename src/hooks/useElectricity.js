import { useState, useEffect } from 'react';

/**
 * useElectricity Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/data/electricity.ts
 */
export function useElectricity(initialPeriod = 'week') {
  const [period, setPeriod] = useState(initialPeriod);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    // Simulate reactive data fetching
    const timer = setTimeout(() => {
      if (isMounted) {
        setData([
          { id: 1, title: 'Electricity Metric A', value: 1250, period },
          { id: 2, title: 'Electricity Metric B', value: 3400, period },
          { id: 3, title: 'Electricity Metric C', value: 8900, period }
        ]);
        setLoading(false);
      }
    }, 150);

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

export default useElectricity;
