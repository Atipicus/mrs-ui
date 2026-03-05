import { lightTokens, typographyTokens, shapeTokens, spacingArray } from './tokens-import';
/**
 * Color tokens (organized by light/dark mode)
 */
export declare const colors: {
    light: {
        primary: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        secondary: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        error: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        warning: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        info: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        success: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        background: {
            default: string;
            paper: string;
        };
        text: {
            primary: string;
            secondary: string;
            disabled: string;
        };
        action: {
            active: string;
            hover: string;
            selected: string;
            disabled: string;
            disabledBackground: string;
        };
        divider: string;
        primitives: {
            brand: {
                veronesMain: string;
                lima: string;
            };
            neutral: {
                white: string;
                black: string;
                gray: {
                    50: string;
                    100: string;
                    200: string;
                    300: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
            };
            status: {
                error: {
                    50: string;
                    100: string;
                    500: string;
                    600: string;
                    700: string;
                };
                warning: {
                    50: string;
                    500: string;
                    600: string;
                    700: string;
                };
                info: {
                    50: string;
                    100: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                };
                success: {
                    50: string;
                    100: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                };
            };
            alpha: {
                black: {
                    4: string;
                    8: string;
                    12: string;
                    23: string;
                    26: string;
                    38: string;
                    42: string;
                    56: string;
                    60: string;
                    87: string;
                };
                white: {
                    8: string;
                    12: string;
                    16: string;
                    23: string;
                    26: string;
                    30: string;
                    42: string;
                    50: string;
                    70: string;
                    100: string;
                };
                primary: {
                    8: string;
                    12: string;
                    16: string;
                    25: string;
                    '24-dark': string;
                    '32-dark': string;
                    '40-dark': string;
                };
            };
            special: {
                rating: string;
            };
        };
        semantic: {
            primary: {
                main: string;
                dark: string;
                light: string;
                contrastText: string;
            };
            secondary: {
                main: string;
                dark: string;
                light: string;
                contrastText: string;
            };
            error: {
                main: string;
                dark: string;
                light: string;
                contrastText: string;
            };
            warning: {
                main: string;
                dark: string;
                light: string;
                contrastText: string;
            };
            info: {
                main: string;
                dark: string;
                light: string;
                contrastText: string;
            };
            success: {
                main: string;
                dark: string;
                light: string;
                contrastText: string;
            };
            background: {
                default: string;
                paper: string;
            };
            text: {
                primary: string;
                secondary: string;
                disabled: string;
            };
            action: {
                active: string;
                hover: string;
                selected: string;
                disabled: string;
                disabledBackground: string;
            };
            divider: string;
        };
    };
    dark: {
        primary: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        secondary: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        error: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        warning: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        info: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        success: {
            main: string;
            dark: string;
            light: string;
            contrastText: string;
        };
        background: {
            default: string;
            paper: string;
        };
        text: {
            primary: string;
            secondary: string;
            disabled: string;
        };
        action: {
            active: string;
            hover: string;
            selected: string;
            disabled: string;
            disabledBackground: string;
        };
        divider: string;
    };
};
/**
 * Typography tokens
 * Includes font family, sizes, weights, and variant definitions
 */
export declare const typography: {
    fontFamily: string;
    fontSize: number;
    fontWeightLight: number;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightSemiBold: number;
    fontWeightBold: number;
    h1: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    h2: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    h3: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    h4: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    h5: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    h6: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    body1: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    body2: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    subtitle1: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    subtitle2: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    button: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
        textTransform: "none";
    };
    caption: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
    };
    overline: {
        fontFamily: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: number;
        letterSpacing: string;
        textTransform: "uppercase";
    };
};
/**
 * Shape tokens (border radius values)
 */
export declare const shape: {
    borderRadius: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    rounded: number;
};
/**
 * Spacing scale (8px base grid system)
 * Array format: [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96]
 */
export declare const spacing: number[];
/**
 * Component-specific tokens
 */
export declare const components: {
    light: {
        alert: {
            borderRadius: string;
            error: {
                filled: {
                    background: string;
                    foreground: string;
                };
                outlined: {
                    background: string;
                    foreground: string;
                    border: string;
                };
                standard: {
                    background: string;
                    foreground: string;
                };
            };
            warning: {
                filled: {
                    background: string;
                    foreground: string;
                };
                outlined: {
                    background: string;
                    foreground: string;
                    border: string;
                };
                standard: {
                    background: string;
                    foreground: string;
                };
            };
            info: {
                filled: {
                    background: string;
                    foreground: string;
                };
                outlined: {
                    background: string;
                    foreground: string;
                    border: string;
                };
                standard: {
                    background: string;
                    foreground: string;
                };
            };
            success: {
                filled: {
                    background: string;
                    foreground: string;
                };
                outlined: {
                    background: string;
                    foreground: string;
                    border: string;
                };
                standard: {
                    background: string;
                    foreground: string;
                };
            };
        };
        input: {
            borderRadius: string;
            standard: {
                enabledBorder: string;
            };
            filled: {
                enabledFill: string;
            };
            outlined: {
                enabledBorder: string;
            };
        };
        paper: {
            elevation0: string;
            elevation1: string;
            elevation2: string;
        };
        chip: {
            defaultCloseFill: string;
            defaultEnabledBorder: string;
        };
        button: {
            borderRadius: string;
        };
        card: {
            borderRadius: string;
        };
        dialog: {
            borderRadius: string;
        };
        table: {
            border: string;
            header: {
                background: string;
            };
        };
        rating: {
            activeFill: string;
            enabledBorder: string;
        };
    };
    dark: {
        alert: {
            borderRadius: string;
            error: {
                filled: {
                    background: string;
                    foreground: string;
                };
                outlined: {
                    background: string;
                    foreground: string;
                    border: string;
                };
                standard: {
                    background: string;
                    foreground: string;
                };
            };
            warning: {
                filled: {
                    background: string;
                    foreground: string;
                };
                outlined: {
                    background: string;
                    foreground: string;
                    border: string;
                };
                standard: {
                    background: string;
                    foreground: string;
                };
            };
            info: {
                filled: {
                    background: string;
                    foreground: string;
                };
                outlined: {
                    background: string;
                    foreground: string;
                    border: string;
                };
                standard: {
                    background: string;
                    foreground: string;
                };
            };
            success: {
                filled: {
                    background: string;
                    foreground: string;
                };
                outlined: {
                    background: string;
                    foreground: string;
                    border: string;
                };
                standard: {
                    background: string;
                    foreground: string;
                };
            };
        };
        input: {
            borderRadius: string;
            standard: {
                enabledBorder: string;
            };
            filled: {
                enabledFill: string;
            };
            outlined: {
                enabledBorder: string;
            };
        };
        paper: {
            elevation0: string;
            elevation1: string;
            elevation2: string;
            elevation4: string;
            elevation6: string;
            elevation8: string;
            elevation12: string;
            elevation16: string;
            elevation24: string;
        };
        chip: {
            defaultCloseFill: string;
            defaultEnabledBorder: string;
        };
        button: {
            borderRadius: string;
        };
        card: {
            borderRadius: string;
        };
        dialog: {
            borderRadius: string;
        };
        table: {
            border: string;
            header: {
                background: string;
            };
        };
        rating: {
            activeFill: string;
            enabledBorder: string;
        };
    };
};
/**
 * Full tokens object (for backwards compatibility)
 * @deprecated Use named exports (colors, typography, shape, etc.) instead
 */
export declare const tokens: {
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                secondary: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                error: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                warning: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                info: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                success: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                background: {
                    default: string;
                    paper: string;
                };
                text: {
                    primary: string;
                    secondary: string;
                    disabled: string;
                };
                action: {
                    active: string;
                    hover: string;
                    selected: string;
                    disabled: string;
                    disabledBackground: string;
                };
                divider: string;
                primitives: {
                    brand: {
                        veronesMain: string;
                        lima: string;
                    };
                    neutral: {
                        white: string;
                        black: string;
                        gray: {
                            50: string;
                            100: string;
                            200: string;
                            300: string;
                            400: string;
                            500: string;
                            600: string;
                            700: string;
                            800: string;
                            900: string;
                        };
                    };
                    status: {
                        error: {
                            50: string;
                            100: string;
                            500: string;
                            600: string;
                            700: string;
                        };
                        warning: {
                            50: string;
                            500: string;
                            600: string;
                            700: string;
                        };
                        info: {
                            50: string;
                            100: string;
                            500: string;
                            600: string;
                            700: string;
                            800: string;
                        };
                        success: {
                            50: string;
                            100: string;
                            500: string;
                            600: string;
                            700: string;
                            800: string;
                        };
                    };
                    alpha: {
                        black: {
                            4: string;
                            8: string;
                            12: string;
                            23: string;
                            26: string;
                            38: string;
                            42: string;
                            56: string;
                            60: string;
                            87: string;
                        };
                        white: {
                            8: string;
                            12: string;
                            16: string;
                            23: string;
                            26: string;
                            30: string;
                            42: string;
                            50: string;
                            70: string;
                            100: string;
                        };
                        primary: {
                            8: string;
                            12: string;
                            16: string;
                            25: string;
                            '24-dark': string;
                            '32-dark': string;
                            '40-dark': string;
                        };
                    };
                    special: {
                        rating: string;
                    };
                };
                semantic: {
                    primary: {
                        main: string;
                        dark: string;
                        light: string;
                        contrastText: string;
                    };
                    secondary: {
                        main: string;
                        dark: string;
                        light: string;
                        contrastText: string;
                    };
                    error: {
                        main: string;
                        dark: string;
                        light: string;
                        contrastText: string;
                    };
                    warning: {
                        main: string;
                        dark: string;
                        light: string;
                        contrastText: string;
                    };
                    info: {
                        main: string;
                        dark: string;
                        light: string;
                        contrastText: string;
                    };
                    success: {
                        main: string;
                        dark: string;
                        light: string;
                        contrastText: string;
                    };
                    background: {
                        default: string;
                        paper: string;
                    };
                    text: {
                        primary: string;
                        secondary: string;
                        disabled: string;
                    };
                    action: {
                        active: string;
                        hover: string;
                        selected: string;
                        disabled: string;
                        disabledBackground: string;
                    };
                    divider: string;
                };
            };
            _components: {
                alert: {
                    borderRadius: string;
                    error: {
                        filled: {
                            background: string;
                            foreground: string;
                        };
                        outlined: {
                            background: string;
                            foreground: string;
                            border: string;
                        };
                        standard: {
                            background: string;
                            foreground: string;
                        };
                    };
                    warning: {
                        filled: {
                            background: string;
                            foreground: string;
                        };
                        outlined: {
                            background: string;
                            foreground: string;
                            border: string;
                        };
                        standard: {
                            background: string;
                            foreground: string;
                        };
                    };
                    info: {
                        filled: {
                            background: string;
                            foreground: string;
                        };
                        outlined: {
                            background: string;
                            foreground: string;
                            border: string;
                        };
                        standard: {
                            background: string;
                            foreground: string;
                        };
                    };
                    success: {
                        filled: {
                            background: string;
                            foreground: string;
                        };
                        outlined: {
                            background: string;
                            foreground: string;
                            border: string;
                        };
                        standard: {
                            background: string;
                            foreground: string;
                        };
                    };
                };
                input: {
                    borderRadius: string;
                    standard: {
                        enabledBorder: string;
                    };
                    filled: {
                        enabledFill: string;
                    };
                    outlined: {
                        enabledBorder: string;
                    };
                };
                paper: {
                    elevation0: string;
                    elevation1: string;
                    elevation2: string;
                };
                chip: {
                    defaultCloseFill: string;
                    defaultEnabledBorder: string;
                };
                button: {
                    borderRadius: string;
                };
                card: {
                    borderRadius: string;
                };
                dialog: {
                    borderRadius: string;
                };
                table: {
                    border: string;
                    header: {
                        background: string;
                    };
                };
                rating: {
                    activeFill: string;
                    enabledBorder: string;
                };
            };
        };
        dark: {
            palette: {
                primary: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                secondary: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                error: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                warning: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                info: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                success: {
                    main: string;
                    dark: string;
                    light: string;
                    contrastText: string;
                };
                background: {
                    default: string;
                    paper: string;
                };
                text: {
                    primary: string;
                    secondary: string;
                    disabled: string;
                };
                action: {
                    active: string;
                    hover: string;
                    selected: string;
                    disabled: string;
                    disabledBackground: string;
                };
                divider: string;
            };
            _components: {
                alert: {
                    borderRadius: string;
                    error: {
                        filled: {
                            background: string;
                            foreground: string;
                        };
                        outlined: {
                            background: string;
                            foreground: string;
                            border: string;
                        };
                        standard: {
                            background: string;
                            foreground: string;
                        };
                    };
                    warning: {
                        filled: {
                            background: string;
                            foreground: string;
                        };
                        outlined: {
                            background: string;
                            foreground: string;
                            border: string;
                        };
                        standard: {
                            background: string;
                            foreground: string;
                        };
                    };
                    info: {
                        filled: {
                            background: string;
                            foreground: string;
                        };
                        outlined: {
                            background: string;
                            foreground: string;
                            border: string;
                        };
                        standard: {
                            background: string;
                            foreground: string;
                        };
                    };
                    success: {
                        filled: {
                            background: string;
                            foreground: string;
                        };
                        outlined: {
                            background: string;
                            foreground: string;
                            border: string;
                        };
                        standard: {
                            background: string;
                            foreground: string;
                        };
                    };
                };
                input: {
                    borderRadius: string;
                    standard: {
                        enabledBorder: string;
                    };
                    filled: {
                        enabledFill: string;
                    };
                    outlined: {
                        enabledBorder: string;
                    };
                };
                paper: {
                    elevation0: string;
                    elevation1: string;
                    elevation2: string;
                    elevation4: string;
                    elevation6: string;
                    elevation8: string;
                    elevation12: string;
                    elevation16: string;
                    elevation24: string;
                };
                chip: {
                    defaultCloseFill: string;
                    defaultEnabledBorder: string;
                };
                button: {
                    borderRadius: string;
                };
                card: {
                    borderRadius: string;
                };
                dialog: {
                    borderRadius: string;
                };
                table: {
                    border: string;
                    header: {
                        background: string;
                    };
                };
                rating: {
                    activeFill: string;
                    enabledBorder: string;
                };
            };
        };
    };
    typography: {
        fontFamily: string;
        fontSize: number;
        fontWeightLight: number;
        fontWeightRegular: number;
        fontWeightMedium: number;
        fontWeightSemiBold: number;
        fontWeightBold: number;
        h1: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
        };
        h2: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
        };
        h3: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
        };
        h4: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
        };
        h5: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
        };
        h6: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
        };
        body1: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
        };
        body2: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
        };
        subtitle1: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
        };
        subtitle2: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
        };
        button: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
            textTransform: "none";
        };
        caption: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
        };
        overline: {
            fontFamily: string;
            fontWeight: number;
            fontSize: string;
            lineHeight: number;
            letterSpacing: string;
            textTransform: "uppercase";
        };
    };
    shape: {
        borderRadius: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        rounded: number;
    };
    spacing: number[];
};
/**
 * Type definitions for tokens
 */
export type ColorScheme = typeof lightTokens.colors;
export type ComponentTokens = typeof lightTokens.components;
export type TypographyScale = typeof typographyTokens;
export type ShapeTokens = typeof shapeTokens;
export type SpacingScale = typeof spacingArray;
//# sourceMappingURL=tokens.d.ts.map