import React from "react";
import {Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Career from "./components/Career";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
