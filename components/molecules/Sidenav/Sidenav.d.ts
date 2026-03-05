import { default as React } from 'react';
import { SidenavProps, SidenavItem, SidenavNavigationItem } from './Sidenav.types';
/**
 * Sidenav component
 *
 * Side navigation panel with support for default (256px) and slim (72px) variants.
 * Designed following MRS Design System specifications from Figma.
 *
 * Features:
 * - Two variants: default (with labels) and slim (icons only)
 * - Logo section with MRS branding
 * - Action button (Button in default, IconButton in slim)
 * - Navigation items with icons
 * - Group headers for organizing items
 * - Selected/active state highlighting
 * - Tooltips in slim mode for accessibility
 * - MRS design tokens (Nunito font, MRS colors)
 *
 * @param props - Sidenav component props
 * @returns Sidenav component
 */
export declare const Sidenav: React.ForwardRefExoticComponent<SidenavProps & React.RefAttributes<HTMLDivElement>>;
export type { SidenavProps, SidenavItem, SidenavNavigationItem };
export default Sidenav;
//# sourceMappingURL=Sidenav.d.ts.map