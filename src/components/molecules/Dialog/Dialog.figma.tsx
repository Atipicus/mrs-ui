import figma from "@figma/code-connect";
import { Dialog } from "./Dialog";

/**
 * Code Connect mapping for Dialog component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Dialog,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11112-140632",
  {
    props: {
      maxWidth: figma.enum("maxWidth", {
        Xs: "xs",
        Sm: "sm",
        Md: "md",
        Lg: "lg",
        Xl: "xl",
        False: false,
      }),
      fullWidth: figma.boolean("fullWidth"),
      fullScreen: figma.boolean("fullScreen"),
      scroll: figma.enum("scroll", {
        Paper: "paper",
        Body: "body",
      }),
    },
    example: (props) => (
      <Dialog
        open={true}
        onClose={() => {}}
        maxWidth={props.maxWidth}
        fullWidth={props.fullWidth}
        fullScreen={props.fullScreen}
        scroll={props.scroll}
      >
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          {/* Content */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {}}>Cancel</Button>
          <Button onClick={() => {}}>Confirm</Button>
        </DialogActions>
      </Dialog>
    ),
  }
);
