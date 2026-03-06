/**
 * useThemeSave Hook Tests
 * @package @mrs/ui
 */

import { renderHook, act } from '@testing-library/react';
import { useThemeSave } from './useThemeSave';

describe('useThemeSave', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
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
      const { result } = renderHook(() => useThemeSave());
      expect(result.current.status).toBe('idle');
    });

    it('returns lastSave null initially', () => {
      const { result } = renderHook(() => useThemeSave());
      expect(result.current.lastSave).toBeNull();
    });

    it('exposes save function', () => {
      const { result } = renderHook(() => useThemeSave());
      expect(typeof result.current.save).toBe('function');
    });

    it('exposes reset function', () => {
      const { result } = renderHook(() => useThemeSave());
      expect(typeof result.current.reset).toBe('function');
    });
  });

  describe('save', () => {
    it('transitions status to saving then success', async () => {
      const { result } = renderHook(() => useThemeSave());

      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save(
          { colors: { light: { 'primary.main': '#ff0000' }, dark: {} } },
          'light'
        );
      });
      await act(async () => {
        jest.runAllTimers();
        await savePromise;
      });

      expect(result.current.status).toBe('success');
    });

    it('returns a SaveResult with success: true', async () => {
      const { result } = renderHook(() => useThemeSave());

      let saveResult: any = null;
      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save({}, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        saveResult = await savePromise;
      });

      expect(saveResult).not.toBeNull();
      expect(saveResult.success).toBe(true);
    });

    it('result includes filePath', async () => {
      const { result } = renderHook(() => useThemeSave());

      let saveResult: any = null;
      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save({}, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        saveResult = await savePromise;
      });

      expect(saveResult.filePath).toBeTruthy();
      expect(typeof saveResult.filePath).toBe('string');
    });

    it('result includes timestamp', async () => {
      const { result } = renderHook(() => useThemeSave());

      let saveResult: any = null;
      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save({}, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        saveResult = await savePromise;
      });

      expect(saveResult.timestamp).toBeInstanceOf(Date);
    });

    it('updates lastSave after save', async () => {
      const { result } = renderHook(() => useThemeSave());

      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save({}, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        await savePromise;
      });

      expect(result.current.lastSave).not.toBeNull();
      expect(result.current.lastSave!.success).toBe(true);
    });

    it('saves with createBackup option', async () => {
      const { result } = renderHook(() => useThemeSave());

      let saveResult: any = null;
      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save({}, 'light', { createBackup: true });
      });
      await act(async () => {
        jest.runAllTimers();
        saveResult = await savePromise;
      });

      expect(saveResult.success).toBe(true);
    });

    it('saves with dark mode', async () => {
      const { result } = renderHook(() => useThemeSave());

      let saveResult: any = null;
      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save(
          { colors: { light: {}, dark: { 'primary.main': '#009999' } } },
          'dark'
        );
      });
      await act(async () => {
        jest.runAllTimers();
        saveResult = await savePromise;
      });

      expect(saveResult.success).toBe(true);
    });

    it('handles edits with typography', async () => {
      const { result } = renderHook(() => useThemeSave());

      let saveResult: any = null;
      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save(
          { typography: [{ variant: 'h1', fontSize: 60 }] },
          'light'
        );
      });
      await act(async () => {
        jest.runAllTimers();
        saveResult = await savePromise;
      });

      expect(saveResult.success).toBe(true);
    });

    it('handles edits with spacing', async () => {
      const { result } = renderHook(() => useThemeSave());

      let saveResult: any = null;
      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save({ spacing: [{ name: 'spacing-1', value: 8 }] }, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        saveResult = await savePromise;
      });

      expect(saveResult.success).toBe(true);
    });

    it('handles edits with shape', async () => {
      const { result } = renderHook(() => useThemeSave());

      let saveResult: any = null;
      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save({ shape: [{ name: 'sm', value: 4 }] }, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        saveResult = await savePromise;
      });

      expect(saveResult.success).toBe(true);
    });

    it('saves with custom filePath option', async () => {
      const { result } = renderHook(() => useThemeSave());

      let saveResult: any = null;
      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save({}, 'light', { filePath: 'custom/path.ts' });
      });
      await act(async () => {
        jest.runAllTimers();
        saveResult = await savePromise;
      });

      expect(saveResult.filePath).toBe('custom/path.ts');
    });
  });

  describe('reset', () => {
    it('resets status to idle after save', async () => {
      const { result } = renderHook(() => useThemeSave());

      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save({}, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        await savePromise;
      });

      expect(result.current.status).toBe('success');

      act(() => {
        result.current.reset();
      });

      expect(result.current.status).toBe('idle');
    });

    it('also clears lastSave on reset', async () => {
      const { result } = renderHook(() => useThemeSave());

      let savePromise: Promise<any>;
      act(() => {
        savePromise = result.current.save({}, 'light');
      });
      await act(async () => {
        jest.runAllTimers();
        await savePromise;
      });

      act(() => {
        result.current.reset();
      });

      expect(result.current.lastSave).toBeNull();
    });
  });
});
