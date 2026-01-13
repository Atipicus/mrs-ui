import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import * as tokens from '../tokens/generated/ts/tokens';

/**
 * Spacing & Typography Tokens
 *
 * Visualización de tokens de espaciado, tipografía, border radius y otros tokens de diseño.
 */
const meta: Meta = {
  title: 'Design Tokens/Spacing & Typography',
  parameters: {
    docs: {
      description: {
        component:
          'Sistema de tokens para espaciado, tipografía, border radius y motion. Todos definidos en src/tokens/source/',
      },
    },
  },
};

export default meta;

const SpacingTokensStory = () => {
  const spacingTokens = [
    { name: 'Spacing 0', value: tokens.PrimitivesSpacing0, pixels: '0px' },
    { name: 'Spacing 05', value: tokens.PrimitivesSpacing05, pixels: '4px' },
    { name: 'Spacing 1', value: tokens.PrimitivesSpacing1, pixels: '8px' },
    { name: 'Spacing 15', value: tokens.PrimitivesSpacing15, pixels: '12px' },
    { name: 'Spacing 2', value: tokens.PrimitivesSpacing2, pixels: '16px' },
    { name: 'Spacing 3', value: tokens.PrimitivesSpacing3, pixels: '24px' },
    { name: 'Spacing 4', value: tokens.PrimitivesSpacing4, pixels: '32px' },
    { name: 'Spacing 5', value: tokens.PrimitivesSpacing5, pixels: '40px' },
    { name: 'Spacing 6', value: tokens.PrimitivesSpacing6, pixels: '48px' },
    { name: 'Spacing 7', value: tokens.PrimitivesSpacing7, pixels: '56px' },
    { name: 'Spacing 8', value: tokens.PrimitivesSpacing8, pixels: '64px' },
    { name: 'Spacing 9', value: tokens.PrimitivesSpacing9, pixels: '72px' },
    { name: 'Spacing 10', value: tokens.PrimitivesSpacing10, pixels: '80px' },
    { name: 'Spacing 11', value: tokens.PrimitivesSpacing11, pixels: '88px' },
    { name: 'Spacing 12', value: tokens.PrimitivesSpacing12, pixels: '96px' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Spacing Tokens
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Escala de espaciado basada en 8px. Usar para padding, margin, gaps, etc.
      </Typography>

      <Stack spacing={2}>
        {spacingTokens.map((token) => (
          <Paper
            key={token.name}
            elevation={1}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box
              sx={{
                width: 120,
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {token.name}
              </Typography>
              <Chip
                label={token.value}
                size="small"
                sx={{ fontSize: '0.7rem', height: 20, width: 'fit-content' }}
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: token.value,
                  height: 40,
                  backgroundColor: 'primary.main',
                  borderRadius: 1,
                  position: 'relative',
                  '&::after': {
                    content: `"${token.pixels}"`,
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  },
                }}
              />
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export const SpacingTokens: StoryObj = {
  render: () => <SpacingTokensStory />,
};

const BorderRadiusStory = () => {
  const radiusTokens = [
    { name: 'None', value: tokens.PrimitivesRadiusNone, description: 'Sin redondeo' },
    { name: 'Small', value: tokens.PrimitivesRadiusSm, description: 'Inputs, chips pequeños' },
    { name: 'Medium', value: tokens.PrimitivesRadiusMd, description: 'Default, botones, cards' },
    { name: 'Large', value: tokens.PrimitivesRadiusLg, description: 'Modals, dialogs' },
    { name: 'XL', value: tokens.PrimitivesRadiusXl, description: 'Elementos destacados' },
    { name: 'Full', value: tokens.PrimitivesRadiusFull, description: 'Círculos, pills' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Border Radius Tokens
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Escala de border radius para diferentes tipos de componentes.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 2,
        }}
      >
        {radiusTokens.map((token) => (
          <Paper
            key={token.name}
            elevation={1}
            sx={{
              p: 2,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: 100,
                backgroundColor: 'primary.main',
                borderRadius: token.value,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: 'white', fontWeight: 600 }}
              >
                {token.value}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
              {token.name}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {token.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export const BorderRadius: StoryObj = {
  render: () => <BorderRadiusStory />,
};

const TypographyStory = () => {
  const fontSizes = [
    { name: 'XS', value: tokens.PrimitivesTypographyFontSizeXs, description: 'Captions, labels' },
    { name: 'SM', value: tokens.PrimitivesTypographyFontSizeSm, description: 'Body 2, helper text' },
    { name: 'MD', value: tokens.PrimitivesTypographyFontSizeMd, description: 'Body 1 (default)' },
    { name: 'LG', value: tokens.PrimitivesTypographyFontSizeLg, description: 'H6, subtitle' },
    { name: 'XL', value: tokens.PrimitivesTypographyFontSizeXl, description: 'H5' },
    { name: '2XL', value: tokens.PrimitivesTypographyFontSize2xl, description: 'H4, H3' },
    { name: '3XL', value: tokens.PrimitivesTypographyFontSize3xl, description: 'H2' },
    { name: '4XL', value: tokens.PrimitivesTypographyFontSize4xl, description: 'H1' },
  ];

  const fontWeights = [
    { name: 'Light', value: tokens.PrimitivesTypographyFontWeightLight },
    { name: 'Regular', value: tokens.PrimitivesTypographyFontWeightRegular },
    { name: 'Medium', value: tokens.PrimitivesTypographyFontWeightMedium },
    { name: 'Semibold', value: tokens.PrimitivesTypographyFontWeightSemibold },
    { name: 'Bold', value: tokens.PrimitivesTypographyFontWeightBold },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Typography Tokens
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Sistema de tipografía con Nunito como fuente principal.
      </Typography>

      <Stack spacing={4}>
        {/* Font Sizes */}
        <Box>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Font Sizes
          </Typography>
          <Stack spacing={2}>
            {fontSizes.map((size) => (
              <Paper
                key={size.name}
                elevation={1}
                sx={{
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 1 }}>
                  <Chip
                    label={size.name}
                    size="small"
                    sx={{ fontSize: '0.7rem', height: 20 }}
                  />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {size.value} • {size.description}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: size.value,
                    fontFamily: tokens.PrimitivesTypographyFontFamilyBrand,
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>

        {/* Font Weights */}
        <Box>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Font Weights
          </Typography>
          <Stack spacing={2}>
            {fontWeights.map((weight) => (
              <Paper
                key={weight.name}
                elevation={1}
                sx={{
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 1 }}>
                  <Chip
                    label={weight.name}
                    size="small"
                    sx={{ fontSize: '0.7rem', height: 20 }}
                  />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {weight.value}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontWeight: weight.value,
                    fontFamily: tokens.PrimitivesTypographyFontFamilyBrand,
                    fontSize: '1rem',
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export const Typography: StoryObj = {
  render: () => <TypographyStory />,
};

const MotionStory = () => {
  const durations = [
    { name: 'Instant', value: tokens.PrimitivesMotionDurationInstant, description: 'Sin delay' },
    { name: 'Fast', value: tokens.PrimitivesMotionDurationFast, description: 'Micro-interacciones' },
    { name: 'Base', value: tokens.PrimitivesMotionDurationBase, description: 'Mayoría de elementos' },
    { name: 'Moderate', value: tokens.PrimitivesMotionDurationModerate, description: 'Drawers, dialogs' },
    { name: 'Slow', value: tokens.PrimitivesMotionDurationSlow, description: 'Transiciones grandes' },
    { name: 'Slower', value: tokens.PrimitivesMotionDurationSlower, description: 'Animaciones complejas' },
  ];

  const easings = [
    { name: 'Linear', value: tokens.PrimitivesMotionEasingLinear, description: 'Velocidad constante' },
    { name: 'Standard', value: tokens.PrimitivesMotionEasingStandard, description: 'Default, smooth' },
    { name: 'Emphasized', value: tokens.PrimitivesMotionEasingEmphasized, description: 'Material Design' },
    { name: 'Decelerate', value: tokens.PrimitivesMotionEasingDecelerate, description: 'Elementos entrando' },
    { name: 'Accelerate', value: tokens.PrimitivesMotionEasingAccelerate, description: 'Elementos saliendo' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Motion Tokens
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Duraciones y easings para animaciones y transiciones.
      </Typography>

      <Stack spacing={4}>
        {/* Durations */}
        <Box>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Durations
          </Typography>
          <Stack spacing={2}>
            {durations.map((duration) => (
              <Paper
                key={duration.name}
                elevation={1}
                sx={{
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {duration.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {duration.description}
                    </Typography>
                  </Box>
                  <Chip
                    label={duration.value}
                    size="small"
                    sx={{ fontSize: '0.7rem', height: 24 }}
                  />
                </Box>
              </Paper>
            ))}
          </Stack>
        </Box>

        {/* Easings */}
        <Box>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            Easings
          </Typography>
          <Stack spacing={2}>
            {easings.map((easing) => (
              <Paper
                key={easing.name}
                elevation={1}
                sx={{
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {easing.name}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
                  {easing.description}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'monospace',
                    backgroundColor: 'action.hover',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    display: 'inline-block',
                  }}
                >
                  {easing.value}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export const Motion: StoryObj = {
  render: () => <MotionStory />,
};
