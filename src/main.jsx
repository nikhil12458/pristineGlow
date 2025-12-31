import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CandleProvider } from "./context/CandleProvider.jsx";
import {HelmetProvide} from "react-helmet-async"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvide>
      <BrowserRouter>
        <CandleProvider>
          <App />
        </CandleProvider>
      </BrowserRouter>
    </HelmetProvide>
  </StrictMode>
);
