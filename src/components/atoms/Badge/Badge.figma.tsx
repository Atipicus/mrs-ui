import figma from "@figma/code-connect";
import { Badge } from "./Badge";

/**
 * Code Connect mapping for Badge component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Badge,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11102-137458",
  {
    props: {
      variant: figma.enum("variant", {
        Standard: "standard",
        Dot: "dot",
      }),
      color: figma.enum("color", {
        Primary: "primary",
        Secondary: "secondary",
        Error: "error",
        Warning: "warning",
        Info: "info",
        Success: "success",
      }),
      badgeContent: figma.string("badgeContent"),
      invisible: figma.boolean("invisible"),
      max: figma.enum("max", {
        "99": 99,
        "999": 999,
      }),
    },
    example: (props) => (
      <Badge
        variant={props.variant}
        color={props.color}
        badgeContent={props.badgeContent}
        invisible={props.invisible}
        max={props.max}
      >
        {/* Children content */}
      </Badge>
    ),
  }
);
