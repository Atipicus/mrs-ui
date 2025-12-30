import figma from "@figma/code-connect";
import { Divider } from "./Divider";

/**
 * Code Connect mapping for Divider component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Divider,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11102-137976",
  {
    props: {
      orientation: figma.enum("orientation", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
      variant: figma.enum("variant", {
        FullWidth: "fullWidth",
        Inset: "inset",
        Middle: "middle",
      }),
      light: figma.boolean("light"),
      flexItem: figma.boolean("flexItem"),
    },
    example: (props) => (
      <Divider
        orientation={props.orientation}
        variant={props.variant}
        light={props.light}
        flexItem={props.flexItem}
      />
    ),
  }
);
