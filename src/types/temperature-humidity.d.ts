/**
 * TypeScript Data DTO Definitions for TemperatureHumidity
 * Source Reference: @core/data/temperature-humidity.ts
 */

export interface TemperatureHumidityItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface TemperatureHumiditySummary {
  data: TemperatureHumidityItem[];
  loading: boolean;
  error?: string | null;
}
