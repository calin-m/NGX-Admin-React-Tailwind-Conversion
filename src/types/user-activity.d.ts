/**
 * TypeScript Data DTO Definitions for UserActivity
 * Source Reference: @core/data/user-activity.ts
 */

export interface UserActivityItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface UserActivitySummary {
  data: UserActivityItem[];
  loading: boolean;
  error?: string | null;
}
