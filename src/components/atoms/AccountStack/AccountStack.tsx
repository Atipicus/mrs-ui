/**
 * AccountStack Component
 * Displays user account information with avatar, badge, and user details
 * Designed for use in AppBar/Toolbar components
 */

import React from 'react';
import { Box } from '../Box';
import { Stack } from '../Stack';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Typography } from '../Typography';
import type { AccountStackProps } from './AccountStack.types';

export const AccountStack = React.forwardRef<HTMLDivElement, AccountStackProps>(
  (
    {
      user = true,
      userAccountInfo = true,
      notifications = true,
      userName = 'John Doe',
      userEmail = 'john.doe@example.com',
      avatarSrc,
      avatarAlt = 'User avatar',
      notificationCount,
      avatarPosition = 'left',
      sx,
      ...props
    },
    ref
  ) => {
    const avatarElement = user && (
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant={notifications && !notificationCount ? 'dot' : 'standard'}
        invisible={!notifications}
        color="error"
        badgeContent={notificationCount}
      >
        <Avatar src={avatarSrc} alt={avatarAlt} sx={{ width: 40, height: 40 }} />
      </Badge>
    );

    const userInfoElement = userAccountInfo && (
      <Stack direction="column" spacing={0} sx={{ alignItems: 'flex-start' }}>
        <Typography variant="subtitle2" sx={{ lineHeight: 1.2, fontWeight: 600 }}>
          {userName}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            lineHeight: 1.2,
            fontWeight: 400,
            color: 'text.secondary',
            fontSize: '0.75rem',
          }}
        >
          {userEmail}
        </Typography>
      </Stack>
    );

    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: 40, // spacing(5)
          gap: 2, // spacing(2) = 16px
          ...sx,
        }}
        {...props}
      >
        {avatarPosition === 'left' ? (
          <>
            {avatarElement}
            {userInfoElement}
          </>
        ) : (
          <>
            {userInfoElement}
            {avatarElement}
          </>
        )}
      </Box>
    );
  }
);

AccountStack.displayName = 'AccountStack';

export type { AccountStackProps };
export default AccountStack;
