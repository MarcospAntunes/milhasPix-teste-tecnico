import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppContainer } from './components/index.ts'
import AppRoutes from './Routes/index.tsx'
import GlobalStyles from './GlobalStyles.ts'
import { CurrentStepProvider } from './context/CurrentStepContext/index.tsx'
import { BrowserRouter } from 'react-router-dom'
import { FormDataProvider } from './context/FormDataContext/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <FormDataProvider>
      <CurrentStepProvider>
        <BrowserRouter>
          <AppContainer>
            <AppRoutes />
          </AppContainer>
        </BrowserRouter>
      </CurrentStepProvider>
    </FormDataProvider>
  </StrictMode>,
)
