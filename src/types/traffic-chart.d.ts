/**
 * TypeScript Data DTO Definitions for TrafficChart
 * Source Reference: @core/data/traffic-chart.ts
 */

export interface TrafficChartItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface TrafficChartSummary {
  data: TrafficChartItem[];
  loading: boolean;
  error?: string | null;
}
