/**
 * CardContent Component
 *
 * CardContent component for the MRS Design System.
 * Wraps Material-UI CardContent - provides the main content area for a Card.
 *
 * @see {@link https://v6.mui.com/material-ui/api/card-content/}
 */

import React from 'react';
import MuiCardContent from '@mui/material/CardContent';
import type { CardContentProps } from './Card.types';

/**
 * CardContent component
 *
 * Provides the main content area within a Card. Adds padding and spacing
 * according to Material Design specifications.
 *
 * @param props - CardContent component props
 * @returns CardContent component
 */
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, component = 'div', sx, ...props }, ref) => {
    return (
      <MuiCardContent
        ref={ref}
        component={component}
        sx={{
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiCardContent>
    );
  }
);

CardContent.displayName = 'CardContent';

export default CardContent;
