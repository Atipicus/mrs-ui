/**
 * AccordionSummary Component
 *
 * AccordionSummary component for the MRS Design System.
 * Wraps Material-UI AccordionSummary - provides the header/clickable area for Accordion.
 *
 * @see {@link https://v6.mui.com/material-ui/api/accordion-summary/}
 */

import React from 'react';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import type { AccordionSummaryProps } from './Accordion.types';

/**
 * AccordionSummary component
 *
 * The summary acts as the header for the accordion and controls the expand/collapse behavior.
 * It typically contains a title and an expand icon.
 *
 * @param props - AccordionSummary component props
 * @returns AccordionSummary component
 */
export const AccordionSummary = React.forwardRef<HTMLDivElement, AccordionSummaryProps>(
  ({ children, expandIcon, focusVisibleClassName, sx, ...props }, ref) => {
    return (
      <MuiAccordionSummary
        ref={ref}
        expandIcon={expandIcon}
        focusVisibleClassName={focusVisibleClassName}
        sx={{
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiAccordionSummary>
    );
  }
);

AccordionSummary.displayName = 'AccordionSummary';

export default AccordionSummary;
