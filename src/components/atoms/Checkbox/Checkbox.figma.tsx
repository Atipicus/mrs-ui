import figma from "@figma/code-connect";
import { Checkbox } from "./Checkbox";

/**
 * Code Connect mapping for Checkbox component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Checkbox,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11096-136369",
  {
    props: {
      color: figma.enum("color", {
        Primary: "primary",
        Secondary: "secondary",
        Error: "error",
        Warning: "warning",
        Info: "info",
        Success: "success",
        Default: "default",
      }),
      size: figma.enum("size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      checked: figma.boolean("checked"),
      disabled: figma.boolean("disabled"),
      indeterminate: figma.boolean("indeterminate"),
    },
    example: (props) => (
      <Checkbox
        color={props.color}
        size={props.size}
        checked={props.checked}
        disabled={props.disabled}
        indeterminate={props.indeterminate}
      />
    ),
  }
);
