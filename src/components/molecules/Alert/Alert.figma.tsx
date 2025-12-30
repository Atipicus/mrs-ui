import figma from "@figma/code-connect";
import { Alert } from "./Alert";

/**
 * Code Connect mapping for Alert component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Alert,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11112-140597",
  {
    props: {
      severity: figma.enum("severity", {
        Error: "error",
        Warning: "warning",
        Info: "info",
        Success: "success",
      }),
      variant: figma.enum("variant", {
        Standard: "standard",
        Filled: "filled",
        Outlined: "outlined",
      }),
      icon: figma.boolean("icon"),
      action: figma.boolean("action"),
      onClose: figma.boolean("closable"),
      children: figma.string("description"),
    },
    example: (props) => (
      <Alert
        severity={props.severity}
        variant={props.variant}
        icon={props.icon}
        action={props.action}
        onClose={props.onClose ? () => {} : undefined}
      >
        {props.children}
      </Alert>
    ),
  }
);
