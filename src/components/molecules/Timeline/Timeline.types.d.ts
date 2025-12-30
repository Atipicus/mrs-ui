import { TimelineProps as MuiTimelineProps } from '@mui/lab/Timeline';
import { TimelineItemProps as MuiTimelineItemProps } from '@mui/lab/TimelineItem';
import { TimelineSeparatorProps as MuiTimelineSeparatorProps } from '@mui/lab/TimelineSeparator';
import { TimelineDotProps as MuiTimelineDotProps } from '@mui/lab/TimelineDot';
import { TimelineConnectorProps as MuiTimelineConnectorProps } from '@mui/lab/TimelineConnector';
import { TimelineContentProps as MuiTimelineContentProps } from '@mui/lab/TimelineContent';
import { TimelineOppositeContentProps as MuiTimelineOppositeContentProps } from '@mui/lab/TimelineOppositeContent';
/**
 * Props for the Timeline component
 *
 * @see {@link https://mui.com/material-ui/api/timeline/}
 */
export interface TimelineProps extends MuiTimelineProps {
    /**
     * The position where the timeline's content should appear
     * @default 'left'
     */
    position?: 'left' | 'right' | 'alternate' | 'alternate-reverse';
}
/**
 * Props for the TimelineItem component
 *
 * @see {@link https://mui.com/material-ui/api/timeline-item/}
 */
export interface TimelineItemProps extends MuiTimelineItemProps {
    /**
     * The position where the timeline item's content should appear
     */
    position?: 'left' | 'right';
}
/**
 * Props for the TimelineSeparator component
 *
 * @see {@link https://mui.com/material-ui/api/timeline-separator/}
 */
export interface TimelineSeparatorProps extends MuiTimelineSeparatorProps {
}
/**
 * Props for the TimelineDot component
 *
 * @see {@link https://mui.com/material-ui/api/timeline-dot/}
 */
export interface TimelineDotProps extends MuiTimelineDotProps {
    /**
     * The color of the component
     */
    color?: 'inherit' | 'grey' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    /**
     * The variant to use
     * @default 'filled'
     */
    variant?: 'filled' | 'outlined';
}
/**
 * Props for the TimelineConnector component
 *
 * @see {@link https://mui.com/material-ui/api/timeline-connector/}
 */
export interface TimelineConnectorProps extends MuiTimelineConnectorProps {
}
/**
 * Props for the TimelineContent component
 *
 * @see {@link https://mui.com/material-ui/api/timeline-content/}
 */
export interface TimelineContentProps extends MuiTimelineContentProps {
}
/**
 * Props for the TimelineOppositeContent component
 *
 * @see {@link https://mui.com/material-ui/api/timeline-opposite-content/}
 */
export interface TimelineOppositeContentProps extends MuiTimelineOppositeContentProps {
}
//# sourceMappingURL=Timeline.types.d.ts.map