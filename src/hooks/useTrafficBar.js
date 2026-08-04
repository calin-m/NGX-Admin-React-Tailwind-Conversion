import { useState, useEffect } from 'react';

/**
 * useTrafficBar Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/data/traffic-bar.ts
 */
export function useTrafficBar(initialPeriod = 'week') {
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
          { id: 1, title: 'TrafficBar Metric A', value: 1250, period },
          { id: 2, title: 'TrafficBar Metric B', value: 3400, period },
          { id: 3, title: 'TrafficBar Metric C', value: 8900, period }
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

export default useTrafficBar;
