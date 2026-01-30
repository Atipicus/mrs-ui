/**
 * useGitIntegration Hook
 * Handles Git operations: commit, revert (undo)
 *
 * Features:
 * - Creates commits with theme change summaries
 * - Supports undo via git revert (5-minute window)
 * - Provides status feedback for UI
 * - Tracks commit hashes and undo deadlines
 */
export type GitStatus = 'idle' | 'committing' | 'reverting' | 'success' | 'error';
export interface GitCommitOptions {
    message: string;
    filepaths?: string[];
    author?: string;
}
export interface GitResult {
    success: boolean;
    commitHash: string;
    message: string;
    canUndo: boolean;
    undoUntil: Date;
    timestamp: Date;
}
export interface RevertResult {
    success: boolean;
    message: string;
    revertHash?: string;
    timestamp: Date;
}
export declare function useGitIntegration(): {
    status: GitStatus;
    lastCommit: GitResult | null;
    lastRevert: RevertResult | null;
    commit: (options: GitCommitOptions) => Promise<GitResult>;
    undo: (commitHash: string) => Promise<RevertResult>;
    canUndo: () => boolean;
    getUndoTimeRemaining: () => number;
    reset: () => void;
};
//# sourceMappingURL=useGitIntegration.d.ts.map