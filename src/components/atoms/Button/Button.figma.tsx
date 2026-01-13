import figma from '@figma/code-connect';
import { Button } from './Button';

/**
 * Code Connect mapping for Button component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Button,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11096-136450',
  {
    props: {
      variant: figma.enum('variant', {
        Contained: 'contained',
        Outlined: 'outlined',
        Text: 'text',
      }),
      color: figma.enum('color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
        Inherit: 'inherit',
      }),
      size: figma.enum('size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      }),
      disabled: figma.enum('state', {
        Disabled: true,
        Enabled: false,
      }),
      startIcon: figma.boolean('startIcon'),
      endIcon: figma.boolean('endIcon'),
      children: figma.string('label'),
    },
    example: (props) => (
      <Button
        variant={props.variant}
        color={props.color}
        size={props.size}
        disabled={props.disabled}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
      >
        {props.children}
      </Button>
    ),
  }
);
