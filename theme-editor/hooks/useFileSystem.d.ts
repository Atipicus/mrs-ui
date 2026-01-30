import { ThemeParsed } from './useThemeParser';
export interface FileSystemOptions {
    checkPermissions?: boolean;
    createBackup?: boolean;
    backupDir?: string;
}
export declare function useFileSystem(): {
    validateFilePermissions: (filePath: string) => Promise<boolean>;
    createBackup: (sourceFilePath: string, backupDir?: string) => Promise<string | null>;
    generateChangesSummary: (edits: Partial<ThemeParsed>) => string;
    generateCommitMessage: (edits: Partial<ThemeParsed>, mode: "light" | "dark") => string;
    formatFileSize: (bytes: number) => string;
    validateTypeScriptSyntax: (code: string) => {
        valid: boolean;
        errors: string[];
    };
};
//# sourceMappingURL=useFileSystem.d.ts.map