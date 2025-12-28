import React, { useContext } from "react";
import Contact from "./components/contactPage/Contact";
import Nav from "./components/navbar/Nav";
import BottomBar from "./components/bottomBar/BottomBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Button from "./components/button/Button";

const App = () => {
  return (
    <div className="main">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
