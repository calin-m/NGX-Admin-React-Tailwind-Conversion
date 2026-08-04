/**
 * TypeScript Data DTO Definitions for VisitorsAnalytics
 * Source Reference: @core/data/visitors-analytics.ts
 */

export interface VisitorsAnalyticsItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface VisitorsAnalyticsSummary {
  data: VisitorsAnalyticsItem[];
  loading: boolean;
  error?: string | null;
}
