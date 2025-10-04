import { useContext } from "react"
import { FormDataContext } from "../../context"

const useFormData = () => {
  const context = useContext(FormDataContext);

  return context;
}

export default useFormData;