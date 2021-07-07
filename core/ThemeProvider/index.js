import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext } from 'styled-components';
import { CssBaseLine } from '../CssBaseLine';
export const ThemeProvider = (props) => {
    const { children, theme = {} } = props;
    return (_jsxs(StyledThemeProvider, Object.assign({ theme: theme }, { children: [_jsx(CssBaseLine, {}, void 0), children] }), void 0));
};
export const useTheme = () => {
    const theme = React.useContext(ThemeContext);
    if (!theme) {
        throw Error('useTheme must be used within a ThemeProvider');
    }
    return theme;
};
