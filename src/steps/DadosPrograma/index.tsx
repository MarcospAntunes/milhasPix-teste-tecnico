/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCurrentStep } from "../../hooks";

function DadosPrograma() {
  const { setStep }: any = useCurrentStep();
  
  setStep(3)
  return(
    <p>
      funfou
    </p>
  )

}

export default DadosPrograma;