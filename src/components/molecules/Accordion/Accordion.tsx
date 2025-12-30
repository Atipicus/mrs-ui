/**
 * Accordion Component
 *
 * Accordion component for the MRS Design System.
 * Wraps Material-UI Accordion with custom theme tokens.
 *
 * Accordions contain creation flows and allow lightweight editing of an element.
 *
 * @figma https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=10025-115758&m=dev
 * @see {@link https://v6.mui.com/material-ui/react-accordion/}
 */

import React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import type { AccordionProps } from './Accordion.types';

/**
 * Accordion component
 *
 * Accordions are commonly used for FAQ sections, settings panels, or anywhere
 * you need to progressively disclose information.
 *
 * @param props - Accordion component props
 * @returns Accordion component
 */
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      children,
      defaultExpanded = false,
      disabled = false,
      disableGutters = false,
      expanded,
      onChange,
      square = false,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <MuiAccordion
        ref={ref}
        defaultExpanded={defaultExpanded}
        disabled={disabled}
        disableGutters={disableGutters}
        expanded={expanded}
        onChange={onChange}
        square={square}
        sx={{
          // Theme applies default styling
          // Custom overrides can be added here or via sx prop
          ...sx,
        }}
        {...props}
      >
        {children}
      </MuiAccordion>
    );
  }
);

Accordion.displayName = 'Accordion';

export default Accordion;
