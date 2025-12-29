import type { Meta, StoryObj } from '@storybook/react';
import { MaterialSymbol } from './MaterialSymbol';
import { Stack, Typography, Box, Paper } from '@mui/material';

const meta: Meta<typeof MaterialSymbol> = {
  title: 'Atoms/MaterialSymbol',
  component: MaterialSymbol,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon name from Material Symbols library (snake_case)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'home' },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Icon size preset or custom number',
      table: {
        type: { summary: "'small' | 'medium' | 'large' | 'inherit' | number" },
        defaultValue: { summary: 'medium' },
      },
    },
    fill: {
      control: 'radio',
      options: [0, 1],
      description: '0 = Outlined, 1 = Filled',
      table: {
        type: { summary: '0 | 1' },
        defaultValue: { summary: 0 },
      },
    },
    weight: {
      control: 'select',
      options: [100, 200, 300, 400, 500, 600, 700],
      description: 'Stroke thickness (100=thin, 700=bold)',
      table: {
        type: { summary: '100 | 200 | 300 | 400 | 500 | 600 | 700' },
        defaultValue: { summary: 300 },
      },
    },
    grade: {
      control: { type: 'range', min: -50, max: 200, step: 25 },
      description: 'Visual weight adjustment',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: -25 },
      },
    },
    color: {
      control: 'color',
      description: 'Icon color (CSS color or theme path)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MaterialSymbol>;

/**
 * Default MaterialSymbol with MRS design system configuration:
 * - Weight: 300 (Light)
 * - Fill: 0 (Outlined)
 * - Grade: -25 (Lighter visual weight)
 * - Size: 24px (Medium)
 */
export const Default: Story = {
  args: {
    icon: 'home',
    size: "large",
    weight: 700,
    fill: 1,
    grade: 75
  },
};

/**
 * Interactive playground to customize all icon properties
 */
export const Playground: Story = {
  args: {
    icon: 'favorite',
    size: "medium",
    fill: 1,
    weight: 100,
    grade: 0,
    color: "#701300",
    className: "add"
  },
};

/**
 * All available size variants
 */
export const AllSizes: Story = {
  args: {
    size: "large",
    fill: 1
  },

  render: () => (
    <Stack direction="row" spacing={4} alignItems="flex-end">
      <Box textAlign="center">
        <MaterialSymbol icon="star" size="small" />
        <Typography variant="caption" display="block" mt={1}>
          Small (20px)
        </Typography>
      </Box>
      <Box textAlign="center">
        <MaterialSymbol icon="star" size="medium" />
        <Typography variant="caption" display="block" mt={1}>
          Medium (24px)
        </Typography>
      </Box>
      <Box textAlign="center">
        <MaterialSymbol icon="star" size="large" />
        <Typography variant="caption" display="block" mt={1}>
          Large (36px)
        </Typography>
      </Box>
      <Box textAlign="center">
        <MaterialSymbol icon="star" size={48} />
        <Typography variant="caption" display="block" mt={1}>
          Custom (48px)
        </Typography>
      </Box>
    </Stack>
  )
};

/**
 * Fill variants: Outlined (0) vs Filled (1)
 */
export const FillVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <Box textAlign="center">
        <MaterialSymbol icon="favorite" fill={0} size="large" />
        <Typography variant="caption" display="block" mt={1}>
          Outlined (fill=0)
        </Typography>
      </Box>
      <Box textAlign="center">
        <MaterialSymbol icon="favorite" fill={1} size="large" />
        <Typography variant="caption" display="block" mt={1}>
          Filled (fill=1)
        </Typography>
      </Box>
    </Stack>
  ),
};

/**
 * Weight variants from thin (100) to bold (700)
 */
export const WeightVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
      {[100, 200, 300, 400, 500, 600, 700].map((weight) => (
        <Box key={weight} textAlign="center">
          <MaterialSymbol icon="settings" weight={weight as any} size="large" />
          <Typography variant="caption" display="block" mt={0.5}>
            {weight}
          </Typography>
        </Box>
      ))}
    </Stack>
  ),
};

/**
 * Grade variants showing visual weight adjustment
 */
export const GradeVariants: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h6" gutterBottom>
        Grade: Visual Weight Adjustment
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Grade adjusts visual weight without changing physical size
      </Typography>
      <Stack direction="row" spacing={3} alignItems="center">
        {[-50, -25, 0, 25, 50, 100, 200].map((grade) => (
          <Box key={grade} textAlign="center">
            <MaterialSymbol icon="check_circle" grade={grade} size="large" />
            <Typography variant="caption" display="block" mt={0.5}>
              {grade}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  ),
};

/**
 * Common Material Symbols icons showcase
 */
export const CommonIcons: Story = {
  render: () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Common Material Symbols Icons
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Browse all icons at{' '}
        <a
          href="https://fonts.google.com/icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          fonts.google.com/icons
        </a>
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 2 }}>
        {[
          'home',
          'settings',
          'search',
          'favorite',
          'star',
          'check',
          'close',
          'add',
          'remove',
          'edit',
          'delete',
          'menu',
          'more_vert',
          'notifications',
          'account_circle',
          'mail',
          'send',
          'inbox',
          'drafts',
          'visibility',
          'shopping_cart',
          'info',
          'warning',
          'error',
          'check_circle',
          'expand_more',
          'expand_less',
          'chevron_left',
          'chevron_right',
          'arrow_forward',
          'arrow_back',
        ].map((icon) => (
          <Box
            key={icon}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 80,
              p: 1,
              '&:hover': {
                bgcolor: 'action.hover',
                borderRadius: 1,
              },
            }}
          >
            <MaterialSymbol icon={icon} size="medium" />
            <Typography
              variant="caption"
              sx={{ mt: 0.5, fontSize: '0.65rem', textAlign: 'center' }}
            >
              {icon}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  ),
};

/**
 * MRS Design System default configuration showcase
 */
export const MRSDefaultStyle: Story = {
  render: () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        MRS Design System Default Configuration
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        <strong>Weight:</strong> 300 (Light) |{' '}
        <strong>Fill:</strong> 0 (Outlined) |{' '}
        <strong>Grade:</strong> -25 (Lighter) |{' '}
        <strong>Variant:</strong> Rounded
      </Typography>
      <Stack direction="row" spacing={4} alignItems="center" sx={{ mt: 3 }}>
        <MaterialSymbol icon="check" size="large" />
        <MaterialSymbol icon="close" size="large" />
        <MaterialSymbol icon="settings" size="large" />
        <MaterialSymbol icon="favorite" size="large" />
        <MaterialSymbol icon="star" size="large" />
        <MaterialSymbol icon="info" size="large" />
        <MaterialSymbol icon="warning" size="large" />
        <MaterialSymbol icon="error" size="large" />
      </Stack>
      <Typography variant="caption" display="block" mt={2} color="text.secondary">
        Light, airy appearance with rounded corners - perfect for modern UI
      </Typography>
    </Paper>
  ),
};

/**
 * Color customization examples
 */
export const ColorVariants: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          MUI Theme Colors
        </Typography>
        <Stack direction="row" spacing={2}>
          <MaterialSymbol icon="error" color="error.main" size="large" />
          <MaterialSymbol icon="warning" color="warning.main" size="large" />
          <MaterialSymbol icon="info" color="info.main" size="large" />
          <MaterialSymbol icon="check_circle" color="success.main" size="large" />
          <MaterialSymbol icon="favorite" color="primary.main" size="large" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Custom Colors
        </Typography>
        <Stack direction="row" spacing={2}>
          <MaterialSymbol icon="star" color="#FFD700" size="large" />
          <MaterialSymbol icon="favorite" color="#FF1744" size="large" />
          <MaterialSymbol icon="circle" color="#00BCD4" size="large" />
          <MaterialSymbol icon="square" color="#4CAF50" size="large" />
        </Stack>
      </Box>
    </Stack>
  ),
};

/**
 * Clickable icons with hover effects
 */
export const ClickableIcons: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="subtitle2" gutterBottom>
        Icons with onClick handlers (hover to see effect)
      </Typography>
      <Stack direction="row" spacing={2}>
        <MaterialSymbol
          icon="thumb_up"
          size="large"
          onClick={() => alert('Liked!')}
          ariaLabel="Like"
        />
        <MaterialSymbol
          icon="share"
          size="large"
          onClick={() => alert('Shared!')}
          ariaLabel="Share"
        />
        <MaterialSymbol
          icon="bookmark"
          size="large"
          onClick={() => alert('Bookmarked!')}
          ariaLabel="Bookmark"
        />
        <MaterialSymbol
          icon="close"
          size="large"
          onClick={() => alert('Closed!')}
          ariaLabel="Close"
        />
      </Stack>
    </Stack>
  ),
};

/**
 * Accessibility examples with aria-label
 */
export const AccessibilityExamples: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          With aria-label (screen reader accessible)
        </Typography>
        <Stack direction="row" spacing={2}>
          <MaterialSymbol icon="info" ariaLabel="Information" size="medium" />
          <MaterialSymbol icon="warning" ariaLabel="Warning" size="medium" />
          <MaterialSymbol icon="error" ariaLabel="Error" size="medium" />
          <MaterialSymbol icon="check_circle" ariaLabel="Success" size="medium" />
        </Stack>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom>
          Decorative (aria-hidden)
        </Typography>
        <Stack direction="row" spacing={2}>
          <MaterialSymbol icon="star" ariaHidden={true} size="medium" />
          <MaterialSymbol icon="favorite" ariaHidden={true} size="medium" />
          <MaterialSymbol icon="circle" ariaHidden={true} size="medium" />
        </Stack>
      </Box>
    </Stack>
  ),
};

/**
 * Comparison with different configurations
 */
export const ConfigurationComparison: Story = {
  render: () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Configuration Comparison
      </Typography>
      <Stack spacing={4} mt={2}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Light & Airy (MRS Default)
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" mb={1}>
            weight=300, fill=0, grade=-25
          </Typography>
          <Stack direction="row" spacing={2}>
            <MaterialSymbol icon="home" weight={300} fill={0} grade={-25} size="large" />
            <MaterialSymbol icon="star" weight={300} fill={0} grade={-25} size="large" />
            <MaterialSymbol icon="favorite" weight={300} fill={0} grade={-25} size="large" />
          </Stack>
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Standard
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" mb={1}>
            weight=400, fill=0, grade=0
          </Typography>
          <Stack direction="row" spacing={2}>
            <MaterialSymbol icon="home" weight={400} fill={0} grade={0} size="large" />
            <MaterialSymbol icon="star" weight={400} fill={0} grade={0} size="large" />
            <MaterialSymbol icon="favorite" weight={400} fill={0} grade={0} size="large" />
          </Stack>
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Bold & Filled
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block" mb={1}>
            weight=700, fill=1, grade=0
          </Typography>
          <Stack direction="row" spacing={2}>
            <MaterialSymbol icon="home" weight={700} fill={1} grade={0} size="large" />
            <MaterialSymbol icon="star" weight={700} fill={1} grade={0} size="large" />
            <MaterialSymbol icon="favorite" weight={700} fill={1} grade={0} size="large" />
          </Stack>
        </Box>
      </Stack>
    </Paper>
  ),
};
