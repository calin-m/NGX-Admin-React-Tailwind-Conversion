/**
 * TypeScript Data DTO Definitions for Periods
 * Source Reference: @core/periods.service.ts
 */

export interface PeriodsItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface PeriodsSummary {
  data: PeriodsItem[];
  loading: boolean;
  error?: string | null;
}
