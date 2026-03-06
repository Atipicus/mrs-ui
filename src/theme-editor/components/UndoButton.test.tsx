/**
 * UndoButton Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme/theme';
import { UndoButton } from './UndoButton';

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('UndoButton', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  describe('Visibility', () => {
    it('renders nothing when visible is false', () => {
      const { container } = renderWithTheme(
        <UndoButton visible={false} onUndo={jest.fn()} timeRemaining={60} />
      );
      expect(container.firstChild).toBeNull();
    });

    it('renders the Undo button when visible is true', () => {
      renderWithTheme(<UndoButton visible onUndo={jest.fn()} timeRemaining={60} />);
      expect(screen.getByRole('button', { name: /undo/i })).toBeInTheDocument();
    });
  });

  describe('Time display', () => {
    it('shows formatted time remaining', () => {
      renderWithTheme(<UndoButton visible onUndo={jest.fn()} timeRemaining={125} />);
      expect(screen.getByText(/2:05 left/)).toBeInTheDocument();
    });

    it('shows expired when timeRemaining is 0', () => {
      renderWithTheme(<UndoButton visible onUndo={jest.fn()} timeRemaining={0} />);
      expect(screen.getByText('(expired)')).toBeInTheDocument();
    });

    it('counts down over time', async () => {
      renderWithTheme(<UndoButton visible onUndo={jest.fn()} timeRemaining={5} />);

      expect(screen.getByText(/0:05 left/)).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      await waitFor(() => {
        expect(screen.getByText(/0:04 left/)).toBeInTheDocument();
      });
    });

    it('stops countdown when reaches 0', async () => {
      renderWithTheme(<UndoButton visible onUndo={jest.fn()} timeRemaining={2} />);

      act(() => {
        jest.advanceTimersByTime(3000);
      });

      await waitFor(() => {
        expect(screen.getByText('(expired)')).toBeInTheDocument();
      });
    });
  });

  describe('Button state', () => {
    it('button is enabled when time remaining > 0', () => {
      renderWithTheme(<UndoButton visible onUndo={jest.fn()} timeRemaining={30} />);
      expect(screen.getByRole('button', { name: /undo/i })).not.toBeDisabled();
    });

    it('button is disabled when expired', () => {
      renderWithTheme(<UndoButton visible onUndo={jest.fn()} timeRemaining={0} />);
      expect(screen.getByRole('button', { name: /undo/i })).toBeDisabled();
    });
  });

  describe('Undo action', () => {
    it('calls onUndo when Undo button is clicked', async () => {
      const onUndo = jest.fn().mockResolvedValue(undefined);
      renderWithTheme(<UndoButton visible onUndo={onUndo} timeRemaining={60} />);

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /undo/i }));
      });

      expect(onUndo).toHaveBeenCalledTimes(1);
    });

    it('shows "Undoing..." while onUndo is in progress', async () => {
      let resolveUndo: () => void;
      const onUndo = jest.fn(
        () =>
          new Promise<void>((resolve) => {
            resolveUndo = resolve;
          })
      );

      renderWithTheme(<UndoButton visible onUndo={onUndo} timeRemaining={60} />);

      fireEvent.click(screen.getByRole('button', { name: /undo/i }));

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /undoing/i })).toBeInTheDocument();
      });

      await act(async () => {
        resolveUndo!();
      });

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /^undo$/i })).toBeInTheDocument();
      });
    });

    it('resets isUndoing to false after onUndo resolves', async () => {
      const onUndo = jest.fn().mockResolvedValue(undefined);
      renderWithTheme(<UndoButton visible onUndo={onUndo} timeRemaining={60} />);

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /undo/i }));
      });

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /^undo$/i })).toBeInTheDocument();
      });
    });
  });

  describe('timeRemaining prop update', () => {
    it('updates displayTime when timeRemaining prop changes', async () => {
      const { rerender } = renderWithTheme(
        <UndoButton visible onUndo={jest.fn()} timeRemaining={60} />
      );

      expect(screen.getByText(/1:00 left/)).toBeInTheDocument();

      rerender(
        <ThemeProvider theme={theme}>
          <UndoButton visible onUndo={jest.fn()} timeRemaining={120} />
        </ThemeProvider>
      );

      await waitFor(() => {
        expect(screen.getByText(/2:00 left/)).toBeInTheDocument();
      });
    });
  });

  describe('Timer cleanup', () => {
    it('clears timer when visible becomes false', async () => {
      const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

      const { rerender } = renderWithTheme(
        <UndoButton visible onUndo={jest.fn()} timeRemaining={60} />
      );

      act(() => {
        jest.advanceTimersByTime(1000);
      });

      rerender(
        <ThemeProvider theme={theme}>
          <UndoButton visible={false} onUndo={jest.fn()} timeRemaining={60} />
        </ThemeProvider>
      );

      expect(clearIntervalSpy).toHaveBeenCalled();
    });
  });
});
