import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
export interface AppBarProps extends Omit<MuiAppBarProps, 'color'> {
    /**
     * Color of the component (Figma variants)
     * - 'default': White background (palette/_components/appBar/defaultFill)
     * - 'primary': Uses MRS primary color (#00686f in light, #009999 in dark)
     * - 'secondary': Uses MRS secondary color (#99cc00 in light, #b3d633 in dark)
     * - 'transparent': Transparent background
     * - 'inherit': Inherits color from parent
     * @default 'default'
     */
    color?: 'default' | 'primary' | 'secondary' | 'transparent' | 'inherit';
    /**
     * Positioning type
     * - 'fixed': Fixed to top of viewport (default)
     * - 'absolute': Absolute positioning
     * - 'sticky': Sticky positioning
     * - 'static': Normal document flow
     * - 'relative': Relative positioning
     * @default 'fixed'
     */
    position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
    /**
     * Shadow depth (elevation) from 0 to 24
     * Figma default: 4
     * @default 4
     */
    elevation?: number;
    /**
     * Enable color on dark mode
     * If true, applies the color in dark mode
     * @default false
     */
    enableColorOnDark?: boolean;
    /**
     * Content of the AppBar (typically Toolbar with children)
     */
    children?: React.ReactNode;
    /**
     * Custom styles using MUI sx prop
     */
    sx?: MuiAppBarProps['sx'];
}
//# sourceMappingURL=AppBar.types.d.ts.map