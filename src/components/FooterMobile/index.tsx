import FooterMobileStyled from "./FooterMobile.styled";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";


function FooterMobile() {
  const currentPage = 1;
  const maxPage = 4;
  return(
    <FooterMobileStyled>
      <span id="backButton">
        <IoIosArrowRoundBack />
      </span>
      <p><span>{currentPage}</span> de {maxPage}</p>
      <button>{currentPage < maxPage ? "Prosseguir" : "Ver minhas ofertas"} <IoIosArrowRoundForward /></button>
    </FooterMobileStyled>
  )
}

export default FooterMobile;