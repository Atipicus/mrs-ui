/**
 * SpacingEditor Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme/theme';
import { SpacingEditor } from './SpacingEditor';

const mockUpdateSpacing = jest.fn();
const mockUpdateShape = jest.fn();

jest.mock('../hooks/useThemeParser', () => ({
  useThemeParser: jest.fn(() => ({
    mode: 'light',
    parsedTheme: {
      colors: { light: {}, dark: {} },
      typography: [],
      spacing: [
        { name: 'spacing-1', value: 8 },
        { name: 'spacing-2', value: 16 },
        { name: 'spacing-3', value: 24 },
      ],
      shape: [
        { name: 'sm', value: 4 },
        { name: 'md', value: 8 },
        { name: 'lg', value: 12 },
      ],
    },
    updateSpacing: mockUpdateSpacing,
    updateShape: mockUpdateShape,
    hasChanges: false,
  })),
}));

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('SpacingEditor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders without crashing', () => {
      renderWithTheme(<SpacingEditor />);
      // Multiple elements may have "Spacing Scale" text — check at least one exists
      expect(screen.getAllByText(/spacing scale/i).length).toBeGreaterThan(0);
    });

    it('renders spacing tokens', () => {
      renderWithTheme(<SpacingEditor />);
      expect(screen.getByText('spacing-1')).toBeInTheDocument();
      expect(screen.getByText('spacing-2')).toBeInTheDocument();
      expect(screen.getByText('spacing-3')).toBeInTheDocument();
    });

    it('renders shape tokens', () => {
      renderWithTheme(<SpacingEditor />);
      expect(screen.getAllByText(/border radius/i).length).toBeGreaterThan(0);
      expect(screen.getByText('sm')).toBeInTheDocument();
      expect(screen.getByText('md')).toBeInTheDocument();
    });

    it('renders spacing visual indicators with px values', () => {
      renderWithTheme(<SpacingEditor />);
      expect(screen.getAllByText('8px').length).toBeGreaterThan(0);
      expect(screen.getAllByText('16px').length).toBeGreaterThan(0);
    });

    it('renders border radius visual indicators', () => {
      renderWithTheme(<SpacingEditor />);
      expect(screen.getAllByText('4px').length).toBeGreaterThan(0);
    });
  });

  describe('Spacing changes', () => {
    it('calls updateSpacing and onSpacingChange when spacing is changed via input', async () => {
      const onSpacingChange = jest.fn();
      renderWithTheme(<SpacingEditor onSpacingChange={onSpacingChange} />);

      // Find input fields for spacing
      const inputs = screen.getAllByRole('spinbutton');
      if (inputs.length > 0) {
        fireEvent.change(inputs[0], { target: { value: '12' } });

        await waitFor(() => {
          expect(mockUpdateSpacing).toHaveBeenCalled();
          expect(onSpacingChange).toHaveBeenCalled();
        });
      }
    });

    it('calls updateShape and onShapeChange when shape is changed via input', async () => {
      const onShapeChange = jest.fn();
      renderWithTheme(<SpacingEditor onShapeChange={onShapeChange} />);

      const inputs = screen.getAllByRole('spinbutton');
      // Shape inputs appear after spacing inputs
      const lastInputIndex = inputs.length - 1;
      if (lastInputIndex >= 0) {
        fireEvent.change(inputs[lastInputIndex], { target: { value: '6' } });

        await waitFor(() => {
          expect(mockUpdateShape).toHaveBeenCalled();
          expect(onShapeChange).toHaveBeenCalled();
        });
      }
    });
  });

  describe('Empty states', () => {
    it('renders with empty spacing array', () => {
      const { useThemeParser } = require('../hooks/useThemeParser');
      useThemeParser.mockReturnValueOnce({
        mode: 'light',
        parsedTheme: {
          colors: { light: {}, dark: {} },
          typography: [],
          spacing: [],
          shape: [],
        },
        updateSpacing: mockUpdateSpacing,
        updateShape: mockUpdateShape,
        hasChanges: false,
      });

      renderWithTheme(<SpacingEditor />);
      expect(screen.getAllByText(/spacing scale/i).length).toBeGreaterThan(0);
    });
  });

  describe('String spacing values', () => {
    it('handles string spacing values correctly', () => {
      const { useThemeParser } = require('../hooks/useThemeParser');
      useThemeParser.mockReturnValueOnce({
        mode: 'light',
        parsedTheme: {
          colors: { light: {}, dark: {} },
          typography: [],
          spacing: [{ name: 'spacing-x', value: '32' }],
          shape: [],
        },
        updateSpacing: mockUpdateSpacing,
        updateShape: mockUpdateShape,
        hasChanges: false,
      });

      renderWithTheme(<SpacingEditor />);
      expect(screen.getByText('32px')).toBeInTheDocument();
    });
  });
});
