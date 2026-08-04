/**
 * TypeScript Data DTO Definitions for Player
 * Source Reference: @core/player.service.ts
 */

export interface PlayerItem {
  id?: string | number;
  title?: string;
  value?: number;
  date?: string;
  [key: string]: any;
}

export interface PlayerSummary {
  data: PlayerItem[];
  loading: boolean;
  error?: string | null;
}
