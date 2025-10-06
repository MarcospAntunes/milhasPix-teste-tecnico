import { Outlet, useLocation } from "react-router-dom";
import CurrentStepStatus from "../components/currentStepStatus";
import LayoutStyled from "./Layout.style";

export default function Layout() {
  const location = useLocation();
  const { pathname } = location;

  const showSteps = ["/", "/oferteMilhas", "/dadosPrograma", "/pedidofinalizado"];

  return (
    <LayoutStyled>
      {showSteps.includes(pathname) && <CurrentStepStatus />}
      <Outlet />
    </LayoutStyled>
  );
}