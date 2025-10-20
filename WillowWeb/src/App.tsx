import { useState, useEffect, lazy, Suspense } from "react";
// 🚨 FIX: Eliminado HashRouter import, ya que el componente <Router> se usa en main.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero"; 
import AudioBanner from "./components/AudioBanner/AudioBanner";
import AudioServices from "./components/AudioServices/AudioServices"; 
import VideoBanner from "./components/VideoBanner/VideoBanner";
import Clients from "./components/Clients/Clients"; 
import Footer from "./components/Footer/Footer"; 
import './i18n'; 
// import './App.css'; // Asume que este archivo no existe o no tiene dependencias críticas de App.tsx

// 🚨 OPTIMIZACIÓN: Lazy Loading para componentes de página/sección grandes o menos visitados
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage")); 
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage")); 
// Aplicamos lazy loading a VideoServices para mejorar la lentitud
const LazyVideoServices = lazy(() => import("./components/VideoServices/VideoServices")); 

// 🆕 COMPONENTE: Home Page (Estructura de la Landing Page)
const HomePage = () => (
    <>
        <Hero /> 
        
        {/* Sección Audio */}
        <AudioBanner />
        <AudioServices />
        
        {/* Sección Video */}
        <VideoBanner />
        {/* Usamos Suspense para mostrar un fallback mientras VideoServices carga (Solución de Lentitud) */}
        <Suspense fallback={<div className="loading-message">Loading Video Services...</div>}>
            <LazyVideoServices /> 
        </Suspense>
        
        {/* Sección Clientes */}
        <Clients />
    </>
);


function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  // Efecto para aplicar el atributo data-theme al body cada vez que el estado cambia
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    // 🚨 FIX: Eliminamos el componente <Router> duplicado.
    <div className="App">
      <Navbar currentTheme={theme} toggleTheme={toggleTheme} />
      
        {/* 🚀 RUTAS: Usamos Suspense para el enrutamiento */}
        <Suspense fallback={<div className="loading-screen">Loading Page...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<h1>404: Not Found</h1>} />
          </Routes>
        </Suspense>
      
      <Footer /> 

    </div>
    // 🚨 FIX: El componente App ya no devuelve <Router>
  );
}

export default App;