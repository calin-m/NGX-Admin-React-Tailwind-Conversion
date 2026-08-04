/**
 * TypeScript Data DTO Definitions for SmartTable
 * Source Reference: @core/data/smart-table.ts
 */

export interface SmartTableItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface SmartTableSummary {
  data: SmartTableItem[];
  loading: boolean;
  error?: string | null;
}
