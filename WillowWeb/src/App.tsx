import { useState, useEffect } from "react";
import "./index.css";
// 🚀 IMPORTACIONES: Router y Page components
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero"; 
// ❌ ELIMINADO: About ya no se renderiza en el Home. Se moverá a su propio archivo/ruta.
// import About from "./components/About/About"; 
import AudioBanner from "./components/AudioBanner/AudioBanner";
import AudioServices from "./components/AudioServices/AudioServices"; 

// 🆕 COMPONENTE PLACEHOLDER: Home Page
const HomePage = () => (
    <>
        <Hero /> 
        {/* ❌ ELIMINADO: About ya no se renderiza aquí */}
        {/* <About /> */}
        <AudioBanner />
        <AudioServices />
        
        {/* Secciones de Anclaje restantes (solo quedan las que no se movieron) */}
        <section id="clients" style={{ minHeight: '10vh' }}></section>
        <section id="team" style={{ minHeight: '10vh' }}></section>
        {/* ❌ ELIMINADO: Se remueven las anclas de Portfolio y Contacto. */}
        {/* <section id="portfolio" style={{ minHeight: '10vh' }}></section> */}
        {/* <section id="contact" style={{ minHeight: '10vh' }}></section> */}
    </>
);

// 🆕 COMPONENTE PLACEHOLDER: About Page (para rutas)
const AboutPage = () => <h1>Quienes Somos (Página Dedicada)</h1>;
// 🆕 COMPONENTE PLACEHOLDER: Contact Page (para rutas)
const ContactPage = () => <h1>Contacto y Dossier (Página Dedicada)</h1>;


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
      
      {/* 🚀 RUTAS: Definimos las rutas de la aplicación */}
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