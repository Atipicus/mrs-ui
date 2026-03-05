import { default as React } from 'react';
import { BadgeProps } from '@mui/material/Badge';
export interface AnimatedBadgeProps extends BadgeProps {
    /**
     * Animation variant
     * @default 'bounce'
     */
    animationVariant?: 'bounce' | 'pulse' | 'none';
    /**
     * If true, animation plays once when badge appears
     * @default true
     */
    animateOnChange?: boolean;
}
/**
 * AnimatedBadge Component
 *
 * Badge component with entrance animations
 *
 * @example
 * ```tsx
 * <AnimatedBadge badgeContent={4} color="error" animationVariant="bounce">
 *   <MailIcon />
 * </AnimatedBadge>
 * ```
 */
export declare const AnimatedBadge: React.FC<AnimatedBadgeProps>;
//# sourceMappingURL=AnimatedBadge.d.ts.map