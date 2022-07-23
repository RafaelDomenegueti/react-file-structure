import { ThemeProvider } from 'styled-components';
import ContextProvider from './hooks/ContextProvider';
import { Routes } from './routes';
import { defaultTheme } from './theme';

export function App() {
  const theme = defaultTheme;

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </ContextProvider>
  );
}
