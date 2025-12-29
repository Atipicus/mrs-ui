import { default as React } from '../../../../node_modules/react';
import { FormControlLabelProps } from './FormControlLabel.types';
/**
 * FormControlLabel component - label wrapper for form controls
 * Drop-in replacement for checkboxes, radio buttons, and switches
 *
 * @example
 * ```tsx
 * <FormControlLabel
 *   control={<Checkbox />}
 *   label="Remember me"
 * />
 * ```
 */
export declare const FormControlLabel: React.ForwardRefExoticComponent<Omit<FormControlLabelProps, "ref"> & React.RefAttributes<HTMLLabelElement>>;
export default FormControlLabel;
//# sourceMappingURL=FormControlLabel.d.ts.map