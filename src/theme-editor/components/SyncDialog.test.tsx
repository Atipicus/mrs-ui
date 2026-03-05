/**
 * SyncDialog Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme/theme';
import { SyncDialog } from './SyncDialog';

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('SyncDialog', () => {
  describe('Visibility', () => {
    it('does not render when open is false', () => {
      renderWithTheme(
        <SyncDialog open={false} onClose={jest.fn()} />
      );
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders dialog when open is true', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} />
      );
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('Idle state (default)', () => {
    it('shows all sync steps', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="idle" />
      );
      expect(screen.getByText('Regenerate Tokens')).toBeInTheDocument();
      expect(screen.getByText('Update Files')).toBeInTheDocument();
      expect(screen.getByText('Commit to Git')).toBeInTheDocument();
      expect(screen.getByText('Complete')).toBeInTheDocument();
    });

    it('Close button is available in idle state', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="idle" />
      );
      expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    });

    it('calls onClose when Close is clicked', () => {
      const onClose = jest.fn();
      renderWithTheme(
        <SyncDialog open onClose={onClose} status="idle" />
      );
      fireEvent.click(screen.getByRole('button', { name: /close/i }));
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('shows "Sync Theme" title in idle state', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="idle" />
      );
      expect(screen.getByText('Sync Theme')).toBeInTheDocument();
    });
  });

  describe('Syncing state', () => {
    it('shows syncing title', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="syncing" />
      );
      expect(screen.getByText(/syncing theme/i)).toBeInTheDocument();
    });

    it('does not show Close/Done button while syncing', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="syncing" />
      );
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('shows step text indicating current sync activity', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="syncing" />
      );
      // During syncing, the current step name is shown with "..."
      expect(screen.getAllByText(/regenerate tokens/i).length).toBeGreaterThan(0);
    });
  });

  describe('Success state', () => {
    it('shows success title', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="success" />
      );
      expect(screen.getByText(/sync complete/i)).toBeInTheDocument();
    });

    it('shows commit hash when provided', () => {
      renderWithTheme(
        <SyncDialog
          open
          onClose={jest.fn()}
          status="success"
          commitHash="abc1234"
        />
      );
      expect(screen.getByText(/abc1234/)).toBeInTheDocument();
    });

    it('does not show commit section when commitHash is null', () => {
      renderWithTheme(
        <SyncDialog
          open
          onClose={jest.fn()}
          status="success"
          commitHash={null}
        />
      );
      expect(screen.queryByText(/commit:/i)).not.toBeInTheDocument();
    });

    it('shows Done button after success', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="success" />
      );
      expect(screen.getByRole('button', { name: /done/i })).toBeInTheDocument();
    });

    it('shows "Next steps" info', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="success" />
      );
      expect(screen.getByText(/next/i)).toBeInTheDocument();
    });
  });

  describe('Error state', () => {
    it('shows error title', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="error" error="Connection refused" />
      );
      // "Sync Failed" appears in dialog title and possibly the alert — just check it exists
      expect(screen.getAllByText(/sync failed/i).length).toBeGreaterThan(0);
    });

    it('shows error message when error prop is provided', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="error" error="Connection refused" />
      );
      expect(screen.getByText('Connection refused')).toBeInTheDocument();
    });

    it('shows Close button (not Done) when status is error', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="error" />
      );
      expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /done/i })).not.toBeInTheDocument();
    });

    it('does not show error Alert when no error prop', () => {
      renderWithTheme(
        <SyncDialog open onClose={jest.fn()} status="error" />
      );
      expect(screen.queryByText('Connection refused')).not.toBeInTheDocument();
    });
  });
});
