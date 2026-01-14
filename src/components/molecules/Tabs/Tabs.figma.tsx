import figma from '@figma/code-connect';
import { Tabs } from './Tabs';

/**
 * Code Connect mapping for Tabs component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Tabs,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11137-156191',
  {
    props: {
      orientation: figma.enum('orientation', {
        Horizontal: 'horizontal',
        Vertical: 'vertical',
      }),
      variant: figma.enum('variant', {
        Standard: 'standard',
        Scrollable: 'scrollable',
        FullWidth: 'fullWidth',
      }),
      textColor: figma.enum('textColor', {
        Primary: 'primary',
        Secondary: 'secondary',
        Inherit: 'inherit',
      }),
      indicatorColor: figma.enum('indicatorColor', {
        Primary: 'primary',
        Secondary: 'secondary',
      }),
      centered: figma.boolean('centered'),
    },
    example: (props) => (
      <Tabs
        orientation={props.orientation}
        variant={props.variant}
        textColor={props.textColor}
        indicatorColor={props.indicatorColor}
        centered={props.centered}
        value={0}
        onChange={() => {}}
      >
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
    ),
  }
);
