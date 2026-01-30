import { ThemeParsed } from './useThemeParser';
export type SyncStatus = 'idle' | 'syncing' | 'success' | 'error';
export interface SyncOptions {
    commitToGit?: boolean;
    commitMessage?: string;
}
export interface SyncResult {
    success: boolean;
    message: string;
    timestamp: Date;
}
export declare function useThemeSync(): {
    status: SyncStatus;
    lastSync: SyncResult | null;
    sync: (edits: Partial<ThemeParsed>, mode: "light" | "dark", _options?: SyncOptions) => Promise<SyncResult>;
    getSerializedEdits: (edits: Partial<ThemeParsed>, mode: "light" | "dark") => string;
    getDiff: (before: ThemeParsed, after: Partial<ThemeParsed>) => string;
    reset: () => void;
};
//# sourceMappingURL=useThemeSync.d.ts.map