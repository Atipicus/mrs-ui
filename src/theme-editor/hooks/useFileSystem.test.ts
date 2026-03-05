/**
 * useFileSystem Hook Tests
 * @package @mrs/ui
 */

import { renderHook, act } from '@testing-library/react';
import { useFileSystem } from './useFileSystem';

describe('useFileSystem', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('validateFilePermissions', () => {
    it('returns true for any file path (mock always allows)', async () => {
      const { result } = renderHook(() => useFileSystem());

      let permitted: boolean = false;
      await act(async () => {
        permitted = await result.current.validateFilePermissions('src/theme/theme.ts');
      });

      expect(permitted).toBe(true);
    });

    it('logs the file path being checked', async () => {
      const { result } = renderHook(() => useFileSystem());

      await act(async () => {
        await result.current.validateFilePermissions('src/theme/tokens.ts');
      });

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining('src/theme/tokens.ts')
      );
    });
  });

  describe('createBackup', () => {
    it('returns a backup path string', async () => {
      const { result } = renderHook(() => useFileSystem());

      let backupPath: string | null = null;
      await act(async () => {
        backupPath = await result.current.createBackup('src/theme/theme.ts');
      });

      expect(backupPath).not.toBeNull();
      expect(typeof backupPath).toBe('string');
      expect(backupPath).toContain('backup');
    });

    it('uses default backupDir when not provided', async () => {
      const { result } = renderHook(() => useFileSystem());

      let backupPath: string | null = null;
      await act(async () => {
        backupPath = await result.current.createBackup('src/theme/theme.ts');
      });

      expect(backupPath).toContain('src/theme/backups');
    });

    it('uses custom backupDir when provided', async () => {
      const { result } = renderHook(() => useFileSystem());

      let backupPath: string | null = null;
      await act(async () => {
        backupPath = await result.current.createBackup('src/theme/theme.ts', 'my/backups');
      });

      expect(backupPath).toContain('my/backups');
    });

    it('includes timestamp in backup file name', async () => {
      const { result } = renderHook(() => useFileSystem());

      let backupPath: string | null = null;
      await act(async () => {
        backupPath = await result.current.createBackup('src/theme/theme.ts');
      });

      expect(backupPath).toContain('-backup-');
    });

    it('handles files without .ts extension', async () => {
      const { result } = renderHook(() => useFileSystem());

      let backupPath: string | null = null;
      await act(async () => {
        backupPath = await result.current.createBackup('src/theme/file.json');
      });

      expect(backupPath).not.toBeNull();
    });
  });

  describe('generateChangesSummary', () => {
    it('returns "theme updates" for empty edits', () => {
      const { result } = renderHook(() => useFileSystem());
      expect(result.current.generateChangesSummary({})).toBe('theme updates');
    });

    it('includes color count when colors are present', () => {
      const { result } = renderHook(() => useFileSystem());
      const summary = result.current.generateChangesSummary({
        colors: {
          light: { 'primary.main': '#ff0000', 'secondary.main': '#00ff00' },
          dark: {},
        },
      });
      expect(summary).toContain('colors (2)');
    });

    it('combines light and dark color counts', () => {
      const { result } = renderHook(() => useFileSystem());
      const summary = result.current.generateChangesSummary({
        colors: {
          light: { 'primary.main': '#ff0000' },
          dark: { 'primary.main': '#cc0000' },
        },
      });
      expect(summary).toContain('colors (2)');
    });

    it('includes typography count', () => {
      const { result } = renderHook(() => useFileSystem());
      const summary = result.current.generateChangesSummary({
        typography: [
          { variant: 'h1', fontSize: 60 },
          { variant: 'body1', fontSize: 16 },
        ],
      });
      expect(summary).toContain('typography (2 variants)');
    });

    it('includes spacing count', () => {
      const { result } = renderHook(() => useFileSystem());
      const summary = result.current.generateChangesSummary({
        spacing: [{ name: 'spacing-1', value: 8 }],
      });
      expect(summary).toContain('spacing (1 levels)');
    });

    it('includes shape count', () => {
      const { result } = renderHook(() => useFileSystem());
      const summary = result.current.generateChangesSummary({
        shape: [{ name: 'sm', value: 4 }, { name: 'md', value: 8 }],
      });
      expect(summary).toContain('shape (2 radius values)');
    });

    it('combines all change types in summary', () => {
      const { result } = renderHook(() => useFileSystem());
      const summary = result.current.generateChangesSummary({
        colors: { light: { 'primary.main': '#ff0000' }, dark: {} },
        typography: [{ variant: 'h1' }],
        spacing: [{ name: 's1', value: 8 }],
        shape: [{ name: 'sm', value: 4 }],
      });
      expect(summary).toContain('colors');
      expect(summary).toContain('typography');
      expect(summary).toContain('spacing');
      expect(summary).toContain('shape');
    });

    it('returns empty summary when colors exist but both light and dark are empty', () => {
      const { result } = renderHook(() => useFileSystem());
      const summary = result.current.generateChangesSummary({
        colors: { light: {}, dark: {} },
      });
      expect(summary).toBe('theme updates');
    });
  });

  describe('generateCommitMessage', () => {
    it('generates message with summary and mode', () => {
      const { result } = renderHook(() => useFileSystem());
      const msg = result.current.generateCommitMessage(
        { colors: { light: { 'primary.main': '#ff0000' }, dark: {} } },
        'light'
      );
      expect(msg).toContain('Theme update:');
      expect(msg).toContain('light mode');
    });

    it('includes dark mode in message', () => {
      const { result } = renderHook(() => useFileSystem());
      const msg = result.current.generateCommitMessage({}, 'dark');
      expect(msg).toContain('dark mode');
    });
  });

  describe('formatFileSize', () => {
    it('returns "0 Bytes" for 0', () => {
      const { result } = renderHook(() => useFileSystem());
      expect(result.current.formatFileSize(0)).toBe('0 Bytes');
    });

    it('formats bytes correctly', () => {
      const { result } = renderHook(() => useFileSystem());
      expect(result.current.formatFileSize(500)).toContain('Bytes');
    });

    it('formats KB correctly', () => {
      const { result } = renderHook(() => useFileSystem());
      const formatted = result.current.formatFileSize(1536);
      expect(formatted).toContain('KB');
    });

    it('formats MB correctly', () => {
      const { result } = renderHook(() => useFileSystem());
      const formatted = result.current.formatFileSize(1024 * 1024 * 2);
      expect(formatted).toContain('MB');
    });
  });

  describe('validateTypeScriptSyntax', () => {
    it('returns valid: false and error for empty code', () => {
      const { result } = renderHook(() => useFileSystem());
      const { valid, errors } = result.current.validateTypeScriptSyntax('');
      expect(valid).toBe(false);
      expect(errors).toContain('Code is empty');
    });

    it('returns valid: true for valid code', () => {
      const { result } = renderHook(() => useFileSystem());
      const { valid, errors } = result.current.validateTypeScriptSyntax(
        'export const x = { a: 1 };'
      );
      expect(valid).toBe(true);
      expect(errors).toHaveLength(0);
    });

    it('detects mismatched curly braces', () => {
      const { result } = renderHook(() => useFileSystem());
      const { valid, errors } = result.current.validateTypeScriptSyntax(
        'export const x = { a: 1;'
      );
      expect(valid).toBe(false);
      expect(errors.some((e) => e.includes('{}'))).toBe(true);
    });

    it('detects mismatched square brackets', () => {
      const { result } = renderHook(() => useFileSystem());
      const { valid, errors } = result.current.validateTypeScriptSyntax(
        'const arr = [1, 2, 3;'
      );
      expect(valid).toBe(false);
      expect(errors.some((e) => e.includes('[]'))).toBe(true);
    });

    it('detects mismatched parentheses', () => {
      const { result } = renderHook(() => useFileSystem());
      const { valid, errors } = result.current.validateTypeScriptSyntax(
        'function foo(x { return x; }'
      );
      expect(valid).toBe(false);
      expect(errors.some((e) => e.includes('()'))).toBe(true);
    });
  });
});
