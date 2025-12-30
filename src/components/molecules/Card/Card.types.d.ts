import { PaperProps } from '@mui/material/Paper';
import { CardProps as MuiCardProps } from '@mui/material/Card';
import { CardActionAreaProps as MuiCardActionAreaProps } from '@mui/material/CardActionArea';
import { CardActionsProps as MuiCardActionsProps } from '@mui/material/CardActions';
import { CardContentProps as MuiCardContentProps } from '@mui/material/CardContent';
import { CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';
import { CardMediaProps as MuiCardMediaProps } from '@mui/material/CardMedia';
/**
 * Card Props
 * Extends Material-UI Card props
 */
export interface CardProps extends Omit<MuiCardProps, 'variant'> {
    /**
     * The variant to use for the Paper component
     * @default 'elevation'
     */
    variant?: 'elevation' | 'outlined';
    /**
     * Shadow depth for elevation variant (0-24)
     * According to Figma specs, default is 1
     * @default 1
     */
    elevation?: PaperProps['elevation'];
    /**
     * If true, rounded corners are disabled
     * According to Figma specs, default is false (uses borderRadius token)
     * @default false
     */
    square?: boolean;
    /**
     * If true, the card will take up the full width of its container
     * @default false
     */
    raised?: boolean;
}
/**
 * CardActionArea Props
 * Extends Material-UI CardActionArea props
 */
export interface CardActionAreaProps extends MuiCardActionAreaProps {
    /**
     * If true, the component is disabled
     * @default false
     */
    disabled?: boolean;
}
/**
 * CardActions Props
 * Extends Material-UI CardActions props
 */
export interface CardActionsProps extends MuiCardActionsProps {
    /**
     * If true, the actions will not have additional margin
     * @default false
     */
    disableSpacing?: boolean;
}
/**
 * CardContent Props
 * Extends Material-UI CardContent props
 */
export interface CardContentProps extends MuiCardContentProps {
    /**
     * The component used for the root node
     */
    component?: React.ElementType;
}
/**
 * CardHeader Props
 * Extends Material-UI CardHeader props
 */
export interface CardHeaderProps extends MuiCardHeaderProps {
    /**
     * The action to display in the card header
     */
    action?: React.ReactNode;
    /**
     * The Avatar element to display
     */
    avatar?: React.ReactNode;
    /**
     * The component used for the root node
     */
    component?: React.ElementType;
    /**
     * If true, the children won't be wrapped by a Typography component.
     * This can be useful to render an alternative Typography variant by wrapping
     * the title text, and optional subheader text with the Typography component.
     * @default false
     */
    disableTypography?: boolean;
    /**
     * The content of the component
     */
    subheader?: React.ReactNode;
    /**
     * These props will be forwarded to the subheader
     * (as long as disableTypography is not true).
     */
    subheaderTypographyProps?: object;
    /**
     * The content of the component
     */
    title?: React.ReactNode;
    /**
     * These props will be forwarded to the title
     * (as long as disableTypography is not true).
     */
    titleTypographyProps?: object;
}
/**
 * CardMedia Props
 * Extends Material-UI CardMedia props
 */
export interface CardMediaProps extends MuiCardMediaProps {
    /**
     * The component used for the root node
     * Either a string to use a HTML element or a component
     */
    component?: React.ElementType;
    /**
     * Image to be displayed as a background image.
     * Either image or src (but not both) can be used.
     * Note: caller is responsible for escaping the value.
     */
    image?: string;
    /**
     * An alias for image property.
     * Available only with media components.
     * Media components: video, audio, picture, iframe, img.
     */
    src?: string;
}
//# sourceMappingURL=Card.types.d.ts.map