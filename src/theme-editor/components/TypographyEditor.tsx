/**
 * TypographyEditor Component
 * Edit typography tokens (font sizes, weights, line heights)
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
  Chip,
} from '@mui/material';
import { useThemeParser } from '../hooks/useThemeParser';

interface TypographyEditorProps {
  onTypographyChange?: (variant: string, property: string, value: any) => void;
}

/**
 * Variant preview component
 */
function VariantPreview({ variant: variantName }: { variant: string }) {
  const variants: Record<string, string> = {
    h1: 'Heading 1 - The quick brown fox',
    h2: 'Heading 2 - The quick brown fox',
    h3: 'Heading 3 - The quick brown fox',
    h4: 'Heading 4 - The quick brown fox',
    h5: 'Heading 5 - The quick brown fox',
    h6: 'Heading 6 - The quick brown fox',
    body1: 'Body text - The quick brown fox jumps over the lazy dog',
    body2: 'Body text small - The quick brown fox jumps over the lazy dog',
    subtitle1: 'Subtitle 1 - The quick brown fox',
    subtitle2: 'Subtitle 2 - The quick brown fox',
    button: 'Button - Click me',
    caption: 'Caption - Small text',
    overline: 'OVERLINE - Small caps',
  };

  return (
    <Typography variant={variantName as any} sx={{ mb: 2, fontFamily: 'Nunito' }}>
      {variants[variantName] || variantName}
    </Typography>
  );
}

/**
 * Typography field editor
 */
function TypographyFieldEditor({
  property,
  value,
  onChange,
}: {
  variant: string;
  property: string;
  value: any;
  onChange: (value: any) => void;
}) {
  const isNumeric = ['fontSize', 'fontWeight', 'lineHeight'].includes(property);

  const handleChange = (newValue: string) => {
    if (isNumeric) {
      const numValue = parseInt(newValue) || 0;
      onChange(numValue);
    } else {
      onChange(newValue);
    }
  };

  const displayValue = typeof value === 'number' ? String(value) : String(value || '');

  return (
    <TextField
      label={property}
      value={displayValue}
      onChange={(e) => handleChange(e.target.value)}
      type={isNumeric ? 'number' : 'text'}
      size="small"
      fullWidth
      helperText={
        property === 'fontSize' ? 'e.g., 16 (px)' :
        property === 'fontWeight' ? 'e.g., 400, 600' :
        property === 'lineHeight' ? 'e.g., 1.5' :
        'e.g., 0.5'
      }
    />
  );
}

/**
 * Typography Editor Component
 */
export const TypographyEditor: React.FC<TypographyEditorProps> = ({ onTypographyChange }) => {
  const { parsedTheme, updateTypography } = useThemeParser();

  const handlePropertyChange = (variant: string, property: string, value: any) => {
    updateTypography(variant, property, value);
    onTypographyChange?.(variant, property, value);
  };

  return (
    <Box>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
        Edit typography tokens. Changes are reflected in the preview below.
      </Typography>

      {parsedTheme.typography.map((typo) => (
        <Card key={typo.variant} sx={{ mb: 3 }}>
          <CardContent>
            {/* Variant name */}
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              {typo.variant}
            </Typography>

            {/* Preview */}
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                mb: 3,
                backgroundColor: 'action.hover',
              }}
            >
              <VariantPreview variant={typo.variant} />
            </Paper>

            {/* Property editors */}
            <Grid container spacing={2}>
              {['fontSize', 'fontWeight', 'lineHeight', 'letterSpacing'].map((property) => {
                const value =
                  (typo as any)[property];

                if (value === undefined) return null;

                return (
                  <Grid item xs={12} sm={6} key={property}>
                    <TypographyFieldEditor
                      variant={typo.variant}
                      property={property}
                      value={value}
                      onChange={(newValue) =>
                        handlePropertyChange(typo.variant, property, newValue)
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>

            {/* Current values info */}
            <Stack direction="row" spacing={1} sx={{ mt: 3, flexWrap: 'wrap' }}>
              {['fontSize', 'fontWeight', 'lineHeight', 'letterSpacing'].map((property) => {
                const value = typo[property as keyof typeof typo];
                if (value === undefined) return null;

                const unit = property === 'fontSize' ? 'px' : '';
                return (
                  <Chip
                    key={property}
                    label={`${property}: ${value}${unit}`}
                    size="small"
                    variant="outlined"
                  />
                );
              })}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
