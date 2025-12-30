import figma from "@figma/code-connect";
import { Drawer } from "./Drawer";

/**
 * Code Connect mapping for Drawer component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Drawer,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11127-155193",
  {
    props: {
      anchor: figma.enum("anchor", {
        Left: "left",
        Right: "right",
        Top: "top",
        Bottom: "bottom",
      }),
      variant: figma.enum("variant", {
        Permanent: "permanent",
        Persistent: "persistent",
        Temporary: "temporary",
      }),
      elevation: figma.enum("elevation", {
        "0": 0,
        "8": 8,
        "16": 16,
      }),
    },
    example: (props) => (
      <Drawer
        open={true}
        onClose={() => {}}
        anchor={props.anchor}
        variant={props.variant}
        elevation={props.elevation}
      >
        <List>
          <ListItem button>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItem>
        </List>
      </Drawer>
    ),
  }
);
