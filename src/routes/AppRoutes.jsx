import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import Favorites from "../pages/Favorites/Favorites";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<Details />} />
      <Route path="/favoritos" element={<Favorites />} />
    </Routes>
  );
}

export default AppRoutes;
