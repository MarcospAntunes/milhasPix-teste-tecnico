/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCurrentStep } from "../../hooks";
import PedidoFinalizadoStyled from "./PedidoFinalizado.style";

function PedidoFinalizado() {
  const { setStep }: any = useCurrentStep();
  
  setStep(4)
  return(
    <PedidoFinalizadoStyled>
      <img src="/public/images/success.png" alt="Sucesso" />
      <h2>Ordem de venda criada com sucesso!</h2>
      <p>
        Agora é so aguardar - assim que suas milhas forem vendidas, o valor 
        será transferido direto para sua conta via Pix.
      </p>
    </PedidoFinalizadoStyled>
  )

}

export default PedidoFinalizado;