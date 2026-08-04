/**
 * TypeScript Data DTO Definitions for Analytics
 * Source Reference: @core/analytics.service.ts
 */

export interface AnalyticsItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface AnalyticsSummary {
  data: AnalyticsItem[];
  loading: boolean;
  error?: string | null;
}
