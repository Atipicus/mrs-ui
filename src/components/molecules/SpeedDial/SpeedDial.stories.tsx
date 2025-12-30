/**
 * SpeedDial Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { SpeedDial } from './SpeedDial';
import { SpeedDialAction } from './SpeedDialAction';
import { SpeedDialIcon } from './SpeedDialIcon';
import Box from '@mui/material/Box';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const meta: Meta<typeof SpeedDial> = {
  title: 'Components/Molecules/SpeedDial',
  component: SpeedDial,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right'],
      description: 'The direction the actions open',
    },
    hidden: {
      control: 'boolean',
      description: 'If true, the SpeedDial is hidden',
    },
    open: {
      control: 'boolean',
      description: 'If true, the component is shown',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'When pressed, a floating action button can display three to six related actions in the form of a Speed Dial.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpeedDial>;

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

/**
 * Default SpeedDial opening upward
 */
export const Default: Story = {
  render: () => (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  ),
};

/**
 * Controlled SpeedDial
 */
export const Controlled: Story = {
  render: function ControlledSpeedDial() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial controlled"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  },
};

/**
 * SpeedDial with different directions
 */
export const Directions: Story = {
  render: () => (
    <Box sx={{ height: 380, transform: 'translateZ(0px)', flexGrow: 1, position: 'relative' }}>
      <SpeedDial
        ariaLabel="SpeedDial direction up"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        direction="up"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={`${action.name} (up)`}
          />
        ))}
      </SpeedDial>

      <SpeedDial
        ariaLabel="SpeedDial direction down"
        sx={{ position: 'absolute', top: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={`${action.name} (down)`}
          />
        ))}
      </SpeedDial>

      <SpeedDial
        ariaLabel="SpeedDial direction left"
        sx={{ position: 'absolute', bottom: 16, left: 16 }}
        icon={<SpeedDialIcon />}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={`${action.name} (left)`}
            tooltipPlacement="right"
          />
        ))}
      </SpeedDial>

      <SpeedDial
        ariaLabel="SpeedDial direction right"
        sx={{ position: 'absolute', bottom: 16, left: '50%' }}
        icon={<SpeedDialIcon />}
        direction="right"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={`${action.name} (right)`}
            tooltipPlacement="left"
          />
        ))}
      </SpeedDial>
    </Box>
  ),
};

/**
 * Custom icon
 */
export const CustomIcon: Story = {
  render: () => (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial with custom icon"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<FavoriteIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  ),
};

/**
 * Custom open icon
 */
export const CustomOpenIcon: Story = {
  render: () => (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial with custom open icon"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon icon={<AddIcon />} openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  ),
};

/**
 * Persistent tooltips
 */
export const PersistentTooltips: Story = {
  render: () => (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial with persistent tooltips"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </Box>
  ),
};

/**
 * Hidden SpeedDial (shows/hides on scroll simulation)
 */
export const Hidden: Story = {
  render: function HiddenSpeedDial() {
    const [hidden, setHidden] = useState(false);

    return (
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <Box sx={{ mb: 2 }}>
          <button onClick={() => setHidden(!hidden)}>
            {hidden ? 'Show' : 'Hide'} SpeedDial
          </button>
        </Box>
        <SpeedDial
          ariaLabel="SpeedDial hidden example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          hidden={hidden}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  },
};

/**
 * With action click handlers
 */
export const WithActions: Story = {
  render: function SpeedDialWithActions() {
    const [message, setMessage] = useState('');

    const handleAction = (actionName: string) => {
      setMessage(`${actionName} clicked!`);
      setTimeout(() => setMessage(''), 2000);
    };

    return (
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        {message && (
          <Box sx={{ mb: 2, p: 1, bgcolor: 'primary.light', color: 'white', borderRadius: 1 }}>
            {message}
          </Box>
        )}
        <SpeedDial
          ariaLabel="SpeedDial with actions"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleAction(action.name)}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  },
};

/**
 * Disabled actions
 */
export const DisabledActions: Story = {
  render: () => (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial with disabled actions"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={<FileCopyIcon />}
          tooltipTitle="Copy (disabled)"
          disabled
        />
        <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
        <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle="Print (disabled)"
          disabled
        />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
      </SpeedDial>
    </Box>
  ),
};

/**
 * Different tooltip placements
 */
export const TooltipPlacements: Story = {
  render: () => (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial with different tooltip placements"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        direction="up"
      >
        <SpeedDialAction
          icon={<FileCopyIcon />}
          tooltipTitle="Left (default)"
          tooltipPlacement="left"
        />
        <SpeedDialAction
          icon={<SaveIcon />}
          tooltipTitle="Right"
          tooltipPlacement="right"
        />
        <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle="Top"
          tooltipPlacement="top"
        />
        <SpeedDialAction
          icon={<ShareIcon />}
          tooltipTitle="Bottom"
          tooltipPlacement="bottom"
        />
      </SpeedDial>
    </Box>
  ),
};

/**
 * Minimal actions (3 actions)
 */
export const MinimalActions: Story = {
  render: () => (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial with 3 actions"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      </SpeedDial>
    </Box>
  ),
};

/**
 * Maximum actions (6 actions)
 */
export const MaximumActions: Story = {
  render: () => (
    <Box sx={{ height: 380, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial with 6 actions"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
        <SpeedDialAction icon={<EditIcon />} tooltipTitle="Edit" />
        <SpeedDialAction icon={<FavoriteIcon />} tooltipTitle="Favorite" />
      </SpeedDial>
    </Box>
  ),
};
