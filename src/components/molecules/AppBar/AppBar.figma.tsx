import figma from '@figma/code-connect';
import { AppBar } from './AppBar';

/**
 * Code Connect mapping for AppBar component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  AppBar,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11125-153997',
  {
    props: {
      color: figma.enum('color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Default: 'default',
        Transparent: 'transparent',
        Inherit: 'inherit',
      }),
      position: figma.enum('position', {
        Fixed: 'fixed',
        Absolute: 'absolute',
        Sticky: 'sticky',
        Static: 'static',
        Relative: 'relative',
      }),
      elevation: figma.enum('elevation', {
        '0': 0,
        '4': 4,
        '8': 8,
      }),
    },
    example: (props) => (
      <AppBar color={props.color} position={props.position} elevation={props.elevation}>
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            App Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    ),
  }
);
