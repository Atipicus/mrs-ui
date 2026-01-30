/**
 * Tests for theme helper utilities
 */

import { getThemeShape, getExtendedColor } from './theme-helpers';
import { createTheme } from '@mui/material/styles';
import { shapeTokens } from '../theme/tokens-import';

describe('theme-helpers', () => {
  const theme = createTheme({
    shape: shapeTokens,
    palette: {
      primary: {
        main: '#00686f',
        dark: '#004e53',
        light: '#4db6ac',
        contrastText: '#ffffff',
      },
    },
  });

  describe('getThemeShape', () => {
    it('should return extended shape with all properties', () => {
      const shape = getThemeShape(theme);

      expect(shape).toBeDefined();
      expect(shape.borderRadius).toBe(8);
      expect(shape.sm).toBe(4);
      expect(shape.md).toBe(8);
      expect(shape.lg).toBe(12);
      expect(shape.xl).toBe(20);
      expect(shape.rounded).toBe(9999);
    });

    it('should provide type-safe access to custom shape properties', () => {
      const shape = getThemeShape(theme);

      // Should not throw TypeScript errors
      const rounded = shape.rounded;
      const sm = shape.sm;

      expect(typeof rounded).toBe('number');
      expect(typeof sm).toBe('number');
    });
  });

  describe('getExtendedColor', () => {
    it('should return color with main, dark, light, contrastText', () => {
      const color = getExtendedColor(theme.palette.primary);

      expect(color).toBeDefined();
      expect(color.main).toBe('#00686f');
      expect(color.dark).toBe('#004e53');
      expect(color.light).toBe('#4db6ac');
      expect(color.contrastText).toBe('#ffffff');
    });

    it('should handle _states if present', () => {
      const colorWithStates = {
        main: '#00686f',
        dark: '#004e53',
        light: '#4db6ac',
        contrastText: '#ffffff',
        _states: {
          hover: '#00999929',
          selected: '#0099991f',
        },
      };

      const color = getExtendedColor(colorWithStates);

      expect(color._states).toBeDefined();
      expect(color._states?.hover).toBe('#00999929');
      expect(color._states?.selected).toBe('#0099991f');
    });

    it('should work with colors without _states', () => {
      const color = getExtendedColor(theme.palette.primary);

      expect(color._states).toBeUndefined();
    });
  });
});
