import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import Articles from "./Pages/Articles";
import About from "./Pages/About";
import Portfolio from "./Pages/Porfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
