import { default as React } from 'react';
interface SyncDialogProps {
    open: boolean;
    onClose: () => void;
    isLoading?: boolean;
    status?: 'idle' | 'syncing' | 'success' | 'error';
    commitHash?: string | null | undefined;
    error?: string;
}
export declare const SyncDialog: React.FC<SyncDialogProps>;
export {};
//# sourceMappingURL=SyncDialog.d.ts.map