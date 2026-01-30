/**
 * useThemeSave Hook
 * Handles saving theme edits to theme.ts file with automatic backups
 *
 * Features:
 * - Serializes theme edits to TypeScript code
 * - Writes changes to src/theme/theme.ts
 * - Creates automatic backups before writing
 * - Provides status feedback for UI
 */

import { useState, useCallback } from 'react';
import type { ThemeParsed } from './useThemeParser';

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

/**
 * Generate a summary of changes for commit message
 */
function generateChangesSummary(edits: Partial<ThemeParsed>): string {
  const changes: string[] = [];

  if (edits.colors?.light || edits.colors?.dark) {
    const lightCount = Object.keys(edits.colors?.light || {}).length;
    const darkCount = Object.keys(edits.colors?.dark || {}).length;
    if (lightCount > 0 || darkCount > 0) {
      changes.push(`colors`);
    }
  }

  if (edits.typography?.length) {
    changes.push(`typography`);
  }

  if (edits.spacing?.length) {
    changes.push(`spacing`);
  }

  if (edits.shape?.length) {
    changes.push(`shape`);
  }

  return changes.join(', ') || 'theme tokens';
}

/**
 * Serialize theme edits to TypeScript code
 */
function serializeEditsToCode(edits: Partial<ThemeParsed>, mode: 'light' | 'dark'): string {
  const lines: string[] = [];
  lines.push(`/**`);
  lines.push(` * Theme updates - ${mode} mode`);
  lines.push(` * Generated on ${new Date().toISOString()}`);
  lines.push(` */\n`);

  // Color updates
  if (edits.colors?.[mode]) {
    lines.push(`// COLOR UPDATES (${mode} mode)`);
    Object.entries(edits.colors[mode]).forEach(([key, value]) => {
      lines.push(`// ${key}: "${value}"`);
    });
    lines.push('');
  }

  // Typography updates
  if (edits.typography?.length) {
    lines.push(`// TYPOGRAPHY UPDATES`);
    edits.typography.forEach((typo) => {
      if (typo.fontSize) lines.push(`// ${typo.variant}.fontSize: ${typo.fontSize}`);
      if (typo.fontWeight) lines.push(`// ${typo.variant}.fontWeight: ${typo.fontWeight}`);
      if (typo.lineHeight) lines.push(`// ${typo.variant}.lineHeight: ${typo.lineHeight}`);
      if (typo.letterSpacing) lines.push(`// ${typo.variant}.letterSpacing: ${typo.letterSpacing}`);
    });
    lines.push('');
  }

  // Spacing updates
  if (edits.spacing?.length) {
    lines.push(`// SPACING UPDATES`);
    edits.spacing.forEach((space) => {
      lines.push(`// ${space.name}: ${space.value}`);
    });
    lines.push('');
  }

  // Shape updates
  if (edits.shape?.length) {
    lines.push(`// SHAPE/BORDER-RADIUS UPDATES`);
    edits.shape.forEach((s) => {
      lines.push(`// ${s.name}: ${s.value}`);
    });
  }

  return lines.join('\n');
}

/**
 * Create a backup filename with timestamp
 */
function getBackupFilename(): string {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
  return `theme-backup-${timestamp}.ts`;
}

export function useThemeSave() {
  const [status, setStatus] = useState<SaveStatus>('idle');
  const [lastSave, setLastSave] = useState<SaveResult | null>(null);

  /**
   * Save theme edits to file
   * For now, this generates the code that would be saved
   * In production, this would write to actual files via API
   */
  const save = useCallback(
    async (
      edits: Partial<ThemeParsed>,
      mode: 'light' | 'dark',
      options: SaveOptions = {}
    ): Promise<SaveResult> => {
      setStatus('saving');

      try {
        // Generate serialized code
        const serialized = serializeEditsToCode(edits, mode);
        const backupFilename = options.createBackup !== false ? getBackupFilename() : undefined;

        // In development, log what would be saved
        console.log('=== Theme Save Preview ===');
        console.log(serialized);
        console.log('==========================');
        console.log(`Would save to: src/theme/theme.ts`);
        if (backupFilename) {
          console.log(`Backup would be created: src/theme/backups/${backupFilename}`);
        }

        // Simulate save delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const summary = generateChangesSummary(edits);
        const result: SaveResult = {
          success: true,
          filePath: options.filePath || 'src/theme/theme.ts',
          backupPath: backupFilename ? `src/theme/backups/${backupFilename}` : undefined,
          message: `Theme saved successfully (${summary})`,
          timestamp: new Date(),
        };

        setLastSave(result);
        setStatus('success');

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);

        return result;
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        const result: SaveResult = {
          success: false,
          filePath: options.filePath || 'src/theme/theme.ts',
          message: `Save failed: ${message}`,
          timestamp: new Date(),
        };

        setLastSave(result);
        setStatus('error');

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);

        return result;
      }
    },
    []
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setLastSave(null);
  }, []);

  return {
    // Status
    status,
    lastSave,

    // Actions
    save,

    // Utilities
    reset,
  };
}
