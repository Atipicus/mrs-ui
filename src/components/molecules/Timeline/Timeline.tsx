/**
 * Timeline Component
 *
 * Timeline component for the MRS Design System.
 * Wraps Material-UI Lab Timeline with custom theme tokens.
 *
 * @see {@link https://mui.com/material-ui/react-timeline/}
 */

import React from 'react';
import MuiTimeline from '@mui/lab/Timeline';
import MuiTimelineItem from '@mui/lab/TimelineItem';
import MuiTimelineSeparator from '@mui/lab/TimelineSeparator';
import MuiTimelineDot from '@mui/lab/TimelineDot';
import MuiTimelineConnector from '@mui/lab/TimelineConnector';
import MuiTimelineContent from '@mui/lab/TimelineContent';
import MuiTimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import type {
  TimelineProps,
  TimelineItemProps,
  TimelineSeparatorProps,
  TimelineDotProps,
  TimelineConnectorProps,
  TimelineContentProps,
  TimelineOppositeContentProps,
} from './Timeline.types';

/**
 * Timeline component
 *
 * The Timeline displays a list of events in chronological order.
 * 
 * Memoized for performance with long timelines.
 * Re-renders only when props change.
 *
 * @param props - Timeline component props
 * @returns Timeline component
 */
const TimelineBase = React.forwardRef<HTMLUListElement, TimelineProps>(
  ({ position = 'left', ...props }, ref) => {
    return <MuiTimeline ref={ref} position={position} {...props} />;
  }
);

export const Timeline = React.memo(TimelineBase);
Timeline.displayName = 'Timeline';

/**
 * TimelineItem component
 *
 * A single item in the timeline.
 * 
 * Memoized to prevent unnecessary re-renders when timeline has many items.
 *
 * @param props - TimelineItem component props
 * @returns TimelineItem component
 */
const TimelineItemBase = React.forwardRef<HTMLLIElement, TimelineItemProps>((props, ref) => {
  return <MuiTimelineItem ref={ref} {...props} />;
});

export const TimelineItem = React.memo(TimelineItemBase);
TimelineItem.displayName = 'TimelineItem';

/**
 * TimelineSeparator component
 *
 * Separator between timeline content, containing the dot and connector.
 *
 * @param props - TimelineSeparator component props
 * @returns TimelineSeparator component
 */
export const TimelineSeparator = React.forwardRef<HTMLDivElement, TimelineSeparatorProps>(
  (props, ref) => {
    return <MuiTimelineSeparator ref={ref} {...props} />;
  }
);

TimelineSeparator.displayName = 'TimelineSeparator';

/**
 * TimelineDot component
 *
 * The dot indicating an event in the timeline.
 *
 * @param props - TimelineDot component props
 * @returns TimelineDot component
 */
export const TimelineDot = React.forwardRef<HTMLSpanElement, TimelineDotProps>(
  ({ variant = 'filled', color = 'primary', ...props }, ref) => {
    return <MuiTimelineDot ref={ref} variant={variant} color={color} {...props} />;
  }
);

TimelineDot.displayName = 'TimelineDot';

/**
 * TimelineConnector component
 *
 * The line connecting timeline dots.
 *
 * @param props - TimelineConnector component props
 * @returns TimelineConnector component
 */
export const TimelineConnector = React.forwardRef<HTMLSpanElement, TimelineConnectorProps>(
  (props, ref) => {
    return <MuiTimelineConnector ref={ref} {...props} />;
  }
);

TimelineConnector.displayName = 'TimelineConnector';

/**
 * TimelineContent component
 *
 * The main content area of a timeline item.
 *
 * @param props - TimelineContent component props
 * @returns TimelineContent component
 */
export const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>(
  (props, ref) => {
    return <MuiTimelineContent ref={ref} {...props} />;
  }
);

TimelineContent.displayName = 'TimelineContent';

/**
 * TimelineOppositeContent component
 *
 * Optional content displayed opposite to the main timeline content.
 *
 * @param props - TimelineOppositeContent component props
 * @returns TimelineOppositeContent component
 */
export const TimelineOppositeContent = React.forwardRef<
  HTMLDivElement,
  TimelineOppositeContentProps
>((props, ref) => {
  return <MuiTimelineOppositeContent ref={ref} {...props} />;
});

TimelineOppositeContent.displayName = 'TimelineOppositeContent';
