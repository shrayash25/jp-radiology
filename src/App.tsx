import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CtCenter from "./pages/CtCenter";
import MriCenter from "./pages/MriCenter";
import Pathology from "./pages/Pathology";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import "./index.css"; 

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/ct-center" element={<CtCenter />} />
        <Route path="/mri-center" element={<MriCenter />} />
        <Route path="/pathology" element={<Pathology />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
