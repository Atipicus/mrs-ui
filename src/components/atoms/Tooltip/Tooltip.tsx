/**
 * Tooltip Component
 *
 * Tooltip component for the MRS Design System.
 * Wraps Material-UI Tooltip with custom theme tokens.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6590:48770
 * @see {@link https://mui.com/material-ui/react-tooltip/}
 */

import React from 'react';
import MuiTooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import type { TooltipProps } from './Tooltip.types';

import * as tokens from '../../../tokens/generated/ts/tokens';

/**
 * Styled Tooltip with custom theme tokens
 */
const StyledTooltip = styled(
  React.forwardRef<HTMLDivElement, TooltipProps>(({ className, ...props }, ref) => (
    <MuiTooltip ref={ref} {...props} classes={{ popper: className }} />
  ))
)(({ theme }) => {
  const mode = theme.palette.mode;
  const tooltipBackground = mode === 'light'
    ? tokens.ComponentTooltipLightBackground
    : tokens.ComponentTooltipDarkBackground;
  const tooltipForeground = mode === 'light'
    ? tokens.ComponentTooltipLightForeground
    : tokens.ComponentTooltipDarkForeground;
  const tooltipBorderRadius = mode === 'light'
    ? tokens.ComponentTooltipLightBorderRadius
    : tokens.ComponentTooltipDarkBorderRadius;

  return {
    '& .MuiTooltip-tooltip': {
      backgroundColor: tooltipBackground,
      color: tooltipForeground,
      fontSize: tokens.PrimitivesTypographyFontSizeXs,
      fontWeight: theme.typography.fontWeightMedium,
      lineHeight: '14px',
      padding: `${tokens.PrimitivesSpacing05} ${tokens.PrimitivesSpacing1}`,
      borderRadius: tooltipBorderRadius,
      fontFamily: theme.typography.fontFamily,
    },
    '& .MuiTooltip-arrow': {
      color: tooltipBackground,
    },
  };
});

StyledTooltip.displayName = 'StyledTooltip';

/**
 * Tooltip component
 *
 * Tooltips display informative text when users hover over, focus on, or tap an element.
 *
 * @param props - Tooltip component props
 * @returns Tooltip component
 */
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, arrow = true, placement = 'bottom', ...props }, ref) => {
    return (
      <StyledTooltip ref={ref} arrow={arrow} placement={placement} {...props}>
        {children}
      </StyledTooltip>
    );
  }
);

Tooltip.displayName = 'Tooltip';
