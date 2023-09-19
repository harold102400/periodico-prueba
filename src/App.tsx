import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Home  from "./components/pages/home/Home";
import International from "./components/pages/internacional/International";
import Economia from "./components/pages/economia/Economia";

function App() {

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<International />} />
        <Route path="/services" element={<Economia />} />
      </Routes>
    </>
  )
}

export default App
