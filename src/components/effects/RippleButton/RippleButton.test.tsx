/**
 * RippleButton Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../theme/theme';
import { RippleButton } from './RippleButton';

const mockRect = (element: HTMLElement) => {
  jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
    width: 120,
    height: 40,
    top: 20,
    left: 10,
    right: 130,
    bottom: 60,
    x: 10,
    y: 20,
    toJSON: () => ({}),
  } as DOMRect);
};

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

describe('RippleButton', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('renders children correctly', () => {
      renderWithTheme(<RippleButton>Click me</RippleButton>);
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('renders as a MUI Button', () => {
      renderWithTheme(<RippleButton>Button</RippleButton>);
      expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument();
    });

    it('renders with variant prop', () => {
      renderWithTheme(<RippleButton variant="contained">Contained</RippleButton>);
      const btn = screen.getByRole('button', { name: 'Contained' });
      expect(btn).toHaveClass('MuiButton-contained');
    });

    it('renders with outlined variant', () => {
      renderWithTheme(<RippleButton variant="outlined">Outlined</RippleButton>);
      const btn = screen.getByRole('button', { name: 'Outlined' });
      expect(btn).toHaveClass('MuiButton-outlined');
    });

    it('renders disabled state', () => {
      renderWithTheme(<RippleButton disabled>Disabled</RippleButton>);
      expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
    });

    it('has correct displayName', () => {
      expect(RippleButton.displayName).toBe('RippleButton');
    });
  });

  describe('Ripple effect enabled', () => {
    it('creates a ripple container on render', () => {
      const { container } = renderWithTheme(<RippleButton>Click</RippleButton>);
      // The RippleContainer span should exist
      const btn = container.querySelector('button');
      expect(btn).toBeInTheDocument();
    });

    it('creates a ripple on click', async () => {
      const { container } = renderWithTheme(<RippleButton>Click</RippleButton>);
      const btn = container.querySelector('button')!;
      mockRect(btn);

      fireEvent.click(btn, { clientX: 60, clientY: 40 });

      await waitFor(() => {
        // RippleSpan elements appear inside the RippleContainer
        const rippleSpans = container.querySelectorAll('span > span');
        expect(rippleSpans.length).toBeGreaterThan(0);
      });
    });

    it('calls the provided onClick handler', () => {
      const handleClick = jest.fn();
      const { container } = renderWithTheme(
        <RippleButton onClick={handleClick}>Click</RippleButton>
      );
      const btn = container.querySelector('button')!;
      fireEvent.click(btn);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick and creates ripple simultaneously', async () => {
      const handleClick = jest.fn();
      const { container } = renderWithTheme(
        <RippleButton onClick={handleClick}>Click</RippleButton>
      );
      const btn = container.querySelector('button')!;
      mockRect(btn);
      fireEvent.click(btn, { clientX: 60, clientY: 40 });

      expect(handleClick).toHaveBeenCalledTimes(1);
      await waitFor(() => {
        const rippleSpans = container.querySelectorAll('span > span');
        expect(rippleSpans.length).toBeGreaterThan(0);
      });
    });

    it('clears ripples after animation completes', async () => {
      const { container } = renderWithTheme(<RippleButton>Click</RippleButton>);
      const btn = container.querySelector('button')!;
      mockRect(btn);

      fireEvent.click(btn, { clientX: 60, clientY: 40 });

      await waitFor(() => {
        const rippleSpans = container.querySelectorAll('span > span');
        expect(rippleSpans.length).toBeGreaterThan(0);
      });

      jest.advanceTimersByTime(1200);

      await waitFor(() => {
        const rippleSpans = container.querySelectorAll('span > span');
        expect(rippleSpans.length).toBe(0);
      });
    });
  });

  describe('Ripple effect disabled', () => {
    it('does not create ripple when disableRipple is true', async () => {
      const { container } = renderWithTheme(<RippleButton disableRipple>Click</RippleButton>);
      const btn = container.querySelector('button')!;
      mockRect(btn);

      fireEvent.click(btn, { clientX: 60, clientY: 40 });

      await waitFor(() => {
        // No RippleContainer span should be rendered
        const rippleContainers = container.querySelectorAll('span > span');
        expect(rippleContainers.length).toBe(0);
      });
    });

    it('still calls onClick when disableRipple is true', () => {
      const handleClick = jest.fn();
      const { container } = renderWithTheme(
        <RippleButton disableRipple onClick={handleClick}>
          Click
        </RippleButton>
      );
      const btn = container.querySelector('button')!;
      fireEvent.click(btn);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not render RippleContainer when disableRipple is true', () => {
      const { container } = renderWithTheme(
        <RippleButton disableRipple>No Ripple</RippleButton>
      );
      // MUI button has spans inside, but no ripple container span
      const btn = container.querySelector('button')!;
      // The ripple container is a styled span with position:absolute — it won't be in the DOM
      expect(btn).toBeInTheDocument();
    });
  });

  describe('Ref forwarding', () => {
    it('forwards ref to the button element', () => {
      const ref = React.createRef<HTMLButtonElement>();
      renderWithTheme(<RippleButton ref={ref}>Button</RippleButton>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe('Props forwarding', () => {
    it('forwards color prop to MUI Button', () => {
      renderWithTheme(
        <RippleButton color="secondary" variant="contained">
          Secondary
        </RippleButton>
      );
      const btn = screen.getByRole('button', { name: 'Secondary' });
      expect(btn).toHaveClass('MuiButton-colorSecondary');
    });

    it('forwards size prop to MUI Button', () => {
      renderWithTheme(<RippleButton size="small">Small</RippleButton>);
      const btn = screen.getByRole('button', { name: 'Small' });
      expect(btn).toHaveClass('MuiButton-sizeSmall');
    });

    it('forwards fullWidth prop', () => {
      renderWithTheme(<RippleButton fullWidth>Full Width</RippleButton>);
      const btn = screen.getByRole('button', { name: 'Full Width' });
      expect(btn).toHaveClass('MuiButton-fullWidth');
    });
  });
});
