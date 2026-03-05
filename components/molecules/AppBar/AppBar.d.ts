import { default as React } from 'react';
import { AppBarProps } from './AppBar.types';
/**
 * AppBar component
 *
 * Primary navigation component that appears at the top of the application.
 * Supports multiple colors from the MRS palette, positioning options, and elevation levels.
 *
 * Features:
 * - MRS design tokens (Nunito font, MRS color palette)
 * - Multiple positioning options (fixed, static, sticky, absolute, relative)
 * - Elevation control (shadow depth 0-24)
 * - Light and dark mode support
 * - Responsive design ready
 *
 * @param props - AppBar component props
 * @returns AppBar component
 */
export declare const AppBar: React.ForwardRefExoticComponent<Omit<AppBarProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default AppBar;
//# sourceMappingURL=AppBar.d.ts.map