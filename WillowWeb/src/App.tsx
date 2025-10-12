import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"; 
// 🚨 FIX CASING: Usamos la importación con mayúscula
import About from "./components/About/About"; 
// 🚀 NUEVA IMPORTACIÓN: Componente de Banner de Audio
import AudioBanner from "./components/AudioBanner/AudioBanner";
// 🚀 IMPORTACIÓN: Componente de Servicios (Tarjetas)
import AudioServices from "./components/AudioServices/AudioServices"; 

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
      {/* Pasamos el estado y la función de toggle al Navbar */}
      <Navbar currentTheme={theme} toggleTheme={toggleTheme} />
      
      {/* 🚀 Render Hero Component */}
      <Hero /> 
      
      {/* 🚀 Render About Component */}
      <About />
      
      {/* 🚀 Render Audio Banner (Contiene el ID #services y el título) */}
      <AudioBanner />
      {/* 🚀 Render Audio Services (Contiene la lista de cards) */}
      <AudioServices />
      
      {/* Secciones de Anclaje restantes (para la navegación) */}
      <section id="portfolio" style={{ minHeight: '10vh' }}></section>
      <section id="clients" style={{ minHeight: '10vh' }}></section>
      <section id="team" style={{ minHeight: '10vh' }}></section>
      <section id="contact" style={{ minHeight: '10vh' }}></section>
    </div>
  );
}

export default App;