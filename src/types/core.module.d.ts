/**
 * TypeScript Data DTO Definitions for Core.module
 * Source Reference: @core/core.module.ts
 */

export interface Core.moduleItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface Core.moduleSummary {
  data: Core.moduleItem[];
  loading: boolean;
  error?: string | null;
}
