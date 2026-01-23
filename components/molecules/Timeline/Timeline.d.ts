import { default as React } from '../../../../node_modules/react';
import { TimelineProps, TimelineItemProps, TimelineSeparatorProps, TimelineDotProps, TimelineConnectorProps, TimelineContentProps, TimelineOppositeContentProps } from './Timeline.types';
export declare const Timeline: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<TimelineProps, "ref"> & React.RefAttributes<HTMLUListElement>>>;
export declare const TimelineItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<TimelineItemProps, "ref"> & React.RefAttributes<HTMLLIElement>>>;
/**
 * TimelineSeparator component
 *
 * Separator between timeline content, containing the dot and connector.
 *
 * @param props - TimelineSeparator component props
 * @returns TimelineSeparator component
 */
export declare const TimelineSeparator: React.ForwardRefExoticComponent<Omit<TimelineSeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * TimelineDot component
 *
 * The dot indicating an event in the timeline.
 *
 * @param props - TimelineDot component props
 * @returns TimelineDot component
 */
export declare const TimelineDot: React.ForwardRefExoticComponent<Omit<TimelineDotProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
/**
 * TimelineConnector component
 *
 * The line connecting timeline dots.
 *
 * @param props - TimelineConnector component props
 * @returns TimelineConnector component
 */
export declare const TimelineConnector: React.ForwardRefExoticComponent<Omit<TimelineConnectorProps, "ref"> & React.RefAttributes<HTMLSpanElement>>;
/**
 * TimelineContent component
 *
 * The main content area of a timeline item.
 *
 * @param props - TimelineContent component props
 * @returns TimelineContent component
 */
export declare const TimelineContent: React.ForwardRefExoticComponent<Omit<TimelineContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * TimelineOppositeContent component
 *
 * Optional content displayed opposite to the main timeline content.
 *
 * @param props - TimelineOppositeContent component props
 * @returns TimelineOppositeContent component
 */
export declare const TimelineOppositeContent: React.ForwardRefExoticComponent<Omit<TimelineOppositeContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Timeline.d.ts.map