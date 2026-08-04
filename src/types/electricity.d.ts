/**
 * TypeScript Data DTO Definitions for Electricity
 * Source Reference: @core/data/electricity.ts
 */

export interface ElectricityItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface ElectricitySummary {
  data: ElectricityItem[];
  loading: boolean;
  error?: string | null;
}
