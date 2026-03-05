import { default as React } from 'react';
export interface LoadingDotsProps {
    /**
     * Color of the dots
     * @default 'primary'
     */
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
    /**
     * Size of the dots
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';
}
/**
 * LoadingDots Component
 *
 * Three-dot loading animation
 *
 * @example
 * ```tsx
 * <LoadingDots color="primary" size="medium" />
 * ```
 */
export declare const LoadingDots: React.FC<LoadingDotsProps>;
//# sourceMappingURL=LoadingDots.d.ts.map