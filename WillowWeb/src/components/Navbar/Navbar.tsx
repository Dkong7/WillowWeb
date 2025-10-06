import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 900);

  // Detectar tamaño de pantalla para alternar logo
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cambiar idioma entre inglés y español
  const toggleLanguage = (): void => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  // Cerrar menú cuando se hace clic en un enlace
  const handleLinkClick = (): void => setMenuOpen(false);

  // ✅ Ruta correcta de los logos según base pública de Vite
  const basePath = import.meta.env.BASE_URL;
  const logoSrc = isMobile ? `${basePath}logo-icon.svg` : `${basePath}logo-full.svg`;

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="nav-container">
        {/* Logo: cambia según viewport */}
        <a href="#hero" className="logo" onClick={handleLinkClick}>
          <img
            src={logoSrc}
            alt="Willow Tree Logo"
            className="logo-img"
          />
        </a>

        {/* Botón hamburguesa */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#hero" onClick={handleLinkClick}>{t("home")}</a></li>
          <li><a href="#about" onClick={handleLinkClick}>{t("about")}</a></li>
          <li><a href="#services" onClick={handleLinkClick}>{t("services")}</a></li>
          <li><a href="#portfolio" onClick={handleLinkClick}>{t("portfolio")}</a></li>
          <li><a href="#clients" onClick={handleLinkClick}>{t("clients")}</a></li>
          <li><a href="#team" onClick={handleLinkClick}>{t("team")}</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>{t("contact")}</a></li>

          {/* Botón de idioma */}
          <li>
            <button className="lang-switch" onClick={toggleLanguage}>
              {i18n.language === "es" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
