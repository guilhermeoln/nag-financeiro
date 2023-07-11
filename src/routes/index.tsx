import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import { Flex } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import Expenses from "../pages/expenses";
import Entries from "../pages/entries";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <NavigationBar />
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/despesas" element={<Expenses />} />
        <Route path="/despesas/entradas" element={<Entries />} />
      </Routes>
    </BrowserRouter>
  );
}
