import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";

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
      
      {/* Contenido de prueba (puedes reemplazarlo con tu layout real) */}
      <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Willow Tree - Landing Page</h1>
      </section>
      <section id="about" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Acerca de Nosotros</h2>
      </section>
      <section id="services" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Nuestros Servicios</h2>
      </section>
      {/* Asegúrate de agregar las secciones completas que definiste antes (#portfolio, #clients, #team, #contact) */}
    </div>
  );
}

export default App;