import figma from "@figma/code-connect";
import { Paper } from "./Paper";

/**
 * Code Connect mapping for Paper component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Paper,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11125-154952",
  {
    props: {
      variant: figma.enum("variant", {
        Elevation: "elevation",
        Outlined: "outlined",
      }),
      elevation: figma.enum("elevation", {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "6": 6,
        "8": 8,
        "12": 12,
        "16": 16,
        "24": 24,
      }),
      square: figma.boolean("square"),
    },
    example: (props) => (
      <Paper
        variant={props.variant}
        elevation={props.elevation}
        square={props.square}
      >
        {/* Content */}
      </Paper>
    ),
  }
);
