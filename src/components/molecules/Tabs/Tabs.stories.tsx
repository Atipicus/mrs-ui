/**
 * Tabs Component Stories
 * @package @mrs/ui
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Tabs, Tab } from './Tabs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tabs make it easy to explore and switch between different views. They organize and allow navigation between groups of content that are related and at the same hierarchical level.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: 'The value of the currently selected Tab',
    },
    variant: {
      control: 'select',
      options: ['standard', 'scrollable', 'fullWidth'],
      description: 'The variant of the tabs',
    },
    indicatorColor: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The indicator color',
    },
    textColor: {
      control: 'select',
      options: ['primary', 'secondary', 'inherit'],
      description: 'The text color',
    },
    centered: {
      control: 'boolean',
      description: 'If true, the tabs are centered',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The component orientation',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/**
 * TabPanel component for demo purposes
 */
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
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

/**
 * Default Tabs with panels
 */
export const Default: Story = {
  args: {
    centered: false,
    indicatorColor: "primary",
    textColor: "secondary",
    variant: "fullWidth",
    value: 4,
    orientation: "vertical"
  },

  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
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
  }
};

/**
 * Tabs with icons
 */
export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<PhoneIcon />} label="Calls" />
          <Tab icon={<FavoriteIcon />} label="Favorites" />
          <Tab icon={<PersonPinIcon />} label="Contacts" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Recent calls
        </TabPanel>
        <TabPanel value={value} index={1}>
          Favorite contacts
        </TabPanel>
        <TabPanel value={value} index={2}>
          All contacts
        </TabPanel>
      </Box>
    );
  },
};

/**
 * Icon-only tabs
 */
export const IconOnly: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 400 }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<HomeIcon />} aria-label="home" />
          <Tab icon={<FavoriteIcon />} aria-label="favorites" />
          <Tab icon={<ShoppingCartIcon />} aria-label="cart" />
        </Tabs>
      </Box>
    );
  },
};

/**
 * Full width tabs
 */
export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 600 }}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          variant="fullWidth"
        >
          <Tab label="Overview" />
          <Tab label="Details" />
          <Tab label="Settings" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Overview content
        </TabPanel>
        <TabPanel value={value} index={1}>
          Detailed information
        </TabPanel>
        <TabPanel value={value} index={2}>
          Settings panel
        </TabPanel>
      </Box>
    );
  },
};

/**
 * Centered tabs
 */
export const Centered: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 600 }}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          centered
        >
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
      </Box>
    );
  },
};

/**
 * Scrollable tabs
 */
export const Scrollable: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 400 }}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box>
    );
  },
};

/**
 * Scrollable with forced scroll buttons
 */
export const ScrollableForced: Story = {
  args: {
    value: 1
  },

  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 400 }}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
          <Tab label="Tab 4" />
          <Tab label="Tab 5" />
          <Tab label="Tab 6" />
        </Tabs>
      </Box>
    );
  }
};

/**
 * Vertical tabs
 */
export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ display: 'flex', height: 300 }}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          orientation="vertical"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Profile" />
          <Tab label="Security" />
          <Tab label="Notifications" />
          <Tab label="Billing" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Profile settings
        </TabPanel>
        <TabPanel value={value} index={1}>
          Security settings
        </TabPanel>
        <TabPanel value={value} index={2}>
          Notification preferences
        </TabPanel>
        <TabPanel value={value} index={3}>
          Billing information
        </TabPanel>
      </Box>
    );
  },
};

/**
 * Secondary color
 */
export const SecondaryColor: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Box>
    );
  },
};

/**
 * Disabled tabs
 */
export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Box>
    );
  },
};

/**
 * Tabs with badge
 */
export const WithBadge: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Messages" icon={<Badge badgeContent={4} color="primary" />} />
          <Tab label="Notifications" icon={<Badge badgeContent={12} color="secondary" />} />
          <Tab label="Updates" />
        </Tabs>
      </Box>
    );
  },
};

/**
 * Icon position variants
 */
export const IconPositions: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 600 }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab icon={<PhoneIcon />} label="Top (default)" iconPosition="top" />
          <Tab icon={<PhoneIcon />} label="Bottom" iconPosition="bottom" />
          <Tab icon={<PhoneIcon />} label="Start" iconPosition="start" />
          <Tab icon={<PhoneIcon />} label="End" iconPosition="end" />
        </Tabs>
      </Box>
    );
  },
};

/**
 * Wrapped tab labels
 */
export const WrappedLabels: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 400 }}>
        <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
          <Tab label="Short" />
          <Tab wrapped label="This is a very long tab label that wraps" />
          <Tab label="Short" />
        </Tabs>
      </Box>
    );
  },
};

/**
 * Custom styling
 */
export const CustomStyling: Story = {
  args: {
    indicatorColor: "primary",
    variant: "scrollable"
  },

  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          TabIndicatorProps={{
            style: {
              backgroundColor: '#ff6b6b',
              height: 4,
            },
          }}
          sx={{
            '& .MuiTab-root': {
              fontWeight: 'bold',
              fontSize: '1rem',
            },
          }}
        >
          <Tab label="Dashboard" />
          <Tab label="Analytics" />
          <Tab label="Reports" />
        </Tabs>
      </Box>
    );
  }
};
