/**
 * ColorEditor Component
 * Interactive color editor with picker and preview
 */

import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Stack,
  Divider,
  Chip,
  Paper,
} from '@mui/material';
import { useThemeParser } from '../hooks/useThemeParser';

interface ColorEditorProps {
  onColorChange?: (colorKey: string, newValue: string) => void;
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1]!, 16),
        g: parseInt(result[2]!, 16),
        b: parseInt(result[3]!, 16),
      }
    : null;
}

/**
 * Get text color (light or dark) based on background luminance
 */
function getContrastColor(hex: string): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return '#000000';

  // Calculate luminance
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

/**
 * Color swatch component
 */
function ColorSwatch({
  name,
  lightValue,
  darkValue,
  onEditLight,
  onEditDark,
  mode,
}: {
  name: string;
  lightValue: string;
  darkValue: string;
  onEditLight: (value: string) => void;
  onEditDark: (value: string) => void;
  mode: 'light' | 'dark';
}) {
  const [showPicker, setShowPicker] = useState(false);
  const currentValue = mode === 'light' ? lightValue : darkValue;
  const onEdit = mode === 'light' ? onEditLight : onEditDark;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          {/* Color preview */}
          <Paper
            onClick={() => setShowPicker(!showPicker)}
            sx={{
              width: 80,
              height: 80,
              backgroundColor: currentValue,
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              color: getContrastColor(currentValue),
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            {currentValue}
          </Paper>

          {/* Color info and controls */}
          <Box flex={1}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              {name}
            </Typography>

            {showPicker && (
              <Stack spacing={1}>
                <TextField
                  type="color"
                  value={currentValue}
                  onChange={(e) => onEdit(e.target.value)}
                  size="small"
                  sx={{
                    '& input': {
                      cursor: 'pointer',
                      height: 40,
                    },
                  }}
                />
                <TextField
                  type="text"
                  value={currentValue}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
                      onEdit(value);
                    }
                  }}
                  placeholder="#000000"
                  size="small"
                  fullWidth
                  helperText="Hex format: #RRGGBB"
                />
              </Stack>
            )}

            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              {mode === 'light' && (
                <>
                  <Chip label="Light" size="small" variant="outlined" />
                  <Chip label={lightValue} size="small" />
                </>
              )}
              {mode === 'dark' && (
                <>
                  <Chip label="Dark" size="small" variant="outlined" />
                  <Chip label={darkValue} size="small" />
                </>
              )}
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

/**
 * Color Editor Component
 */
export const ColorEditor: React.FC<ColorEditorProps> = ({ onColorChange }) => {
  const { parsedTheme, mode, setMode, updateColor } = useThemeParser();

  const colorKeys = Object.keys(parsedTheme.colors[mode] || {}).sort();

  // Group colors by category
  const colorGroups: Record<string, string[]> = {};
  colorKeys.forEach((key) => {
    const category = key.split('.')[0]!;
    if (!colorGroups[category]) {
      colorGroups[category] = [];
    }
    colorGroups[category]!.push(key);
  });

  const handleColorChange = (colorKey: string, newValue: string) => {
    updateColor(colorKey, newValue);
    onColorChange?.(colorKey, newValue);
  };

  return (
    <Box>
      {/* Mode selector */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Stack direction="row" spacing={1}>
          <Button
            variant={mode === 'light' ? 'contained' : 'outlined'}
            onClick={() => setMode('light')}
            size="small"
          >
            Light Mode
          </Button>
          <Button
            variant={mode === 'dark' ? 'contained' : 'outlined'}
            onClick={() => setMode('dark')}
            size="small"
          >
            Dark Mode
          </Button>
        </Stack>
      </Paper>

      {/* Colors by category */}
      {Object.entries(colorGroups).map(([category, keys]) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, textTransform: 'capitalize' }}>
            {category}
          </Typography>

          <Grid container spacing={2}>
            {keys.map((colorKey) => (
              <Grid item xs={12} sm={6} key={colorKey}>
                <ColorSwatch
                  name={colorKey}
                  lightValue={parsedTheme.colors.light[colorKey] ?? '#000000'}
                  darkValue={parsedTheme.colors.dark[colorKey] ?? '#FFFFFF'}
                  onEditLight={(value) => handleColorChange(colorKey, value)}
                  onEditDark={(value) => handleColorChange(colorKey, value)}
                  mode={mode}
                />
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3 }} />
        </Box>
      ))}

      {colorKeys.length === 0 && (
        <Typography color="textSecondary">No colors found in theme</Typography>
      )}
    </Box>
  );
};
