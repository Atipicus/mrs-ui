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

import { useState, useCallback } from 'react';

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
  undoUntil: Date; // now + 5 minutes
  timestamp: Date;
}

export interface RevertResult {
  success: boolean;
  message: string;
  revertHash?: string;
  timestamp: Date;
}

/**
 * Check if undo is still possible
 */
function isUndoStillValid(undoUntil: Date): boolean {
  return Date.now() < undoUntil.getTime();
}

export function useGitIntegration() {
  const [status, setStatus] = useState<GitStatus>('idle');
  const [lastCommit, setLastCommit] = useState<GitResult | null>(null);
  const [lastRevert, setLastRevert] = useState<RevertResult | null>(null);

  /**
   * Commit changes to git
   * Returns commit hash and undo deadline
   */
  const commit = useCallback(async (options: GitCommitOptions): Promise<GitResult> => {
    setStatus('committing');

    try {
      // In development, simulate commit
      // In production, this would call an API endpoint that executes git commands
      const mockCommitHash = Math.random().toString(16).slice(2, 9);
      const undoDeadline = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now

      console.log('=== Git Commit Preview ===');
      console.log(`git add .`);
      console.log(`git commit -m "${options.message}"`);
      console.log(`Commit hash: ${mockCommitHash}`);
      console.log('========================');

      // Simulate commit delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const result: GitResult = {
        success: true,
        commitHash: mockCommitHash,
        message: `Committed: ${options.message}`,
        canUndo: true,
        undoUntil: undoDeadline,
        timestamp: new Date(),
      };

      setLastCommit(result);
      setStatus('success');

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);

      return result;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      const result: GitResult = {
        success: false,
        commitHash: '',
        message: `Commit failed: ${message}`,
        canUndo: false,
        undoUntil: new Date(),
        timestamp: new Date(),
      };

      setLastCommit(result);
      setStatus('error');

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);

      return result;
    }
  }, []);

  /**
   * Undo (revert) a commit
   * Only valid within 5-minute window
   */
  const undo = useCallback(
    async (commitHash: string): Promise<RevertResult> => {
      if (!lastCommit || !isUndoStillValid(lastCommit.undoUntil)) {
        const result: RevertResult = {
          success: false,
          message: 'Undo window has expired (5 minutes)',
          timestamp: new Date(),
        };
        setLastRevert(result);
        return result;
      }

      setStatus('reverting');

      try {
        // In development, simulate revert
        // In production, this would call an API endpoint that executes git revert
        const mockRevertHash = Math.random().toString(16).slice(2, 9);

        console.log('=== Git Revert Preview ===');
        console.log(`git revert ${commitHash}`);
        console.log(`Revert hash: ${mockRevertHash}`);
        console.log('========================');

        // Simulate revert delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const result: RevertResult = {
          success: true,
          message: `Reverted commit ${commitHash}`,
          revertHash: mockRevertHash,
          timestamp: new Date(),
        };

        setLastRevert(result);
        setLastCommit(null); // Clear commit after successful revert
        setStatus('success');

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);

        return result;
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        const result: RevertResult = {
          success: false,
          message: `Revert failed: ${message}`,
          timestamp: new Date(),
        };

        setLastRevert(result);
        setStatus('error');

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);

        return result;
      }
    },
    [lastCommit]
  );

  /**
   * Check if undo is still possible
   */
  const canUndo = useCallback((): boolean => {
    if (!lastCommit) return false;
    return isUndoStillValid(lastCommit.undoUntil);
  }, [lastCommit]);

  /**
   * Get remaining undo time in seconds
   */
  const getUndoTimeRemaining = useCallback((): number => {
    if (!lastCommit) return 0;
    const remaining = lastCommit.undoUntil.getTime() - Date.now();
    return Math.max(0, Math.ceil(remaining / 1000));
  }, [lastCommit]);

  const reset = useCallback(() => {
    setStatus('idle');
    setLastCommit(null);
    setLastRevert(null);
  }, []);

  return {
    // Status
    status,
    lastCommit,
    lastRevert,

    // Actions
    commit,
    undo,

    // Utilities
    canUndo,
    getUndoTimeRemaining,

    // Reset
    reset,
  };
}
