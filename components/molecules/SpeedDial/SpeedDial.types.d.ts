import { SpeedDialProps as MuiSpeedDialProps } from '@mui/material/SpeedDial';
import { SpeedDialActionProps as MuiSpeedDialActionProps } from '@mui/material/SpeedDialAction';
import { SpeedDialIconProps as MuiSpeedDialIconProps } from '@mui/material/SpeedDialIcon';
/**
 * Props for the SpeedDial component
 *
 * @see {@link https://mui.com/material-ui/api/speed-dial/}
 */
export interface SpeedDialProps extends MuiSpeedDialProps {
    /**
     * The aria-label of the button element
     */
    ariaLabel: string;
}
/**
 * Props for the SpeedDialAction component
 *
 * @see {@link https://mui.com/material-ui/api/speed-dial-action/}
 */
export interface SpeedDialActionProps extends MuiSpeedDialActionProps {
    /**
     * The icon to display in the SpeedDial action
     */
    icon: React.ReactNode;
    /**
     * Label to display in the tooltip
     */
    tooltipTitle: React.ReactNode;
}
/**
 * Props for the SpeedDialIcon component
 *
 * @see {@link https://mui.com/material-ui/api/speed-dial-icon/}
 */
export interface SpeedDialIconProps extends MuiSpeedDialIconProps {
    /**
     * The icon to display
     */
    icon?: React.ReactNode;
    /**
     * The icon to display when the SpeedDial is open
     */
    openIcon?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component
     */
    sx?: object;
}
//# sourceMappingURL=SpeedDial.types.d.ts.map