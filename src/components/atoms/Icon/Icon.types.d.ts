import { SvgIconProps } from '@mui/material/SvgIcon';
import { IconProps as MuiIconProps } from '@mui/material/Icon';
/**
 * Icon size options
 */
export type IconSize = 'small' | 'medium' | 'large' | 'inherit';
/**
 * Icon type - either SVG icon or Font icon
 */
export type IconType = 'svg' | 'font';
/**
 * Base Icon component props for SVG icons
 */
export interface IconSvgProps extends Omit<SvgIconProps, 'fontSize'> {
    /**
     * Icon type
     * @default 'svg'
     */
    type?: 'svg';
    /**
     * Size of the icon
     * @default 'medium'
     */
    size?: IconSize;
    /**
     * Icon component from @mui/icons-material
     * @example
     * ```tsx
     * import AddIcon from '@mui/icons-material/Add';
     * <Icon icon={AddIcon} />
     * ```
     */
    icon: React.ComponentType<SvgIconProps>;
}
/**
 * Base Icon component props for Font icons
 */
export interface IconFontProps extends Omit<MuiIconProps, 'fontSize'> {
    /**
     * Icon type
     */
    type: 'font';
    /**
     * Size of the icon
     * @default 'medium'
     */
    size?: IconSize;
    /**
     * Icon name (Material Symbols font name)
     * @example 'add', 'home', 'settings'
     * @see {@link https://fonts.google.com/icons}
     */
    iconName: string;
}
/**
 * MRS Icon component props
 * Supports both SVG icons (@mui/icons-material) and Font icons (Material Symbols)
 */
export type IconProps = IconSvgProps | IconFontProps;
//# sourceMappingURL=Icon.types.d.ts.map