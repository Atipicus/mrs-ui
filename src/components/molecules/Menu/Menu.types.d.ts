import { MenuProps as MuiMenuProps } from '@mui/material/Menu';
/**
 * Menu component props
 * Displays a list of choices on temporary surfaces
 */
export interface MenuProps extends MuiMenuProps {
    /**
     * If true, the Menu is open
     * @default false
     */
    open: boolean;
    /**
     * An HTML element, or a function that returns one.
     * It is used to set the position of the menu.
     */
    anchorEl?: MuiMenuProps['anchorEl'];
    /**
     * Callback fired when the component requests to be closed
     */
    onClose?: MuiMenuProps['onClose'];
    /**
     * The content of the component (typically MenuItem elements)
     */
    children?: React.ReactNode;
    /**
     * The position of the Menu
     * @default { vertical: 'top', horizontal: 'left' }
     */
    anchorOrigin?: MuiMenuProps['anchorOrigin'];
    /**
     * The position of the Menu relative to the anchor element
     * @default { vertical: 'top', horizontal: 'left' }
     */
    transformOrigin?: MuiMenuProps['transformOrigin'];
    /**
     * If true, the Menu will automatically select the first item
     * @default false
     */
    autoFocus?: boolean;
    /**
     * Props applied to the List element
     */
    MenuListProps?: MuiMenuProps['MenuListProps'];
    /**
     * The variant of the Menu
     * @default 'selectedMenu'
     */
    variant?: 'menu' | 'selectedMenu';
}
//# sourceMappingURL=Menu.types.d.ts.map