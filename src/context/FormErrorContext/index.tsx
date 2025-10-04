import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const FormErrorContext = createContext({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormErrorProvider = ({children}: any) => {
  const [error, setError] = useState<boolean>(false);
  
  return(
    <FormErrorContext.Provider value={{error, setError}}>
      {children}
    </FormErrorContext.Provider>
  )
}
