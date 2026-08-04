/**
 * TypeScript Data DTO Definitions for CountryOrder
 * Source Reference: @core/data/country-order.ts
 */

export interface CountryOrderItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface CountryOrderSummary {
  data: CountryOrderItem[];
  loading: boolean;
  error?: string | null;
}
