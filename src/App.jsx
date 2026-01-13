import Nav from "./components/navbar/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Burn from "./components/burn/Burn";
import Contact from "./components/ContactPage/Contact";
import ProductPage from "./components/productPage/ProductPage";
import CustomCandle from "./components/customCandle/CustomCandle";

const App = () => {
  return (
    <div className="main">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug/:id" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-order" element={<CustomCandle />} />
        <Route path="/glow" element={<Burn />} />
      </Routes>
    </div>
  );
};

export default App;
