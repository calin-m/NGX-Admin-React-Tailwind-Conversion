/**
 * TypeScript Data DTO Definitions for MockData.module
 * Source Reference: @core/mock-data.module.ts
 */

export interface MockData.moduleItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface MockData.moduleSummary {
  data: MockData.moduleItem[];
  loading: boolean;
  error?: string | null;
}
