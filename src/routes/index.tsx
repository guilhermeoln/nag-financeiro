import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import { Flex } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import Expenses from "../pages/expenses";
import Entries from "../pages/entries";
import Exits from "../pages/exits";
import PrivateRoutes from "./PrivateRoutes";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <NavigationBar />
      <Routes>
        <Route
          path="/inicio"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
        <Route
          path="/despesas"
          element={
            <PrivateRoutes>
              <Expenses />
            </PrivateRoutes>
          }
        />
        <Route
          path="/despesas/entradas"
          element={
            <PrivateRoutes>
              <Entries />
            </PrivateRoutes>
          }
        />
        <Route
          path="/despesas/saidas"
          element={
            <PrivateRoutes>
              <Exits />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
