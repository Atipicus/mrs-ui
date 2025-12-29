import React from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';
import '../../../styles/material-symbols.css';

export interface MaterialSymbolProps {
  /**
   * Icon name from Material Symbols library
   * Use snake_case format (e.g., "home", "check_circle", "arrow_forward")
   * Browse icons: https://fonts.google.com/icons
   *
   * @example "close"
   * @example "check"
   * @example "settings"
   * @example "account_circle"
   */
  icon: string;

  /**
   * Icon size
   * - 'small': 20px
   * - 'medium': 24px (default)
   * - 'large': 36px
   * - number: Custom size in pixels
   *
   * @default "medium"
   */
  size?: 'small' | 'medium' | 'large' | 'inherit' | number;

  /**
   * Fill style - controls whether icon is outlined or filled
   * - 0: Outlined (default)
   * - 1: Filled
   *
   * @default 0
   */
  fill?: 0 | 1;

  /**
   * Weight - thickness of icon strokes
   * - 100: Thin
   * - 200: Extra Light
   * - 300: Light (MRS default)
   * - 400: Regular
   * - 500: Medium
   * - 600: Semi Bold
   * - 700: Bold
   *
   * @default 300
   */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;

  /**
   * Grade - visual weight adjustment without changing physical size
   * Range: -50 to 200
   * - Negative values: Lighter appearance
   * - Positive values: Heavier appearance
   *
   * @default -25
   */
  grade?: number;

  /**
   * Color - can be any valid CSS color or MUI theme path
   *
   * @example "red"
   * @example "#00686f"
   * @example "primary.main"
   */
  color?: string;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * MUI sx prop for custom styling
   */
  sx?: SxProps<Theme>;

  /**
   * ARIA label for accessibility
   * Recommended for icon-only buttons or when icon conveys meaning
   */
  ariaLabel?: string;

  /**
   * ARIA hidden - hides icon from screen readers
   * Use when icon is purely decorative
   *
   * @default false
   */
  ariaHidden?: boolean;

  /**
   * Click handler - makes icon clickable
   */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

/**
 * MaterialSymbol Component
 *
 * Renders icons from Google's Material Symbols library using variable font technology.
 * Provides customizable weight, fill, grade, and size properties.
 *
 * **MRS Design System Defaults:**
 * - Variant: Rounded
 * - Weight: 300 (Light)
 * - Fill: 0 (Outlined)
 * - Grade: -25 (Slightly lighter)
 *
 * @example
 * Basic usage
 * ```tsx
 * <MaterialSymbol icon="home" />
 * ```
 *
 * @example
 * With size and fill
 * ```tsx
 * <MaterialSymbol icon="favorite" size="large" fill={1} />
 * ```
 *
 * @example
 * With custom color and weight
 * ```tsx
 * <MaterialSymbol
 *   icon="settings"
 *   color="primary.main"
 *   weight={500}
 * />
 * ```
 *
 * @example
 * Clickable icon
 * ```tsx
 * <MaterialSymbol
 *   icon="close"
 *   onClick={() => console.log('clicked')}
 *   ariaLabel="Close"
 * />
 * ```
 */
export const MaterialSymbol = React.forwardRef<
  HTMLSpanElement,
  MaterialSymbolProps
>(
  (
    {
      icon,
      size = 'medium',
      fill = 0,
      weight = 300,
      grade = -25,
      color,
      className = '',
      sx,
      ariaLabel,
      ariaHidden = false,
      onClick,
      ...props
    },
    ref
  ) => {
    // Calculate font size and optical size based on size prop
    let fontSize: number | string;
    let opticalSize: number;

    if (size === 'inherit') {
      fontSize = 'inherit';
      opticalSize = 24; // Default optical size for inherit
    } else if (typeof size === 'number') {
      fontSize = size;
      opticalSize = size;
    } else {
      const sizeMap = {
        small: { fontSize: 20, opsz: 20 },
        medium: { fontSize: 24, opsz: 24 },
        large: { fontSize: 36, opsz: 40 },
      };
      fontSize = sizeMap[size].fontSize;
      opticalSize = sizeMap[size].opsz;
    }

    // Construct font-variation-settings string
    const fontVariationSettings = `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`;

    // Build class names
    const classNames = ['material-symbols-rounded', className]
      .filter(Boolean)
      .join(' ');

    // Determine if icon is clickable
    const isClickable = Boolean(onClick);

    return (
      <Box
        ref={ref}
        component="span"
        className={classNames}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        role={ariaLabel && !ariaHidden ? 'img' : undefined}
        onClick={onClick}
        style={{
          // Use inline style for fontVariationSettings to ensure it renders properly
          fontVariationSettings,
        }}
        sx={{
          fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
          color: color || 'inherit',
          userSelect: 'none',
          cursor: isClickable ? 'pointer' : 'inherit',
          ...(isClickable && {
            transition: 'opacity 0.2s ease-in-out',
            '&:hover': {
              opacity: 0.7,
            },
            '&:active': {
              opacity: 0.5,
            },
          }),
          ...sx,
        }}
        {...props}
      >
        {icon}
      </Box>
    );
  }
);

MaterialSymbol.displayName = 'MaterialSymbol';

export default MaterialSymbol;
