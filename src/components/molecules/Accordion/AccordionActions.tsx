/**
 * AccordionActions Component
 *
 * AccordionActions component for the MRS Design System.
 * Wraps Material-UI AccordionActions - provides an action area for accordion buttons.
 *
 * @see {@link https://v6.mui.com/material-ui/api/accordion-actions/}
 */

import React from 'react';
import MuiAccordionActions from '@mui/material/AccordionActions';
import type { AccordionActionsProps } from './Accordion.types';

/**
 * AccordionActions component
 *
 * Provides an area for action buttons within an accordion.
 * Typically placed at the bottom of AccordionDetails.
 *
 * @param props - AccordionActions component props
 * @returns AccordionActions component
 */
export const AccordionActions = React.forwardRef<HTMLDivElement, AccordionActionsProps>(
  ({ children, disableSpacing = false, sx, ...props }, ref) => {
    return (
      <MuiAccordionActions
        ref={ref}
        disableSpacing={disableSpacing}
        sx={{
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiAccordionActions>
    );
  }
);

AccordionActions.displayName = 'AccordionActions';

export default AccordionActions;
