import { default as React } from '../../../../node_modules/react';
import { StackProps } from './Stack.types';
/**
 * Stack component - manages layout of immediate children along vertical or horizontal axis
 * Provides spacing between children with optional dividers
 *
 * @example
 * ```tsx
 * <Stack spacing={2} direction="row">
 *   <Item>Item 1</Item>
 *   <Item>Item 2</Item>
 * </Stack>
 * ```
 */
export declare const Stack: React.ForwardRefExoticComponent<Omit<StackProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Stack;
//# sourceMappingURL=Stack.d.ts.map