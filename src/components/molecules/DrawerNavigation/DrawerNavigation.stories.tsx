/**
 * DrawerNavigation Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { DrawerNavigation } from './DrawerNavigation';
import { Drawer } from '../Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { MaterialSymbol } from '../../atoms/MaterialSymbol';
import React from 'react';

const meta: Meta<typeof DrawerNavigation> = {
  title: 'Molecules/DrawerNavigation',
  component: DrawerNavigation,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description: 'Width of the navigation (default: 256px)',
    },
    paddingTop: {
      control: 'number',
      description: 'Top padding (default: 32px)',
    },
    paddingBottom: {
      control: 'number',
      description: 'Bottom padding (default: 32px)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DrawerNavigation>;

/**
 * Default navigation with simple items
 */
export const Default: Story = {
  render: () => (
    <Box sx={{ width: 256, bgcolor: 'background.paper', height: 400 }}>
      <DrawerNavigation
        items={[
          { label: 'Dashboard', icon: <MaterialSymbol icon="home" />, selected: true },
          { label: 'Inbox', icon: <MaterialSymbol icon="inbox" /> },
          { label: 'Settings', icon: <MaterialSymbol icon="settings" /> },
        ]}
      />
    </Box>
  ),
};

/**
 * Navigation with expandable items
 */
export const WithExpandableItems: Story = {
  render: () => (
    <Box sx={{ width: 256, bgcolor: 'background.paper', height: 500 }}>
      <DrawerNavigation
        items={[
          { label: 'Dashboard', icon: <MaterialSymbol icon="home" />, selected: true },
          {
            label: 'Products',
            icon: <MaterialSymbol icon="inbox" />,
            expandable: true,
            defaultOpen: true,
            children: [
              { label: 'All Products', icon: <MaterialSymbol icon="layers" /> },
              { label: 'Categories' },
              { label: 'Tags' },
            ],
          },
          { label: 'Customers', icon: <MaterialSymbol icon="people" /> },
          { label: 'Settings', icon: <MaterialSymbol icon="settings" /> },
        ]}
      />
    </Box>
  ),
};

/**
 * Mixed simple and expandable items
 */
export const MixedItems: Story = {
  render: () => (
    <Box sx={{ width: 256, bgcolor: 'background.paper', height: 600 }}>
      <DrawerNavigation
        items={[
          { label: 'Dashboard', icon: <MaterialSymbol icon="home" />, selected: true },
          {
            label: 'Mail',
            icon: <MaterialSymbol icon="inbox" />,
            expandable: true,
            children: [
              { label: 'Inbox', icon: <MaterialSymbol icon="inbox" /> },
              { label: 'Sent', icon: <MaterialSymbol icon="send" /> },
              { label: 'Drafts', icon: <MaterialSymbol icon="drafts" /> },
            ],
          },
          { label: 'Analytics', icon: <MaterialSymbol icon="bar_chart" /> },
          {
            label: 'E-commerce',
            icon: <MaterialSymbol icon="shopping_cart" />,
            expandable: true,
            children: [
              { label: 'Products' },
              { label: 'Orders' },
              { label: 'Customers' },
            ],
          },
          { label: 'Settings', icon: <MaterialSymbol icon="settings" /> },
        ]}
      />
    </Box>
  ),
};

/**
 * With dividers
 */
export const WithDividers: Story = {
  render: () => (
    <Box sx={{ width: 256, bgcolor: 'background.paper', height: 400 }}>
      <DrawerNavigation
        items={[
          { label: 'Dashboard', icon: <MaterialSymbol icon="home" />, divider: true },
          { label: 'Inbox', icon: <MaterialSymbol icon="inbox" /> },
          { label: 'Customers', icon: <MaterialSymbol icon="people" />, divider: true },
          { label: 'Settings', icon: <MaterialSymbol icon="settings" /> },
        ]}
      />
    </Box>
  ),
};

/**
 * Composition with Drawer component
 */
export const WithDrawer: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState(0);

    const items = [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <MaterialSymbol icon="home" />,
        selected: selected === 0,
        onClick: () => setSelected(0),
      },
      {
        id: 'products',
        label: 'Products',
        icon: <MaterialSymbol icon="inbox" />,
        expandable: true as const,
        defaultOpen: true,
        children: [
          {
            label: 'All Products',
            selected: selected === 1,
            onClick: () => setSelected(1),
          },
          {
            label: 'Categories',
            selected: selected === 2,
            onClick: () => setSelected(2),
          },
        ],
      },
      {
        id: 'customers',
        label: 'Customers',
        icon: <MaterialSymbol icon="people" />,
        selected: selected === 3,
        onClick: () => setSelected(3),
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <MaterialSymbol icon="bar_chart" />,
        selected: selected === 4,
        onClick: () => setSelected(4),
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <MaterialSymbol icon="settings" />,
        selected: selected === 5,
        onClick: () => setSelected(5),
      },
    ];

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)} anchor="left">
          <DrawerNavigation items={items} />
        </Drawer>
      </>
    );
  },
};

/**
 * Persistent drawer with navigation
 */
export const PersistentDrawer: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    const [selected, setSelected] = React.useState(0);

    const items = [
      {
        id: 'home',
        label: 'Home',
        icon: <MaterialSymbol icon="home" />,
        selected: selected === 0,
        onClick: () => setSelected(0),
      },
      {
        id: 'mail',
        label: 'Mail',
        icon: <MaterialSymbol icon="inbox" />,
        expandable: true as const,
        children: [
          {
            label: 'Inbox',
            icon: <MaterialSymbol icon="inbox" />,
            selected: selected === 1,
            onClick: () => setSelected(1),
          },
          {
            label: 'Sent',
            icon: <MaterialSymbol icon="send" />,
            selected: selected === 2,
            onClick: () => setSelected(2),
          },
        ],
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <MaterialSymbol icon="settings" />,
        selected: selected === 3,
        onClick: () => setSelected(3),
      },
    ];

    return (
      <Box sx={{ display: 'flex' }}>
        <Drawer variant="persistent" open={open} anchor="left">
          <DrawerNavigation items={items} />
        </Drawer>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Button variant="contained" onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Open'} Drawer
          </Button>
          <Box sx={{ mt: 2 }}>
            <h2>Main Content Area</h2>
            <p>Selected item: {selected}</p>
          </Box>
        </Box>
      </Box>
    );
  },
};

/**
 * Right-side drawer with navigation
 */
export const RightDrawer: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    const items = [
      { label: 'Profile', icon: <MaterialSymbol icon="people" /> },
      { label: 'Settings', icon: <MaterialSymbol icon="settings" /> },
      { label: 'Help', icon: <MaterialSymbol icon="inbox" /> },
    ];

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Right Drawer
        </Button>
        <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
          <DrawerNavigation items={items} />
        </Drawer>
      </>
    );
  },
};

/**
 * Custom width and padding
 */
export const CustomDimensions: Story = {
  render: () => (
    <Box sx={{ width: 320, bgcolor: 'background.paper', height: 400 }}>
      <DrawerNavigation
        width={320}
        paddingTop={16}
        paddingBottom={16}
        items={[
          { label: 'Dashboard', icon: <MaterialSymbol icon="home" /> },
          { label: 'Inbox', icon: <MaterialSymbol icon="inbox" /> },
          { label: 'Settings', icon: <MaterialSymbol icon="settings" /> },
        ]}
      />
    </Box>
  ),
};

/**
 * Without icons
 */
export const WithoutIcons: Story = {
  render: () => (
    <Box sx={{ width: 256, bgcolor: 'background.paper', height: 400 }}>
      <DrawerNavigation
        items={[
          { label: 'Home', selected: true },
          {
            label: 'Documentation',
            expandable: true,
            children: [
              { label: 'Getting Started' },
              { label: 'Components' },
              { label: 'API Reference' },
            ],
          },
          { label: 'Support' },
        ]}
      />
    </Box>
  ),
};

/**
 * Full application example
 */
export const FullApplication: Story = {
  render: () => {
    const [drawerOpen, setDrawerOpen] = React.useState(true);
    const [selected, setSelected] = React.useState('dashboard');

    const items = [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <MaterialSymbol icon="home" />,
        selected: selected === 'dashboard',
        onClick: () => setSelected('dashboard'),
        divider: true,
      },
      {
        id: 'products',
        label: 'Products',
        icon: <MaterialSymbol icon="shopping_cart" />,
        expandable: true as const,
        defaultOpen: selected.startsWith('products'),
        children: [
          {
            id: 'products-all',
            label: 'All Products',
            selected: selected === 'products-all',
            onClick: () => setSelected('products-all'),
          },
          {
            id: 'products-categories',
            label: 'Categories',
            selected: selected === 'products-categories',
            onClick: () => setSelected('products-categories'),
          },
          {
            id: 'products-inventory',
            label: 'Inventory',
            selected: selected === 'products-inventory',
            onClick: () => setSelected('products-inventory'),
          },
        ],
      },
      {
        id: 'customers',
        label: 'Customers',
        icon: <MaterialSymbol icon="people" />,
        selected: selected === 'customers',
        onClick: () => setSelected('customers'),
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <MaterialSymbol icon="bar_chart" />,
        selected: selected === 'analytics',
        onClick: () => setSelected('analytics'),
        divider: true,
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <MaterialSymbol icon="settings" />,
        selected: selected === 'settings',
        onClick: () => setSelected('settings'),
      },
    ];

    return (
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Drawer
          variant="persistent"
          open={drawerOpen}
          anchor="left"
          sx={{ '& .MuiDrawer-paper': { position: 'relative' } }}
        >
          <DrawerNavigation items={items} />
        </Drawer>
        <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f5f5f5' }}>
          <Button variant="outlined" onClick={() => setDrawerOpen(!drawerOpen)} sx={{ mb: 2 }}>
            {drawerOpen ? 'Close' : 'Open'} Navigation
          </Button>
          <Box sx={{ bgcolor: 'white', p: 3, borderRadius: 1 }}>
            <h1>
              {selected
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </h1>
            <p>This is the content area for the selected navigation item.</p>
          </Box>
        </Box>
      </Box>
    );
  },
};
