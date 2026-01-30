/**
 * AccountStack Component Stories
 * Demonstrates all variants and use cases of the AccountStack component
 */

import type { Meta, StoryObj } from '@storybook/react';
import { MaterialSymbol } from '../MaterialSymbol';
import { AccountStack } from './AccountStack';
import { AppBar } from '../../molecules/AppBar';
import { Toolbar } from '../Toolbar';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';
import { Box } from '../Box';

const meta: Meta<typeof AccountStack> = {
  title: 'Atoms/AccountStack',
  component: AccountStack,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Account stack component for displaying user information with avatar and badge. Designed for use in AppBar/Toolbar. Uses MRS Design System tokens (Nunito typography, #00686f primary color).',
      },
    },
  },
  argTypes: {
    user: {
      control: 'boolean',
      description: 'Show/hide avatar with badge',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    userAccountInfo: {
      control: 'boolean',
      description: 'Show/hide user account information text',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    notifications: {
      control: 'boolean',
      description: 'Show/hide notification badge on avatar',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    userName: {
      control: 'text',
      description: 'User name to display',
      table: {
        defaultValue: { summary: 'John Doe' },
      },
    },
    userEmail: {
      control: 'text',
      description: 'User email or secondary info',
      table: {
        defaultValue: { summary: 'john.doe@example.com' },
      },
    },
    avatarSrc: {
      control: 'text',
      description: 'Avatar image URL',
    },
    avatarAlt: {
      control: 'text',
      description: 'Avatar alt text for accessibility',
      table: {
        defaultValue: { summary: 'User avatar' },
      },
    },
    avatarPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position of avatar relative to user info',
      table: {
        defaultValue: { summary: 'left' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccountStack>;

/**
 * Default AccountStack with all elements visible
 */
export const Default: Story = {
  args: {
    user: false,
    userAccountInfo: false,
    notifications: false,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
  },
};

/**
 * AccountStack with custom user data
 */
export const CustomUserData: Story = {
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
    avatarSrc:
      'https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no',
  },
};

/**
 * AccountStack with notification badge only (no count)
 */
export const WithNotificationDot: Story = {
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'John Doe',
    userEmail: 'john.doe@example.com',
  },
};

/**
 * AccountStack with notification count
 */
export const WithNotificationCount: Story = {
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    notificationCount: 5,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
  },
};

/**
 * AccountStack without notifications badge
 */
export const WithoutNotifications: Story = {
  args: {
    user: true,
    userAccountInfo: true,
    notifications: false,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
  },
};

/**
 * Avatar only (no account info text)
 */
export const AvatarOnly: Story = {
  args: {
    user: true,
    userAccountInfo: false,
    notifications: true,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
  },
};

/**
 * Account info text only (no avatar)
 */
export const TextOnly: Story = {
  args: {
    user: false,
    userAccountInfo: true,
    notifications: false,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
  },
};

/**
 * AccountStack in AppBar context (primary color)
 */
export const InAppBar: Story = {
  args: {
    user: true,
    userAccountInfo: false,
    notifications: false,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
  },
  render: (args) => (
    <Box sx={{ width: '100%', minWidth: 600 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MaterialSymbol icon="menu" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MRS Dashboard
          </Typography>
          <AccountStack {...args} sx={{ color: 'inherit' }} />
        </Toolbar>
      </AppBar>
    </Box>
  ),
};

/**
 * AccountStack in AppBar with secondary color
 */
export const InAppBarSecondary: Story = {
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
    avatarSrc:
      'https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no',
  },
  render: (args) => (
    <Box sx={{ width: '100%', minWidth: 600 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MaterialSymbol icon="menu" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'secondary.contrastText' }}
          >
            MRS Application
          </Typography>
          <AccountStack {...args} sx={{ color: 'secondary.contrastText' }} />
        </Toolbar>
      </AppBar>
    </Box>
  ),
};

/**
 * Multiple account stacks showing different states
 */
export const AllVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 2 }}>
      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
          All elements visible
        </Typography>
        <AccountStack
          user={true}
          userAccountInfo={true}
          notifications={true}
          userName="Martín Gómez"
          userEmail="mgomez@atipic.us"
        />
      </Box>

      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
          With notification count
        </Typography>
        <AccountStack
          user={true}
          userAccountInfo={true}
          notifications={true}
          notificationCount={12}
          userName="Martín Gómez"
          userEmail="mgomez@atipic.us"
          avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"
        />
      </Box>

      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
          No notifications
        </Typography>
        <AccountStack
          user={true}
          userAccountInfo={true}
          notifications={false}
          userName="Martín Gómez"
          userEmail="mgomez@atipic.us"
        />
      </Box>

      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
          Avatar only
        </Typography>
        <AccountStack
          user={true}
          userAccountInfo={false}
          notifications={true}
          userName="Martín Gómez"
          avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"
        />
      </Box>

      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
          Text only
        </Typography>
        <AccountStack
          user={false}
          userAccountInfo={true}
          notifications={false}
          userName="Martín Gómez"
          userEmail="mgomez@atipic.us"
        />
      </Box>
    </Box>
  ),
};

/**
 * Dense toolbar variant
 */
export const InDenseToolbar: Story = {
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
  },
  render: (args) => (
    <Box sx={{ width: '100%', minWidth: 600 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MaterialSymbol icon="menu" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dense Toolbar
          </Typography>
          <AccountStack {...args} sx={{ color: 'inherit', height: 32 }} />
        </Toolbar>
      </AppBar>
    </Box>
  ),
};

/**
 * Avatar on the right side
 */
export const AvatarRight: Story = {
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
    avatarPosition: 'right',
  },
};

/**
 * Avatar position comparison
 */
export const AvatarPositionComparison: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 2 }}>
      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
          Avatar Left (default)
        </Typography>
        <AccountStack
          user={true}
          userAccountInfo={true}
          notifications={true}
          userName="Martín Gómez"
          userEmail="mgomez@atipic.us"
          avatarPosition="left"
          avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"
        />
      </Box>

      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
          Avatar Right
        </Typography>
        <AccountStack
          user={true}
          userAccountInfo={true}
          notifications={true}
          userName="Martín Gómez"
          userEmail="mgomez@atipic.us"
          avatarPosition="right"
          avatarSrc="https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no"
        />
      </Box>
    </Box>
  ),
};

/**
 * Avatar right in AppBar
 */
export const AvatarRightInAppBar: Story = {
  args: {
    user: true,
    userAccountInfo: true,
    notifications: true,
    notificationCount: 3,
    userName: 'Martín Gómez',
    userEmail: 'mgomez@atipic.us',
    avatarPosition: 'right',
    avatarSrc:
      'https://lh3.googleusercontent.com/a/ACg8ocKjndHOZWlcmHmS902xQ2e-x7bZ_f5j0ToopFrKRhDobnkSv6o=s576-c-no',
  },
  render: (args) => (
    <Box sx={{ width: '100%', minWidth: 600 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MaterialSymbol icon="menu" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Avatar Right Position
          </Typography>
          <AccountStack {...args} sx={{ color: 'inherit' }} />
        </Toolbar>
      </AppBar>
    </Box>
  ),
};
