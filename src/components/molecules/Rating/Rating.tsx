/**
 * Rating Component
 *
 * Rating component for the MRS Design System.
 * Wraps Material-UI Rating with custom theme tokens.
 *
 * @see {@link https://mui.com/material-ui/react-rating/}
 */

import React from 'react';
import MuiRating from '@mui/material/Rating';
import type { RatingProps } from './Rating.types';

/**
 * Rating component
 *
 * Ratings provide insight regarding others' opinions and experiences,
 * and can allow the user to submit a rating of their own.
 *
 * @param props - Rating component props
 * @returns Rating component
 */
export const Rating = React.forwardRef<HTMLSpanElement, RatingProps>(
  (
    {
      size = 'medium',
      max = 5,
      precision = 1,
      readOnly = false,
      disabled = false,
      highlightSelectedOnly = false,
      emptyIcon,
      icon,
      defaultValue,
      value,
      onChange,
      onChangeActive,
      name,
      id,
      sx,
      ...restProps
    },
    ref
  ) => {
    return (
      <MuiRating
        ref={ref}
        size={size}
        max={max}
        precision={precision}
        readOnly={readOnly}
        disabled={disabled}
        highlightSelectedOnly={highlightSelectedOnly}
        emptyIcon={emptyIcon}
        icon={icon}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        onChangeActive={onChangeActive}
        name={name}
        id={id}
        sx={sx}
        {...restProps}
      />
    );
  }
);

Rating.displayName = 'Rating';
