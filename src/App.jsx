import React, { useContext } from "react";
import Nav from "./components/navbar/Nav";
import Contact from "./components/ContactPage/Contact";
import BottomBar from "./components/bottomBar/BottomBar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="main">
      <Nav />
      {/* <Contact /> */}
      {/* <BottomBar /> */}

      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
