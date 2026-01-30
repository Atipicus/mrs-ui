import { ThemeParsed } from './useThemeParser';
export type SaveStatus = 'idle' | 'saving' | 'success' | 'error';
export interface SaveOptions {
    filePath?: string;
    createBackup?: boolean;
    backupDir?: string;
}
export interface SaveResult {
    success: boolean;
    filePath: string;
    backupPath?: string;
    message: string;
    timestamp: Date;
}
export declare function useThemeSave(): {
    status: SaveStatus;
    lastSave: SaveResult | null;
    save: (edits: Partial<ThemeParsed>, mode: "light" | "dark", options?: SaveOptions) => Promise<SaveResult>;
    reset: () => void;
};
//# sourceMappingURL=useThemeSave.d.ts.map