import { useState, useEffect } from 'react';

/**
 * useUserActivity Custom Hook
 * Translated from Angular @Injectable() RxJS Service: @core/mock/user-activity.service.ts
 */
export function useUserActivity(initialPeriod = 'week') {
  const [period, setPeriod] = useState(initialPeriod);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) {
        const activityData = {
          week: [
            { date: 'Mon', pagesVisitCount: 420, deltaUp: true, newVisits: 85 },
            { date: 'Tue', pagesVisitCount: 680, deltaUp: true, newVisits: 110 },
            { date: 'Wed', pagesVisitCount: 510, deltaUp: false, newVisits: 90 },
            { date: 'Thu', pagesVisitCount: 790, deltaUp: true, newVisits: 140 },
            { date: 'Fri', pagesVisitCount: 920, deltaUp: true, newVisits: 180 },
            { date: 'Sat', pagesVisitCount: 840, deltaUp: false, newVisits: 150 },
            { date: 'Sun', pagesVisitCount: 990, deltaUp: true, newVisits: 210 }
          ],
          month: [
            { date: 'Week 1', pagesVisitCount: 2800, deltaUp: true, newVisits: 450 },
            { date: 'Week 2', pagesVisitCount: 3400, deltaUp: true, newVisits: 580 },
            { date: 'Week 3', pagesVisitCount: 3100, deltaUp: false, newVisits: 490 },
            { date: 'Week 4', pagesVisitCount: 4200, deltaUp: true, newVisits: 720 }
          ],
          year: [
            { date: 'Q1', pagesVisitCount: 18500, deltaUp: true, newVisits: 2900 },
            { date: 'Q2', pagesVisitCount: 24100, deltaUp: true, newVisits: 3800 },
            { date: 'Q3', pagesVisitCount: 29800, deltaUp: true, newVisits: 4600 },
            { date: 'Q4', pagesVisitCount: 38400, deltaUp: true, newVisits: 6100 }
          ]
        };

        setData(activityData[period] || activityData.week);
        setLoading(false);
      }
    }, 100);

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

export default useUserActivity;
