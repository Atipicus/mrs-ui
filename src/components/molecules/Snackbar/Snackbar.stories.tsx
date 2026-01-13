/**
 * Snackbar Component Stories
 * @package @mrs/ui
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Snackbar } from './Snackbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const meta: Meta<typeof Snackbar> = {
  title: 'Molecules/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          "Snackbars provide brief notifications. They appear temporarily, towards the bottom of the screen. They shouldn't interrupt the user experience, and they don't require user input to disappear.",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'If true, the Snackbar is open',
    },
    autoHideDuration: {
      control: 'number',
      description: 'The number of milliseconds to wait before automatically closing',
    },
    message: {
      control: 'text',
      description: 'The message to display',
    },
    severity: {
      control: 'select',
      options: [undefined, 'error', 'warning', 'info', 'success'],
      description: 'The severity of the alert',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
      description: 'The variant to use when severity is provided',
    },
    anchorOrigin: {
      control: 'object',
      description: 'The anchor of the Snackbar',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'If true, show close button when using severity',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

/**
 * Interactive example with a button to trigger the Snackbar
 */
const SnackbarDemo: React.FC<Partial<typeof Snackbar>> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Snackbar
      </Button>
      <Snackbar {...props} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

/**
 * Default Snackbar with simple message
 */
export const Default: Story = {
  render: () => <SnackbarDemo message="This is a notification message" />,
};

/**
 * Simple message Snackbar
 */
export const SimpleMessage: Story = {
  render: () => <SnackbarDemo message="Item successfully saved" autoHideDuration={3000} />,
};

/**
 * Success severity
 */
export const Success: Story = {
  render: () => (
    <SnackbarDemo severity="success" autoHideDuration={4000}>
      Operation completed successfully!
    </SnackbarDemo>
  ),
};

/**
 * Error severity
 */
export const Error: Story = {
  render: () => (
    <SnackbarDemo severity="error" autoHideDuration={null}>
      An error occurred. Please try again.
    </SnackbarDemo>
  ),
};

/**
 * Warning severity
 */
export const Warning: Story = {
  render: () => (
    <SnackbarDemo severity="warning">Your session will expire in 5 minutes</SnackbarDemo>
  ),
};

/**
 * Info severity
 */
export const Info: Story = {
  render: () => <SnackbarDemo severity="info">New updates are available</SnackbarDemo>,
};

/**
 * Different Alert variants
 */
export const AlertVariants: Story = {
  render: () => {
    const [openFilled, setOpenFilled] = useState(false);
    const [openOutlined, setOpenOutlined] = useState(false);
    const [openStandard, setOpenStandard] = useState(false);

    return (
      <Stack spacing={2}>
        <Button variant="contained" onClick={() => setOpenFilled(true)}>
          Filled Alert
        </Button>
        <Button variant="contained" onClick={() => setOpenOutlined(true)}>
          Outlined Alert
        </Button>
        <Button variant="contained" onClick={() => setOpenStandard(true)}>
          Standard Alert
        </Button>

        <Snackbar
          open={openFilled}
          onClose={() => setOpenFilled(false)}
          severity="success"
          variant="filled"
        >
          Filled variant success message
        </Snackbar>

        <Snackbar
          open={openOutlined}
          onClose={() => setOpenOutlined(false)}
          severity="info"
          variant="outlined"
        >
          Outlined variant info message
        </Snackbar>

        <Snackbar
          open={openStandard}
          onClose={() => setOpenStandard(false)}
          severity="warning"
          variant="standard"
        >
          Standard variant warning message
        </Snackbar>
      </Stack>
    );
  },
};

/**
 * Different anchor positions
 */
export const Positions: Story = {
  render: () => {
    const [openTL, setOpenTL] = useState(false);
    const [openTC, setOpenTC] = useState(false);
    const [openTR, setOpenTR] = useState(false);
    const [openBL, setOpenBL] = useState(false);
    const [openBC, setOpenBC] = useState(false);
    const [openBR, setOpenBR] = useState(false);

    return (
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => setOpenTL(true)}>
            Top Left
          </Button>
          <Button variant="outlined" onClick={() => setOpenTC(true)}>
            Top Center
          </Button>
          <Button variant="outlined" onClick={() => setOpenTR(true)}>
            Top Right
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => setOpenBL(true)}>
            Bottom Left
          </Button>
          <Button variant="outlined" onClick={() => setOpenBC(true)}>
            Bottom Center
          </Button>
          <Button variant="outlined" onClick={() => setOpenBR(true)}>
            Bottom Right
          </Button>
        </Stack>

        <Snackbar
          open={openTL}
          onClose={() => setOpenTL(false)}
          message="Top Left"
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        />
        <Snackbar
          open={openTC}
          onClose={() => setOpenTC(false)}
          message="Top Center"
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        />
        <Snackbar
          open={openTR}
          onClose={() => setOpenTR(false)}
          message="Top Right"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
        <Snackbar
          open={openBL}
          onClose={() => setOpenBL(false)}
          message="Bottom Left"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        />
        <Snackbar
          open={openBC}
          onClose={() => setOpenBC(false)}
          message="Bottom Center"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
        <Snackbar
          open={openBR}
          onClose={() => setOpenBR(false)}
          message="Bottom Right"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        />
      </Stack>
    );
  },
};

/**
 * Without close button
 */
export const NoCloseButton: Story = {
  render: () => (
    <SnackbarDemo severity="info" showCloseButton={false} autoHideDuration={3000}>
      This will auto-close in 3 seconds
    </SnackbarDemo>
  ),
};

/**
 * Custom action
 */
export const CustomAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const action = (
      <Button color="secondary" size="small" onClick={() => setOpen(false)}>
        UNDO
      </Button>
    );

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Snackbar
          open={open}
          onClose={() => setOpen(false)}
          message="Item deleted"
          action={action}
          autoHideDuration={6000}
        />
      </>
    );
  },
};

/**
 * Persistent (no auto-hide)
 */
export const Persistent: Story = {
  render: () => (
    <SnackbarDemo severity="error" autoHideDuration={null}>
      This notification will stay until you close it
    </SnackbarDemo>
  ),
};

/**
 * Long message
 */
export const LongMessage: Story = {
  render: () => (
    <SnackbarDemo severity="info" autoHideDuration={8000}>
      This is a very long notification message that demonstrates how the Snackbar handles longer
      content. The width will adjust automatically to fit the content while maintaining good
      readability.
    </SnackbarDemo>
  ),
};

/**
 * Consecutive Snackbars
 */
export const Consecutive: Story = {
  render: () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleShowAll = () => {
      setOpen1(true);
      setTimeout(() => setOpen2(true), 500);
      setTimeout(() => setOpen3(true), 1000);
    };

    return (
      <>
        <Button variant="contained" onClick={handleShowAll}>
          Show Consecutive Snackbars
        </Button>

        <Snackbar
          open={open1}
          onClose={() => setOpen1(false)}
          severity="info"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          First notification
        </Snackbar>

        <Snackbar
          open={open2}
          onClose={() => setOpen2(false)}
          severity="success"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          Second notification
        </Snackbar>

        <Snackbar
          open={open3}
          onClose={() => setOpen3(false)}
          severity="warning"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          Third notification
        </Snackbar>
      </>
    );
  },
};
