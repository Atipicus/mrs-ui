/**
 * Tokens Showcase - Visual demonstration of all design system tokens
 *
 * This story demonstrates:
 * 1. All color tokens (light/dark modes)
 * 2. Typography variants and weights
 * 3. Shape and border radius tokens
 * 4. Spacing scale
 * 5. Component token usage examples
 *
 * @see {@link ../../../src/theme/tokens-import.ts} - Token definitions
 * @see {@link ../../../src/theme/theme.ts} - Theme configuration
 * @see {@link ../../../src/theme/styleCompositions.ts} - Reusable compositions
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Typography, Grid, Chip, Paper, Divider, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { colors, typography, shape, spacing } from '../../theme/tokens';

const meta: Meta = {
  title: 'Theme/Design Tokens',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Complete showcase of MRS Design System tokens including colors, typography, shapes, and spacing.',
      },
    },
  },
};

export default meta;

/**
 * Color tokens in both light and dark modes
 */
export const ColorTokens: StoryObj = {
  render: () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === 'dark';
    const modeColors = isDark ? colors.dark : colors.light;

    return (
      <Box>
        <Typography variant="h4" mb={3}>
          Color Tokens ({isDark ? 'Dark' : 'Light'} Mode)
        </Typography>

        <Grid container spacing={3}>
          {/* Primary Colors */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Primary</Typography>
            <Stack spacing={1}>
              {Object.entries(modeColors.primary || {}).map(([key, value]) => (
                <Box key={key} display="flex" alignItems="center" gap={2}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: value as string,
                      borderRadius: 1,
                      border: `2px solid ${theme.palette.divider}`,
                    }}
                  />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{key}</Typography>
                    <Typography variant="caption" color="text.secondary">{value}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Secondary Colors */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Secondary</Typography>
            <Stack spacing={1}>
              {Object.entries(modeColors.secondary || {}).map(([key, value]) => (
                <Box key={key} display="flex" alignItems="center" gap={2}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: value as string,
                      borderRadius: 1,
                      border: `2px solid ${theme.palette.divider}`,
                    }}
                  />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{key}</Typography>
                    <Typography variant="caption" color="text.secondary">{value}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Status Colors */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Status Colors</Typography>
            <Stack spacing={1}>
              {['error', 'warning', 'info', 'success'].map((status) => {
                const colorObj = modeColors[status as keyof typeof modeColors];
                const main = (colorObj && typeof colorObj === 'object' && 'main' in colorObj)
                  ? (colorObj as any).main
                  : null;
                return main ? (
                  <Box key={status} display="flex" alignItems="center" gap={2}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: main,
                        borderRadius: 1,
                        border: `2px solid ${theme.palette.divider}`,
                      }}
                    />
                    <Box>
                      <Typography variant="body2" fontWeight="bold">{status}</Typography>
                      <Typography variant="caption" color="text.secondary">{main}</Typography>
                    </Box>
                  </Box>
                ) : null;
              })}
            </Stack>
          </Grid>

          {/* Background & Text */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Background</Typography>
            <Stack spacing={1}>
              {Object.entries(modeColors.background || {}).map(([key, value]) => (
                <Box key={key} display="flex" alignItems="center" gap={2}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: value as string,
                      borderRadius: 1,
                      border: `2px solid ${theme.palette.divider}`,
                    }}
                  />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{key}</Typography>
                    <Typography variant="caption" color="text.secondary">{value}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Text Colors */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Text Colors</Typography>
            <Stack spacing={1}>
              {Object.entries(modeColors.text || {}).map(([key, value]) => (
                <Box key={key} display="flex" alignItems="center" gap={2}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: value as string,
                      borderRadius: 1,
                      border: `2px solid ${theme.palette.divider}`,
                    }}
                  />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{key}</Typography>
                    <Typography variant="caption" color="text.secondary">{value}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Action Colors */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" mb={2}>Action Colors</Typography>
            <Stack spacing={1}>
              {Object.entries(modeColors.action || {}).map(([key, value]) => (
                <Box key={key} display="flex" alignItems="center" gap={2}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: value as string,
                      borderRadius: 1,
                      border: `2px solid ${theme.palette.divider}`,
                    }}
                  />
                  <Box>
                    <Typography variant="body2" fontWeight="bold">{key}</Typography>
                    <Typography variant="caption" color="text.secondary">{value}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    );
  },
};

/**
 * Typography variants and scales
 */
export const TypographyTokens: StoryObj = {
  render: () => (
    <Box>
      <Typography variant="h4" mb={3}>
        Typography Tokens
      </Typography>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h1">Heading 1 (h1)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h1?.fontWeight} | Size: {typography.h1?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h2">Heading 2 (h2)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h2?.fontWeight} | Size: {typography.h2?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h3">Heading 3 (h3)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h3?.fontWeight} | Size: {typography.h3?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4">Heading 4 (h4)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h4?.fontWeight} | Size: {typography.h4?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5">Heading 5 (h5)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h5?.fontWeight} | Size: {typography.h5?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Heading 6 (h6)</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.h6?.fontWeight} | Size: {typography.h6?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="body1">Body 1 - The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.body1?.fontWeight} | Size: {typography.body1?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="body2">Body 2 - The quick brown fox jumps over the lazy dog</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.body2?.fontWeight} | Size: {typography.body2?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="button">Button Text</Typography>
            <Typography variant="caption" color="text.secondary">
              Font Weight: {typography.button?.fontWeight} | Size: {typography.button?.fontSize}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="caption">Caption text for small labels</Typography>
            <Typography variant="caption" color="text.secondary" display="block">
              Font Weight: {typography.caption?.fontWeight} | Size: {typography.caption?.fontSize}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  ),
};

/**
 * Shape and border radius tokens
 */
export const ShapeTokens: StoryObj = {
  render: () => (
    <Box>
      <Typography variant="h4" mb={3}>
        Shape Tokens (Border Radius)
      </Typography>

      <Grid container spacing={3}>
        {Object.entries(shape).map(([key, value]) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: 'primary.main',
                  borderRadius: value as number,
                  margin: '0 auto 16px',
                }}
              />
              <Typography variant="body2" fontWeight="bold">
                {key}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {value}px
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
};

/**
 * Spacing scale
 */
export const SpacingTokens: StoryObj = {
  render: () => (
    <Box>
      <Typography variant="h4" mb={3}>
        Spacing Scale (8px base grid)
      </Typography>

      <Box mb={3}>
        <Typography variant="body1" mb={2}>
          Spacing values in pixels:
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {spacing.map((value, index) => (
            <Chip
              key={index}
              label={`${index} × 8px = ${value}px`}
              variant="outlined"
              size="small"
            />
          ))}
        </Stack>
      </Box>

      <Typography variant="h6" mb={2}>
        Visual Representation:
      </Typography>

      <Box>
        {spacing.slice(0, 8).map((value, index) => (
          <Box key={index} mb={2}>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              Index {index} = {value}px
            </Typography>
            <Box
              sx={{
                width: value,
                height: 20,
                backgroundColor: 'primary.main',
                borderRadius: 1,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  ),
};

/**
 * Component tokens usage examples
 */
export const ComponentTokensUsage: StoryObj = {
  render: () => (
    <Box>
      <Typography variant="h4" mb={3}>
        Component Tokens Usage
      </Typography>

      <Typography variant="h6" mb={2}>
        How tokens are applied to components:
      </Typography>

      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          mb: 3,
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          overflow: 'auto',
        }}
        component={Paper}
      >
        <pre>{`// Button Example - src/theme/theme.ts
MuiButton: {
  styleOverrides: {
    root: {
      ...styleCompositions.button.base(),  // Uses border-radius, font-weight, etc.
      textTransform: 'none',
    },
    sizeSmall: styleCompositions.button.sizes.small,
    sizeMedium: styleCompositions.button.sizes.medium,
    sizeLarge: styleCompositions.button.sizes.large,
  },
}

// Result: All buttons automatically get:
// - Border radius: 8px (shapeTokens.md)
// - Font weight: 600 (typography.fontWeightSemiBold)
// - Consistent sizing and padding across variants
`}</pre>
      </Box>

      <Typography variant="h6" mb={2}>
        Key Takeaways:
      </Typography>

      <Stack spacing={2}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="body2" fontWeight="bold" mb={1}>
            ✓ Single Source of Truth
          </Typography>
          <Typography variant="body2">
            All tokens are defined in one place (tokens-import.ts) and applied through theme.ts
          </Typography>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="body2" fontWeight="bold" mb={1}>
            ✓ Reusable Compositions
          </Typography>
          <Typography variant="body2">
            styleCompositions.ts provides reusable style patterns to reduce duplication
          </Typography>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="body2" fontWeight="bold" mb={1}>
            ✓ Automatic Dark Mode
          </Typography>
          <Typography variant="body2">
            Light and dark mode tokens are automatically applied based on theme.palette.mode
          </Typography>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant="body2" fontWeight="bold" mb={1}>
            ✓ Type Safe
          </Typography>
          <Typography variant="body2">
            All tokens are TypeScript-defined for compile-time validation
          </Typography>
        </Paper>
      </Stack>
    </Box>
  ),
};
