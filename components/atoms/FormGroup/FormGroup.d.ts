import { default as React } from 'react';
import { FormGroupProps } from './FormGroup.types';
/**
 * FormGroup component - groups form controls
 * Provides a helpful wrapper used to group selection control components
 *
 * @example
 * ```tsx
 * <FormGroup>
 *   <FormControlLabel control={<Checkbox />} label="Option 1" />
 *   <FormControlLabel control={<Checkbox />} label="Option 2" />
 * </FormGroup>
 * ```
 */
export declare const FormGroup: React.ForwardRefExoticComponent<Omit<FormGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default FormGroup;
//# sourceMappingURL=FormGroup.d.ts.map