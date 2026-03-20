/**
 * PillTabsControl types
 * @package @mrs/ui
 */

import type { SyntheticEvent } from 'react';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { SvgIconTypeMap } from '@mui/material/SvgIcon';

export interface PillTabItem {
  label: string;
  icon?: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
  disabled?: boolean;
  badgeCount?: number;
  warning?: boolean;
}

export interface PillTabsControlProps {
  value: number;
  onChange: (event: SyntheticEvent, newValue: number) => void;
  tabs: PillTabItem[];
}
