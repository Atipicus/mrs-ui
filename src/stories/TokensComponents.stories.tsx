import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import * as tokens from '../tokens/generated/ts/tokens';

/**
 * Component Tokens
 *
 * Component-specific tokens that define styling for all MRS UI components.
 * These tokens reference semantic and primitive tokens to ensure consistency.
 */
const meta: Meta = {
  title: 'Design Tokens/Component Tokens',
  parameters: {
    docs: {
      description: {
        component:
          'Component tokens provide component-specific styling values. Part of the three-tier token architecture: Primitives → Semantic → Components.',
      },
    },
  },
};

export default meta;

// ============================================================================
// BUTTON TOKENS
// ============================================================================
const ButtonTokensStory = () => {
  const theme = useTheme();

  const buttonTokens = [
    {
      category: 'Layout',
      tokens: [
        { name: 'Border Radius', value: tokens.ComponentButtonBorderRadius, description: 'Button corner radius' },
      ],
    },
    {
      category: 'Typography',
      tokens: [
        { name: 'Font Weight', value: tokens.ComponentButtonFontWeight, description: 'Button text weight' },
      ],
    },
    {
      category: 'Size: Small',
      tokens: [
        { name: 'Font Size', value: tokens.ComponentButtonSmallFontSize, description: 'Small button text size' },
        { name: 'Height', value: tokens.ComponentButtonSmallHeight, description: 'Small button height' },
      ],
    },
    {
      category: 'Size: Medium',
      tokens: [
        { name: 'Font Size', value: tokens.ComponentButtonMediumFontSize, description: 'Medium button text size' },
        { name: 'Height', value: tokens.ComponentButtonMediumHeight, description: 'Medium button height' },
      ],
    },
    {
      category: 'Size: Large',
      tokens: [
        { name: 'Font Size', value: tokens.ComponentButtonLargeFontSize, description: 'Large button text size' },
        { name: 'Height', value: tokens.ComponentButtonLargeHeight, description: 'Large button height' },
      ],
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Button Tokens
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Tokens defining button dimensions, typography, and styling.
      </Typography>

      {buttonTokens.map((group) => (
        <Box key={group.category} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            {group.category}
          </Typography>
          <Stack spacing={2}>
            {group.tokens.map((token) => (
              <Paper
                key={token.name}
                elevation={1}
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {token.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {token.description}
                  </Typography>
                </Box>
                <Chip
                  label={token.value}
                  size="small"
                  sx={{ fontSize: '0.75rem', fontFamily: 'monospace' }}
                />
              </Paper>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export const ButtonTokens: StoryObj = {
  render: () => <ButtonTokensStory />,
};

// ============================================================================
// NAVIGATION TOKENS
// ============================================================================
const NavigationTokensStory = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const navigationTokens = [
    {
      component: 'Sidenav',
      tokens: [
        {
          name: 'Width Collapsed',
          value: tokens.ComponentSidenavWidthCollapsed,
          description: 'Sidenav width when collapsed (slim mode)',
        },
        {
          name: 'Width Expanded',
          value: tokens.ComponentSidenavWidthExpanded,
          description: 'Sidenav width when expanded (default mode)',
        },
        {
          name: 'Background',
          value:
            mode === 'light'
              ? tokens.ComponentSidenavLightBackground
              : tokens.ComponentSidenavDarkBackground,
          description: 'Sidenav background color',
        },
        {
          name: 'Border',
          value:
            mode === 'light' ? tokens.ComponentSidenavLightBorder : tokens.ComponentSidenavDarkBorder,
          description: 'Sidenav border color',
        },
        {
          name: 'Border Radius',
          value:
            mode === 'light'
              ? tokens.ComponentSidenavLightBorderRadius
              : tokens.ComponentSidenavDarkBorderRadius,
          description: 'Navigation item border radius',
        },
      ],
    },
    {
      component: 'AppBar',
      tokens: [
        {
          name: 'Height',
          value: tokens.ComponentAppbarHeight,
          description: 'AppBar fixed height',
        },
        {
          name: 'Background',
          value:
            mode === 'light' ? tokens.ComponentAppbarLightBackground : tokens.ComponentAppbarDarkBackground,
          description: 'AppBar background color',
        },
        {
          name: 'Foreground',
          value:
            mode === 'light' ? tokens.ComponentAppbarLightForeground : tokens.ComponentAppbarDarkForeground,
          description: 'AppBar text color',
        },
      ],
    },
    {
      component: 'Bottom Navigation',
      tokens: [
        {
          name: 'Height',
          value: tokens.ComponentBottomNavigationHeight,
          description: 'Bottom navigation fixed height',
        },
        {
          name: 'Background',
          value:
            mode === 'light'
              ? tokens.ComponentBottomNavigationLightBackground
              : tokens.ComponentBottomNavigationDarkBackground,
          description: 'Bottom navigation background color',
        },
      ],
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Navigation Tokens
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Tokens for navigation components including Sidenav, AppBar, Drawer, and Bottom Navigation.
      </Typography>

      {navigationTokens.map((group) => (
        <Box key={group.component} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            {group.component}
          </Typography>
          <Stack spacing={2}>
            {group.tokens.map((token) => (
              <Paper
                key={token.name}
                elevation={1}
                sx={{
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {token.name}
                  </Typography>
                  <Chip
                    label={token.value}
                    size="small"
                    sx={{ fontSize: '0.75rem', fontFamily: 'monospace' }}
                  />
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {token.description}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export const NavigationTokens: StoryObj = {
  render: () => <NavigationTokensStory />,
};

// ============================================================================
// DATA DISPLAY TOKENS
// ============================================================================
const DataDisplayTokensStory = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const dataDisplayTokens = [
    {
      component: 'Avatar',
      tokens: [
        { name: 'Small', value: tokens.ComponentAvatarSmall, description: 'Small avatar size (24px)' },
        { name: 'Medium', value: tokens.ComponentAvatarMedium, description: 'Medium avatar size (40px)' },
        { name: 'Large', value: tokens.ComponentAvatarLarge, description: 'Large avatar size (56px)' },
        { name: 'Border Radius', value: tokens.ComponentAvatarBorderRadius, description: 'Avatar corner radius' },
      ],
    },
    {
      component: 'Badge',
      tokens: [
        { name: 'Border Radius', value: tokens.ComponentBadgeBorderRadius, description: 'Badge corner radius' },
        {
          name: 'Background',
          value:
            mode === 'light' ? tokens.ComponentBadgeLightBackground : tokens.ComponentBadgeDarkBackground,
          description: 'Badge background color',
        },
        {
          name: 'Foreground',
          value:
            mode === 'light' ? tokens.ComponentBadgeLightForeground : tokens.ComponentBadgeDarkForeground,
          description: 'Badge text color',
        },
      ],
    },
    {
      component: 'Tooltip',
      tokens: [
        {
          name: 'Background',
          value:
            mode === 'light'
              ? tokens.ComponentTooltipLightBackground
              : tokens.ComponentTooltipDarkBackground,
          description: 'Tooltip background color',
        },
        {
          name: 'Foreground',
          value:
            mode === 'light'
              ? tokens.ComponentTooltipLightForeground
              : tokens.ComponentTooltipDarkForeground,
          description: 'Tooltip text color',
        },
        {
          name: 'Border Radius',
          value:
            mode === 'light'
              ? tokens.ComponentTooltipLightBorderRadius
              : tokens.ComponentTooltipDarkBorderRadius,
          description: 'Tooltip corner radius',
        },
      ],
    },
    {
      component: 'Accordion',
      tokens: [
        {
          name: 'Background',
          value:
            mode === 'light'
              ? tokens.ComponentAccordionLightBackground
              : tokens.ComponentAccordionDarkBackground,
          description: 'Accordion background color',
        },
        {
          name: 'Border',
          value:
            mode === 'light' ? tokens.ComponentAccordionLightBorder : tokens.ComponentAccordionDarkBorder,
          description: 'Accordion border color',
        },
        {
          name: 'Border Radius',
          value:
            mode === 'light'
              ? tokens.ComponentAccordionLightBorderRadius
              : tokens.ComponentAccordionDarkBorderRadius,
          description: 'Accordion corner radius',
        },
      ],
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Data Display Tokens
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Tokens for data display components including Avatar, Badge, Tooltip, Accordion, List, and Menu.
      </Typography>

      <Grid container spacing={3}>
        {dataDisplayTokens.map((group) => (
          <Grid item xs={12} md={6} key={group.component}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                {group.component}
              </Typography>
              <Stack spacing={2}>
                {group.tokens.map((token) => (
                  <Box key={token.name}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {token.name}
                      </Typography>
                      <Chip
                        label={token.value}
                        size="small"
                        sx={{ fontSize: '0.7rem', fontFamily: 'monospace', height: 20 }}
                      />
                    </Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {token.description}
                    </Typography>
                    <Divider sx={{ mt: 1 }} />
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export const DataDisplayTokens: StoryObj = {
  render: () => <DataDisplayTokensStory />,
};

// ============================================================================
// FEEDBACK TOKENS
// ============================================================================
const FeedbackTokensStory = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const feedbackTokens = [
    {
      component: 'Snackbar',
      tokens: [
        {
          name: 'Background',
          value:
            mode === 'light'
              ? tokens.ComponentSnackbarLightBackground
              : tokens.ComponentSnackbarDarkBackground,
          description: 'Snackbar background color',
        },
        {
          name: 'Foreground',
          value:
            mode === 'light'
              ? tokens.ComponentSnackbarLightForeground
              : tokens.ComponentSnackbarDarkForeground,
          description: 'Snackbar text color',
        },
        {
          name: 'Border Radius',
          value:
            mode === 'light'
              ? tokens.ComponentSnackbarLightBorderRadius
              : tokens.ComponentSnackbarDarkBorderRadius,
          description: 'Snackbar corner radius',
        },
      ],
    },
    {
      component: 'Progress',
      tokens: [
        {
          name: 'Background',
          value:
            mode === 'light'
              ? tokens.ComponentProgressLightBackground
              : tokens.ComponentProgressDarkBackground,
          description: 'Progress bar track color',
        },
        {
          name: 'Foreground',
          value:
            mode === 'light'
              ? tokens.ComponentProgressLightForeground
              : tokens.ComponentProgressDarkForeground,
          description: 'Progress bar fill color',
        },
        {
          name: 'Thickness',
          value: tokens.ComponentProgressThickness,
          description: 'Progress bar thickness',
        },
      ],
    },
    {
      component: 'Skeleton',
      tokens: [
        {
          name: 'Background',
          value:
            mode === 'light'
              ? tokens.ComponentSkeletonLightBackground
              : tokens.ComponentSkeletonDarkBackground,
          description: 'Skeleton loading animation color',
        },
        {
          name: 'Border Radius',
          value:
            mode === 'light'
              ? tokens.ComponentSkeletonLightBorderRadius
              : tokens.ComponentSkeletonDarkBorderRadius,
          description: 'Skeleton corner radius',
        },
      ],
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Feedback Tokens
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Tokens for feedback components including Snackbar, Progress indicators, and Skeleton loaders.
      </Typography>

      {feedbackTokens.map((group) => (
        <Box key={group.component} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            {group.component}
          </Typography>
          <Stack spacing={2}>
            {group.tokens.map((token) => (
              <Paper
                key={token.name}
                elevation={1}
                sx={{
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {token.name}
                  </Typography>
                  <Chip
                    label={token.value}
                    size="small"
                    sx={{ fontSize: '0.75rem', fontFamily: 'monospace' }}
                  />
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {token.description}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export const FeedbackTokens: StoryObj = {
  render: () => <FeedbackTokensStory />,
};

// ============================================================================
// TOKEN ARCHITECTURE OVERVIEW
// ============================================================================
const TokenArchitectureStory = () => {
  const tiers = [
    {
      tier: 'Tier 1: Primitives',
      color: '#99cc00',
      description: 'Foundation-level tokens. Raw, context-independent values.',
      examples: [
        'PrimitivesSpacing2 → 16px',
        'PrimitivesColorsNeutralGray500 → #9e9e9e',
        'PrimitivesRadiusMd → 8px',
        'PrimitivesTypographyFontSizeMd → 1rem',
      ],
      files: ['colors.json', 'spacing.json', 'radius.json', 'typography.json', 'motion.json'],
    },
    {
      tier: 'Tier 2: Semantic',
      color: '#00686f',
      description: 'Context-aware tokens that reference primitives. Theme-dependent.',
      examples: [
        'SemanticColorLightPrimaryMain → {primitives.colors.brand.verones}',
        'SemanticColorDarkBackgroundPaper → #1e1e1e',
        'SemanticColorLightActionHover → {primitives.colors.alpha.black.8}',
      ],
      files: ['colors.json', 'transitions.json'],
    },
    {
      tier: 'Tier 3: Components',
      color: '#009999',
      description: 'Component-specific tokens. Reference semantic and primitive tokens.',
      examples: [
        'ComponentButtonBorderRadius → {primitives.radius.md}',
        'ComponentSidenavLightItemSelectedBackground → {primitives.colors.alpha.primary.12}',
        'ComponentAvatarMedium → 40px',
        'ComponentTooltipLightBackground → {primitives.colors.alpha.black.87}',
      ],
      files: [
        'button.json',
        'alert.json',
        'inputs.json',
        'surfaces.json',
        'navigation.json',
        'data-display.json',
        'feedback.json',
        'layout.json',
      ],
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Token Architecture
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        MRS Design System implements a three-tier token architecture for consistency, maintainability, and
        scalability.
      </Typography>

      <Stack spacing={3}>
        {tiers.map((tier, index) => (
          <Paper
            key={tier.tier}
            elevation={2}
            sx={{
              p: 3,
              border: '2px solid',
              borderColor: tier.color,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 6,
                height: '100%',
                backgroundColor: tier.color,
              }}
            />
            <Box sx={{ pl: 2 }}>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, color: tier.color }}>
                {tier.tier}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                {tier.description}
              </Typography>

              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Examples:
              </Typography>
              <Stack spacing={1} sx={{ mb: 2 }}>
                {tier.examples.map((example) => (
                  <Box
                    key={example}
                    sx={{
                      p: 1.5,
                      backgroundColor: 'action.hover',
                      borderRadius: 1,
                      fontFamily: 'monospace',
                      fontSize: '0.85rem',
                    }}
                  >
                    {example}
                  </Box>
                ))}
              </Stack>

              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Source Files:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {tier.files.map((file) => (
                  <Chip key={file} label={file} size="small" sx={{ fontSize: '0.75rem' }} />
                ))}
              </Box>
            </Box>
          </Paper>
        ))}
      </Stack>

      <Paper
        elevation={1}
        sx={{
          p: 3,
          mt: 4,
          backgroundColor: 'info.main',
          color: 'info.contrastText',
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          📚 Documentation
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          For complete token documentation, usage patterns, and examples, see:
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'monospace', fontWeight: 600 }}>
          /TOKENS.md
        </Typography>
      </Paper>
    </Box>
  );
};

export const TokenArchitecture: StoryObj = {
  render: () => <TokenArchitectureStory />,
};
