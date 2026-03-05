import { default as React } from 'react';
import { ListItemProps } from './ListItem.types';
/**
 * ListItem component
 *
 * ListItem is an interactive list item component by default.
 * When button prop is true (default), it wraps children with ListItemButton for interactivity.
 *
 * Key features:
 * - Interactive by default with hover, focus, and selected states
 * - Selected state uses SemiBold font and primary.dark color
 * - Dense mode for compact layouts
 * - Support for icons, secondary text, and actions
 *
 * @param props - ListItem component props
 * @returns ListItem component
 */
export declare const ListItem: React.ForwardRefExoticComponent<Omit<ListItemProps, "ref"> & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=ListItem.d.ts.map