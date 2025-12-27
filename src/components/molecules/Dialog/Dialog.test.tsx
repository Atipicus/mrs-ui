/**
 * Dialog component tests
 */

import React from 'react';
import { describe, it, expect, jest } from '@jest/globals';
import { render, screen, fireEvent, waitFor } from '../../../../tests/test-utils';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from './index';
import { Button } from '../../atoms/Button';

describe('Dialog', () => {
  describe('Rendering', () => {
    it('should render successfully when open', () => {
      render(
        <Dialog open>
          <DialogTitle>Test Dialog</DialogTitle>
        </Dialog>
      );
      expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    });

    it('should not render when closed', () => {
      render(
        <Dialog open={false}>
          <DialogTitle>Test Dialog</DialogTitle>
        </Dialog>
      );
      expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
    });

    it('should render with DialogContent', () => {
      render(
        <Dialog open>
          <DialogContent>
            <DialogContentText>Dialog content</DialogContentText>
          </DialogContent>
        </Dialog>
      );
      expect(screen.getByText('Dialog content')).toBeInTheDocument();
    });

    it('should render with DialogActions', () => {
      render(
        <Dialog open>
          <DialogActions>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </DialogActions>
        </Dialog>
      );
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('OK')).toBeInTheDocument();
    });

    it('should render complete dialog structure', () => {
      render(
        <Dialog open>
          <DialogTitle>Complete Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This is the content</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Close</Button>
          </DialogActions>
        </Dialog>
      );
      expect(screen.getByText('Complete Dialog')).toBeInTheDocument();
      expect(screen.getByText('This is the content')).toBeInTheDocument();
      expect(screen.getByText('Close')).toBeInTheDocument();
    });
  });

  describe('Max Width', () => {
    it('should render with xs max width', () => {
      render(
        <Dialog open maxWidth="xs">
          <DialogTitle>XS Dialog</DialogTitle>
        </Dialog>
      );
      expect(screen.getByText('XS Dialog')).toBeInTheDocument();
    });

    it('should render with sm max width', () => {
      render(
        <Dialog open maxWidth="sm">
          <DialogTitle>SM Dialog</DialogTitle>
        </Dialog>
      );
      expect(screen.getByText('SM Dialog')).toBeInTheDocument();
    });

    it('should render with md max width', () => {
      render(
        <Dialog open maxWidth="md">
          <DialogTitle>MD Dialog</DialogTitle>
        </Dialog>
      );
      expect(screen.getByText('MD Dialog')).toBeInTheDocument();
    });

    it('should render with lg max width', () => {
      render(
        <Dialog open maxWidth="lg">
          <DialogTitle>LG Dialog</DialogTitle>
        </Dialog>
      );
      expect(screen.getByText('LG Dialog')).toBeInTheDocument();
    });

    it('should render with xl max width', () => {
      render(
        <Dialog open maxWidth="xl">
          <DialogTitle>XL Dialog</DialogTitle>
        </Dialog>
      );
      expect(screen.getByText('XL Dialog')).toBeInTheDocument();
    });

    it('should render without max width when false', () => {
      render(
        <Dialog open maxWidth={false}>
          <DialogTitle>No Max Width</DialogTitle>
        </Dialog>
      );
      expect(screen.getByText('No Max Width')).toBeInTheDocument();
    });
  });

  describe('Full Width', () => {
    it('should render with full width', () => {
      render(
        <Dialog open fullWidth>
          <DialogTitle>Full Width Dialog</DialogTitle>
        </Dialog>
      );
      expect(screen.getByText('Full Width Dialog')).toBeInTheDocument();
    });

    it('should render without full width by default', () => {
      render(
        <Dialog open>
          <DialogTitle>Normal Dialog</DialogTitle>
        </Dialog>
      );
      expect(screen.getByText('Normal Dialog')).toBeInTheDocument();
    });
  });

  describe('Full Screen', () => {
    it('should render full screen', () => {
      render(
        <Dialog open fullScreen>
          <DialogTitle>Full Screen Dialog</DialogTitle>
        </Dialog>
      );
      expect(screen.getByText('Full Screen Dialog')).toBeInTheDocument();
    });

    it('should render without full screen by default', () => {
      render(
        <Dialog open>
          <DialogTitle>Normal Dialog</DialogTitle>
        </Dialog>
      );
      expect(screen.getByText('Normal Dialog')).toBeInTheDocument();
    });
  });

  describe('Scroll', () => {
    it('should render with paper scroll by default', () => {
      render(
        <Dialog open>
          <DialogTitle>Dialog</DialogTitle>
        </Dialog>
      );

      expect(screen.getByText('Dialog')).toBeInTheDocument();
    });

    it('should render with body scroll', () => {
      render(
        <Dialog open scroll="body">
          <DialogTitle>Body Scroll Dialog</DialogTitle>
        </Dialog>
      );

      expect(screen.getByText('Body Scroll Dialog')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('should have onClose handler', () => {
      const handleClose = jest.fn();
      render(
        <Dialog open onClose={handleClose}>
          <DialogTitle>Test Dialog</DialogTitle>
        </Dialog>
      );

      // Dialog renders with the onClose handler
      expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    });

    it('should render with disableEscapeKeyDown prop', () => {
      const handleClose = jest.fn();
      render(
        <Dialog open onClose={handleClose} disableEscapeKeyDown>
          <DialogTitle>Test Dialog</DialogTitle>
        </Dialog>
      );

      expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(
        <Dialog open aria-labelledby="dialog-title" aria-describedby="dialog-description">
          <DialogTitle id="dialog-title">Accessible Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              This dialog has proper ARIA labels
            </DialogContentText>
          </DialogContent>
        </Dialog>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-labelledby', 'dialog-title');
      expect(dialog).toHaveAttribute('aria-describedby', 'dialog-description');
    });

    it('should have dialog role', () => {
      render(
        <Dialog open>
          <DialogTitle>Test Dialog</DialogTitle>
        </Dialog>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should be modal', () => {
      render(
        <Dialog open>
          <DialogTitle>Modal Dialog</DialogTitle>
        </Dialog>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-modal', 'true');
    });
  });

  describe('Ref Forwarding', () => {
    it('should forward ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <Dialog open ref={ref}>
          <DialogTitle>Ref Dialog</DialogTitle>
        </Dialog>
      );

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('Custom Props', () => {
    it('should accept custom className', () => {
      render(
        <Dialog open className="custom-dialog">
          <DialogTitle>Custom Dialog</DialogTitle>
        </Dialog>
      );

      expect(screen.getByText('Custom Dialog')).toBeInTheDocument();
    });

    it('should accept custom sx prop', () => {
      render(
        <Dialog open sx={{ '& .MuiDialog-paper': { backgroundColor: 'red' } }}>
          <DialogTitle>Styled Dialog</DialogTitle>
        </Dialog>
      );

      expect(screen.getByText('Styled Dialog')).toBeInTheDocument();
    });
  });

  describe('Children', () => {
    it('should render custom children', () => {
      render(
        <Dialog open>
          <div data-testid="custom-content">Custom content</div>
        </Dialog>
      );

      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });

    it('should render multiple children', () => {
      render(
        <Dialog open>
          <DialogTitle>Title</DialogTitle>
          <DialogContent>Content</DialogContent>
          <DialogActions>
            <Button>Action</Button>
          </DialogActions>
        </Dialog>
      );

      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
      expect(screen.getByText('Action')).toBeInTheDocument();
    });
  });

  describe('Close Handlers', () => {
    it('should accept onClose handler', () => {
      const handleClose = jest.fn();
      render(
        <Dialog open onClose={handleClose}>
          <DialogTitle>Test Dialog</DialogTitle>
        </Dialog>
      );

      // Verify the dialog renders with the onClose prop
      expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    });

    it('should render without onClose handler', () => {
      render(
        <Dialog open>
          <DialogTitle>Test Dialog</DialogTitle>
        </Dialog>
      );

      expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty dialog', () => {
      render(<Dialog open />);

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should handle dialog without title', () => {
      render(
        <Dialog open>
          <DialogContent>
            <DialogContentText>Content without title</DialogContentText>
          </DialogContent>
        </Dialog>
      );

      expect(screen.getByText('Content without title')).toBeInTheDocument();
    });

    it('should handle dialog without actions', () => {
      render(
        <Dialog open>
          <DialogTitle>No Actions</DialogTitle>
          <DialogContent>
            <DialogContentText>This dialog has no action buttons</DialogContentText>
          </DialogContent>
        </Dialog>
      );

      expect(screen.getByText('No Actions')).toBeInTheDocument();
    });
  });
});
