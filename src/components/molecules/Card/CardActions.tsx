/**
 * CardActions Component
 *
 * CardActions component for the MRS Design System.
 * Wraps Material-UI CardActions - provides an action area for Card buttons/actions.
 *
 * @see {@link https://v6.mui.com/material-ui/api/card-actions/}
 */

import React from 'react';
import MuiCardActions from '@mui/material/CardActions';
import type { CardActionsProps } from './Card.types';

/**
 * CardActions component
 *
 * Provides an area for action buttons or other interactive elements within a Card.
 * Typically placed at the bottom of a Card.
 *
 * @param props - CardActions component props
 * @returns CardActions component
 */
export const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  ({ children, disableSpacing = false, sx, ...props }, ref) => {
    return (
      <MuiCardActions
        ref={ref}
        disableSpacing={disableSpacing}
        sx={{
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiCardActions>
    );
  }
);

CardActions.displayName = 'CardActions';

export default CardActions;
