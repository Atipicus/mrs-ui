/**
 * Avatar component stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography as MuiTypography } from '@mui/material';
import { Avatar } from './Avatar';
import { MaterialSymbol } from '../MaterialSymbol';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: [18, 24, 32, 40],
      description: 'The size of the avatar in pixels',
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
      description: 'The shape variant of the avatar',
    },
    src: {
      control: 'text',
      description: 'The source URL of the avatar image',
    },
    alt: {
      control: 'text',
      description: 'The alt text for the image',
    },
    children: {
      control: 'text',
      description: 'The content of the avatar (text initials or icon)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/**
 * Default avatar with initials
 */
export const Default: Story = {
  args: {
    children: 'MG',
  },
};

// Size Stories - Text
/**
 * 18px avatar with text
 */
export const Size18Text: Story = {
  args: {
    size: 18,
    children: 'MG',
  },
};

/**
 * 24px avatar with text
 */
export const Size24Text: Story = {
  args: {
    size: 24,
    children: 'MG',
  },
};

/**
 * 32px avatar with text
 */
export const Size32Text: Story = {
  args: {
    size: 32,
    children: 'MG',
  },
};

/**
 * 40px avatar with text (default)
 */
export const Size40Text: Story = {
  args: {
    size: 40,
    children: 'MG',
  },
};

// Size Stories - Icon
/**
 * 18px avatar with icon
 */
export const Size18Icon: Story = {
  args: {
    size: 18,
  },
  render: (args) => (
    <Avatar {...args}>
      <MaterialSymbol icon="favorite" sx={{ fontSize: 12 }} />
    </Avatar>
  ),
};

/**
 * 24px avatar with icon
 */
export const Size24Icon: Story = {
  args: {
    size: 24,
  },
  render: (args) => (
    <Avatar {...args}>
      <MaterialSymbol icon="favorite" sx={{ fontSize: 14 }} />
    </Avatar>
  ),
};

/**
 * 32px avatar with icon
 */
export const Size32Icon: Story = {
  args: {
    size: 32,
  },
  render: (args) => (
    <Avatar {...args}>
      <MaterialSymbol icon="favorite" sx={{ fontSize: 18 }} />
    </Avatar>
  ),
};

/**
 * 40px avatar with icon
 */
export const Size40Icon: Story = {
  args: {
    size: 40,
  },
  render: (args) => (
    <Avatar {...args}>
      <MaterialSymbol icon="favorite" sx={{ fontSize: 24 }} />
    </Avatar>
  ),
};

// Size Stories - Image
/**
 * 18px avatar with image
 */
export const Size18Image: Story = {
  args: {
    size: 18,
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'Avatar',
  },
};

/**
 * 24px avatar with image
 */
export const Size24Image: Story = {
  args: {
    size: 24,
    src: 'https://i.pravatar.cc/150?img=2',
    alt: 'Avatar',
  },
};

/**
 * 32px avatar with image
 */
export const Size32Image: Story = {
  args: {
    size: 32,
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Avatar',
  },
};

/**
 * 40px avatar with image
 */
export const Size40Image: Story = {
  args: {
    size: 40,
    src: 'https://i.pravatar.cc/150?img=4',
    alt: 'Avatar',
  },
};

// Variant Stories
/**
 * Circular variant (default)
 */
export const Circular: Story = {
  args: {
    variant: 'circular',
    children: 'MG',
  },
};

/**
 * Rounded variant
 */
export const Rounded: Story = {
  args: {
    variant: 'rounded',
    children: 'MG',
  },
};

/**
 * Square variant
 */
export const Square: Story = {
  args: {
    variant: 'square',
    children: 'MG',
  },
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Text Initials
          </MuiTypography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box textAlign="center">
              <Avatar size={18}>MG</Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                18px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={24}>MG</Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                24px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={32}>MG</Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                32px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={40}>MG</Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                40px
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Icons
          </MuiTypography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box textAlign="center">
              <Avatar size={18}>
                <MaterialSymbol icon="favorite" sx={{ fontSize: 12 }} />
              </Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                18px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={24}>
                <MaterialSymbol icon="favorite" sx={{ fontSize: 14 }} />
              </Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                24px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={32}>
                <MaterialSymbol icon="favorite" sx={{ fontSize: 18 }} />
              </Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                32px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={40}>
                <MaterialSymbol icon="favorite" sx={{ fontSize: 24 }} />
              </Avatar>
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                40px
              </MuiTypography>
            </Box>
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Images
          </MuiTypography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box textAlign="center">
              <Avatar size={18} src="https://i.pravatar.cc/150?img=1" alt="Avatar 1" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                18px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={24} src="https://i.pravatar.cc/150?img=2" alt="Avatar 2" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                24px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={32} src="https://i.pravatar.cc/150?img=3" alt="Avatar 3" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                32px
              </MuiTypography>
            </Box>
            <Box textAlign="center">
              <Avatar size={40} src="https://i.pravatar.cc/150?img=4" alt="Avatar 4" />
              <MuiTypography variant="caption" display="block" sx={{ mt: 1 }}>
                40px
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
 * All variants showcase
 */
export const AllVariants: Story = {
  args: {
    src: 'https://lh3.googleusercontent.com/a-/ALV-UjVDc7Lc50nxM18hfbDIH8NYyvt_NJx9MscK4vfpqQNnMovPrbc=s480-p-k-rw-no',
    variant: 'circular',
    size: 40,
    children:
      'https://lh3.googleusercontent.com/a-/ALV-UjVDc7Lc50nxM18hfbDIH8NYyvt_NJx9MscK4vfpqQNnMovPrbc=s480-p-k-rw-no',
  },

  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Circular (Default)
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Avatar variant="circular">MG</Avatar>
            <Avatar variant="circular">
              <MaterialSymbol icon="person" />
            </Avatar>
            <Avatar variant="circular" src="https://i.pravatar.cc/150?img=5" alt="Circular" />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Rounded
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Avatar variant="rounded">MG</Avatar>
            <Avatar variant="rounded">
              <MaterialSymbol icon="person" />
            </Avatar>
            <Avatar variant="rounded" src="https://i.pravatar.cc/150?img=6" alt="Rounded" />
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Square
          </MuiTypography>
          <Stack direction="row" spacing={2}>
            <Avatar variant="square">MG</Avatar>
            <Avatar variant="square">
              <MaterialSymbol icon="person" />
            </Avatar>
            <Avatar variant="square" src="https://i.pravatar.cc/150?img=7" alt="Square" />
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
 * Real-world examples
 */
export const RealWorldExamples: Story = {
  args: {
    size: 40,
  },

  render: () => (
    <Box sx={{ p: 4 }}>
      <Stack spacing={4}>
        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            User List
          </MuiTypography>
          <Stack spacing={2}>
            {[
              { name: 'Martin Gómez', initials: 'MG', img: 'https://i.pravatar.cc/150?img=10' },
              { name: 'Camila Muñoz', initials: 'CM', img: 'https://i.pravatar.cc/150?img=11' },
              { name: 'Felipe Taborda', initials: 'FP', img: 'https://i.pravatar.cc/150?img=12' },
            ].map((user, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar src={user.img} alt={user.name}>
                  {user.initials}
                </Avatar>
                <MuiTypography>{user.name}</MuiTypography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Comment Thread
          </MuiTypography>
          <Stack spacing={2}>
            {[
              { initials: 'MG', comment: 'Gran trabajo!' },
              { initials: 'CM', comment: 'Gracias por el feedback!' },
              { initials: 'FP', comment: 'Estoy ansioso por la próxima iteración.' },
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                <Avatar size={32}>{item.initials}</Avatar>
                <Box sx={{ flex: 1 }}>
                  <MuiTypography variant="body2">{item.comment}</MuiTypography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box>
          <MuiTypography variant="h6" sx={{ mb: 2 }}>
            Team Members (Small)
          </MuiTypography>
          <Stack direction="row" spacing={1}>
            {['MG', 'CM', 'FP', 'FT', 'JF'].map((initials, index) => (
              <Avatar key={index} size={24}>
                {initials}
              </Avatar>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  ),

  parameters: {
    layout: 'fullscreen',
  },
};
