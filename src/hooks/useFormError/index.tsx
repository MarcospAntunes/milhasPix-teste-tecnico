import { useContext } from "react"
import { FormErrorContext } from "../../context"

const useFormError = () => {
  const context = useContext(FormErrorContext);

  return context;
}

export default useFormError;