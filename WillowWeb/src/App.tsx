import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"; 
// 🚨 FIX CASING: Usamos la importación con mayúscula
import About from "./components/About/About"; 

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
      
      {/* Secciones de Anclaje restantes (para la navegación) */}
      <section id="services" style={{ minHeight: '100vh', padding: '5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Nuestros Servicios (Contenido aquí)</h2>
      </section>
      
      {/* Anclajes necesarios para el Navbar */}
      <section id="portfolio" style={{ minHeight: '10vh' }}></section>
      <section id="clients" style={{ minHeight: '10vh' }}></section>
      <section id="team" style={{ minHeight: '10vh' }}></section>
      <section id="contact" style={{ minHeight: '10vh' }}></section>
    </div>
  );
}

export default App;