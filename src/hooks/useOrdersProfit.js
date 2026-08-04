import useOrdersProfitChart from './useOrdersProfitChart.js';

export function useOrdersProfit(initialPeriod = 'week') {
  return useOrdersProfitChart(initialPeriod);
}

export default useOrdersProfit;
