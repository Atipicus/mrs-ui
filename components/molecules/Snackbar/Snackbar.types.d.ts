import { SnackbarProps as MuiSnackbarProps } from '@mui/material/Snackbar';
import { AlertProps } from '@mui/material/Alert';
/**
 * Snackbar component props
 * Temporary notification message shown at the bottom or top of the screen
 */
export interface SnackbarProps extends Omit<MuiSnackbarProps, 'children'> {
    /**
     * If true, the Snackbar is open
     * @default false
     */
    open?: boolean;
    /**
     * The number of milliseconds to wait before automatically closing
     * Set to null to disable auto-hide
     * @default 6000
     */
    autoHideDuration?: number | null;
    /**
     * Callback fired when the component requests to be closed
     */
    onClose?: (event: React.SyntheticEvent | Event, reason?: string) => void;
    /**
     * The message to display
     */
    message?: React.ReactNode;
    /**
     * The anchor of the Snackbar
     * @default { vertical: 'bottom', horizontal: 'left' }
     */
    anchorOrigin?: MuiSnackbarProps['anchorOrigin'];
    /**
     * The action to display (e.g., an IconButton or Button)
     */
    action?: React.ReactNode;
    /**
     * If provided, display as an Alert instead of simple message
     * @default undefined
     */
    severity?: AlertProps['severity'];
    /**
     * Alert variant when severity is provided
     * @default 'filled'
     */
    variant?: AlertProps['variant'];
    /**
     * If true, show close button when using severity
     * @default true
     */
    showCloseButton?: boolean;
    /**
     * Custom icon for Alert
     */
    icon?: AlertProps['icon'];
    /**
     * The content of the component
     */
    children?: React.ReactNode;
}
//# sourceMappingURL=Snackbar.types.d.ts.map