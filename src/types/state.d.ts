/**
 * TypeScript Data DTO Definitions for State
 * Source Reference: @core/state.service.ts
 */

export interface StateItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface StateSummary {
  data: StateItem[];
  loading: boolean;
  error?: string | null;
}
