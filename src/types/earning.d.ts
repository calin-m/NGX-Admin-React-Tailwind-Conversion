/**
 * TypeScript Data DTO Definitions for Earning
 * Source Reference: @core/data/earning.ts
 */

export interface EarningItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface EarningSummary {
  data: EarningItem[];
  loading: boolean;
  error?: string | null;
}
