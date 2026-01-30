/**
 * useFileSystem Hook
 * Shared utilities for file system operations
 *
 * Provides helpers for:
 * - Validating file permissions
 * - Creating backups
 * - Generating change summaries
 */

import { useCallback } from 'react';
import type { ThemeParsed } from './useThemeParser';

export interface FileSystemOptions {
  checkPermissions?: boolean;
  createBackup?: boolean;
  backupDir?: string;
}

export function useFileSystem() {
  /**
   * Validate that we have write permissions to the file
   * In production, this would be checked via API
   */
  const validateFilePermissions = useCallback(
    async (filePath: string): Promise<boolean> => {
      // In development, always return true
      // In production, would check via API endpoint
      console.log(`[Mock] Checking permissions for: ${filePath}`);
      return true;
    },
    []
  );

  /**
   * Create a backup of a file
   * Returns the backup path if created
   */
  const createBackup = useCallback(
    async (
      sourceFilePath: string,
      backupDir: string = 'src/theme/backups'
    ): Promise<string | null> => {
      try {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const fileName = sourceFilePath.split('/').pop() || 'file.ts';
        const backupFileName = fileName.replace('.ts', `-backup-${timestamp}.ts`);
        const backupPath = `${backupDir}/${backupFileName}`;

        console.log(`[Mock] Creating backup: ${sourceFilePath} -> ${backupPath}`);

        // In production, would actually copy the file via API
        // For now, just return the path that would be created
        return backupPath;
      } catch (error) {
        console.error('Failed to create backup:', error);
        return null;
      }
    },
    []
  );

  /**
   * Generate a concise summary of theme changes
   * Used for git commit messages
   */
  const generateChangesSummary = useCallback((edits: Partial<ThemeParsed>): string => {
    const changes: string[] = [];

    // Count color changes
    if (edits.colors) {
      const lightCount = Object.keys(edits.colors.light || {}).length;
      const darkCount = Object.keys(edits.colors.dark || {}).length;
      if (lightCount > 0 || darkCount > 0) {
        changes.push(`colors (${lightCount + darkCount})`);
      }
    }

    // Count typography changes
    if (edits.typography?.length) {
      changes.push(`typography (${edits.typography.length} variants)`);
    }

    // Count spacing changes
    if (edits.spacing?.length) {
      changes.push(`spacing (${edits.spacing.length} levels)`);
    }

    // Count shape changes
    if (edits.shape?.length) {
      changes.push(`shape (${edits.shape.length} radius values)`);
    }

    const summary = changes.join(', ');
    return summary || 'theme updates';
  }, []);

  /**
   * Generate a detailed commit message
   */
  const generateCommitMessage = useCallback(
    (edits: Partial<ThemeParsed>, mode: 'light' | 'dark'): string => {
      const summary = generateChangesSummary(edits);
      return `Theme update: ${summary} (${mode} mode)`;
    },
    [generateChangesSummary]
  );

  /**
   * Format file size for display
   */
  const formatFileSize = useCallback((bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }, []);

  /**
   * Validate TypeScript syntax (basic check)
   */
  const validateTypeScriptSyntax = useCallback((code: string): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];

    // Basic checks
    if (!code.trim()) {
      errors.push('Code is empty');
    }

    // Check for common syntax issues
    const bracketPairs = [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
    ];

    for (const pair of bracketPairs) {
      const openCount = (code.match(new RegExp(`\\${pair.open}`, 'g')) || []).length;
      const closeCount = (code.match(new RegExp(`\\${pair.close}`, 'g')) || []).length;
      if (openCount !== closeCount) {
        errors.push(`Mismatched ${pair.open}${pair.close} brackets`);
      }
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }, []);

  return {
    validateFilePermissions,
    createBackup,
    generateChangesSummary,
    generateCommitMessage,
    formatFileSize,
    validateTypeScriptSyntax,
  };
}
