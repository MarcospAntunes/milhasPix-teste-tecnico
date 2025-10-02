import { useContext } from "react"
import { CurrentStepContext } from "../../context"

const useCurrentStep = () => {
  const context = useContext(CurrentStepContext);

  return context;
}

export default useCurrentStep;