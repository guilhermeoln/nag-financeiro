import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Olá</>} />
      </Routes>
    </BrowserRouter>
  );
}
