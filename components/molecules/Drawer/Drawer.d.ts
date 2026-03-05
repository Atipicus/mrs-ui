import { default as React } from 'react';
import { DrawerProps } from './Drawer.types';
/**
 * Drawer component
 *
 * Side navigation panel that can appear from any edge of the screen.
 * Supports three variants: temporary (mobile), persistent, and permanent (desktop).
 *
 * Features:
 * - MRS design tokens (Nunito font, MRS color palette)
 * - Three variant types (temporary, persistent, permanent)
 * - Four anchor positions (left, right, top, bottom)
 * - Configurable elevation (shadow depth)
 * - Responsive design ready
 * - Full accessibility support
 *
 * @param props - Drawer component props
 * @returns Drawer component
 */
export declare const Drawer: React.ForwardRefExoticComponent<Omit<DrawerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type { DrawerProps };
export default Drawer;
//# sourceMappingURL=Drawer.d.ts.map