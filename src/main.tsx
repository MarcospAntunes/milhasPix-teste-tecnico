import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppContainer } from './components/index.ts'
import AppRoutes from './Routes/index.tsx'
import GlobalStyles from './GlobalStyles.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  </StrictMode>,
)
