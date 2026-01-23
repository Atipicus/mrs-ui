import { ToolbarProps as MuiToolbarProps } from '@mui/material/Toolbar';
export interface ToolbarProps extends MuiToolbarProps {
    /**
     * Toolbar variant
     * - 'regular': Default height (56px)
     * - 'dense': Compact height (48px)
     * @default 'regular'
     */
    variant?: 'regular' | 'dense';
    /**
     * If true, disables gutter padding
     * @default false
     */
    disableGutters?: boolean;
    /**
     * Content of the toolbar
     */
    children?: React.ReactNode;
    /**
     * Custom styles using MUI sx prop
     */
    sx?: MuiToolbarProps['sx'];
}
//# sourceMappingURL=Toolbar.types.d.ts.map