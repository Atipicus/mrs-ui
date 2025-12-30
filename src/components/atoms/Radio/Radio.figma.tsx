import figma from "@figma/code-connect";
import { Radio } from "./Radio";

/**
 * Code Connect mapping for Radio component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Radio,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11084-152582",
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
    },
    example: (props) => (
      <Radio
        color={props.color}
        size={props.size}
        checked={props.checked}
        disabled={props.disabled}
      />
    ),
  }
);
