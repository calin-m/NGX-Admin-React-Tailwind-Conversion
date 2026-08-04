/**
 * TypeScript Data DTO Definitions for SecurityCameras
 * Source Reference: @core/data/security-cameras.ts
 */

export interface SecurityCamerasItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface SecurityCamerasSummary {
  data: SecurityCamerasItem[];
  loading: boolean;
  error?: string | null;
}
