import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material/styles';
/**
 * Navigation item interface for sidenav items
 */
export interface SidenavItem {
    /** Unique identifier for the item */
    id?: string;
    /** Item label text */
    label: string;
    /** Icon name for MaterialSymbol */
    icon?: string;
    /** Whether this item is selected/active */
    selected?: boolean;
    /** Optional click handler */
    onClick?: () => void;
    /** Optional path for routing */
    path?: string;
}
/**
 * Navigation group interface for grouped items with subheaders
 */
export interface SidenavGroup {
    /** Unique identifier for the group */
    id?: string;
    /** Group header label */
    header: string;
    /** Items within this group */
    items: SidenavItem[];
}
/**
 * Combined navigation item type (can be simple item or group)
 */
export type SidenavNavigationItem = SidenavItem | SidenavGroup;
/**
 * Type guard to check if navigation item is a group
 */
export declare function isSidenavGroup(item: SidenavNavigationItem): item is SidenavGroup;
/**
 * Props for the Sidenav component
 */
export interface SidenavProps {
    /** Sidenav variant - 'default' (256px) or 'slim' (72px) */
    variant?: 'default' | 'slim';
    /** Whether to show the logo */
    logo?: boolean;
    /** Custom logo element (defaults to MRS logo) */
    logoElement?: ReactNode;
    /** Navigation items - can be simple items or groups with headers */
    items?: SidenavNavigationItem[];
    /** Action button configuration */
    actionButton?: {
        /** Button label (only shown in default variant) */
        label?: string;
        /** Icon name for the button */
        icon?: string;
        /** Click handler */
        onClick?: () => void;
    };
    /** Whether to show the action button */
    showActionButton?: boolean;
    /** Callback when a navigation item is clicked */
    onItemClick?: (item: SidenavItem) => void;
    /** Custom width (overrides variant width) */
    width?: number;
    /** Custom height */
    height?: number | string;
    /** Custom sx styles */
    sx?: SxProps<Theme>;
    /** Custom sx styles for the navigation list */
    listSx?: SxProps<Theme>;
}
//# sourceMappingURL=Sidenav.types.d.ts.map