import { Route, Routes } from "react-router-dom";
import { DadosPrograma, EscolhaPrograma, MinhasOfertas, OferteMilhas, PedidoFinalizado } from "../steps";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EscolhaPrograma></EscolhaPrograma>} />
      <Route path="/oferteMilhas" element={<OferteMilhas></OferteMilhas>} />
      <Route path="/dadosPrograma" element={<DadosPrograma></DadosPrograma>} />
      <Route path="/pedidofinalizado" element={<PedidoFinalizado></PedidoFinalizado>} />
      <Route path="/minhasOfertas" element={<MinhasOfertas></MinhasOfertas>} />
    </Routes>
  )
}

export default AppRoutes;