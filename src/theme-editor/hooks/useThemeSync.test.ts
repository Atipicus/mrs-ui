/**
 * useThemeSync Hook Tests
 * @package @mrs/ui
 */

import { renderHook, act } from '@testing-library/react';
import { useThemeSync } from './useThemeSync';

describe('useThemeSync', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  describe('Initial state', () => {
    it('returns status idle initially', () => {
      const { result } = renderHook(() => useThemeSync());
      expect(result.current.status).toBe('idle');
    });

    it('returns lastSync null initially', () => {
      const { result } = renderHook(() => useThemeSync());
      expect(result.current.lastSync).toBeNull();
    });

    it('exposes sync function', () => {
      const { result } = renderHook(() => useThemeSync());
      expect(typeof result.current.sync).toBe('function');
    });

    it('exposes reset function', () => {
      const { result } = renderHook(() => useThemeSync());
      expect(typeof result.current.reset).toBe('function');
    });

    it('exposes getSerializedEdits function', () => {
      const { result } = renderHook(() => useThemeSync());
      expect(typeof result.current.getSerializedEdits).toBe('function');
    });

    it('exposes getDiff function', () => {
      const { result } = renderHook(() => useThemeSync());
      expect(typeof result.current.getDiff).toBe('function');
    });
  });

  describe('getSerializedEdits', () => {
    it('returns a string with color updates', () => {
      const { result } = renderHook(() => useThemeSync());

      const code = result.current.getSerializedEdits(
        { colors: { light: { 'primary.main': '#ff0000' }, dark: {} } },
        'light'
      );

      expect(typeof code).toBe('string');
      expect(code).toContain('primary.main');
    });

    it('returns code with typography updates', () => {
      const { result } = renderHook(() => useThemeSync());

      const code = result.current.getSerializedEdits(
        { typography: [{ variant: 'h1', fontSize: 60, fontWeight: 600 }] },
        'light'
      );

      expect(code).toContain('h1');
    });

    it('returns code with spacing updates', () => {
      const { result } = renderHook(() => useThemeSync());

      const code = result.current.getSerializedEdits(
        { spacing: [{ name: 'spacing-1', value: 8 }] },
        'light'
      );

      expect(code).toContain('spacing-1');
    });

    it('returns code with shape updates', () => {
      const { result } = renderHook(() => useThemeSync());

      const code = result.current.getSerializedEdits(
        { shape: [{ name: 'sm', value: 4 }] },
        'light'
      );

      expect(code).toContain('sm');
    });

    it('returns empty string for empty edits', () => {
      const { result } = renderHook(() => useThemeSync());
      const code = result.current.getSerializedEdits({}, 'light');
      expect(typeof code).toBe('string');
    });
  });

  describe('getDiff', () => {
    it('returns a string diff', () => {
      const { result } = renderHook(() => useThemeSync());
      const diff = result.current.getDiff(
        { colors: { light: { 'primary.main': '#00686f' }, dark: {} } },
        { colors: { light: { 'primary.main': '#ff0000' }, dark: {} } }
      );
      expect(typeof diff).toBe('string');
    });

    it('includes changed values in diff', () => {
      const { result } = renderHook(() => useThemeSync());
      const diff = result.current.getDiff(
        { colors: { light: { 'primary.main': '#00686f' }, dark: {} } },
        { colors: { light: { 'primary.main': '#ff0000' }, dark: {} } }
      );
      expect(diff).toContain('primary.main');
    });
  });

  describe('sync', () => {
    it('transitions to success status', async () => {
      const { result } = renderHook(() => useThemeSync());

      let syncPromise: Promise<any>;
      act(() => {
        syncPromise = result.current.sync({}, 'light');
      });

      await act(async () => {
        jest.runAllTimers();
        await syncPromise;
      });

      expect(result.current.status).toBe('success');
    });

    it('returns a SyncResult with success: true', async () => {
      const { result } = renderHook(() => useThemeSync());

      let syncResult: any = null;
      let syncPromise: Promise<any>;
      act(() => {
        syncPromise = result.current.sync({}, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        syncResult = await syncPromise;
      });

      expect(syncResult).not.toBeNull();
      expect(syncResult.success).toBe(true);
    });

    it('result includes timestamp', async () => {
      const { result } = renderHook(() => useThemeSync());

      let syncResult: any = null;
      let syncPromise: Promise<any>;
      act(() => {
        syncPromise = result.current.sync({}, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        syncResult = await syncPromise;
      });

      expect(syncResult.timestamp).toBeInstanceOf(Date);
    });

    it('updates lastSync after sync', async () => {
      const { result } = renderHook(() => useThemeSync());

      let syncPromise: Promise<any>;
      act(() => {
        syncPromise = result.current.sync({}, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        await syncPromise;
      });

      expect(result.current.lastSync).not.toBeNull();
    });

    it('syncs with commitToGit option', async () => {
      const { result } = renderHook(() => useThemeSync());

      let syncResult: any = null;
      let syncPromise: Promise<any>;
      act(() => {
        syncPromise = result.current.sync({}, 'light', { commitToGit: true });
      });
      await act(async () => {
        jest.runAllTimers();
        syncResult = await syncPromise;
      });

      expect(syncResult.success).toBe(true);
    });

    it('syncs with custom commit message', async () => {
      const { result } = renderHook(() => useThemeSync());

      let syncResult: any = null;
      let syncPromise: Promise<any>;
      act(() => {
        syncPromise = result.current.sync({}, 'light', {
          commitMessage: 'fix: update primary color',
        });
      });
      await act(async () => {
        jest.runAllTimers();
        syncResult = await syncPromise;
      });

      expect(syncResult.success).toBe(true);
    });

    it('syncs color changes', async () => {
      const { result } = renderHook(() => useThemeSync());

      let syncResult: any = null;
      let syncPromise: Promise<any>;
      act(() => {
        syncPromise = result.current.sync(
          { colors: { light: { 'primary.main': '#ff0000' }, dark: {} } },
          'light'
        );
      });
      await act(async () => {
        jest.runAllTimers();
        syncResult = await syncPromise;
      });

      expect(syncResult.success).toBe(true);
    });
  });

  describe('reset', () => {
    it('resets status to idle', async () => {
      const { result } = renderHook(() => useThemeSync());

      let syncPromise: Promise<any>;
      act(() => {
        syncPromise = result.current.sync({}, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        await syncPromise;
      });

      act(() => {
        result.current.reset();
      });

      expect(result.current.status).toBe('idle');
    });

    it('also clears lastSync on reset', async () => {
      const { result } = renderHook(() => useThemeSync());

      let syncPromise: Promise<any>;
      act(() => {
        syncPromise = result.current.sync({}, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        await syncPromise;
      });

      act(() => {
        result.current.reset();
      });

      expect(result.current.lastSync).toBeNull();
    });
  });
});
