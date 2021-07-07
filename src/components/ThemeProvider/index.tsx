import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from 'styled-components';
import { CssBaseLine } from '../CssBaseLine';

export type Merge<T1, T2> = Omit<T1, Extract<keyof T1, keyof T2>> & T2;

export type Dict<T = any> = Record<string, T>;

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme: Dict;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme = {} } = props;
  return (
    <StyledThemeProvider theme={theme}>
      <CssBaseLine />
      {children}
    </StyledThemeProvider>
  );
};

export const useTheme = <T extends object = Dict>() => {
  const theme = React.useContext(
    (ThemeContext as unknown) as React.Context<T | undefined>
  );
  if (!theme) {
    throw Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};
