/**
 * CardHeader Component
 *
 * CardHeader component for the MRS Design System.
 * Wraps Material-UI CardHeader - provides a header area for a Card with avatar, title, subheader, and action.
 *
 * @see {@link https://v6.mui.com/material-ui/api/card-header/}
 */

import React from 'react';
import MuiCardHeader from '@mui/material/CardHeader';
import type { CardHeaderProps } from './Card.types';

/**
 * CardHeader component
 *
 * Provides a header area within a Card. Supports an optional avatar,
 * title, subheader, and action elements.
 *
 * @param props - CardHeader component props
 * @returns CardHeader component
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  (
    {
      action,
      avatar,
      component = 'div',
      disableTypography = false,
      subheader,
      subheaderTypographyProps,
      title,
      titleTypographyProps,
      sx,
      ...props
    },
    ref
  ) => {
    return (
      <MuiCardHeader
        ref={ref}
        action={action}
        avatar={avatar}
        component={component}
        disableTypography={disableTypography}
        subheader={subheader}
        subheaderTypographyProps={subheaderTypographyProps}
        title={title}
        titleTypographyProps={titleTypographyProps}
        sx={{
          ...sx,
        }}
        {...props}
      />
    );
  }
);

CardHeader.displayName = 'CardHeader';

export default CardHeader;
