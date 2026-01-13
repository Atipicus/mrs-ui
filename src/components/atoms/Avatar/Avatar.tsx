/**
 * Avatar Component
 *
 * Avatar component for the MRS Design System.
 * Wraps Material-UI Avatar with custom theme tokens and sizing.
 *
 * @figma https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0?node-id=6587:47403
 * @see {@link https://mui.com/material-ui/react-avatar/}
 */

import React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import type { AvatarProps } from './Avatar.types';
import * as tokens from '../../../tokens/generated/ts/tokens';

/**
 * Avatar component
 *
 * Avatars are found throughout material design with uses in everything from tables to dialog menus.
 *
 * @param props - Avatar component props
 * @returns Avatar component
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ children, size = 40, variant = 'circular', sx, ...props }, ref) => {
    const theme = useTheme();

    // Map size to predefined token sizes
    const getSizeToken = (): string => {
      if (size === 24) return tokens.ComponentAvatarSmall;
      if (size === 40) return tokens.ComponentAvatarMedium;
      // Default for sizes not in predefined tokens
      return `${size}px`;
    };

    // Calculate font size based on avatar size
    const getFontSize = (): string => {
      if (size === 18) return tokens.PrimitivesTypographyFontSizeXs;
      if (size === 24 || size === 32) return tokens.PrimitivesTypographyFontSizeSm;
      return tokens.PrimitivesTypographyFontSizeLg;
    };

    const avatarSize = getSizeToken();

    return (
      <MuiAvatar
        ref={ref}
        variant={variant}
        {...props}
        sx={{
          width: avatarSize,
          height: avatarSize,
          fontSize: getFontSize(),
          fontFamily: theme.typography.fontFamily,
          fontWeight: theme.typography.fontWeightRegular,
          borderRadius: variant === 'circular' ? tokens.ComponentAvatarBorderRadius : tokens.PrimitivesRadiusSm,
          ...sx,
        }}
      >
        {children}
      </MuiAvatar>
    );
  }
);

Avatar.displayName = 'Avatar';
