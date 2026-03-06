/**
 * Dialog Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from './index';
import { Button } from '../../atoms/Button';
import { TextField } from '../../atoms/TextField';
import { Stack } from '../../atoms/Stack';

const meta: Meta<typeof Dialog> = {
  title: 'Molecules/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'If true, the dialog is open',
    },
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
      description: 'Determine the max-width of the dialog',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the dialog stretches to maxWidth',
    },
    fullScreen: {
      control: 'boolean',
      description: 'If true, the dialog is full-screen',
    },
    scroll: {
      control: 'select',
      options: ['body', 'paper'],
      description: 'Determine the container for scrolling the dialog',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/**
 * Interactive wrapper for stories that need state
 */
function DialogDemo({ children, ...props }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog {...props} open={open} onClose={() => setOpen(false)}>
        {typeof children === 'function' ? children(() => setOpen(false)) : children}
      </Dialog>
    </>
  );
}

/**
 * Default Dialog
 */
export const Default: Story = {
  render: () => (
    <DialogDemo>
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This is a simple dialog with a title, content, and actions.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} variant="contained">
              OK
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Alert Dialog
 */
export const AlertDialog: Story = {
  render: () => (
    <DialogDemo>
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Delete Item?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This action cannot be undone. Are you sure you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Form Dialog
 */
export const FormDialog: Story = {
  render: () => (
    <DialogDemo fullWidth maxWidth="sm">
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Subscribe to Newsletter</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your email address to receive our monthly newsletter.
            </DialogContentText>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <TextField
                autoFocus
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} variant="contained">
              Subscribe
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Confirmation Dialog
 */
export const ConfirmationDialog: Story = {
  render: () => (
    <DialogDemo>
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogContent>
            <DialogContentText>Do you want to proceed with this action?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="outlined">
              No
            </Button>
            <Button onClick={handleClose} variant="contained" color="primary">
              Yes
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Extra Small Width
 */
export const ExtraSmallWidth: Story = {
  render: () => (
    <DialogDemo maxWidth="xs" fullWidth>
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Extra Small Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This dialog has a maximum width of 'xs' (444px).</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Small Width (Default)
 */
export const SmallWidth: Story = {
  render: () => (
    <DialogDemo maxWidth="sm" fullWidth>
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Small Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This dialog has a maximum width of 'sm' (600px).</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Medium Width
 */
export const MediumWidth: Story = {
  render: () => (
    <DialogDemo maxWidth="md" fullWidth>
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Medium Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This dialog has a maximum width of 'md' (900px).</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Large Width
 */
export const LargeWidth: Story = {
  render: () => (
    <DialogDemo maxWidth="lg" fullWidth>
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Large Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This dialog has a maximum width of 'lg' (1200px).</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Extra Large Width
 */
export const ExtraLargeWidth: Story = {
  render: () => (
    <DialogDemo maxWidth="xl" fullWidth>
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Extra Large Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This dialog has a maximum width of 'xl' (1536px).</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Full Width
 */
export const FullWidth: Story = {
  render: () => (
    <DialogDemo fullWidth maxWidth="sm">
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Full Width Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog stretches to the maximum width (600px for 'sm').
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Full Screen
 */
export const FullScreen: Story = {
  render: () => (
    <DialogDemo fullScreen>
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Full Screen Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog covers the entire screen. Useful for mobile devices or immersive
              experiences.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Scrollable Content (Body Scroll)
 */
export const ScrollableBody: Story = {
  render: () => (
    <DialogDemo scroll="body" maxWidth="sm">
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Scrollable Dialog (Body)</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {Array.from({ length: 50 }, (_, i) => `Line ${i + 1}. `).join('')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Scrollable Content (Paper Scroll - Default)
 */
export const ScrollablePaper: Story = {
  render: () => (
    <DialogDemo scroll="paper" maxWidth="sm">
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Scrollable Dialog (Paper)</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              {Array.from({ length: 50 }, (_, i) => `Line ${i + 1}. `).join('')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Without Title
 */
export const WithoutTitle: Story = {
  render: () => (
    <DialogDemo maxWidth="sm">
      {(handleClose: () => void) => (
        <>
          <DialogContent>
            <DialogContentText>
              This dialog doesn't have a title, just content and actions.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * With Dividers
 */
export const WithDividers: Story = {
  render: () => (
    <DialogDemo maxWidth="sm" fullWidth>
      {(handleClose: () => void) => (
        <>
          <DialogTitle>Dialog with Dividers</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              This dialog has dividers above and below the content area, creating clear separation
              between sections.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} variant="contained">
              Save
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Complex Form Dialog
 */
export const ComplexFormDialog: Story = {
  render: () => (
    <DialogDemo fullWidth maxWidth="md">
      {(handleClose: () => void) => (
        <>
          <DialogTitle>User Profile</DialogTitle>
          <DialogContent dividers>
            <Stack spacing={3}>
              <TextField label="First Name" fullWidth required />
              <TextField label="Last Name" fullWidth required />
              <TextField label="Email" type="email" fullWidth required />
              <TextField label="Phone" type="tel" fullWidth />
              <TextField label="Address" fullWidth multiline rows={3} />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} variant="contained">
              Save
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};

/**
 * Disabled Backdrop Click
 */
export const DisabledBackdropClick: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleClose = (event: object, reason: 'backdropClick' | 'escapeKeyDown') => {
      if (reason === 'backdropClick') {
        return; // Prevent closing on backdrop click
      }
      setOpen(false);
    };

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth="sm">
          <DialogTitle>Cannot Close by Clicking Outside</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog cannot be closed by clicking the backdrop. You must use the Close button
              or press ESC.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} variant="contained">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
};

/**
 * Disabled Escape Key
 */
export const DisabledEscapeKey: Story = {
  render: () => (
    <DialogDemo disableEscapeKeyDown maxWidth="sm">
      {(handleClose: () => void) => (
        <>
          <DialogTitle>ESC Key Disabled</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog cannot be closed by pressing the ESC key. You must use the Close button or
              click the backdrop.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </DialogDemo>
  ),
};
