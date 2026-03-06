import { default as React } from '../../../../node_modules/react';
import { SelectProps } from './Select.types';
/**
 * Select component
 *
 * Select components are used for collecting user provided information from a list of options.
 * Supports single and multiple selection, different variants, sizes, and states.
 *
 * @param props - Select component props
 * @returns Select component
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Select value={age} onChange={handleChange}>
 *   <MenuItem value={10}>Ten</MenuItem>
 *   <MenuItem value={20}>Twenty</MenuItem>
 *   <MenuItem value={30}>Thirty</MenuItem>
 * </Select>
 *
 * // With label (use FormControl)
 * <FormControl>
 *   <InputLabel>Age</InputLabel>
 *   <Select value={age} onChange={handleChange}>
 *     <MenuItem value={10}>Ten</MenuItem>
 *     <MenuItem value={20}>Twenty</MenuItem>
 *   </Select>
 * </FormControl>
 *
 * // Multiple selection
 * <Select multiple value={values} onChange={handleChange}>
 *   <MenuItem value="option1">Option 1</MenuItem>
 *   <MenuItem value="option2">Option 2</MenuItem>
 * </Select>
 * ```
 */
export declare const Select: React.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & React.RefAttributes<any>>;
export default Select;
//# sourceMappingURL=Select.d.ts.map