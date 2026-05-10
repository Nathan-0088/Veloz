import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Favoritos from "./Pages/Favoritos";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}
