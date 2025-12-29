/**
 * Toolbar Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Toolbar } from './Toolbar';
import { AppBar } from '../../molecules/AppBar';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { AccountStack } from '../AccountStack';
import MenuIcon from '@mui/icons-material/Menu';

const meta: Meta<typeof Toolbar> = {
  title: 'Atoms/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Container component for AppBar content. Provides flex layout with vertical centering and consistent height (56px regular, 48px dense).',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['regular', 'dense'],
      description: 'Toolbar height variant',
      table: {
        defaultValue: { summary: 'regular' },
      },
    },
    disableGutters: {
      control: 'boolean',
      description: 'Disable horizontal padding',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

/**
 * Default Toolbar with regular height (56px)
 */
export const Default: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Regular Toolbar (56px)</Typography>
      </Toolbar>
    </AppBar>
  ),
};

/**
 * Toolbar with menu icon and title
 */
export const WithMenuIcon: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MRS Application
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  ),
};

/**
 * Dense variant with compact height (48px)
 */
export const Dense: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Dense Toolbar (48px)
        </Typography>
      </Toolbar>
    </AppBar>
  ),
};

/**
 * Toolbar without gutter padding
 */
export const NoGutters: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Typography variant="h6" sx={{ px: 2 }}>
          No Gutters (Manual Padding)
        </Typography>
      </Toolbar>
    </AppBar>
  ),
};

/**
 * Toolbar with flexible layout
 */
export const FlexibleLayout: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Title with Flex Grow
        </Typography>
        <Button color="inherit">Action 1</Button>
        <Button color="inherit">Action 2</Button>
      </Toolbar>
    </AppBar>
  ),
};

/**
 * Comparison of regular vs dense
 */
export const RegularVsDense: Story = {
  render: () => (
    <>
      <AppBar position="static" sx={{ mb: 2 }}>
        <Toolbar>
          <Typography variant="h6">Regular Toolbar (56px minHeight)</Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6">Dense Toolbar (48px minHeight)</Typography>
        </Toolbar>
      </AppBar>
    </>
  ),
};

/**
 * Toolbar with AccountStack component
 */
export const WithAccountStack: Story = {
  render: () => (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MRS Dashboard
        </Typography>
        <AccountStack
          userName="John Doe"
          userEmail="john.doe@example.com"
          notifications
          user
          userAccountInfo
        />
      </Toolbar>
    </AppBar>
  ),
};

/**
 * Toolbar with AccountStack and notifications
 */
export const WithAccountStackNotifications: Story = {
  render: () => (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MRS Application
        </Typography>
        <AccountStack
          userName="Jane Smith"
          userEmail="jane.smith@mrs.com"
          notifications
          notificationCount={8}
          avatarSrc="https://i.pravatar.cc/150?img=5"
          user
          userAccountInfo
          sx={{ color: 'inherit' }}
        />
      </Toolbar>
    </AppBar>
  ),
};
