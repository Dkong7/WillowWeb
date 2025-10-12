import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n"; // si estás usando i18next
// 🚀 NUEVA IMPORTACIÓN: BrowserRouter para habilitar el ruteo
import { BrowserRouter } from "react-router-dom"; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 🚀 ENVOLVER: Envolvemos la App en el router */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);