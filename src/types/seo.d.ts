/**
 * TypeScript Data DTO Definitions for Seo
 * Source Reference: @core/seo.service.ts
 */

export interface SeoItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface SeoSummary {
  data: SeoItem[];
  loading: boolean;
  error?: string | null;
}
