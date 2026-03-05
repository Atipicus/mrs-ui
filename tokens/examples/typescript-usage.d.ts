import { default as React } from 'react';
interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
interface AlertProps {
    children: React.ReactNode;
    severity: 'error' | 'warning' | 'info' | 'success';
}
export declare const Alert: React.FC<AlertProps>;
interface CardProps {
    children: React.ReactNode;
    title?: string;
}
export declare const Card: React.FC<CardProps>;
export declare const customTheme: import('@mui/material').Theme;
export declare const tokenStyles: {
    page: {
        fontFamily: string;
        color: string;
        backgroundColor: string;
        padding: string;
    };
    heading: {
        fontSize: string;
        fontWeight: string;
        color: string;
        marginBottom: string;
    };
    button: {
        primary: {
            backgroundColor: string;
            color: string;
            borderRadius: string;
            padding: string;
        };
    };
};
export declare const TokenDemoPage: React.FC;
export declare const useTokens: () => {
    colors: {
        primary: string;
        primaryDark: string;
        text: string;
        background: string;
    };
    spacing: {
        sm: string;
        md: string;
        lg: string;
    };
    typography: {
        fontFamily: string;
        fontSize: {
            md: string;
            xl: string;
        };
        fontWeight: {
            semibold: string;
        };
    };
    components: {
        button: {
            borderRadius: string;
            height: string;
        };
        alert: {
            borderRadius: string;
        };
        card: {
            borderRadius: string;
        };
    };
};
export declare const MyComponent: React.FC;
export {};
//# sourceMappingURL=typescript-usage.d.ts.map