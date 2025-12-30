import figma from "@figma/code-connect";
import { BottomNavigation } from "./BottomNavigation";

/**
 * Code Connect mapping for BottomNavigation component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  BottomNavigation,
  "https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11127-155148",
  {
    props: {
      showLabels: figma.boolean("showLabels"),
    },
    example: (props) => (
      <BottomNavigation
        value={0}
        onChange={() => {}}
        showLabels={props.showLabels}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    ),
  }
);
