import { useState, useEffect } from "react";
import "./index.css";
// 🚀 IMPORTACIONES: Router y Page components
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero"; 
// 🚨 CORRECCIÓN CLAVE: Importamos las páginas finales desde src/pages/
import AboutPage from "./pages/AboutPage/AboutPage"; 
import ContactPage from "./pages/ContactPage/ContactPage"; 

import AudioBanner from "./components/AudioBanner/AudioBanner";
import AudioServices from "./components/AudioServices/AudioServices"; 

// 🆕 COMPONENTE: Home Page (Contiene todo el contenido del index, excepto las secciones movidas)
const HomePage = () => (
    <>
        <Hero /> 
        <AudioBanner />
        <AudioServices />
        
        {/* Secciones de Anclaje restantes (solo quedan las que no se movieron) */}
        <section id="clients" style={{ minHeight: '10vh' }}></section>
        <section id="team" style={{ minHeight: '10vh' }}></section>
    </>
);

// ❌ ELIMINADAS: Se eliminan las constantes placeholder AboutPage y ContactPage de aquí


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
    <div className="App">
      {/* Pasamos el estado y la función de toggle al Navbar (Visible en todas las rutas) */}
      <Navbar currentTheme={theme} toggleTheme={toggleTheme} />
      
      {/* 🚀 RUTAS: Ahora usan los componentes de página importados */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Opcional: Ruta 404 */}
        <Route path="*" element={<h1>404: No Encontrado</h1>} />
      </Routes>

    </div>
  );
}

export default App;