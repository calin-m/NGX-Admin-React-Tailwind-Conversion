import { useState, useEffect } from 'react';

/**
 * useTemperatureHumidity Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/data/temperature-humidity.ts
 */
export function useTemperatureHumidity() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) {
        setData({
          targetTemp: 24,
          humidity: '52%',
          airQuality: 'Good (98 AQI)',
          outdoorTemp: '18°C',
          fanSpeed: 'Med',
          modes: ['heat', 'cool', 'fan']
        });
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

export default useTemperatureHumidity;

