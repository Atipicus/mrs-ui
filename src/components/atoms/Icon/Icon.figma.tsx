import figma from '@figma/code-connect';
import { Icon } from './Icon';

/**
 * Code Connect mapping for Icon component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Icon,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11102-137978',
  {
    props: {
      color: figma.enum('color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
        Action: 'action',
        Disabled: 'disabled',
        Inherit: 'inherit',
      }),
      fontSize: figma.enum('fontSize', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
        Inherit: 'inherit',
      }),
    },
    example: (props) => (
      <Icon color={props.color} fontSize={props.fontSize}>
        {/* icon_name */}
      </Icon>
    ),
  }
);
