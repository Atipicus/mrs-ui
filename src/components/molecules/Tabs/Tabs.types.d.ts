import { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
import { TabProps as MuiTabProps } from '@mui/material/Tab';
/**
 * Tabs component props
 * Navigation component for organizing content into separate views
 */
export interface TabsProps extends MuiTabsProps {
    /**
     * The value of the currently selected Tab
     */
    value: number | string | false;
    /**
     * Callback fired when the value changes
     */
    onChange?: (event: React.SyntheticEvent, value: number | string) => void;
    /**
     * The content of the component (typically Tab elements)
     */
    children?: React.ReactNode;
    /**
     * The variant of the tabs
     * @default 'standard'
     */
    variant?: 'standard' | 'scrollable' | 'fullWidth';
    /**
     * The indicator color
     * @default 'primary'
     */
    indicatorColor?: 'primary' | 'secondary';
    /**
     * The text color
     * @default 'primary'
     */
    textColor?: 'primary' | 'secondary' | 'inherit';
    /**
     * If true, the tabs are centered
     * @default false
     */
    centered?: boolean;
    /**
     * Determines the alignment of the scroll buttons
     * @default 'auto'
     */
    scrollButtons?: 'auto' | true | false;
    /**
     * If true, allows scrolling the tabs with mouse wheel
     * @default false
     */
    allowScrollButtonsMobile?: boolean;
    /**
     * The component orientation
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Props applied to the TabIndicator element
     */
    TabIndicatorProps?: MuiTabsProps['TabIndicatorProps'];
    /**
     * Props applied to the ScrollButtonComponent element
     */
    ScrollButtonComponent?: MuiTabsProps['ScrollButtonComponent'];
}
/**
 * Tab component props
 * Individual tab within Tabs component
 */
export interface TabProps extends Omit<MuiTabProps, 'onChange'> {
    /**
     * The label content
     */
    label?: React.ReactNode;
    /**
     * The value of the tab
     */
    value?: number | string;
    /**
     * The icon element
     */
    icon?: React.ReactElement | string;
    /**
     * If true, the tab is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * If true, the tab is wrapped
     * @default false
     */
    wrapped?: boolean;
    /**
     * The icon position
     * @default 'top'
     */
    iconPosition?: 'top' | 'bottom' | 'start' | 'end';
}
//# sourceMappingURL=Tabs.types.d.ts.map