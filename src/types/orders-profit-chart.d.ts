/**
 * TypeScript Data DTO Definitions for OrdersProfitChart
 * Source Reference: @core/data/orders-profit-chart.ts
 */

export interface OrdersProfitChartItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface OrdersProfitChartSummary {
  data: OrdersProfitChartItem[];
  loading: boolean;
  error?: string | null;
}
