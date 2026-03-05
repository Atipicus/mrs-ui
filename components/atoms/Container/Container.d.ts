import { default as React } from 'react';
import { ContainerProps } from './Container.types';
/**
 * Container component - centers content horizontally with max-width constraints
 * The most basic layout element that provides responsive horizontal padding
 *
 * @example
 * ```tsx
 * <Container maxWidth="lg">
 *   <Typography>Content</Typography>
 * </Container>
 * ```
 */
export declare const Container: React.ForwardRefExoticComponent<Omit<ContainerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Container;
//# sourceMappingURL=Container.d.ts.map