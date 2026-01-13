/**
 * Accordion Component Type Definitions
 *
 * Type definitions for Accordion and all sub-components based on Material-UI Accordion API v6
 *
 * @see https://v6.mui.com/material-ui/api/accordion/
 */

import type { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import type { AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material/AccordionSummary';
import type { AccordionDetailsProps as MuiAccordionDetailsProps } from '@mui/material/AccordionDetails';
import type { AccordionActionsProps as MuiAccordionActionsProps } from '@mui/material/AccordionActions';

/**
 * Accordion Props
 * Extends Material-UI Accordion props
 */
export interface AccordionProps extends Omit<
  MuiAccordionProps,
  'TransitionComponent' | 'TransitionProps' | 'children'
> {
  /**
   * The content of the accordion.
   * Required - must include AccordionSummary and typically AccordionDetails.
   */
  children: NonNullable<React.ReactNode>;

  /**
   * If true, expands the accordion by default.
   * @default false
   */
  defaultExpanded?: boolean;

  /**
   * If true, the component is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, removes the margin between the top and bottom of the expanded accordion.
   * @default false
   */
  disableGutters?: boolean;

  /**
   * If true, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded?: boolean;

  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {boolean} expanded The expanded state of the accordion.
   */
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;

  /**
   * If true, rounded corners are disabled.
   * @default false
   */
  square?: boolean;
}

/**
 * AccordionSummary Props
 * Extends Material-UI AccordionSummary props
 */
export interface AccordionSummaryProps extends MuiAccordionSummaryProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;

  /**
   * The icon to display as the expand indicator.
   */
  expandIcon?: React.ReactNode;

  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the CSS :focus-visible selector.
   */
  focusVisibleClassName?: string;
}

/**
 * AccordionDetails Props
 * Extends Material-UI AccordionDetails props
 */
export interface AccordionDetailsProps extends MuiAccordionDetailsProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
}

/**
 * AccordionActions Props
 * Extends Material-UI AccordionActions props
 */
export interface AccordionActionsProps extends MuiAccordionActionsProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;

  /**
   * If true, the actions do not have additional margin.
   * @default false
   */
  disableSpacing?: boolean;
}
