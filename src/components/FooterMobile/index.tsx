import FooterMobileStyled from "./FooterMobile.styled";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useCurrentStep } from "../../hooks";
import { routes } from "../../constants";
import { useNavigate } from "react-router-dom";

function FooterMobile() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { step,  maxSteps}: any = useCurrentStep();
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
      <span id="backButton" onClick={() => backStep()}>
        <IoIosArrowRoundBack />
      </span>
      <p><span>{step}</span> de {maxSteps}</p>
      <button onClick={() => nextStep()}>{step < maxSteps ? "Prosseguir" : "Ver minhas ofertas"} <IoIosArrowRoundForward /></button>
    </FooterMobileStyled>
  )
}

export default FooterMobile;