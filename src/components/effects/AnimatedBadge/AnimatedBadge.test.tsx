/**
 * AnimatedBadge Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../theme/theme';
import { AnimatedBadge } from './AnimatedBadge';
import MailIcon from '@mui/icons-material/Mail';

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('AnimatedBadge', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  describe('Rendering', () => {
    it('renders children', () => {
      renderWithTheme(
        <AnimatedBadge badgeContent={4} color="error">
          <MailIcon data-testid="mail-icon" />
        </AnimatedBadge>
      );
      expect(screen.getByTestId('mail-icon')).toBeInTheDocument();
    });

    it('renders badge content', () => {
      renderWithTheme(
        <AnimatedBadge badgeContent={7} color="primary">
          <MailIcon />
        </AnimatedBadge>
      );
      expect(screen.getByText('7')).toBeInTheDocument();
    });

    it('renders with zero badge content', () => {
      renderWithTheme(
        <AnimatedBadge badgeContent={0} color="error" showZero>
          <MailIcon />
        </AnimatedBadge>
      );
      expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('renders with text badge content', () => {
      renderWithTheme(
        <AnimatedBadge badgeContent="new" color="secondary">
          <MailIcon />
        </AnimatedBadge>
      );
      expect(screen.getByText('new')).toBeInTheDocument();
    });
  });

  describe('Animation variants', () => {
    it('defaults to bounce animation variant', () => {
      const { container } = renderWithTheme(
        <AnimatedBadge badgeContent={1} color="error">
          <MailIcon />
        </AnimatedBadge>
      );
      expect(container.querySelector('.MuiBadge-root')).toBeInTheDocument();
    });

    it('renders with bounce animation variant', () => {
      const { container } = renderWithTheme(
        <AnimatedBadge badgeContent={1} color="error" animationVariant="bounce">
          <MailIcon />
        </AnimatedBadge>
      );
      expect(container.querySelector('.MuiBadge-root')).toBeInTheDocument();
    });

    it('renders with pulse animation variant', () => {
      const { container } = renderWithTheme(
        <AnimatedBadge badgeContent={1} color="error" animationVariant="pulse">
          <MailIcon />
        </AnimatedBadge>
      );
      expect(container.querySelector('.MuiBadge-root')).toBeInTheDocument();
    });

    it('renders with none animation variant', () => {
      const { container } = renderWithTheme(
        <AnimatedBadge badgeContent={1} color="error" animationVariant="none">
          <MailIcon />
        </AnimatedBadge>
      );
      expect(container.querySelector('.MuiBadge-root')).toBeInTheDocument();
    });
  });

  describe('Animation on badge content change', () => {
    it('triggers animation when badgeContent changes', async () => {
      const { rerender } = renderWithTheme(
        <AnimatedBadge badgeContent={1} color="error" animateOnChange>
          <MailIcon />
        </AnimatedBadge>
      );

      rerender(
        <ThemeProvider theme={theme}>
          <AnimatedBadge badgeContent={2} color="error" animateOnChange>
            <MailIcon />
          </AnimatedBadge>
        </ThemeProvider>
      );

      await waitFor(() => {
        expect(screen.getByText('2')).toBeInTheDocument();
      });
    });

    it('clears animation after timeout', async () => {
      const { rerender, container } = renderWithTheme(
        <AnimatedBadge badgeContent={1} color="error" animateOnChange>
          <MailIcon />
        </AnimatedBadge>
      );

      rerender(
        <ThemeProvider theme={theme}>
          <AnimatedBadge badgeContent={5} color="error" animateOnChange>
            <MailIcon />
          </AnimatedBadge>
        </ThemeProvider>
      );

      act(() => {
        jest.advanceTimersByTime(2000);
      });

      await waitFor(() => {
        expect(container.querySelector('.MuiBadge-root')).toBeInTheDocument();
      });
    });

    it('does not animate when animateOnChange is false', async () => {
      const { rerender, container } = renderWithTheme(
        <AnimatedBadge badgeContent={1} color="error" animateOnChange={false}>
          <MailIcon />
        </AnimatedBadge>
      );

      rerender(
        <ThemeProvider theme={theme}>
          <AnimatedBadge badgeContent={3} color="error" animateOnChange={false}>
            <MailIcon />
          </AnimatedBadge>
        </ThemeProvider>
      );

      await waitFor(() => {
        expect(container.querySelector('.MuiBadge-root')).toBeInTheDocument();
      });
    });

    it('does not animate when badgeContent stays the same', async () => {
      const { rerender, container } = renderWithTheme(
        <AnimatedBadge badgeContent={4} color="error" animateOnChange>
          <MailIcon />
        </AnimatedBadge>
      );

      rerender(
        <ThemeProvider theme={theme}>
          <AnimatedBadge badgeContent={4} color="error" animateOnChange>
            <MailIcon />
          </AnimatedBadge>
        </ThemeProvider>
      );

      await waitFor(() => {
        expect(container.querySelector('.MuiBadge-root')).toBeInTheDocument();
      });
    });
  });

  describe('Pulse mode', () => {
    it('pulse variant is always animated regardless of content change', async () => {
      const { container } = renderWithTheme(
        <AnimatedBadge badgeContent={1} color="error" animationVariant="pulse">
          <MailIcon />
        </AnimatedBadge>
      );

      await waitFor(() => {
        expect(container.querySelector('.MuiBadge-root')).toBeInTheDocument();
      });
    });
  });

  describe('Props forwarding', () => {
    it('forwards color prop to Badge', () => {
      const { container } = renderWithTheme(
        <AnimatedBadge badgeContent={1} color="secondary">
          <MailIcon />
        </AnimatedBadge>
      );
      expect(container.querySelector('.MuiBadge-colorSecondary')).toBeInTheDocument();
    });

    it('forwards invisible prop', () => {
      const { container } = renderWithTheme(
        <AnimatedBadge badgeContent={1} color="error" invisible>
          <MailIcon />
        </AnimatedBadge>
      );
      expect(container.querySelector('.MuiBadge-invisible')).toBeInTheDocument();
    });

    it('forwards max prop to limit badge count', () => {
      renderWithTheme(
        <AnimatedBadge badgeContent={200} color="error" max={99}>
          <MailIcon />
        </AnimatedBadge>
      );
      expect(screen.getByText('99+')).toBeInTheDocument();
    });
  });

  describe('Cleanup', () => {
    it('cleans up timer on unmount', () => {
      const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
      const { rerender, unmount } = renderWithTheme(
        <AnimatedBadge badgeContent={1} color="error" animateOnChange>
          <MailIcon />
        </AnimatedBadge>
      );

      rerender(
        <ThemeProvider theme={theme}>
          <AnimatedBadge badgeContent={5} color="error" animateOnChange>
            <MailIcon />
          </AnimatedBadge>
        </ThemeProvider>
      );

      unmount();
      expect(clearTimeoutSpy).toHaveBeenCalled();
    });
  });
});
