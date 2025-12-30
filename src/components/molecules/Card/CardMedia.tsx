/**
 * CardMedia Component
 *
 * CardMedia component for the MRS Design System.
 * Wraps Material-UI CardMedia - displays media (images, video, etc.) within a Card.
 *
 * @see {@link https://v6.mui.com/material-ui/api/card-media/}
 */

import React from 'react';
import MuiCardMedia from '@mui/material/CardMedia';
import type { CardMediaProps } from './Card.types';

/**
 * CardMedia component
 *
 * Displays media content within a Card. Can be used for images, videos,
 * or other media types. Supports both background images and direct media elements.
 *
 * @param props - CardMedia component props
 * @returns CardMedia component
 */
export const CardMedia = React.forwardRef<HTMLDivElement, CardMediaProps>(
  ({ component = 'div', image, src, sx, ...props }, ref) => {
    return (
      <MuiCardMedia
        ref={ref}
        component={component}
        image={image}
        src={src}
        sx={{
          ...sx,
        }}
        {...props}
      />
    );
  }
);

CardMedia.displayName = 'CardMedia';

export default CardMedia;
