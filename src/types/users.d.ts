/**
 * TypeScript Data DTO Definitions for Users
 * Source Reference: @core/data/users.ts
 */

export interface UsersItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface UsersSummary {
  data: UsersItem[];
  loading: boolean;
  error?: string | null;
}
