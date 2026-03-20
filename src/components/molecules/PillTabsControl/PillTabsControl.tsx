/**
 * PillTabsControl
 * @package @mrs/ui
 *
 * Pill-style tab strip (MUI Tabs) with optional icons, badges, and warning indicator.
 */

import { Tabs, Tab, Box, Badge, Typography } from '@mui/material';
import { PriorityHigh } from '@mui/icons-material';
import { pillTabs, pillTab } from './PillTabsControl.styles';
import type { PillTabsControlProps } from './PillTabsControl.types';

export function PillTabsControl({ value, onChange, tabs }: PillTabsControlProps) {
  return (
    <Box sx={{ width: { xs: '100%', sm: 'fit-content' }, mb: 3 }}>
      <Tabs value={value} onChange={onChange} sx={pillTabs}>
        {tabs.map((tab, idx) => {
          const IconComponent = tab.icon;
          return (
            <Tab
              disabled={tab.disabled}
              key={idx}
              label={
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: typeof tab.badgeCount === 'number' && tab.badgeCount > 0 ? 2 : 0.5,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {IconComponent ? <IconComponent fontSize="small" /> : null}
                    <Typography component="span" fontSize="14px" fontWeight="bold">
                      {tab.label}
                    </Typography>
                  </Box>

                  {typeof tab.badgeCount === 'number' && tab.badgeCount > 0 ? (
                    <Badge
                      color="error"
                      badgeContent={tab.badgeCount}
                      sx={{
                        '& .MuiBadge-badge': {
                          borderRadius: '100%',
                          fontSize: '12px',
                          width: 20,
                          height: 20,
                        },
                      }}
                    />
                  ) : null}

                  {tab.warning ? (
                    <Box
                      sx={{
                        backgroundColor: 'warning.main',
                        borderRadius: '50%',
                        width: 20,
                        height: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <PriorityHigh
                        sx={{
                          color: '#272727',
                          backgroundColor: 'transparent',
                          fontSize: 12,
                        }}
                      />
                    </Box>
                  ) : null}
                </Box>
              }
              icon={undefined}
              sx={pillTab}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}

PillTabsControl.displayName = 'PillTabsControl';

export default PillTabsControl;
