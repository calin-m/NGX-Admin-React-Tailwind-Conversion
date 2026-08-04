/**
 * TypeScript Data DTO Definitions for StatsProgressBar
 * Source Reference: @core/data/stats-progress-bar.ts
 */

export interface StatsProgressBarItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface StatsProgressBarSummary {
  data: StatsProgressBarItem[];
  loading: boolean;
  error?: string | null;
}
