import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import { Analytics } from "@vercel/analytics/react";

const Home = lazy(() => import("./components/home/Home"));
const Burn = lazy(() => import("./components/burn/Burn"));
const Contact = lazy(() => import("./components/ContactPage/Contact"));
const ProductPage = lazy(() => import("./components/productPage/ProductPage"));
const CustomCandle = lazy(() => import("./components/customCandle/CustomCandle"));

const App = () => {
  return (
    <div className="main">
      <Nav />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug/:id" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/custom-order" element={<CustomCandle />} />
          <Route path="/glow" element={<Burn />} />
        </Routes>
      </Suspense>
      <Analytics />
    </div>
  );
};

export default App;
