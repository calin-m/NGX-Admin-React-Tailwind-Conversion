/**
 * TypeScript Data DTO Definitions for StatsBar
 * Source Reference: @core/data/stats-bar.ts
 */

export interface StatsBarItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface StatsBarSummary {
  data: StatsBarItem[];
  loading: boolean;
  error?: string | null;
}
