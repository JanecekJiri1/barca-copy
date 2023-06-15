import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Navigation from "./components/navBar/Navigation";
import Main from "./components/Main";
import Referenc from "./components/Referenc";
import About from "./components/About";
// import Contact from "./components/Contact";

import "./fonts/Fonts.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div>
            <Navigation />
            <Routes>
              <Route path="/" element={<Main />} />
         
              <Route path="/About" element={<About />} />
              <Route path="/Referenc" element={<Referenc />} />
           
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
