/**
 * Tabs Component
 * @package @mrs/ui
 *
 * Navigation component that organizes content into separate views.
 * Only one view is visible at a time, with tabs allowing users to switch between them.
 *
 * @example
 * ```tsx
 * const [value, setValue] = useState(0);
 *
 * <Tabs value={value} onChange={(e, newValue) => setValue(newValue)}>
 *   <Tab label="Tab 1" />
 *   <Tab label="Tab 2" />
 *   <Tab label="Tab 3" />
 * </Tabs>
 * ```
 */

import React from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import type { TabsProps, TabProps } from './Tabs.types';

/**
 * Tabs component for navigation between different views
 */
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      value,
      onChange,
      children,
      variant = 'standard',
      indicatorColor = 'primary',
      textColor = 'primary',
      centered = false,
      scrollButtons = 'auto',
      allowScrollButtonsMobile = false,
      orientation = 'horizontal',
      TabIndicatorProps,
      ScrollButtonComponent,
      ...props
    },
    ref
  ) => {
    return (
      <MuiTabs
        ref={ref}
        value={value}
        onChange={onChange}
        variant={variant}
        indicatorColor={indicatorColor}
        textColor={textColor}
        centered={centered}
        scrollButtons={scrollButtons}
        allowScrollButtonsMobile={allowScrollButtonsMobile}
        orientation={orientation}
        TabIndicatorProps={TabIndicatorProps}
        ScrollButtonComponent={ScrollButtonComponent}
        {...props}
      >
        {children}
      </MuiTabs>
    );
  }
);

Tabs.displayName = 'Tabs';

/**
 * Tab component for individual tab item
 */
export const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  (
    {
      label,
      value,
      icon,
      disabled = false,
      wrapped = false,
      iconPosition = 'top',
      ...props
    },
    ref
  ) => {
    return (
      <MuiTab
        ref={ref}
        label={label}
        value={value}
        icon={icon}
        disabled={disabled}
        wrapped={wrapped}
        iconPosition={iconPosition}
        {...props}
      />
    );
  }
);

Tab.displayName = 'Tab';

export default Tabs;
