// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ModernTechPlatform from "./pages/ModernTechPlatform"
import AboutUs from "./components/About"
import Programs from "./components/Programs"
import Community from './components/Community';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModernTechPlatform />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/programs" element={<Programs/>} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
