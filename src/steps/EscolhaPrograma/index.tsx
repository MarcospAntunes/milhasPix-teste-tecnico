/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCurrentStep } from "../../hooks";

function EscolhaPrograma() {
  const { setStep }: any = useCurrentStep();
  
  setStep(1)
  return(
    <p>
      funfou
    </p>
  )

}

export default EscolhaPrograma;