import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"; // Importa el nuevo componente Hero

function App() {
  // 🚨 RESTORE: Lógica de tema y estado
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
      
      {/* 🚀 COMPONENTE HERO */}
      <Hero /> 
      
      {/* Secciones de Anclaje */}
      <section id="about" style={{ minHeight: '100vh', padding: '5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Acerca de Nosotros (Contenido aquí)</h2>
      </section>
      <section id="services" style={{ minHeight: '100vh', padding: '5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Nuestros Servicios (Contenido aquí)</h2>
      </section>
    </div>
  );
}

export default App;