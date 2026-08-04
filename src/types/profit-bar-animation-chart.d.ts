/**
 * TypeScript Data DTO Definitions for ProfitBarAnimationChart
 * Source Reference: @core/data/profit-bar-animation-chart.ts
 */

export interface ProfitBarAnimationChartItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface ProfitBarAnimationChartSummary {
  data: ProfitBarAnimationChartItem[];
  loading: boolean;
  error?: string | null;
}
