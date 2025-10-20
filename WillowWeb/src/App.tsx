import { useState, useEffect, lazy, Suspense } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";
import AudioBanner from "./components/AudioBanner/AudioBanner";
import AudioServices from "./components/AudioServices/AudioServices";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import "./i18n";

const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const LazyVideoServices = lazy(() => import("./components/VideoServices/VideoServices"));

const HomePage = () => (
  <>
    <Hero />

    {/* Seccion Audio */}
    <AudioBanner />
    <AudioServices />

    {/* Seccion Video */}
    <VideoBanner />
    <Suspense fallback={<div className="loading-message">Loading Video Services...</div>}>
      <LazyVideoServices />
    </Suspense>

    {/* Seccion Clientes */}
    <Clients />
  </>
);

function App() {
  // ✅ Fix: Se define correctamente el tipo literal del estado
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Navbar currentTheme={theme} toggleTheme={toggleTheme} />

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
  );
}

export default App;
