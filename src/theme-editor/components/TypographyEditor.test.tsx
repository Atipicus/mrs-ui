/**
 * TypographyEditor Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme/theme';
import { TypographyEditor } from './TypographyEditor';

const mockUpdateTypography = jest.fn();

jest.mock('../hooks/useThemeParser', () => ({
  useThemeParser: jest.fn(() => ({
    mode: 'light',
    parsedTheme: {
      colors: { light: {}, dark: {} },
      typography: [
        { variant: 'h1', fontSize: 60, fontWeight: 600, lineHeight: 1.2 },
        { variant: 'body1', fontSize: 16, fontWeight: 400, lineHeight: 1.5 },
        { variant: 'caption', fontSize: 12, fontWeight: 400, lineHeight: 1.2 },
      ],
      spacing: [],
      shape: [],
    },
    updateTypography: mockUpdateTypography,
    hasChanges: false,
  })),
}));

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('TypographyEditor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders without crashing', () => {
      renderWithTheme(<TypographyEditor />);
      expect(screen.getByText(/typography/i)).toBeInTheDocument();
    });

    it('renders all typography variants', () => {
      renderWithTheme(<TypographyEditor />);
      expect(screen.getByText('h1')).toBeInTheDocument();
      expect(screen.getByText('body1')).toBeInTheDocument();
      expect(screen.getByText('caption')).toBeInTheDocument();
    });

    it('renders preview text for each variant', () => {
      renderWithTheme(<TypographyEditor />);
      expect(screen.getByText(/heading 1/i)).toBeInTheDocument();
      expect(screen.getByText(/body text/i)).toBeInTheDocument();
    });

    it('renders typography property fields', () => {
      renderWithTheme(<TypographyEditor />);
      // fontSize, fontWeight, lineHeight fields
      expect(screen.getAllByLabelText('fontSize').length).toBeGreaterThan(0);
      expect(screen.getAllByLabelText('fontWeight').length).toBeGreaterThan(0);
    });

    it('shows current font size values', () => {
      renderWithTheme(<TypographyEditor />);
      // h1 has fontSize 60
      const inputs = screen.getAllByDisplayValue('60');
      expect(inputs.length).toBeGreaterThan(0);
    });
  });

  describe('Typography changes', () => {
    it('calls updateTypography when fontSize is changed', async () => {
      const onTypographyChange = jest.fn();
      renderWithTheme(<TypographyEditor onTypographyChange={onTypographyChange} />);

      const fontSizeInputs = screen.getAllByLabelText('fontSize');
      fireEvent.change(fontSizeInputs[0], { target: { value: '64' } });

      await waitFor(() => {
        expect(mockUpdateTypography).toHaveBeenCalled();
        expect(onTypographyChange).toHaveBeenCalled();
      });
    });

    it('calls updateTypography when fontWeight is changed', async () => {
      renderWithTheme(<TypographyEditor />);

      const fontWeightInputs = screen.getAllByLabelText('fontWeight');
      fireEvent.change(fontWeightInputs[0], { target: { value: '700' } });

      await waitFor(() => {
        expect(mockUpdateTypography).toHaveBeenCalled();
      });
    });

    it('calls updateTypography when lineHeight is changed', async () => {
      renderWithTheme(<TypographyEditor />);

      const lineHeightInputs = screen.getAllByLabelText('lineHeight');
      fireEvent.change(lineHeightInputs[0], { target: { value: '1.6' } });

      await waitFor(() => {
        expect(mockUpdateTypography).toHaveBeenCalled();
      });
    });

    it('parses numeric values for fontSize', async () => {
      renderWithTheme(<TypographyEditor />);

      const fontSizeInputs = screen.getAllByLabelText('fontSize');
      fireEvent.change(fontSizeInputs[0], { target: { value: '20' } });

      await waitFor(() => {
        expect(mockUpdateTypography).toHaveBeenCalledWith(
          expect.any(String),
          'fontSize',
          20
        );
      });
    });
  });

  describe('Empty state', () => {
    it('renders gracefully with empty typography array', () => {
      const { useThemeParser } = require('../hooks/useThemeParser');
      useThemeParser.mockReturnValueOnce({
        mode: 'light',
        parsedTheme: {
          colors: { light: {}, dark: {} },
          typography: [],
          spacing: [],
          shape: [],
        },
        updateTypography: mockUpdateTypography,
        hasChanges: false,
      });

      renderWithTheme(<TypographyEditor />);
      expect(screen.getByText(/typography/i)).toBeInTheDocument();
    });
  });
});
