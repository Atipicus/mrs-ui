import React from 'react';
import Box from '@mui/material/Box';
import { styled, keyframes } from '@mui/material/styles';
import { PrimitivesMotionDurationBase } from '../../../tokens/generated/ts/tokens';

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Dot = styled('span')<{ delay: number }>(({ theme, delay }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'inline-block',
  margin: '0 4px',
  animation: `${bounce} ${parseInt(PrimitivesMotionDurationBase) * 7}ms infinite ease-in-out`,
  animationDelay: `${delay}ms`,
}));

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
export const LoadingDots: React.FC<LoadingDotsProps> = ({ color = 'primary', size = 'medium' }) => {
  const sizeMap = {
    small: 8,
    medium: 12,
    large: 16,
  };

  const dotSize = sizeMap[size];

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.5,
      }}
    >
      <Dot
        delay={0}
        sx={{
          width: dotSize,
          height: dotSize,
          bgcolor: `${color}.main`,
        }}
      />
      <Dot
        delay={160}
        sx={{
          width: dotSize,
          height: dotSize,
          bgcolor: `${color}.main`,
        }}
      />
      <Dot
        delay={320}
        sx={{
          width: dotSize,
          height: dotSize,
          bgcolor: `${color}.main`,
        }}
      />
    </Box>
  );
};
