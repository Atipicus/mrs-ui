import { default as React } from 'react';
import { ThemeParsed } from '../hooks/useThemeParser';
interface SaveDialogProps {
    open: boolean;
    onConfirm: () => Promise<void>;
    onCancel: () => void;
    edits: Partial<ThemeParsed>;
    mode: 'light' | 'dark';
    isLoading?: boolean;
}
export declare const SaveDialog: React.FC<SaveDialogProps>;
export {};
//# sourceMappingURL=SaveDialog.d.ts.map