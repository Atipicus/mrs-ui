import figma from "@figma/code-connect";
import { SpeedDial } from "./SpeedDial";

/**
 * Code Connect mapping for SpeedDial component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  SpeedDial,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11137-155769",
  {
    props: {
      direction: figma.enum("direction", {
        Up: "up",
        Down: "down",
        Left: "left",
        Right: "right",
      }),
      hidden: figma.boolean("hidden"),
    },
    example: (props) => (
      <SpeedDial
        ariaLabel="SpeedDial"
        icon={<SpeedDialIcon />}
        direction={props.direction}
        hidden={props.hidden}
      >
        <SpeedDialAction
          icon={<FileCopyIcon />}
          tooltipTitle="Copy"
          onClick={() => {}}
        />
        <SpeedDialAction
          icon={<SaveIcon />}
          tooltipTitle="Save"
          onClick={() => {}}
        />
        <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle="Print"
          onClick={() => {}}
        />
      </SpeedDial>
    ),
  }
);
