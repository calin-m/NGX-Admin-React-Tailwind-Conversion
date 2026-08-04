/**
 * TypeScript Data DTO Definitions for Layout
 * Source Reference: @core/layout.service.ts
 */

export interface LayoutItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface LayoutSummary {
  data: LayoutItem[];
  loading: boolean;
  error?: string | null;
}
