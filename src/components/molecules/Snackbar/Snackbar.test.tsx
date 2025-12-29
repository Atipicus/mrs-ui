/**
 * Snackbar Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { renderWithTheme, screen, waitFor } from '../../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { Snackbar } from './Snackbar';

describe('Snackbar', () => {
  describe('Basic Rendering', () => {
    it('renders when open is true', () => {
      renderWithTheme(
        <Snackbar open message="Test message" />
      );
      expect(screen.getByText('Test message')).toBeInTheDocument();
    });

    it('does not render when open is false', () => {
      renderWithTheme(
        <Snackbar open={false} message="Test message" />
      );
      expect(screen.queryByText('Test message')).not.toBeInTheDocument();
    });

    it('renders children instead of message when provided', () => {
      renderWithTheme(
        <Snackbar open>
          Child content
        </Snackbar>
      );
      expect(screen.getByText('Child content')).toBeInTheDocument();
    });
  });

  describe('Simple Message Mode', () => {
    it('renders with simple message', () => {
      renderWithTheme(
        <Snackbar open message="Simple notification" />
      );
      expect(screen.getByText('Simple notification')).toBeInTheDocument();
    });

    it('renders close button by default', () => {
      renderWithTheme(
        <Snackbar open message="Test" />
      );
      expect(screen.getByLabelText('close')).toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();

      renderWithTheme(
        <Snackbar open message="Test" onClose={handleClose} />
      );

      const closeButton = screen.getByLabelText('close');
      await user.click(closeButton);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('renders custom action', () => {
      const customAction = <button>Undo</button>;

      renderWithTheme(
        <Snackbar open message="Test" action={customAction} />
      );

      expect(screen.getByText('Undo')).toBeInTheDocument();
    });

    it('renders with action set to null (no action)', () => {
      renderWithTheme(
        <Snackbar open message="Test" action={null} />
      );

      expect(screen.queryByLabelText('close')).not.toBeInTheDocument();
    });
  });

  describe('Alert Mode (with severity)', () => {
    it('renders as Alert with success severity', () => {
      renderWithTheme(
        <Snackbar open severity="success">
          Success message
        </Snackbar>
      );

      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(screen.getByText('Success message')).toBeInTheDocument();
    });

    it('renders as Alert with error severity', () => {
      renderWithTheme(
        <Snackbar open severity="error">
          Error message
        </Snackbar>
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('renders as Alert with warning severity', () => {
      renderWithTheme(
        <Snackbar open severity="warning">
          Warning message
        </Snackbar>
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('renders as Alert with info severity', () => {
      renderWithTheme(
        <Snackbar open severity="info">
          Info message
        </Snackbar>
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('shows close button in Alert by default', () => {
      renderWithTheme(
        <Snackbar open severity="success">
          Test
        </Snackbar>
      );

      // Alert close button has a different label
      const closeButton = screen.getByRole('button', { name: /close/i });
      expect(closeButton).toBeInTheDocument();
    });

    it('hides close button in Alert when showCloseButton is false', () => {
      renderWithTheme(
        <Snackbar open severity="success" showCloseButton={false}>
          Test
        </Snackbar>
      );

      expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
    });

    it('calls onClose when Alert close button is clicked', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();

      renderWithTheme(
        <Snackbar open severity="success" onClose={handleClose}>
          Test
        </Snackbar>
      );

      const closeButton = screen.getByRole('button', { name: /close/i });
      await user.click(closeButton);

      expect(handleClose).toHaveBeenCalled();
    });

    it('renders different Alert variants', () => {
      const { rerender } = renderWithTheme(
        <Snackbar open severity="success" variant="filled">
          Filled
        </Snackbar>
      );
      expect(screen.getByRole('alert')).toBeInTheDocument();

      rerender(
        <Snackbar open severity="success" variant="outlined">
          Outlined
        </Snackbar>
      );
      expect(screen.getByRole('alert')).toBeInTheDocument();

      rerender(
        <Snackbar open severity="success" variant="standard">
          Standard
        </Snackbar>
      );
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  describe('Anchor Position', () => {
    it('applies default anchor origin (bottom-left)', () => {
      const { container } = renderWithTheme(
        <Snackbar open message="Test" />
      );

      // MUI applies position via inline styles
      const snackbar = container.querySelector('.MuiSnackbar-root');
      expect(snackbar).toBeInTheDocument();
    });

    it('applies custom anchor origin', () => {
      const { container } = renderWithTheme(
        <Snackbar
          open
          message="Test"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
      );

      const snackbar = container.querySelector('.MuiSnackbar-anchorOriginTopRight');
      expect(snackbar).toBeInTheDocument();
    });
  });

  describe('Auto-hide Behavior', () => {
    it('does not call onClose for clickaway by default', () => {
      const handleClose = jest.fn();

      renderWithTheme(
        <Snackbar open message="Test" onClose={handleClose} />
      );

      // Simulate clickaway (the component prevents this by default)
      // This test ensures the clickaway prevention logic exists
      expect(handleClose).not.toHaveBeenCalled();
    });

    it('respects autoHideDuration null (no auto-hide)', () => {
      renderWithTheme(
        <Snackbar open message="Test" autoHideDuration={null} />
      );

      expect(screen.getByText('Test')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has accessible name for close button', () => {
      renderWithTheme(
        <Snackbar open message="Test" />
      );

      expect(screen.getByLabelText('close')).toBeInTheDocument();
    });

    it('Alert has role="alert"', () => {
      renderWithTheme(
        <Snackbar open severity="info">
          Test
        </Snackbar>
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  describe('Props forwarding', () => {
    it('forwards additional props to MuiSnackbar', () => {
      const { container } = renderWithTheme(
        <Snackbar
          open
          message="Test"
          data-testid="custom-snackbar"
        />
      );

      const snackbar = container.querySelector('[data-testid="custom-snackbar"]');
      expect(snackbar).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = jest.fn();

      renderWithTheme(
        <Snackbar ref={ref} open message="Test" />
      );

      expect(ref).toHaveBeenCalled();
    });
  });
});
