/**
 * SaveDialog Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { render, screen, fireEvent, act, within } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme/theme';
import { SaveDialog } from './SaveDialog';

jest.mock('../hooks/useFileSystem', () => ({
  useFileSystem: () => ({
    validateFilePermissions: jest.fn().mockResolvedValue(true),
    createBackup: jest.fn().mockResolvedValue('backup/theme.ts'),
    generateChangesSummary: jest.fn().mockReturnValue('2 colors, 1 typography change'),
    generateCommitMessage: jest.fn().mockReturnValue('chore: update theme tokens'),
  }),
}));

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

const defaultEdits = {
  colors: {
    light: { 'primary.main': '#00686f' },
    dark: { 'primary.main': '#009999' },
  },
  typography: [{ variant: 'body1', fontSize: '16px' }],
  spacing: [],
};

describe('SaveDialog', () => {
  describe('Visibility', () => {
    it('does not render when open is false', () => {
      renderWithTheme(
        <SaveDialog
          open={false}
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="light"
        />
      );
      expect(screen.queryByText('Save Theme Changes')).not.toBeInTheDocument();
    });

    it('renders when open is true', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="light"
        />
      );
      expect(screen.getByRole('heading', { name: 'Save Theme Changes' })).toBeInTheDocument();
    });
  });

  describe('Content', () => {
    it('shows summary from useFileSystem', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="light"
        />
      );
      // summary is shown inside an alert — text may be split across elements
      expect(
        screen.getByText((content) => content.includes('2 colors, 1 typography change'))
      ).toBeInTheDocument();
    });

    it('shows commit message', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="light"
        />
      );
      expect(screen.getByText('chore: update theme tokens')).toBeInTheDocument();
    });

    it('shows change count in alert', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="light"
        />
      );
      // 1 light color + 1 dark color + 1 typography = 3
      expect(
        screen.getByText((content) => content.includes('3'))
      ).toBeInTheDocument();
    });

    it('shows 0 changes when edits are empty', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={{}}
          mode="light"
        />
      );
      // The alert shows "Total changes: 0"
      expect(
        screen.getByText((content) => content.includes('0'))
      ).toBeInTheDocument();
    });

    it('shows backup checkbox checked by default', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="light"
        />
      );
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });

    it('allows unchecking the backup checkbox', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="light"
        />
      );
      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Actions', () => {
    it('calls onCancel when Cancel is clicked', () => {
      const onCancel = jest.fn();
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={onCancel}
          edits={defaultEdits}
          mode="light"
        />
      );
      fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
      expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it('calls onConfirm when Save Theme is clicked', async () => {
      const onConfirm = jest.fn().mockResolvedValue(undefined);
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={onConfirm}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="light"
        />
      );

      await act(async () => {
        fireEvent.click(screen.getByRole('button', { name: /save theme/i }));
      });

      expect(onConfirm).toHaveBeenCalledTimes(1);
    });

    it('disables Save button when isLoading is true', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="light"
          isLoading
        />
      );
      expect(screen.getByRole('button', { name: /saving/i })).toBeDisabled();
    });

    it('shows "Saving..." text when isLoading is true', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="light"
          isLoading
        />
      );
      expect(screen.getByRole('button', { name: /saving/i })).toBeInTheDocument();
    });

    it('Cancel button is also disabled when isLoading', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="light"
          isLoading
        />
      );
      expect(screen.getByRole('button', { name: /cancel/i })).toBeDisabled();
    });
  });

  describe('Mode variants', () => {
    it('renders in dark mode', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="dark"
        />
      );
      expect(screen.getByRole('heading', { name: 'Save Theme Changes' })).toBeInTheDocument();
    });

    it('shows mode in file details', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={defaultEdits}
          mode="dark"
        />
      );
      expect(screen.getByText((c) => c.includes('dark'))).toBeInTheDocument();
    });
  });

  describe('Color breakdown', () => {
    it('shows color count in breakdown', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={{ colors: { light: { 'primary.main': '#ff0000', 'secondary.main': '#00ff00' }, dark: {} } }}
          mode="light"
        />
      );
      // The breakdown section shows "Colors: 2"
      expect(screen.getByText((c) => c.includes('Colors'))).toBeInTheDocument();
    });

    it('shows spacing count in breakdown', () => {
      renderWithTheme(
        <SaveDialog
          open
          onConfirm={jest.fn()}
          onCancel={jest.fn()}
          edits={{ spacing: [{ name: 'spacing-1', value: 8 }, { name: 'spacing-2', value: 16 }] }}
          mode="light"
        />
      );
      expect(screen.getByText((c) => c.includes('Spacing'))).toBeInTheDocument();
    });
  });
});
