/**
 * TypeScript Data DTO Definitions for ProfitChart
 * Source Reference: @core/data/profit-chart.ts
 */

export interface ProfitChartItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface ProfitChartSummary {
  data: ProfitChartItem[];
  loading: boolean;
  error?: string | null;
}
