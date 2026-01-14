import figma from '@figma/code-connect';
import { Menu } from './Menu';

/**
 * Code Connect mapping for Menu component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Menu,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11137-155711',
  {
    props: {
      variant: figma.enum('variant', {
        Menu: 'menu',
        SelectedMenu: 'selectedMenu',
      }),
      dense: figma.boolean('dense'),
    },
    example: (props) => (
      <Menu
        open={true}
        onClose={() => {}}
        anchorEl={null}
        variant={props.variant}
        dense={props.dense}
      >
        <MenuItem onClick={() => {}}>Option 1</MenuItem>
        <MenuItem onClick={() => {}}>Option 2</MenuItem>
        <MenuItem onClick={() => {}}>Option 3</MenuItem>
      </Menu>
    ),
  }
);
