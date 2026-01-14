import figma from '@figma/code-connect';
import { TextField } from './TextField';

/**
 * Code Connect mapping for TextField component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  TextField,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11102-136338',
  {
    props: {
      variant: figma.enum('variant', {
        Outlined: 'outlined',
        Filled: 'filled',
        Standard: 'standard',
      }),
      size: figma.enum('size', {
        Small: 'small',
        Medium: 'medium',
      }),
      color: figma.enum('color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
      }),
      disabled: figma.boolean('disabled'),
      error: figma.boolean('error'),
      required: figma.boolean('required'),
      multiline: figma.boolean('multiline'),
      fullWidth: figma.boolean('fullWidth'),
      label: figma.string('label'),
      placeholder: figma.string('placeholder'),
      helperText: figma.string('helperText'),
    },
    example: (props) => (
      <TextField
        variant={props.variant}
        size={props.size}
        color={props.color}
        disabled={props.disabled}
        error={props.error}
        required={props.required}
        multiline={props.multiline}
        fullWidth={props.fullWidth}
        label={props.label}
        placeholder={props.placeholder}
        helperText={props.helperText}
      />
    ),
  }
);
