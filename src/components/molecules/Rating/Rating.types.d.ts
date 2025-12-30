import { RatingProps as MuiRatingProps } from '@mui/material/Rating';
/**
 * Props for the Rating component
 *
 * @see {@link https://mui.com/material-ui/api/rating/}
 */
export interface RatingProps extends Omit<MuiRatingProps, 'size'> {
    /**
     * The size of the rating component
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * The number of rating items
     * @default 5
     */
    max?: number;
    /**
     * The precision of the rating value (e.g., 0.5 for half ratings)
     * @default 1
     */
    precision?: number;
    /**
     * If true, the rating is read-only
     * @default false
     */
    readOnly?: boolean;
    /**
     * If true, the rating is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * The icon to display when empty
     */
    emptyIcon?: React.ReactNode;
    /**
     * The icon to display
     */
    icon?: React.ReactNode;
    /**
     * The default value. Use when the component is not controlled
     */
    defaultValue?: number;
    /**
     * The rating value
     */
    value?: number | null;
    /**
     * Callback fired when the value changes
     */
    onChange?: (event: React.SyntheticEvent, value: number | null) => void;
    /**
     * Callback function that is fired when the hover state changes
     */
    onChangeActive?: (event: React.SyntheticEvent, value: number) => void;
    /**
     * If true, the component is rendered with a highlight color
     * @default false
     */
    highlightSelectedOnly?: boolean;
    /**
     * The name attribute of the radio inputs
     */
    name?: string;
    /**
     * The id of the input element
     */
    id?: string;
}
//# sourceMappingURL=Rating.types.d.ts.map