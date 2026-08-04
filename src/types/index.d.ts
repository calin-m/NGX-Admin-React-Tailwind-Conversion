/**
 * TypeScript Data DTO Definitions for Index
 * Source Reference: @core/index.ts
 */

export interface IndexItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface IndexSummary {
  data: IndexItem[];
  loading: boolean;
  error?: string | null;
}
