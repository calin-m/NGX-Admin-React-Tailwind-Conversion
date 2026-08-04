import { useState, useEffect } from 'react';

/**
 * useTrafficBar Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/mock/traffic-bar.service.ts
 */
export function useTrafficBar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) {
        // Domain traffic bar metrics from traffic-bar.service.ts
        setData([
          { day: 'Mon', value: 300, comparison: 250 },
          { day: 'Tue', value: 520, comparison: 480 },
          { day: 'Wed', value: 435, comparison: 410 },
          { day: 'Thu', value: 530, comparison: 500 },
          { day: 'Fri', value: 730, comparison: 690 },
          { day: 'Sat', value: 620, comparison: 580 },
          { day: 'Sun', value: 660, comparison: 600 }
        ]);
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

export default useTrafficBar;
