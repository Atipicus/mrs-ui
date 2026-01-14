import figma from '@figma/code-connect';
import { Typography } from './Typography';

/**
 * Code Connect mapping for Typography component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Typography,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11102-139527',
  {
    props: {
      variant: figma.enum('variant', {
        H1: 'h1',
        H2: 'h2',
        H3: 'h3',
        H4: 'h4',
        H5: 'h5',
        H6: 'h6',
        Subtitle1: 'subtitle1',
        Subtitle2: 'subtitle2',
        Body1: 'body1',
        Body2: 'body2',
        Caption: 'caption',
        Overline: 'overline',
        Button: 'button',
      }),
      color: figma.enum('color', {
        Primary: 'primary',
        Secondary: 'secondary',
        'Text.Primary': 'textPrimary',
        'Text.Secondary': 'textSecondary',
        Error: 'error',
      }),
      align: figma.enum('align', {
        Left: 'left',
        Center: 'center',
        Right: 'right',
        Justify: 'justify',
        Inherit: 'inherit',
      }),
      gutterBottom: figma.boolean('gutterBottom'),
      noWrap: figma.boolean('noWrap'),
      children: figma.string('text'),
    },
    example: (props) => (
      <Typography
        variant={props.variant}
        color={props.color}
        align={props.align}
        gutterBottom={props.gutterBottom}
        noWrap={props.noWrap}
      >
        {props.children}
      </Typography>
    ),
  }
);
