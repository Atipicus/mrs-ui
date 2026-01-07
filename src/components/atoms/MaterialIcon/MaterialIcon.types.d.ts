import { SxProps, Theme } from '@mui/material/styles';
/**
 * Material Icons theme variants
 * @see https://fonts.google.com/icons
 */
export type MaterialIconVariant = 'filled' | 'outlined' | 'rounded' | 'two-tone' | 'sharp';
/**
 * Icon size variants
 */
export type MaterialIconSize = 'small' | 'medium' | 'large' | 'inherit' | number;
/**
 * MaterialIcon Component Props
 *
 * Props for the MaterialIcon component that renders icons from
 * Google's Material Icons font library with 5 theme variants.
 *
 * @see https://mui.com/material-ui/icons/#icon-font-icons
 * @see https://fonts.google.com/icons
 */
export interface MaterialIconProps {
    /**
     * Icon name from Material Icons library
     * Use snake_case format (e.g., "home", "check_circle", "arrow_forward")
     *
     * Browse available icons at: https://fonts.google.com/icons
     *
     * @example "add_circle"
     * @example "delete"
     * @example "settings"
     * @example "favorite"
     * @example "home"
     */
    icon: string;
    /**
     * Material Icons theme variant
     *
     * - **filled**: Default filled style (solid icons)
     * - **outlined**: Outlined style (hollow icons with strokes)
     * - **rounded**: Rounded style (softer, rounded corners)
     * - **two-tone**: Two-tone style (dual-color icons)
     * - **sharp**: Sharp style (angular, sharp corners)
     *
     * @default "filled"
     * @see https://fonts.google.com/icons for variant previews
     */
    variant?: MaterialIconVariant;
    /**
     * Icon size
     *
     * - **small**: 20px
     * - **medium**: 24px (default)
     * - **large**: 36px
     * - **inherit**: Inherits size from parent element
     * - **number**: Custom size in pixels
     *
     * @default "medium"
     */
    size?: MaterialIconSize;
    /**
     * Color - can be any valid CSS color or MUI theme path
     *
     * Supports:
     * - CSS color names: "red", "blue"
     * - Hex colors: "#00686f"
     * - RGB/RGBA: "rgb(0, 104, 111)"
     * - Theme paths: "primary.main", "error.main", "text.secondary"
     *
     * @example "red"
     * @example "#00686f"
     * @example "primary.main"
     * @example "error.main"
     */
    color?: string;
    /**
     * Additional CSS classes to apply to the icon
     */
    className?: string;
    /**
     * MUI sx prop for advanced custom styling
     *
     * @example { color: 'primary.main', fontSize: 32 }
     * @see https://mui.com/system/getting-started/the-sx-prop/
     */
    sx?: SxProps<Theme>;
    /**
     * ARIA label for accessibility
     *
     * Recommended for icon-only buttons or when the icon conveys meaning
     * that isn't obvious from surrounding context.
     *
     * @example "Close dialog"
     * @example "Delete item"
     * @example "Settings menu"
     */
    ariaLabel?: string;
    /**
     * ARIA hidden - hides icon from screen readers
     *
     * Use when the icon is purely decorative and doesn't convey
     * meaningful information to users.
     *
     * @default false
     */
    ariaHidden?: boolean;
    /**
     * Click handler - makes the icon clickable
     *
     * When provided, the icon will display a pointer cursor and
     * hover/active states.
     *
     * @example (event) => console.log('Icon clicked')
     */
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
    /**
     * Optional title for additional accessibility context
     */
    title?: string;
}
//# sourceMappingURL=MaterialIcon.types.d.ts.map