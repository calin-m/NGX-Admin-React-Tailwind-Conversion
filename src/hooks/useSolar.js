import { useState, useEffect } from 'react';

/**
 * useSolar Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/data/solar.ts
 */
export function useSolar(initialMode = 'solar') {
  const [mode, setMode] = useState(initialMode);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) {
        const modeData = {
          solar: {
            title: 'Solar Energy Output',
            subtitle: 'Rooftop Solar Panel Production',
            value: '84%',
            label: 'Panel Efficiency',
            energy: '4.2 kWh Generated',
            subtext: 'Peak Sun Hours: 6.5 hrs',
            progressColor: 'border-emerald-500',
            textColor: 'text-emerald-600 dark:text-emerald-400'
          },
          battery: {
            title: 'Battery Energy Storage',
            subtitle: 'Home Battery Wall Capacity',
            value: '92%',
            label: 'Charge Level',
            energy: '11.8 kWh Stored',
            subtext: 'Backup Duration: 14 hrs',
            progressColor: 'border-indigo-500',
            textColor: 'text-indigo-600 dark:text-indigo-400'
          }
        };

        setData(modeData[mode] || modeData.solar);
        setLoading(false);
      }
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [mode]);

  return {
    data,
    loading,
    error,
    mode,
    setMode
  };
}

export default useSolar;

