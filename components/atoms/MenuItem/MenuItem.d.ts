import { default as React } from '../../../../node_modules/react';
import { MenuItemProps } from './MenuItem.types';
/**
 * MenuItem component
 *
 * Menu items are used in menus, selects, and other components
 * to display selectable options.
 *
 * @param props - MenuItem component props
 * @returns MenuItem component
 *
 * @example
 * ```tsx
 * // In a Select
 * <Select>
 *   <MenuItem value="option1">Option 1</MenuItem>
 *   <MenuItem value="option2">Option 2</MenuItem>
 * </Select>
 *
 * // Disabled
 * <MenuItem value="disabled" disabled>
 *   Disabled Option
 * </MenuItem>
 *
 * // Selected
 * <MenuItem value="selected" selected>
 *   Selected Option
 * </MenuItem>
 * ```
 */
export declare const MenuItem: React.ForwardRefExoticComponent<Omit<MenuItemProps, "ref"> & React.RefAttributes<HTMLLIElement>>;
export default MenuItem;
//# sourceMappingURL=MenuItem.d.ts.map