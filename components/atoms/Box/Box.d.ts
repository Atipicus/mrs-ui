import { default as React } from '../../../../node_modules/react';
import { BoxProps } from './Box.types';
/**
 * Box component - the most fundamental layout component
 * A utility component that serves as a wrapper with access to theme and sx prop
 *
 * @example
 * ```tsx
 * <Box sx={{ padding: 2, backgroundColor: 'primary.main' }}>
 *   Content
 * </Box>
 * ```
 */
export declare const Box: React.ForwardRefExoticComponent<Omit<BoxProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Box;
//# sourceMappingURL=Box.d.ts.map