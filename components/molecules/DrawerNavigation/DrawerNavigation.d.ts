import { default as React } from '../../../../node_modules/react';
import { DrawerNavigationProps, DrawerNavItem } from './DrawerNavigation.types';
/**
 * DrawerNavigation component
 *
 * Full-featured navigation component for use within Drawer.
 * Supports simple and expandable navigation items with icons.
 *
 * Features:
 * - Simple and expandable navigation items
 * - Icon support for all items
 * - Selected/active state highlighting
 * - Optional dividers between items
 * - Configurable width and padding (defaults from Figma)
 * - MRS design tokens (Nunito font, MRS colors)
 * - Full accessibility support
 *
 * @param props - DrawerNavigation component props
 * @returns DrawerNavigation component
 */
export declare const DrawerNavigation: React.ForwardRefExoticComponent<DrawerNavigationProps & React.RefAttributes<HTMLDivElement>>;
export type { DrawerNavigationProps, DrawerNavItem };
export default DrawerNavigation;
//# sourceMappingURL=DrawerNavigation.d.ts.map