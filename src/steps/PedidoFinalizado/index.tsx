/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCurrentStep } from "../../hooks";

function PedidoFinalizado() {
  const { setStep }: any = useCurrentStep();
  
  setStep(4)
  return(
    <p>
      funfou
    </p>
  )

}

export default PedidoFinalizado;