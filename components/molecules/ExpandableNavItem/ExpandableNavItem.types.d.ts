import { ReactNode } from 'react';
import { ListItemButtonProps } from '@mui/material/ListItemButton';
/**
 * Navigation item interface for child items
 */
export interface NavItem {
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
}
/**
 * Props for the ExpandableNavItem component
 */
export interface ExpandableNavItemProps {
    /** Label text for the parent item */
    label: string;
    /** Optional icon for the parent item */
    icon?: ReactNode;
    /** Whether the item is expanded */
    isOpen?: boolean;
    /** Callback when expand/collapse is toggled */
    onToggle?: () => void;
    /** Array of child navigation items */
    children?: NavItem[];
    /** Whether the parent item is selected */
    selected?: boolean;
    /** Optional click handler for parent item */
    onClick?: () => void;
    /** Custom ListItemButton props for the parent item */
    ListItemButtonProps?: Partial<ListItemButtonProps>;
    /** Custom ListItemButton props for child items */
    childListItemButtonProps?: Partial<ListItemButtonProps>;
}
//# sourceMappingURL=ExpandableNavItem.types.d.ts.map