import React, { useEffect, useState } from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled, keyframes } from '@mui/material/styles';
import { PrimitivesMotionDurationBase } from '../../../tokens/generated/ts/tokens';

const bounce = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(244, 67, 54, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0);
  }
`;

const AnimatedBadgeRoot = styled(Badge)<{
  animate?: boolean;
  animationvariant?: 'bounce' | 'pulse';
}>(({ animate, animationvariant }) => {
  if (!animate) return {};

  if (animationvariant === 'bounce') {
    return {
      '& .MuiBadge-badge': {
        animation: `${bounce} ${parseInt(PrimitivesMotionDurationBase) * 3}ms ease-in-out`,
      },
    };
  }

  if (animationvariant === 'pulse') {
    return {
      '& .MuiBadge-badge': {
        animation: `${pulse} 2s infinite`,
      },
    };
  }

  return {};
});

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
export const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  animationVariant = 'bounce',
  animateOnChange = true,
  badgeContent,
  children,
  ...props
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [prevBadgeContent, setPrevBadgeContent] = useState(badgeContent);

  useEffect(() => {
    if (!animateOnChange || badgeContent === prevBadgeContent) {
      return;
    }

    setShouldAnimate(true);
    setPrevBadgeContent(badgeContent);

    const timer = setTimeout(() => {
      setShouldAnimate(false);
    }, parseInt(PrimitivesMotionDurationBase) * 3);

    return () => clearTimeout(timer);
  }, [badgeContent, prevBadgeContent, animateOnChange]);

  const isPulse = animationVariant === 'pulse';
  const animate = isPulse || shouldAnimate;

  return (
    <AnimatedBadgeRoot
      badgeContent={badgeContent}
      animate={animate}
      animationvariant={animationVariant === 'none' ? undefined : animationVariant}
      {...props}
    >
      {children}
    </AnimatedBadgeRoot>
  );
};

