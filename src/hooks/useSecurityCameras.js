import { useState, useEffect } from 'react';

/**
 * useSecurityCameras Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/data/security-cameras.ts
 */
export function useSecurityCameras(initialPeriod = 'week') {
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
          { id: 1, title: 'SecurityCameras Metric A', value: 1250, period },
          { id: 2, title: 'SecurityCameras Metric B', value: 3400, period },
          { id: 3, title: 'SecurityCameras Metric C', value: 8900, period }
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

export default useSecurityCameras;
