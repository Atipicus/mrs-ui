/**
 * useThemeParser Hook
 * Parses and extracts theme data from theme configuration
 *
 * This hook provides structured access to theme tokens and allows
 * tracking changes for real-time preview
 */
export interface ColorToken {
    name: string;
    light: string;
    dark: string;
    description?: string;
}
export interface TypographyToken {
    variant: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    lineHeight?: string | number;
    letterSpacing?: string | number;
}
export interface SpacingToken {
    name: string;
    value: number | string;
}
export interface ShapeToken {
    name: string;
    value: number;
}
export interface ThemeParsed {
    colors: {
        light: Record<string, string>;
        dark: Record<string, string>;
    };
    typography: TypographyToken[];
    spacing: SpacingToken[];
    shape: ShapeToken[];
    mode: 'light' | 'dark';
}
export declare function useThemeParser(): {
    parsedTheme: {
        colors: {
            light: {
                [x: string]: string;
            };
            dark: {
                [x: string]: string;
            };
        };
        typography: TypographyToken[];
        spacing: SpacingToken[];
        shape: ShapeToken[];
        mode: "light" | "dark";
    };
    mode: "light" | "dark";
    setMode: import('react').Dispatch<import('react').SetStateAction<"light" | "dark">>;
    edits: Partial<ThemeParsed>;
    updateColor: (colorKey: string, newValue: string) => void;
    updateTypography: (variant: string, property: string, value: any) => void;
    updateSpacing: (spacingName: string, newValue: number) => void;
    updateShape: (shapeName: string, newValue: number) => void;
    getColorValue: (colorKey: string) => string;
    getTypographyValue: (variant: string, property: string) => any;
    resetEdits: () => void;
};
//# sourceMappingURL=useThemeParser.d.ts.map