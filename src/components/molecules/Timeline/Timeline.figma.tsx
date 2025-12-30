import figma from "@figma/code-connect";
import { Timeline } from "./Timeline";

/**
 * Code Connect mapping for Timeline component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Timeline,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11145-197766",
  {
    props: {
      position: figma.enum("position", {
        Left: "left",
        Right: "right",
        Alternate: "alternate",
        "Alternate-Reverse": "alternate-reverse",
      }),
    },
    example: (props) => (
      <Timeline position={props.position}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Event 1</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Event 2</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
          </TimelineSeparator>
          <TimelineContent>Event 3</TimelineContent>
        </TimelineItem>
      </Timeline>
    ),
  }
);
