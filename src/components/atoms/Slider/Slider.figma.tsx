import figma from '@figma/code-connect';
import { Slider } from './Slider';

/**
 * Code Connect mapping for Slider component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Slider,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11095-138546',
  {
    props: {
      color: figma.enum('color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
      }),
      size: figma.enum('size', {
        Small: 'small',
        Medium: 'medium',
      }),
      disabled: figma.boolean('disabled'),
      marks: figma.boolean('marks'),
      valueLabelDisplay: figma.enum('valueLabelDisplay', {
        On: 'on',
        Auto: 'auto',
        Off: 'off',
      }),
      orientation: figma.enum('orientation', {
        Horizontal: 'horizontal',
        Vertical: 'vertical',
      }),
    },
    example: (props) => (
      <Slider
        color={props.color}
        size={props.size}
        disabled={props.disabled}
        marks={props.marks}
        valueLabelDisplay={props.valueLabelDisplay}
        orientation={props.orientation}
      />
    ),
  }
);
