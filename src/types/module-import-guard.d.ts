/**
 * TypeScript Data DTO Definitions for ModuleImportGuard
 * Source Reference: @core/module-import-guard.ts
 */

export interface ModuleImportGuardItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface ModuleImportGuardSummary {
  data: ModuleImportGuardItem[];
  loading: boolean;
  error?: string | null;
}
