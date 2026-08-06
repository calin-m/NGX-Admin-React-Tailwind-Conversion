import { useState, useEffect } from 'react';

const yearDatasets = {
  '2025': {
    totalKwh: '3,840 kWh',
    avgCost: '$537 / year',
    usage: [
      { month: 'Jan', kwh: 380 },
      { month: 'Feb', kwh: 340 },
      { month: 'Mar', kwh: 390 },
      { month: 'Apr', kwh: 280 },
      { month: 'May', kwh: 270 },
      { month: 'Jun', kwh: 480 },
      { month: 'Jul', kwh: 550 },
      { month: 'Aug', kwh: 570 },
      { month: 'Sep', kwh: 410 },
      { month: 'Oct', kwh: 360 },
      { month: 'Nov', kwh: 350 },
      { month: 'Dec', kwh: 400 }
    ]
  },
  '2026': {
    totalKwh: '2,980 kWh YTD',
    avgCost: '$417 YTD',
    usage: [
      { month: 'Jan', kwh: 420 },
      { month: 'Feb', kwh: 380 },
      { month: 'Mar', kwh: 450 },
      { month: 'Apr', kwh: 310 },
      { month: 'May', kwh: 290 },
      { month: 'Jun', kwh: 520 },
      { month: 'Jul', kwh: 610 }
    ]
  }
};

/**
 * useElectricity Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/data/electricity.ts
 */
export function useElectricity(initialYear = '2026') {
  const [year, setYear] = useState(initialYear);
  const [data, setData] = useState(() => yearDatasets[initialYear] || yearDatasets['2026']);
  const [loading, setLoading] = useState(false);
  const [error] = useState(null);

  useEffect(() => {
    setData(yearDatasets[year] || yearDatasets['2026']);
  }, [year]);

  return {
    data,
    loading,
    error,
    year,
    setYear
  };
}

export default useElectricity;
