/**
 * useGitIntegration Hook Tests
 * @package @mrs/ui
 */

import { renderHook, act } from '@testing-library/react';
import { useGitIntegration } from './useGitIntegration';

describe('useGitIntegration', () => {
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
      const { result } = renderHook(() => useGitIntegration());
      expect(result.current.status).toBe('idle');
    });

    it('returns lastCommit null initially', () => {
      const { result } = renderHook(() => useGitIntegration());
      expect(result.current.lastCommit).toBeNull();
    });

    it('returns lastRevert null initially', () => {
      const { result } = renderHook(() => useGitIntegration());
      expect(result.current.lastRevert).toBeNull();
    });

    it('exposes commit function', () => {
      const { result } = renderHook(() => useGitIntegration());
      expect(typeof result.current.commit).toBe('function');
    });

    it('exposes undo function', () => {
      const { result } = renderHook(() => useGitIntegration());
      expect(typeof result.current.undo).toBe('function');
    });

    it('exposes canUndo function', () => {
      const { result } = renderHook(() => useGitIntegration());
      expect(typeof result.current.canUndo).toBe('function');
    });

    it('canUndo() returns false initially (no commit yet)', () => {
      const { result } = renderHook(() => useGitIntegration());
      expect(result.current.canUndo()).toBe(false);
    });

    it('exposes getUndoTimeRemaining function', () => {
      const { result } = renderHook(() => useGitIntegration());
      expect(typeof result.current.getUndoTimeRemaining).toBe('function');
    });

    it('exposes reset function', () => {
      const { result } = renderHook(() => useGitIntegration());
      expect(typeof result.current.reset).toBe('function');
    });
  });

  describe('commit', () => {
    it('transitions to success status after commit', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({ message: 'chore: update theme' });
      });
      await act(async () => {
        jest.runAllTimers();
        await commitPromise;
      });

      expect(result.current.status).toBe('success');
    });

    it('returns a GitResult with success: true', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitResult: any = null;
      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({ message: 'chore: update theme' });
      });
      await act(async () => {
        jest.runAllTimers();
        commitResult = await commitPromise;
      });

      expect(commitResult).not.toBeNull();
      expect(commitResult.success).toBe(true);
    });

    it('result includes commitHash', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitResult: any = null;
      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({ message: 'chore: update theme' });
      });
      await act(async () => {
        jest.runAllTimers();
        commitResult = await commitPromise;
      });

      expect(commitResult.commitHash).toBeTruthy();
      expect(typeof commitResult.commitHash).toBe('string');
    });

    it('result includes undoUntil date', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitResult: any = null;
      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({ message: 'chore: update theme' });
      });
      await act(async () => {
        jest.runAllTimers();
        commitResult = await commitPromise;
      });

      expect(commitResult.undoUntil).toBeInstanceOf(Date);
    });

    it('result canUndo is true after commit', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitResult: any = null;
      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({ message: 'chore: update theme' });
      });
      await act(async () => {
        jest.runAllTimers();
        commitResult = await commitPromise;
      });

      expect(commitResult.canUndo).toBe(true);
    });

    it('updates lastCommit after commit', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({ message: 'chore: update theme' });
      });
      await act(async () => {
        jest.runAllTimers();
        await commitPromise;
      });

      expect(result.current.lastCommit).not.toBeNull();
    });

    it('canUndo() returns true after successful commit', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({ message: 'chore: update theme' });
      });
      await act(async () => {
        jest.runAllTimers();
        await commitPromise;
      });

      expect(result.current.canUndo()).toBe(true);
    });

    it('accepts filepaths option', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitResult: any = null;
      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({
          message: 'chore: update theme',
          filepaths: ['src/theme/theme.ts'],
        });
      });
      await act(async () => {
        jest.runAllTimers();
        commitResult = await commitPromise;
      });

      expect(commitResult.success).toBe(true);
    });

    it('accepts author option', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitResult: any = null;
      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({
          message: 'chore: update theme',
          author: 'Test User',
        });
      });
      await act(async () => {
        jest.runAllTimers();
        commitResult = await commitPromise;
      });

      expect(commitResult.success).toBe(true);
    });
  });

  describe('undo', () => {
    it('returns success false when no commit to revert', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let revertResult: any = null;
      await act(async () => {
        revertResult = await result.current.undo();
      });

      expect(revertResult.success).toBe(false);
    });

    it('undo succeeds when within undo window', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({ message: 'chore: update theme' });
      });
      await act(async () => {
        jest.runAllTimers();
        await commitPromise;
      });

      let revertResult: any = null;
      let undoPromise: Promise<any>;
      act(() => {
        undoPromise = result.current.undo();
      });
      await act(async () => {
        jest.runAllTimers();
        revertResult = await undoPromise;
      });

      expect(revertResult.success).toBe(true);
    });

    it('updates lastRevert after undo', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({ message: 'chore: update theme' });
      });
      await act(async () => {
        jest.runAllTimers();
        await commitPromise;
      });

      let undoPromise: Promise<any>;
      act(() => {
        undoPromise = result.current.undo();
      });
      await act(async () => {
        jest.runAllTimers();
        await undoPromise;
      });

      expect(result.current.lastRevert).not.toBeNull();
    });
  });

  describe('getUndoTimeRemaining', () => {
    it('returns 0 when no commit has been made', () => {
      const { result } = renderHook(() => useGitIntegration());
      expect(result.current.getUndoTimeRemaining()).toBe(0);
    });

    it('returns a positive number after commit', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({ message: 'chore: update theme' });
      });
      await act(async () => {
        jest.runAllTimers();
        await commitPromise;
      });

      const timeRemaining = result.current.getUndoTimeRemaining();
      expect(timeRemaining).not.toBeNull();
      expect(timeRemaining!).toBeGreaterThan(0);
    });
  });

  describe('reset', () => {
    it('resets status to idle after commit', async () => {
      const { result } = renderHook(() => useGitIntegration());

      let commitPromise: Promise<any>;
      act(() => {
        commitPromise = result.current.commit({ message: 'chore: update theme' });
      });
      await act(async () => {
        jest.runAllTimers();
        await commitPromise;
      });

      act(() => {
        result.current.reset();
      });

      expect(result.current.status).toBe('idle');
    });
  });
});
