import React, { forwardRef } from 'react';
import type { ButtonProps } from '@mui/material/Button';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useRipple } from '../../../hooks/animations';
import { PrimitivesMotionDurationFast } from '../../../tokens/generated/ts/tokens';

const RippleContainer = styled('span')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  borderRadius: 'inherit',
});

const RippleSpan = styled('span')<{ x: number; y: number; size: number }>(
  ({ x, y, size }) => ({
    position: 'absolute',
    left: x,
    top: y,
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    opacity: 0.3,
    animation: `ripple ${parseInt(PrimitivesMotionDurationFast) * 6}ms ease-out`,
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(0)',
        opacity: 0.6,
      },
      '100%': {
        transform: 'scale(4)',
        opacity: 0,
      },
    },
  })
);

export interface RippleButtonProps extends ButtonProps {
  /**
   * If true, ripple effect is disabled
   * @default false
   */
  disableRipple?: boolean;
}

/**
 * RippleButton Component
 *
 * Enhanced Material-UI Button with custom ripple effect
 *
 * @example
 * ```tsx
 * <RippleButton variant="contained" color="primary">
 *   Click me for ripple effect
 * </RippleButton>
 * ```
 */
export const RippleButton = forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ children, disableRipple = false, onClick, ...props }, ref) => {
    const { ripples, createRipple } = useRipple();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disableRipple) {
        createRipple(event);
      }
      onClick?.(event);
    };

    return (
      <Button ref={ref} onClick={handleClick} sx={{ position: 'relative' }} {...props}>
        {!disableRipple && (
          <RippleContainer>
            {ripples.map((ripple) => (
              <RippleSpan key={ripple.id} x={ripple.x} y={ripple.y} size={ripple.size} />
            ))}
          </RippleContainer>
        )}
        {children}
      </Button>
    );
  }
);

RippleButton.displayName = 'RippleButton';

