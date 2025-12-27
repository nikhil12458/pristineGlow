import React, { useContext } from "react";
import Contact from "./components/ContactPage/Contact";
import Nav from "./components/navbar/Nav";
import BottomBar from "./components/bottomBar/BottomBar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <Nav />
      <BottomBar />

      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
