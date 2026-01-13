import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import * as tokens from '../tokens/generated/ts/tokens';

/**
 * Color Tokens
 *
 * Visualización completa de todos los tokens de color del MRS Design System.
 * Los colores están organizados en tres niveles:
 * - Primitives: Paleta base sin contexto
 * - Semantic: Colores con significado (primary, error, etc.)
 * - Component: Colores específicos de componentes
 */
const meta: Meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    docs: {
      description: {
        component:
          'Sistema completo de tokens de color con soporte para dark mode. Todos los colores están definidos en src/tokens/source/ y se generan automáticamente.',
      },
    },
  },
};

export default meta;

type ColorToken = {
  name: string;
  value: string;
  category: string;
};

const ColorSwatch: React.FC<{ color: ColorToken }> = ({ color }) => {
  const isLight = (hex: string) => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma > 128;
  };

  const textColor = color.value.startsWith('#') && isLight(color.value) ? '#000000' : '#ffffff';

  return (
    <Paper
      elevation={1}
      sx={{
        overflow: 'hidden',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box
        sx={{
          height: 100,
          backgroundColor: color.value,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: textColor,
            fontWeight: 600,
            textAlign: 'center',
            px: 1,
            fontSize: '0.75rem',
          }}
        >
          {color.value}
        </Typography>
      </Box>
      <Box sx={{ p: 1.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, fontSize: '0.875rem' }}>
          {color.name
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase())
            .trim()}
        </Typography>
        <Chip label={color.category} size="small" sx={{ fontSize: '0.7rem', height: 20 }} />
      </Box>
    </Paper>
  );
};

const ColorGrid: React.FC<{ colors: ColorToken[]; title: string }> = ({ colors, title }) => {
  if (colors.length === 0) return null;

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 2,
        }}
      >
        {colors.map((color) => (
          <ColorSwatch key={color.name} color={color} />
        ))}
      </Box>
    </Box>
  );
};

const AllColorsStory = () => {
  const allTokens = Object.entries(tokens).filter(
    ([key, value]) =>
      typeof value === 'string' && (value.startsWith('#') || value.startsWith('rgb'))
  );

  const categorizeColor = (name: string): string => {
    if (name.includes('Primitives')) return 'Primitives';
    if (name.includes('Semantic')) return 'Semantic';
    if (name.includes('Component')) return 'Component';
    return 'Other';
  };

  const colorTokens: ColorToken[] = allTokens.map(([name, value]) => ({
    name: name.replace(/^(Primitives|Semantic|Component)Colors?/, ''),
    value: value as string,
    category: categorizeColor(name),
  }));

  const primitives = colorTokens.filter((c) => c.category === 'Primitives');
  const semantic = colorTokens.filter((c) => c.category === 'Semantic');
  const component = colorTokens.filter((c) => c.category === 'Component');

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Color Tokens
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Sistema completo de tokens de color organizados por categoría. Total:{' '}
        <strong>{colorTokens.length} colores</strong>
      </Typography>

      <Stack spacing={4}>
        <ColorGrid colors={primitives} title="🎨 Primitives" />
        <ColorGrid colors={semantic} title="🏷️ Semantic" />
        <ColorGrid colors={component} title="🧩 Components" />
      </Stack>
    </Box>
  );
};

export const AllColors: StoryObj = {
  render: () => <AllColorsStory />,
};

const BrandColorsStory = () => {
  const brandColors: ColorToken[] = [
    {
      name: 'Verones (Primary)',
      value: tokens.PrimitivesColorsBrandVerones,
      category: 'Brand',
    },
    {
      name: 'Lima (Secondary)',
      value: tokens.PrimitivesColorsBrandLima,
      category: 'Brand',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Brand Colors
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Colores principales de la marca MRS.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 3,
        }}
      >
        {brandColors.map((color) => (
          <ColorSwatch key={color.name} color={color} />
        ))}
      </Box>
    </Box>
  );
};

export const BrandColors: StoryObj = {
  render: () => <BrandColorsStory />,
};

const StatusColorsStory = () => {
  const statusColors: ColorToken[] = [
    {
      name: 'Error 500',
      value: tokens.PrimitivesColorsStatusError500,
      category: 'Status',
    },
    {
      name: 'Warning 500',
      value: tokens.PrimitivesColorsStatusWarning500,
      category: 'Status',
    },
    {
      name: 'Info 500',
      value: tokens.PrimitivesColorsStatusInfo500,
      category: 'Status',
    },
    {
      name: 'Success 500',
      value: tokens.PrimitivesColorsStatusSuccess500,
      category: 'Status',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Status Colors
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Colores para estados y feedback del sistema.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 2,
        }}
      >
        {statusColors.map((color) => (
          <ColorSwatch key={color.name} color={color} />
        ))}
      </Box>
    </Box>
  );
};

export const StatusColors: StoryObj = {
  render: () => <StatusColorsStory />,
};

const SemanticColorsStory = () => {
  const semanticColors: ColorToken[] = [
    {
      name: 'Primary Main',
      value: tokens.SemanticColorPrimaryMain,
      category: 'Semantic',
    },
    {
      name: 'Secondary Main',
      value: tokens.SemanticColorSecondaryMain,
      category: 'Semantic',
    },
    {
      name: 'Error Main',
      value: tokens.SemanticColorErrorMain,
      category: 'Semantic',
    },
    {
      name: 'Warning Main',
      value: tokens.SemanticColorWarningMain,
      category: 'Semantic',
    },
    {
      name: 'Info Main',
      value: tokens.SemanticColorInfoMain,
      category: 'Semantic',
    },
    {
      name: 'Success Main',
      value: tokens.SemanticColorSuccessMain,
      category: 'Semantic',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
        Semantic Colors (Light Mode)
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Colores semánticos para modo claro. Tienen variantes dark, light y contrastText.
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 2,
        }}
      >
        {semanticColors.map((color) => (
          <ColorSwatch key={color.name} color={color} />
        ))}
      </Box>
    </Box>
  );
};

export const SemanticColors: StoryObj = {
  render: () => <SemanticColorsStory />,
};
