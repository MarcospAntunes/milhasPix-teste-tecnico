/* eslint-disable @typescript-eslint/no-explicit-any */

import FooterMobileStyled from "./FooterMobile.styled";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useCurrentStep, useFormData } from "../../hooks";
import { routes } from "../../constants";
import { useNavigate } from "react-router-dom";

function FooterMobile() {
  const { step,  maxSteps}: any = useCurrentStep();
  const { error }: any = useFormData();
  const navigate = useNavigate();

  const nextStep = () => {
    for(let i = 0; i < routes.length; i++) {
      if(routes[i].number == step) {
        navigate(routes[i+1]?.path)
      }
    }
  }

  const backStep = () => {
    for(let i = 0; i < routes.length; i++) {
      if(routes[i].number == step) {
        navigate(routes[i-1]?.path)
      }
    }
  }

  return(
    <FooterMobileStyled>
      <button id="backButton" onClick={() => backStep()} disabled={error}>
        <IoIosArrowRoundBack />
      </button>
      <p><span>{step}</span> de {maxSteps}</p>
      <button onClick={() => nextStep()} disabled={error}>{step < maxSteps ? "Prosseguir" : "Ver minhas ofertas"} <IoIosArrowRoundForward /></button>
    </FooterMobileStyled>
  )
}

export default FooterMobile;