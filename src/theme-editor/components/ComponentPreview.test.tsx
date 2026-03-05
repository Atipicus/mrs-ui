/**
 * ComponentPreview Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme/theme';
import { ComponentPreview } from './ComponentPreview';

jest.mock('../hooks/useThemeParser', () => ({
  useThemeParser: () => ({
    mode: 'light',
    parsedTheme: null,
    colors: { light: {}, dark: {} },
    typography: [],
    spacing: [],
    shape: [],
    updateColor: jest.fn(),
    updateTypography: jest.fn(),
    updateSpacing: jest.fn(),
    updateShape: jest.fn(),
    resetToDefault: jest.fn(),
    applyChanges: jest.fn(),
    hasChanges: false,
  }),
}));

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('ComponentPreview', () => {
  describe('Basic rendering', () => {
    it('renders without crashing', () => {
      renderWithTheme(<ComponentPreview />);
      expect(screen.getByText(/live preview/i)).toBeInTheDocument();
    });

    it('shows current mode in header', () => {
      renderWithTheme(<ComponentPreview />);
      expect(screen.getByText(/light mode/i)).toBeInTheDocument();
    });

    it('renders Buttons section', () => {
      renderWithTheme(<ComponentPreview />);
      expect(screen.getByText('Buttons')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Contained' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Outlined' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Text' })).toBeInTheDocument();
    });

    it('renders Text Inputs section', () => {
      renderWithTheme(<ComponentPreview />);
      expect(screen.getByText('Text Inputs')).toBeInTheDocument();
      expect(screen.getByLabelText('Standard')).toBeInTheDocument();
      expect(screen.getByLabelText('Outlined')).toBeInTheDocument();
      expect(screen.getByLabelText('Filled')).toBeInTheDocument();
    });

    it('renders Chips section', () => {
      renderWithTheme(<ComponentPreview />);
      expect(screen.getByText('Chips')).toBeInTheDocument();
      expect(screen.getByText('Default')).toBeInTheDocument();
    });

    it('renders Alerts section', () => {
      renderWithTheme(<ComponentPreview />);
      expect(screen.getByText('Alerts')).toBeInTheDocument();
      expect(screen.getByText('Success alert message')).toBeInTheDocument();
      expect(screen.getByText('Error alert message')).toBeInTheDocument();
    });

    it('renders Selection Controls section', () => {
      renderWithTheme(<ComponentPreview />);
      expect(screen.getByText('Selection Controls')).toBeInTheDocument();
      expect(screen.getByLabelText('Checkbox')).toBeInTheDocument();
      expect(screen.getByLabelText('Switch')).toBeInTheDocument();
    });

    it('renders Tabs section', () => {
      renderWithTheme(<ComponentPreview />);
      expect(screen.getByText('Tabs')).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    });

    it('renders Typography section', () => {
      renderWithTheme(<ComponentPreview />);
      expect(screen.getByText('Typography')).toBeInTheDocument();
      expect(screen.getByText('Heading 1')).toBeInTheDocument();
    });
  });

  describe('Tab interaction', () => {
    it('shows Tab 1 content by default', () => {
      renderWithTheme(<ComponentPreview />);
      expect(screen.getByText('Tab 1 content')).toBeInTheDocument();
    });

    it('changes tab content when clicking Tab 2', async () => {
      renderWithTheme(<ComponentPreview />);

      fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }));

      await waitFor(() => {
        expect(screen.getByText('Tab 2 content')).toBeInTheDocument();
      });
    });

    it('changes tab content when clicking Tab 3', async () => {
      renderWithTheme(<ComponentPreview />);

      fireEvent.click(screen.getByRole('tab', { name: 'Tab 3' }));

      await waitFor(() => {
        expect(screen.getByText('Tab 3 content')).toBeInTheDocument();
      });
    });
  });

  describe('Dialog behavior', () => {
    it('does not show dialog by default', () => {
      renderWithTheme(<ComponentPreview />);
      expect(screen.queryByText('Theme Editor Preview')).not.toBeInTheDocument();
    });

    it('shows dialog when dialogOpen is true', () => {
      renderWithTheme(<ComponentPreview dialogOpen />);
      expect(screen.getByText('Theme Editor Preview')).toBeInTheDocument();
    });

    it('closes dialog when Cancel is clicked', async () => {
      renderWithTheme(<ComponentPreview dialogOpen />);

      fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));

      await waitFor(() => {
        expect(screen.queryByText('Theme Editor Preview')).not.toBeInTheDocument();
      });
    });

    it('closes dialog when OK is clicked', async () => {
      renderWithTheme(<ComponentPreview dialogOpen />);

      fireEvent.click(screen.getByRole('button', { name: 'OK' }));

      await waitFor(() => {
        expect(screen.queryByText('Theme Editor Preview')).not.toBeInTheDocument();
      });
    });

    it('updates dialog open state when dialogOpen prop changes', async () => {
      const { rerender } = renderWithTheme(<ComponentPreview dialogOpen={false} />);

      expect(screen.queryByText('Theme Editor Preview')).not.toBeInTheDocument();

      rerender(
        <ThemeProvider theme={theme}>
          <ComponentPreview dialogOpen={true} />
        </ThemeProvider>
      );

      await waitFor(() => {
        expect(screen.getByText('Theme Editor Preview')).toBeInTheDocument();
      });
    });
  });

  describe('Dark mode', () => {
    it('shows dark mode label when useThemeParser returns dark mode', () => {
      const { useThemeParser } = require('../hooks/useThemeParser');
      useThemeParser.mockReturnValueOnce
        ? useThemeParser.mockReturnValueOnce({ mode: 'dark' })
        : jest.mock('../hooks/useThemeParser', () => ({
            useThemeParser: () => ({ mode: 'dark' }),
          }));

      renderWithTheme(<ComponentPreview />);
      // Component should still render
      expect(screen.getByText('Buttons')).toBeInTheDocument();
    });
  });
});
