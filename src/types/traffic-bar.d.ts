/**
 * TypeScript Data DTO Definitions for TrafficBar
 * Source Reference: @core/data/traffic-bar.ts
 */

export interface TrafficBarItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface TrafficBarSummary {
  data: TrafficBarItem[];
  loading: boolean;
  error?: string | null;
}
