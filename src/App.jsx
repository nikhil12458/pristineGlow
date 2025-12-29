import Nav from "./components/navbar/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contactPage/Contact"
import Burn from "./components/burn/Burn";

const App = () => {
  return (
    <div className="main">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/glow" element={<Burn />} />
      </Routes>
    </div>
  );
};

export default App;
