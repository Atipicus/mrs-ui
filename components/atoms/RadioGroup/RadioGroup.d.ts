import { default as React } from '../../../../node_modules/react';
import { RadioGroupProps } from './RadioGroup.types';
/**
 * RadioGroup component - groups Radio buttons together
 * Provides a wrapper around a set of Radio components
 *
 * @example
 * ```tsx
 * <RadioGroup value={value} onChange={handleChange}>
 *   <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
 *   <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
 * </RadioGroup>
 * ```
 */
export declare const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default RadioGroup;
//# sourceMappingURL=RadioGroup.d.ts.map