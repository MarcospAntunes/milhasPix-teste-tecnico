/* eslint-disable @typescript-eslint/no-explicit-any */

import FooterMobileStyled from "./FooterMobile.styled";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useCurrentStep, useFormData } from "../../hooks";
import { routes } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function FooterMobile() {
  const { step,  maxSteps}: any = useCurrentStep();
  const [isVisible, setIsVisible] = useState(true);
  const { error }: any = useFormData();
  const navigate = useNavigate();
  const location = useLocation();

  const nextStep = () => {
    if(step == maxSteps) {
      navigate("/minhasOfertas");
      setIsVisible(false)
    } else {
      setIsVisible(true)
      for(let i = 0; i < routes.length; i++) {
        if(routes[i].number == step) {
          navigate(routes[i+1]?.path)
        }
      }  
    }
  }

  useEffect(() => {
    if(location.pathname !== "/minhasOfertas") {
      setIsVisible(true);
    } else {
      setIsVisible(false)
    }
  }, [location])

  const backStep = () => {
    if(location.pathname == "/pedidoFinalizado") {
      navigate("/")
    } else {
      for(let i = 0; i < routes.length; i++) {
        if(routes[i].number == step) {
          navigate(routes[i-1]?.path)
        }
      }
    }
  }

  return(
    isVisible  &&
      <FooterMobileStyled>
        <button id="backButton" onClick={() => backStep()} disabled={error}>
          {location.pathname == "/pedidoFinalizado" ? "Sair" : <IoIosArrowRoundBack />}
        </button>
        <p><span>{step}</span> de {maxSteps}</p>
        <button onClick={() => nextStep()} disabled={error}>{step < maxSteps ? "Prosseguir" : "Ver minhas ofertas"} <IoIosArrowRoundForward /></button>
      </FooterMobileStyled> 
  )
}

export default FooterMobile;