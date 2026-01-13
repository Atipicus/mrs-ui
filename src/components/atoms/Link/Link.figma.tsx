import figma from '@figma/code-connect';
import { Link } from './Link';

/**
 * Code Connect mapping for Link component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Link,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11137-155602',
  {
    props: {
      color: figma.enum('color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Inherit: 'inherit',
      }),
      underline: figma.enum('underline', {
        Always: 'always',
        Hover: 'hover',
        None: 'none',
      }),
      variant: figma.enum('variant', {
        Body1: 'body1',
        Body2: 'body2',
        Caption: 'caption',
        Subtitle1: 'subtitle1',
        Subtitle2: 'subtitle2',
        Inherit: 'inherit',
      }),
      children: figma.string('text'),
    },
    example: (props) => (
      <Link color={props.color} underline={props.underline} variant={props.variant} href="#">
        {props.children}
      </Link>
    ),
  }
);
