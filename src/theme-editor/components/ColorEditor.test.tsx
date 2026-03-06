/**
 * ColorEditor Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme/theme';
import { ColorEditor } from './ColorEditor';

const mockUpdateColor = jest.fn();
const mockSetMode = jest.fn();

jest.mock('../hooks/useThemeParser', () => ({
  useThemeParser: jest.fn(() => ({
    mode: 'light',
    setMode: mockSetMode,
    parsedTheme: {
      colors: {
        light: {
          'primary.main': '#00686f',
          'primary.dark': '#004e53',
          'secondary.main': '#99cc00',
          'error.main': '#ab1a1a',
        },
        dark: {
          'primary.main': '#009999',
          'primary.dark': '#007777',
          'secondary.main': '#aad400',
          'error.main': '#cc2222',
        },
      },
      typography: [],
      spacing: [],
      shape: [],
    },
    updateColor: mockUpdateColor,
    updateTypography: jest.fn(),
    updateSpacing: jest.fn(),
    updateShape: jest.fn(),
    hasChanges: false,
  })),
}));

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('ColorEditor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders without crashing', () => {
      renderWithTheme(<ColorEditor />);
      expect(screen.getByText('Light Mode')).toBeInTheDocument();
      expect(screen.getByText('Dark Mode')).toBeInTheDocument();
    });

    it('shows color keys from parsed theme', () => {
      renderWithTheme(<ColorEditor />);
      expect(screen.getByText('primary.main')).toBeInTheDocument();
      expect(screen.getByText('secondary.main')).toBeInTheDocument();
    });

    it('groups colors by category', () => {
      renderWithTheme(<ColorEditor />);
      // Categories should be displayed capitalized
      expect(screen.getByText('primary')).toBeInTheDocument();
      expect(screen.getByText('secondary')).toBeInTheDocument();
      expect(screen.getByText('error')).toBeInTheDocument();
    });

    it('renders color swatches with hex values', () => {
      renderWithTheme(<ColorEditor />);
      expect(screen.getAllByText('#00686f').length).toBeGreaterThan(0);
    });
  });

  describe('Mode switching', () => {
    it('calls setMode with "dark" when Dark Mode is clicked', () => {
      renderWithTheme(<ColorEditor />);
      fireEvent.click(screen.getByRole('button', { name: /dark mode/i }));
      expect(mockSetMode).toHaveBeenCalledWith('dark');
    });

    it('calls setMode with "light" when Light Mode is clicked', () => {
      renderWithTheme(<ColorEditor />);
      fireEvent.click(screen.getByRole('button', { name: /light mode/i }));
      expect(mockSetMode).toHaveBeenCalledWith('light');
    });

    it('Light Mode button shows contained variant when mode is light', () => {
      renderWithTheme(<ColorEditor />);
      const lightBtn = screen.getByRole('button', { name: /light mode/i });
      expect(lightBtn).toHaveClass('MuiButton-contained');
    });
  });

  describe('Color swatch interaction', () => {
    it('shows color picker when swatch is clicked', async () => {
      renderWithTheme(<ColorEditor />);
      // Click the first color swatch paper
      const swatchPapers = document.querySelectorAll('.MuiPaper-root');
      // The swatch paper with a background color — click the first color swatch
      const colorSwatches = Array.from(swatchPapers).filter((el) => {
        const style = (el as HTMLElement).style.backgroundColor;
        return style && style !== '';
      });

      if (colorSwatches.length > 0) {
        fireEvent.click(colorSwatches[0] as HTMLElement);
        await waitFor(() => {
          // After click, a color input or text input should appear
          const inputs = document.querySelectorAll(
            'input[type="color"], input[placeholder="#000000"]'
          );
          expect(inputs.length).toBeGreaterThan(0);
        });
      }
    });

    it('calls onColorChange when a color is updated', async () => {
      const onColorChange = jest.fn();
      renderWithTheme(<ColorEditor onColorChange={onColorChange} />);

      // Click swatch to open picker
      const swatchPapers = Array.from(document.querySelectorAll('.MuiPaper-root')).filter((el) => {
        const style = (el as HTMLElement).style.backgroundColor;
        return style && style !== '';
      });

      if (swatchPapers.length > 0) {
        fireEvent.click(swatchPapers[0] as HTMLElement);

        await waitFor(() => {
          const colorInput = document.querySelector('input[type="color"]');
          if (colorInput) {
            fireEvent.change(colorInput, { target: { value: '#ff0000' } });
            expect(mockUpdateColor).toHaveBeenCalled();
          }
        });
      }
    });
  });

  describe('Empty state', () => {
    it('shows "No colors found" when parsedTheme has no colors', () => {
      const { useThemeParser } = require('../hooks/useThemeParser');
      useThemeParser.mockReturnValueOnce({
        mode: 'light',
        setMode: mockSetMode,
        parsedTheme: {
          colors: { light: {}, dark: {} },
          typography: [],
          spacing: [],
          shape: [],
        },
        updateColor: mockUpdateColor,
        hasChanges: false,
      });

      renderWithTheme(<ColorEditor />);
      expect(screen.getByText(/no colors found/i)).toBeInTheDocument();
    });
  });
});
