import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from 'styled-components';
import { createTheme, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { GlobalStyles, theme as themeObject } from '../styles/globalStyles';

const theme = createTheme(themeObject);

export function ContextFunnel({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <CssBaseline>{children}</CssBaseline>
        </ThemeProvider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
