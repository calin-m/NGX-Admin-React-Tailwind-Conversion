import { useState, useEffect } from 'react';

/**
 * useTrafficChart Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/mock/traffic-chart.service.ts
 */
export function useTrafficChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) {
        // Domain traffic series from traffic-chart.service.ts
        setData([300, 520, 435, 530, 730, 620, 660, 860]);
        setLoading(false);
      }
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return {
    data,
    loading,
    error
  };
}

export default useTrafficChart;
