import * as React from 'react';
export declare type Merge<T1, T2> = Omit<T1, Extract<keyof T1, keyof T2>> & T2;
export declare type Dict<T = any> = Record<string, T>;
export interface ThemeProviderProps {
    children?: React.ReactNode;
    theme: Dict;
}
export declare const ThemeProvider: (props: ThemeProviderProps) => JSX.Element;
export declare const useTheme: <T extends object = Dict<any>>() => T;
