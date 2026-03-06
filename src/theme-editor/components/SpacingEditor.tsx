/**
 * SpacingEditor Component
 * Edit spacing and shape (border radius) tokens
 */

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Paper,
  Stack,
  Divider,
  Slider,
} from '@mui/material';
import { useThemeParser } from '../hooks/useThemeParser';

interface SpacingEditorProps {
  onSpacingChange?: (spacingName: string, newValue: number) => void;
  onShapeChange?: (shapeName: string, newValue: number) => void;
}

/**
 * Visual spacing indicator
 */
function SpacingVisual({ value }: { value: number | string }) {
  const numValue = typeof value === 'string' ? parseInt(value) : value;
  return (
    <Paper
      variant="outlined"
      sx={{
        width: '100%',
        height: Math.min(numValue || 8, 200),
        backgroundColor: 'primary.light',
        borderRadius: 1,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        color: 'primary.dark',
        fontWeight: 600,
        fontSize: '12px',
        mb: 1,
      }}
    >
      {numValue}px
    </Paper>
  );
}

/**
 * Border radius visual
 */
function BorderRadiusVisual({ radius }: { radius: number }) {
  return (
    <Paper
      sx={{
        width: 100,
        height: 100,
        backgroundColor: 'secondary.light',
        borderRadius: `${radius}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 600,
        color: 'secondary.dark',
      }}
    >
      {radius}px
    </Paper>
  );
}

/**
 * Spacing Editor Component
 */
export const SpacingEditor: React.FC<SpacingEditorProps> = ({ onSpacingChange, onShapeChange }) => {
  const { parsedTheme, updateSpacing, updateShape } = useThemeParser();

  const handleSpacingChange = (spacingName: string, newValue: number) => {
    updateSpacing(spacingName, newValue);
    onSpacingChange?.(spacingName, newValue);
  };

  const handleShapeChange = (shapeName: string, newValue: number) => {
    updateShape(shapeName, newValue);
    onShapeChange?.(shapeName, newValue);
  };

  return (
    <Box>
      {/* Spacing Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
          Spacing Scale (8px base unit)
        </Typography>

        <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
          Adjust the spacing scale. Each multiplier represents an 8px increment.
        </Typography>

        <Grid container spacing={3}>
          {parsedTheme.spacing.map((space) => {
            const numValue = typeof space.value === 'string' ? parseInt(space.value) : space.value;
            return (
              <Grid item xs={12} sm={6} key={space.name}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                      {space.name}
                    </Typography>

                    <SpacingVisual value={numValue} />

                    <Grid container spacing={1}>
                      <Grid item xs={8}>
                        <TextField
                          label="Value (px)"
                          type="number"
                          value={numValue}
                          onChange={(e) =>
                            handleSpacingChange(space.name, parseInt(e.target.value) || 0)
                          }
                          size="small"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Slider
                          value={numValue}
                          onChange={(_e, value) => handleSpacingChange(space.name, value as number)}
                          min={0}
                          max={200}
                          step={4}
                          sx={{ mt: 1 }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Shape/BorderRadius Section */}
      <Box>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
          Border Radius (Shape Tokens)
        </Typography>

        <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
          Adjust border radius values used across components.
        </Typography>

        <Grid container spacing={3}>
          {parsedTheme.shape.map((shape) => (
            <Grid item xs={12} sm={6} md={4} key={shape.name}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                    {shape.name}
                  </Typography>

                  <Stack alignItems="center" spacing={2}>
                    <BorderRadiusVisual radius={shape.value} />

                    <TextField
                      label="Radius (px)"
                      type="number"
                      value={shape.value}
                      onChange={(e) => handleShapeChange(shape.name, parseInt(e.target.value) || 0)}
                      size="small"
                      fullWidth
                    />

                    <Slider
                      value={shape.value}
                      onChange={(_e, value) => handleShapeChange(shape.name, value as number)}
                      min={0}
                      max={100}
                      step={1}
                      sx={{ width: '100%' }}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
