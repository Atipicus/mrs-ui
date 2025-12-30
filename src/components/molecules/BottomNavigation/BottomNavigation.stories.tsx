/**
 * BottomNavigation Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation } from './BottomNavigation';
import { BottomNavigationAction } from './BottomNavigationAction';
import { useState } from 'react';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { MaterialSymbol } from '../../atoms/MaterialSymbol/MaterialSymbol';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Components/Molecules/BottomNavigation',
  component: BottomNavigation,
  tags: ['autodocs'],
  argTypes: {
    showLabels: {
      control: 'boolean',
      description: 'Show labels for all actions',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Bottom navigation bars allow movement between primary destinations in an app. Typically used for mobile applications.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

/**
 * Default BottomNavigation
 */
export const Default: Story = {
  render: function DefaultBottomNavigation() {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    );
  },
};

/**
 * Without labels (labels appear on selection)
 */
export const WithoutLabels: Story = {
  render: function WithoutLabelsNav() {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    );
  },
};

/**
 * Fixed at bottom (mobile style)
 */
export const FixedAtBottom: Story = {
  render: function FixedBottomNav() {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ pb: 7, height: 300, position: 'relative' }}>
        <Box sx={{ p: 2 }}>
          <p>Content area</p>
          <p>Scroll down to see the bottom navigation</p>
        </Box>
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(_event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    );
  },
};

/**
 * Four actions
 */
export const FourActions: Story = {
  render: function FourActionsNav() {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" icon={<FolderIcon />} />
        </BottomNavigation>
      </Box>
    );
  },
};

/**
 * With value mapping (string values)
 */
export const WithValueMapping: Story = {
  render: function ValueMappingNav() {
    const [value, setValue] = useState('recents');

    return (
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
        <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
          Current value: <strong>{value}</strong>
        </Box>
      </Box>
    );
  },
};

/**
 * Uncontrolled (no value prop)
 */
export const Uncontrolled: Story = {
  render: () => (
    <Box sx={{ width: 500 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  ),
};

/**
 * Full width mobile example
 */
export const FullWidthMobile: Story = {
  render: function FullWidthNav() {
    const [value, setValue] = useState(0);

    return (
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          mx: 'auto',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
        }}
      >
        <Box sx={{ p: 2, minHeight: 200 }}>
          <h3>Mobile App Simulation</h3>
          <p>Navigate using the bottom navigation bar</p>
        </Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
          sx={{ borderTop: '1px solid', borderColor: 'divider' }}
        >
          <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Map" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Files" icon={<FolderIcon />} />
        </BottomNavigation>
      </Box>
    );
  },
};

/**
 * Icons only (no labels shown)
 */
export const IconsOnly: Story = {
  render: function IconsOnlyNav() {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<RestoreIcon />} />
          <BottomNavigationAction icon={<FavoriteIcon />} />
          <BottomNavigationAction icon={<LocationOnIcon />} />
          <BottomNavigationAction icon={<FolderIcon />} />
        </BottomNavigation>
      </Box>
    );
  },
};

/**
 * With Material Symbols (Modern variant)
 */
export const WithMaterialSymbols: Story = {
  render: function MaterialSymbolsNav() {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<MaterialSymbol icon="home" />}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<MaterialSymbol icon="favorite" />}
          />
          <BottomNavigationAction
            label="Location"
            icon={<MaterialSymbol icon="location_on" />}
          />
        </BottomNavigation>
      </Box>
    );
  },
};

/**
 * Material Symbols with filled variant
 */
export const MaterialSymbolsFilled: Story = {
  render: function MaterialSymbolsFilledNav() {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Dashboard"
            icon={<MaterialSymbol icon="dashboard" fill={1} />}
          />
          <BottomNavigationAction
            label="Shopping"
            icon={<MaterialSymbol icon="shopping_cart" fill={1} />}
          />
          <BottomNavigationAction
            label="Notifications"
            icon={<MaterialSymbol icon="notifications" fill={1} />}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<MaterialSymbol icon="account_circle" fill={1} />}
          />
        </BottomNavigation>
      </Box>
    );
  },
};

/**
 * Material Symbols with custom weights
 */
export const MaterialSymbolsCustom: Story = {
  render: function MaterialSymbolsCustomNav() {
    const [value, setValue] = useState(0);

    return (
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Explore"
            icon={<MaterialSymbol icon="explore" weight={400} />}
          />
          <BottomNavigationAction
            label="Search"
            icon={<MaterialSymbol icon="search" weight={400} />}
          />
          <BottomNavigationAction
            label="Settings"
            icon={<MaterialSymbol icon="settings" weight={400} />}
          />
        </BottomNavigation>
      </Box>
    );
  },
};

/**
 * Full-width mobile with Material Symbols
 */
export const MobileWithMaterialSymbols: Story = {
  render: function MobileMaterialSymbolsNav() {
    const [value, setValue] = useState(0);

    return (
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          mx: 'auto',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
        }}
      >
        <Box sx={{ p: 2, minHeight: 200 }}>
          <h3>MRS Mobile App</h3>
          <p>Modern navigation with Material Symbols</p>
        </Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
          sx={{ borderTop: '1px solid', borderColor: 'divider' }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<MaterialSymbol icon="home" fill={value === 0 ? 1 : 0} />}
          />
          <BottomNavigationAction
            label="Orders"
            icon={<MaterialSymbol icon="receipt_long" fill={value === 1 ? 1 : 0} />}
          />
          <BottomNavigationAction
            label="Map"
            icon={<MaterialSymbol icon="map" fill={value === 2 ? 1 : 0} />}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<MaterialSymbol icon="person" fill={value === 3 ? 1 : 0} />}
          />
        </BottomNavigation>
      </Box>
    );
  },
};
