import { useState, useEffect } from 'react';

/**
 * useVisitorsAnalytics Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/data/visitors-analytics.ts
 */
const visitorsDataMap = {
  week: {
    totalVisits: '15,100',
    avgSession: '4m 32s',
    bounceRate: '28.4%',
    newUsers: '68.2%',
    chartPoints: [
      { label: 'Mon', pageViews: 1200, uniqueVisitors: 850 },
      { label: 'Tue', pageViews: 1900, uniqueVisitors: 1200 },
      { label: 'Wed', pageViews: 1500, uniqueVisitors: 980 },
      { label: 'Thu', pageViews: 2400, uniqueVisitors: 1650 },
      { label: 'Fri', pageViews: 2100, uniqueVisitors: 1400 },
      { label: 'Sat', pageViews: 2800, uniqueVisitors: 1950 },
      { label: 'Sun', pageViews: 3200, uniqueVisitors: 2300 }
    ]
  },
  month: {
    totalVisits: '64,800',
    avgSession: '5m 14s',
    bounceRate: '24.1%',
    newUsers: '72.5%',
    chartPoints: [
      { label: 'W1', pageViews: 12400, uniqueVisitors: 8900 },
      { label: 'W2', pageViews: 16800, uniqueVisitors: 11400 },
      { label: 'W3', pageViews: 14500, uniqueVisitors: 9800 },
      { label: 'W4', pageViews: 21100, uniqueVisitors: 15200 }
    ]
  },
  year: {
    totalVisits: '840,000',
    avgSession: '5m 48s',
    bounceRate: '21.8%',
    newUsers: '78.4%',
    chartPoints: [
      { label: 'Q1', pageViews: 184000, uniqueVisitors: 128000 },
      { label: 'Q2', pageViews: 224000, uniqueVisitors: 159000 },
      { label: 'Q3', pageViews: 201000, uniqueVisitors: 142000 },
      { label: 'Q4', pageViews: 295000, uniqueVisitors: 215000 }
    ]
  }
};

export function useVisitorsAnalytics(initialPeriod = 'week') {
  const [period, setPeriod] = useState(initialPeriod);
  const [data, setData] = useState(visitorsDataMap[initialPeriod] || visitorsDataMap.week);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(visitorsDataMap[period] || visitorsDataMap.week);
  }, [period]);

  return {
    data,
    loading,
    error,
    period,
    setPeriod
  };
}

export default useVisitorsAnalytics;
