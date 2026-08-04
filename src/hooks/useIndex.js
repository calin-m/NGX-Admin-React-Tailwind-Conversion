import { useState, useEffect } from 'react';

/**
 * useIndex Custom Hook
 * Translated from Angular @Injectable() RxJS Service: index.ts
 */
export function useIndex(initialPeriod = 'week') {
  const [period, setPeriod] = useState(initialPeriod);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) {
        setData([
          { id: 1, title: 'Index Metric A', value: 1250, period },
          { id: 2, title: 'Index Metric B', value: 3400, period },
          { id: 3, title: 'Index Metric C', value: 8900, period }
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

export default useIndex;
