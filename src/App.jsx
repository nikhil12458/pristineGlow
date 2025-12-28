import React, { useContext } from "react";
import Nav from "./components/navbar/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contactPage/Contact"

const App = () => {
  return (
    <div className="main">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<contact />} />
      </Routes>
    </div>
  );
};

export default App;
