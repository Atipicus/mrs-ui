import { SxProps, Theme } from '@mui/material/styles';
/**
 * Style composition factory for creating reusable patterns
 */
export declare const styleCompositions: {
    /**
     * Button style compositions
     * Used by: MuiButton, MuiFab, MuiToggleButton
     */
    button: {
        /**
         * Base button styles
         */
        base: () => SxProps<Theme>;
        /**
         * Button size variants
         */
        sizes: {
            small: {
                fontSize: string;
                padding: string;
            };
            medium: {
                fontSize: string;
                padding: string;
            };
            large: {
                fontSize: string;
                padding: string;
            };
        };
        /**
         * Button state styles
         */
        states: {
            disabled: (theme: Theme) => SxProps<Theme>;
        };
    };
    /**
     * Input style compositions
     * Used by: MuiTextField, MuiOutlinedInput, MuiFilledInput, MuiInput
     */
    input: {
        /**
         * Base input styles
         */
        base: () => SxProps<Theme>;
        /**
         * Input size variants
         */
        sizes: {
            small: {
                fontSize: string;
                padding: string;
            };
            medium: {
                fontSize: string;
                padding: string;
            };
            large: {
                fontSize: string;
                padding: string;
            };
        };
        /**
         * Input state styles
         */
        states: {
            disabled: (theme: Theme) => SxProps<Theme>;
            error: (theme: Theme) => SxProps<Theme>;
            focused: (theme: Theme) => SxProps<Theme>;
        };
    };
    /**
     * Surface style compositions
     * Used by: MuiCard, MuiPaper, MuiDialog
     */
    surface: {
        /**
         * Base surface styles
         */
        base: (theme: Theme) => SxProps<Theme>;
        /**
         * Surface elevation variants
         */
        elevations: {
            none: {
                boxShadow: string;
            };
            low: {
                boxShadow: (theme: Theme) => string;
            };
            medium: {
                boxShadow: (theme: Theme) => string;
            };
            high: {
                boxShadow: (theme: Theme) => string;
            };
        };
    };
    /**
     * List item style compositions
     * Used by: MuiListItem, MuiListItemButton
     */
    listItem: {
        /**
         * Base list item styles
         */
        base: () => SxProps<Theme>;
        /**
         * List item state styles
         */
        states: {
            selected: (theme: Theme) => SxProps<Theme>;
            hover: (theme: Theme) => SxProps<Theme>;
            disabled: (theme: Theme) => SxProps<Theme>;
        };
    };
    /**
     * Chip style compositions
     * Used by: MuiChip
     */
    chip: {
        /**
         * Base chip styles
         */
        base: () => SxProps<Theme>;
        /**
         * Chip size variants
         */
        sizes: {
            small: {
                fontSize: string;
                padding: string;
            };
            medium: {
                fontSize: string;
                padding: string;
            };
        };
        /**
         * Chip state styles
         */
        states: {
            disabled: (theme: Theme) => SxProps<Theme>;
        };
    };
    /**
     * Alert and feedback style compositions
     * Used by: MuiAlert, MuiSnackbar
     */
    feedback: {
        /**
         * Base feedback styles
         */
        base: () => SxProps<Theme>;
        /**
         * Alert severity variants
         */
        variants: {
            success: (theme: Theme) => SxProps<Theme>;
            warning: (theme: Theme) => SxProps<Theme>;
            error: (theme: Theme) => SxProps<Theme>;
            info: (theme: Theme) => SxProps<Theme>;
        };
    };
    /**
     * Common state compositions
     * Used across multiple components
     */
    states: {
        /**
         * Focus state - applies consistent focus styling
         */
        focus: (theme: Theme) => SxProps<Theme>;
        /**
         * Hover state - applies consistent hover styling
         */
        hover: (theme: Theme) => SxProps<Theme>;
        /**
         * Active/selected state
         */
        active: (theme: Theme) => SxProps<Theme>;
        /**
         * Disabled state - applies consistent disabled styling
         */
        disabled: (theme: Theme) => SxProps<Theme>;
        /**
         * Loading state - subtle opacity reduction
         */
        loading: () => SxProps<Theme>;
    };
    /**
     * Typography weight shortcuts
     */
    typography: {
        bold: {
            fontWeight: number;
        };
        semiBold: {
            fontWeight: number;
        };
        medium: {
            fontWeight: number;
        };
        regular: {
            fontWeight: number;
        };
        light: {
            fontWeight: number;
        };
    };
    /**
     * Spacing shortcuts
     * Note: Use MUI spacing() function for responsive values
     */
    spacing: {
        compact: {
            padding: string;
            gap: string;
        };
        normal: {
            padding: string;
            gap: string;
        };
        comfortable: {
            padding: string;
            gap: string;
        };
        spacious: {
            padding: string;
            gap: string;
        };
    };
    /**
     * Border radius shortcuts
     */
    borderRadius: {
        sharp: {
            borderRadius: number;
        };
        small: {
            borderRadius: number;
        };
        medium: {
            borderRadius: number;
        };
        large: {
            borderRadius: number;
        };
        rounded: {
            borderRadius: number;
        };
    };
    /**
     * Flexbox and layout compositions
     */
    layout: {
        /**
         * Flex row with centered items
         */
        flexRowCenter: () => SxProps<Theme>;
        /**
         * Flex column with centered items
         */
        flexColumnCenter: () => SxProps<Theme>;
        /**
         * Full width container
         */
        fullWidth: () => SxProps<Theme>;
        /**
         * Responsive container
         */
        responsiveContainer: () => SxProps<Theme>;
    };
};
/**
 * Type export for style compositions
 */
export type StyleComposition = typeof styleCompositions;
//# sourceMappingURL=styleCompositions.d.ts.map