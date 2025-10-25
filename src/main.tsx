import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import MainLayout from "./components/layout/MainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <MainLayout>
      <App />
    </MainLayout>
    </BrowserRouter>
  </StrictMode>
);
