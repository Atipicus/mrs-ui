import { default as React } from '../../../../node_modules/react';
import { ButtonProps } from '@mui/material/Button';
export interface RippleButtonProps extends ButtonProps {
    /**
     * If true, ripple effect is disabled
     * @default false
     */
    disableRipple?: boolean;
}
/**
 * RippleButton Component
 *
 * Enhanced Material-UI Button with custom ripple effect
 *
 * @example
 * ```tsx
 * <RippleButton variant="contained" color="primary">
 *   Click me for ripple effect
 * </RippleButton>
 * ```
 */
export declare const RippleButton: React.ForwardRefExoticComponent<Omit<RippleButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=RippleButton.d.ts.map