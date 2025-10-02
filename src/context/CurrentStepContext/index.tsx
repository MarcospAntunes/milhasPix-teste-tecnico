import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CurrentStepContext = createContext({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CurrentStepProvider = ({children}: any) => {
  const [step, setStep] = useState<number>(1);
  const maxSteps = 4;
  
  return(
    <CurrentStepContext.Provider value={{step, setStep, maxSteps}}>
      {children}
    </CurrentStepContext.Provider>
  )
}