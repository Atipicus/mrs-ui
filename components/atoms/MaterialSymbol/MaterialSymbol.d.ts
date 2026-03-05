import { default as React } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
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
     * @default 100
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
 * - Grade: 100 (Lighter visual weight)
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
export declare const MaterialSymbol: React.ForwardRefExoticComponent<MaterialSymbolProps & React.RefAttributes<HTMLSpanElement>>;
export default MaterialSymbol;
//# sourceMappingURL=MaterialSymbol.d.ts.map