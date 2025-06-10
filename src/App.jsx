import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FavoritesProvider } from "./context/FavoritesContext";
import AppRoutes from "./routes/AppRoutes";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Favorites from "./pages/Favorites/Favorites";
import Navbar from './components/Navbar'; 

function App() {
  return(
    <div className="min-h-screen bg-gray-100"> 
      <Navbar />

    <main className="container mx-auto px-4 py-6">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<Details />} />
      <Route path="/favoritos" element={<Favorites />} />
     </Routes>
    </main>
    </div>
      
)
}

export default App;
