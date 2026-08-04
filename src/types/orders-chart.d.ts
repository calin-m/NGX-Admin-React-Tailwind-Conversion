/**
 * TypeScript Data DTO Definitions for OrdersChart
 * Source Reference: @core/data/orders-chart.ts
 */

export interface OrdersChartItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface OrdersChartSummary {
  data: OrdersChartItem[];
  loading: boolean;
  error?: string | null;
}
