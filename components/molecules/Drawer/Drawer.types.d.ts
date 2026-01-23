import { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
export interface DrawerProps extends MuiDrawerProps {
    /**
     * Side from which the drawer will appear
     * @default 'left'
     */
    anchor?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * Content of the drawer
     */
    children?: React.ReactNode;
    /**
     * Shadow depth (elevation) from 0 to 24
     * @default 16
     */
    elevation?: number;
    /**
     * If true, the backdrop is not rendered
     * @default false
     */
    hideBackdrop?: boolean;
    /**
     * Props applied to the Modal element
     * (only applicable when variant is 'temporary')
     */
    ModalProps?: MuiDrawerProps['ModalProps'];
    /**
     * Callback fired when the drawer requests to be closed
     * The `reason` parameter can be: 'backdropClick', 'escapeKeyDown'
     */
    onClose?: MuiDrawerProps['onClose'];
    /**
     * If true, the drawer is open
     * @default false
     */
    open?: boolean;
    /**
     * Props applied to the internal slots
     */
    slotProps?: MuiDrawerProps['slotProps'];
    /**
     * Component overrides for slots
     */
    slots?: MuiDrawerProps['slots'];
    /**
     * Custom styles using MUI sx prop
     */
    sx?: MuiDrawerProps['sx'];
    /**
     * Duration for the transition in milliseconds
     * Can be a single number or an object with 'enter' and 'exit' values
     */
    transitionDuration?: MuiDrawerProps['transitionDuration'];
    /**
     * Variant of the drawer
     * - 'temporary': Drawer is above content, dismissible (default, mobile-friendly)
     * - 'persistent': Drawer pushes content, toggleable, stays open
     * - 'permanent': Always visible, cannot be closed (desktop navigation)
     * @default 'temporary'
     */
    variant?: 'temporary' | 'persistent' | 'permanent';
}
//# sourceMappingURL=Drawer.types.d.ts.map