import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/ofertemilhas" element={<></>} />
        <Route path="/dadosprograma" element={<></>} />
        <Route path="/pedidofinalizado" element={<></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;