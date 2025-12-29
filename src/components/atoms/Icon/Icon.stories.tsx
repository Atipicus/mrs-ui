/**
 * Icon component stories
 *
 * Note: These stories demonstrate the Icon wrapper component which accepts both
 * Material Icons (SVG) and MaterialSymbol (font) icons. For new implementations,
 * use MaterialSymbol directly for better performance and flexibility.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography as MuiTypography } from '@mui/material';
import { MaterialSymbol } from '../../atoms/MaterialSymbol';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'inherit'],
      description: 'Size of the icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Font Icon Stories using MaterialSymbol
/**
 * Default icon using MaterialSymbol font (Medium size)
 */
export const Default: Story = {
  args: {
    type: 'font',
    iconName: 'add',
    size: 'medium',
  } as any,
};

/**
 * Small font icon
 */
export const SmallFont: Story = {
  args: {
    type: 'font',
    iconName: 'add',
    size: 'small',
  } as any,
};

/**
 * Medium font icon
 */
export const MediumFont: Story = {
  args: {
    type: 'font',
    iconName: 'add',
    size: 'medium',
  } as any,
};

/**
 * Large font icon
 */
export const LargeFont: Story = {
  args: {
    type: 'font',
    iconName: 'add',
    size: 'large',
  } as any,
};

/**
 * Inherit size font icon
 */
export const InheritFont: Story = {
  args: {
    type: 'font',
    iconName: 'add',
    size: 'inherit',
  } as any,
  render: (args) => (
    <MuiTypography variant="h3">
      Text with icon <Icon {...args} />
    </MuiTypography>
  ),
};

// Color Variations
/**
 * Primary color icon
 */
export const PrimaryColor: Story = {
  args: {
    type: 'font',
    iconName: 'favorite',
    size: 'medium',
  } as any,
  render: (args) => (
    <Icon
      {...args}
      sx={{ color: 'primary.main' }}
    />
  ),
};

/**
 * Secondary color icon
 */
export const SecondaryColor: Story = {
  args: {
    type: 'font',
    iconName: 'favorite',
    size: 'medium',
  } as any,
  render: (args) => (
    <Icon
      {...args}
      sx={{ color: 'secondary.main' }}
    />
  ),
};

/**
 * Error color icon
 */
export const ErrorColor: Story = {
  args: {
    type: 'font',
    iconName: 'delete',
    size: 'medium',
  } as any,
  render: (args) => (
    <Icon
      {...args}
      sx={{ color: 'error.main' }}
    />
  ),
};

/**
 * Success color icon
 */
export const SuccessColor: Story = {
  args: {
    type: 'font',
    iconName: 'favorite',
    size: 'medium',
  } as any,
  render: (args) => (
    <Icon
      {...args}
      sx={{ color: 'success.main' }}
    />
  ),
};

/**
 * All sizes showcase with font icons
 */
export const AllSizes: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Font Icons - All Sizes
          </MuiTypography>
          <Stack direction="row" spacing={4} alignItems="center">
            <Box textAlign="center">
              <Icon type="font" iconName="add" size="small" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Small
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="add" size="medium" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Medium
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="add" size="large" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Large
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <MuiTypography variant="h4">
                <Icon type="font" iconName="add" size="inherit" />
              </MuiTypography>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Inherit
              </MuiTypography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Icon gallery showcase with font icons
 */
export const IconGallery: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <MuiTypography variant="h5" sx={{ mb: 3 }}>
        Common Icons (Font Icons)
      </MuiTypography>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="subtitle2" sx={{ mb: 2 }}>
            Action Icons
          </MuiTypography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Box textAlign="center">
              <Icon type="font" iconName="add" size="medium" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Add
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="delete" size="medium" sx={{ color: 'error.main' }} />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Delete
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="search" size="medium" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Search
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="settings" size="medium" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Settings
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="subtitle2" sx={{ mb: 2 }}>
            Navigation Icons
          </MuiTypography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Box textAlign="center">
              <Icon type="font" iconName="home" size="medium" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Home
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Icon type="font" iconName="favorite" size="medium" sx={{ color: 'error.main' }} />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                Favorite
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="subtitle2" sx={{ mb: 2 }}>
            With Text (Inherit Size)
          </MuiTypography>
          <Stack spacing={2}>
            <MuiTypography variant="h4">
              <Icon type="font" iconName="home" size="inherit" /> Home Page
            </MuiTypography>
            <MuiTypography variant="body1">
              <Icon type="font" iconName="favorite" size="inherit" sx={{ color: 'error.main' }} /> This is your
              favorite
            </MuiTypography>
            <MuiTypography variant="caption">
              <Icon type="font" iconName="settings" size="inherit" /> Settings
            </MuiTypography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Recommended: Use MaterialSymbol directly
 */
export const RecommendedUsage: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <MuiTypography variant="h5" sx={{ mb: 3 }}>
        Recommended: Use MaterialSymbol Directly
      </MuiTypography>
      <MuiTypography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        For new implementations, use MaterialSymbol directly instead of wrapping in Icon component.
      </MuiTypography>
      <Stack direction="row" spacing={3} alignItems="center">
        <Box textAlign="center">
          <MaterialSymbol icon="add" size="small" />
          <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
            Small
          </MuiTypography>
        </Box>
        <Box textAlign="center">
          <MaterialSymbol icon="add" size="medium" />
          <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
            Medium
          </MuiTypography>
        </Box>
        <Box textAlign="center">
          <MaterialSymbol icon="add" size="large" />
          <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
            Large
          </MuiTypography>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
