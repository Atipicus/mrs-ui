import { ReactNode } from '../../../../node_modules/react';
import { SxProps, Theme } from '@mui/material/styles';
/**
 * Base navigation item interface
 */
export interface DrawerNavItemBase {
    /** Unique identifier for the item */
    id?: string;
    /** Item label text */
    label: string;
    /** Optional icon element */
    icon?: ReactNode;
    /** Optional click handler */
    onClick?: () => void;
    /** Whether this item is selected/active */
    selected?: boolean;
    /** Optional path for routing */
    path?: string;
    /** Optional divider after this item */
    divider?: boolean;
}
/**
 * Simple navigation item (non-expandable)
 */
export interface SimpleNavItem extends DrawerNavItemBase {
    /** Item is not expandable */
    expandable?: false;
}
/**
 * Expandable navigation item with children
 */
export interface ExpandableNavItem extends DrawerNavItemBase {
    /** Item is expandable */
    expandable: true;
    /** Array of child navigation items */
    children: DrawerNavItemBase[];
    /** Whether the item starts expanded */
    defaultOpen?: boolean;
}
/**
 * Union type for navigation items
 */
export type DrawerNavItem = SimpleNavItem | ExpandableNavItem;
/**
 * Props for the DrawerNavigation component
 */
export interface DrawerNavigationProps {
    /** Array of navigation items */
    items: DrawerNavItem[];
    /** Width of the navigation (default: 256px from Figma) */
    width?: number | string;
    /** Top padding (default: 32px from Figma) */
    paddingTop?: number;
    /** Bottom padding (default: 32px from Figma) */
    paddingBottom?: number;
    /** Custom sx styles for the container */
    sx?: SxProps<Theme>;
    /** Custom sx styles for the List component */
    listSx?: SxProps<Theme>;
    /** Callback when a navigation item is clicked */
    onItemClick?: (item: DrawerNavItemBase) => void;
}
//# sourceMappingURL=DrawerNavigation.types.d.ts.map