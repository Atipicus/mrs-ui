import { default as React } from '../../../../node_modules/react';
import { LinkProps } from './Link.types';
/**
 * Link component - accessible hyperlink
 * Wraps MUI Link with design system theme integration
 *
 * @example
 * ```tsx
 * <Link href="https://example.com">Click here</Link>
 * <Link href="/about" color="primary" underline="hover">About</Link>
 * ```
 */
export declare const Link: React.ForwardRefExoticComponent<Omit<LinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
//# sourceMappingURL=Link.d.ts.map