import { useState as useReactState, useEffect } from 'react';

/**
 * useAppState Custom Hook
 * Translated from Angular @Injectable() RxJS Service: state.service.ts
 */
export function useAppState(initialPeriod = 'week') {
  const [period, setPeriod] = useReactState(initialPeriod);
  const [data, setData] = useReactState([]);
  const [loading, setLoading] = useReactState(true);
  const [error, setError] = useReactState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) {
        setData([
          { id: 1, title: 'AppState Metric A', value: 1250, period },
          { id: 2, title: 'AppState Metric B', value: 3400, period },
          { id: 3, title: 'AppState Metric C', value: 8900, period }
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

export default useAppState;
