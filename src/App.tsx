import ContextProvider from './hooks/ContextProvider'
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes'
import { useState } from 'react';
import { defaultTheme } from './theme';

export function App() {
  const [theme, useTheme] = useState(defaultTheme);

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </ContextProvider>
  )
}
