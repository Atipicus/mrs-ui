import figma from '@figma/code-connect';
import { Select } from './Select';

/**
 * Code Connect mapping for Select component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Select,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11095-137640',
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
      disabled: figma.boolean('disabled'),
      error: figma.boolean('error'),
      required: figma.boolean('required'),
      fullWidth: figma.boolean('fullWidth'),
      multiple: figma.boolean('multiple'),
      label: figma.string('label'),
    },
    example: (props) => (
      <Select
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
        error={props.error}
        required={props.required}
        fullWidth={props.fullWidth}
        multiple={props.multiple}
        label={props.label}
      >
        {/* MenuItem options */}
      </Select>
    ),
  }
);
