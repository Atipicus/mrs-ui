/**
 * PillTabsControl stories
 * @package @mrs/ui
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PillTabsControl } from './PillTabsControl';

const meta: Meta<typeof PillTabsControl> = {
  title: 'Molecules/PillTabsControl',
  component: PillTabsControl,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Pill-style tabs: segmented control appearance with optional icons, numeric badges, and warning indicators.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PillTabsControl>;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`pill-tabpanel-${index}`}
      aria-labelledby={`pill-tab-${index}`}
      {...other}
    >
      {value === index ? (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      ) : null}
    </div>
  );
}

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    const tabs = [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3' },
    ];

    return (
      <Box sx={{ width: 500 }}>
        <PillTabsControl
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          tabs={tabs}
        />
        <TabPanel value={value} index={0}>
          Content for Tab 1
        </TabPanel>
        <TabPanel value={value} index={1}>
          Content for Tab 2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Content for Tab 3
        </TabPanel>
      </Box>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    const tabs = [
      { label: 'Calls', icon: PhoneIcon },
      { label: 'Favorites', icon: FavoriteIcon },
      { label: 'Contacts', icon: PersonPinIcon },
    ];

    return (
      <Box sx={{ width: 500 }}>
        <PillTabsControl
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          tabs={tabs}
        />
      </Box>
    );
  },
};

export const WithBadgeAndWarning: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    const tabs = [
      { label: 'Messages', badgeCount: 4 },
      { label: 'Alerts', warning: true },
      { label: 'Updates' },
    ];

    return (
      <Box sx={{ width: 520 }}>
        <PillTabsControl
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          tabs={tabs}
        />
      </Box>
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    const tabs = [
      { label: 'Active' },
      { label: 'Disabled', disabled: true },
      { label: 'Active' },
    ];

    return (
      <Box sx={{ width: 480 }}>
        <PillTabsControl
          value={value}
          onChange={(_, newValue) => setValue(newValue)}
          tabs={tabs}
        />
      </Box>
    );
  },
};
