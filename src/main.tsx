import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppContainer } from './components/index.ts'
import AppRoutes from './Routes/index.tsx'
import GlobalStyles from './GlobalStyles.ts'
import { CurrentStepProvider } from './context/CurrentStepContext/index.tsx'
import { BrowserRouter } from 'react-router-dom'
import { FormErrorProvider } from './context/FormErrorContext/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <CurrentStepProvider>
      <FormErrorProvider>
        <BrowserRouter>
          <AppContainer>
            <AppRoutes />
          </AppContainer>
        </BrowserRouter>
      </FormErrorProvider>
    </CurrentStepProvider>
  </StrictMode>,
)
