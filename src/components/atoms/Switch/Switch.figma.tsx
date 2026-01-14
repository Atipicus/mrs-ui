import figma from '@figma/code-connect';
import { Switch } from './Switch';

/**
 * Code Connect mapping for Switch component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Switch,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11095-138802',
  {
    props: {
      color: figma.enum('color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
        Default: 'default',
      }),
      size: figma.enum('size', {
        Small: 'small',
        Medium: 'medium',
      }),
      checked: figma.boolean('checked'),
      disabled: figma.boolean('disabled'),
    },
    example: (props) => (
      <Switch
        color={props.color}
        size={props.size}
        checked={props.checked}
        disabled={props.disabled}
      />
    ),
  }
);
