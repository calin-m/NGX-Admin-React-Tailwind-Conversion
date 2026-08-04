/**
 * TypeScript Data DTO Definitions for Solar
 * Source Reference: @core/data/solar.ts
 */

export interface SolarItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface SolarSummary {
  data: SolarItem[];
  loading: boolean;
  error?: string | null;
}
