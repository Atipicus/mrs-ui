/**
 * Card Component
 *
 * Card component for the MRS Design System.
 * Wraps Material-UI Card which is built on Paper with elevation and rounded corners.
 *
 * According to Figma specs:
 * - Uses Paper component as base (with elevation=1 by default)
 * - Uses shape.borderRadius token (from theme)
 * - Supports responsive width (600px default, 444px on small screens)
 *
 * @figma https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11479-243797&m=dev
 * @see {@link https://v6.mui.com/material-ui/api/card/}
 */

import React from 'react';
import MuiCard from '@mui/material/Card';
import type { CardProps } from './Card.types';

/**
 * Card component
 *
 * Cards contain content and actions about a single subject.
 * They should be easy to scan for relevant and actionable information.
 * Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
 *
 * @param props - Card component props
 * @returns Card component
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'elevation',
      elevation = 1,
      square = false,
      raised = false,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <MuiCard
        ref={ref}
        variant={variant}
        elevation={variant === 'elevation' ? (raised ? 8 : elevation) : 0}
        square={square}
        sx={{
          // Theme will apply borderRadius from shape.borderRadius token
          // No need to override unless square=true
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiCard>
    );
  }
);

Card.displayName = 'Card';

export default Card;
