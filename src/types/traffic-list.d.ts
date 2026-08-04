/**
 * TypeScript Data DTO Definitions for TrafficList
 * Source Reference: @core/data/traffic-list.ts
 */

export interface TrafficListItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface TrafficListSummary {
  data: TrafficListItem[];
  loading: boolean;
  error?: string | null;
}
