import { ThemeProvider } from 'styled-components';
import ContextProvider from './hooks/ContextProvider';
import { Routes } from './routes';
import { darkTheme, lightTheme } from './theme';

export function App() {
  const hours = (new Date()).getHours();
  const isDay = hours > 6 && hours < 20;

  return (
    <ContextProvider>
      <ThemeProvider theme={isDay ? lightTheme : darkTheme}>
        <Routes />
      </ThemeProvider>
    </ContextProvider>
  );
}
