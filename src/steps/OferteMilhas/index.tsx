/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCurrentStep } from "../../hooks";

function OferteMilhas() {
  const { setStep }: any = useCurrentStep();
  
  setStep(2)
  return(
    <p>
      funfou
    </p>
  )

}

export default OferteMilhas;