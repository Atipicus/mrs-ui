import figma from "@figma/code-connect";
import { Pagination } from "./Pagination";

/**
 * Code Connect mapping for Pagination component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Pagination,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11137-155959",
  {
    props: {
      variant: figma.enum("variant", {
        Text: "text",
        Outlined: "outlined",
      }),
      shape: figma.enum("shape", {
        Circular: "circular",
        Rounded: "rounded",
      }),
      color: figma.enum("color", {
        Primary: "primary",
        Secondary: "secondary",
        Standard: "standard",
      }),
      size: figma.enum("size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      disabled: figma.boolean("disabled"),
      showFirstButton: figma.boolean("showFirstButton"),
      showLastButton: figma.boolean("showLastButton"),
    },
    example: (props) => (
      <Pagination
        count={10}
        variant={props.variant}
        shape={props.shape}
        color={props.color}
        size={props.size}
        disabled={props.disabled}
        showFirstButton={props.showFirstButton}
        showLastButton={props.showLastButton}
      />
    ),
  }
);
