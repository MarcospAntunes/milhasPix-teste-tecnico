import { Routes, Route } from "react-router-dom";
import { EscolhaPrograma, OferteMilhas, DadosPrograma, PedidoFinalizado, MinhasOfertas } from "../steps";
import Layout from "../Layout/inde";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<EscolhaPrograma />} />
        <Route path="/oferteMilhas" element={<OferteMilhas />} />
        <Route path="/dadosPrograma" element={<DadosPrograma />} />
        <Route path="/pedidofinalizado" element={<PedidoFinalizado />} />
      </Route>
      <Route path="/minhasOfertas" element={<MinhasOfertas />} />
    </Routes>
  );
}

export default AppRoutes;