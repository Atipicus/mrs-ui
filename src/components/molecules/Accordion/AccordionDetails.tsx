/**
 * AccordionDetails Component
 *
 * AccordionDetails component for the MRS Design System.
 * Wraps Material-UI AccordionDetails - provides the content area that expands/collapses.
 *
 * @see {@link https://v6.mui.com/material-ui/api/accordion-details/}
 */

import React from 'react';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import type { AccordionDetailsProps } from './Accordion.types';

/**
 * AccordionDetails component
 *
 * Contains the content that is revealed when the accordion is expanded.
 * This component is wrapped in a Collapse transition.
 *
 * @param props - AccordionDetails component props
 * @returns AccordionDetails component
 */
export const AccordionDetails = React.forwardRef<HTMLDivElement, AccordionDetailsProps>(
  ({ children, sx, ...props }, ref) => {
    return (
      <MuiAccordionDetails
        ref={ref}
        sx={{
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiAccordionDetails>
    );
  }
);

AccordionDetails.displayName = 'AccordionDetails';

export default AccordionDetails;
