import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import { Flex } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <NavigationBar />
      <Routes>
        <Route path="/inicio" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
