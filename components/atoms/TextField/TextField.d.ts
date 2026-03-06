import { default as React } from '../../../../node_modules/react';
import { TextFieldProps } from './TextField.types';
/**
 * TextField component
 *
 * Text fields let users enter and edit text.
 * Supports multiple variants (outlined, filled, standard),
 * sizes (small, medium), and states (error, disabled, etc.).
 *
 * @param props - TextField component props
 * @returns TextField component
 *
 * @example
 * ```tsx
 * // Basic usage
 * <TextField label="Email" placeholder="Enter your email" />
 *
 * // With helper text and error
 * <TextField
 *   label="Password"
 *   type="password"
 *   error
 *   helperText="Password is required"
 * />
 *
 * // Multiline
 * <TextField
 *   label="Description"
 *   multiline
 *   rows={4}
 *   placeholder="Enter description"
 * />
 * ```
 */
export declare const TextField: React.ForwardRefExoticComponent<Omit<TextFieldProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default TextField;
//# sourceMappingURL=TextField.d.ts.map