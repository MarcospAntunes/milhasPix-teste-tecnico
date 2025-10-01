
import {FooterMobile, Header} from "../";
import AppContainerStyled from "./AppContainer.style";
import type { JSX } from "react";

function AppContainer({children}: {children: JSX.Element}) {
  return(
    <AppContainerStyled>
      <Header />
        <main>
          {children}
        </main>
      <FooterMobile />
    </AppContainerStyled>
  )
}

export default AppContainer;