import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Home  from "./components/pages/home/Home";
import Internacional from "./components/pages/internacional/Internacional";
import Economia from "./components/pages/economia/Economia";
import Cultura from "./components/pages/cultura/Cultura";
import Deporte from "./components/pages/deporte/Deporte";
import Gente from "./components/pages/gente/Gente";
import Politica from "./components/pages/politica/Politica";
import Sociedad from "./components/pages/sociedad/Sociedad";
import Tecnologia from "./components/pages/tecnologia/Tecnologia";
import Turismo from "./components/pages/turismo/Turismo";
import LogoComponent from "./components/logoComponent/LogoComponent";
import Footer from "./components/footer/Footer";


function App() {

  return (
    <>
    <LogoComponent />
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internacional" element={<Internacional />} />
        <Route path="/estilo" element={<Cultura />} />
        <Route path="/deporte" element={<Deporte />} />
        <Route path="/economia" element={<Economia />} />
        <Route path="/opinion" element={<Gente />} />
        <Route path="/nacionales" element={<Politica />} />
        <Route path="/entretenimiento" element={<Sociedad />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/turismo" element={<Turismo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
