import ContextProvider from './hooks/ContextProvider'
import { Routes } from './routes'

export function App() {

  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  )
}
