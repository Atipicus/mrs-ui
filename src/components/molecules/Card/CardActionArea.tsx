/**
 * CardActionArea Component
 *
 * CardActionArea component for the MRS Design System.
 * Wraps Material-UI CardActionArea - provides an actionable area within a Card.
 *
 * @see {@link https://v6.mui.com/material-ui/api/card-action-area/}
 */

import React from 'react';
import MuiCardActionArea from '@mui/material/CardActionArea';
import type { CardActionAreaProps } from './Card.types';

/**
 * CardActionArea component
 *
 * Provides an actionable area within a Card. It's typically used to wrap
 * the main content of a Card to make the entire Card clickable.
 *
 * @param props - CardActionArea component props
 * @returns CardActionArea component
 */
export const CardActionArea = React.forwardRef<HTMLButtonElement, CardActionAreaProps>(
  ({ children, disabled = false, sx, ...props }, ref) => {
    return (
      <MuiCardActionArea
        ref={ref}
        disabled={disabled}
        sx={{
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiCardActionArea>
    );
  }
);

CardActionArea.displayName = 'CardActionArea';

export default CardActionArea;
