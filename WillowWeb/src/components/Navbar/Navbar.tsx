import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

// Definir los tipos de las props para TypeScript
interface NavbarProps {
  currentTheme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ currentTheme, toggleTheme }: NavbarProps) {
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLanguage = (): void => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  const handleLinkClick = (): void => setMenuOpen(false);

  const basePath = import.meta.env.BASE_URL;
  const logoSrc = isMobile ? `${basePath}logo-icon.svg` : `${basePath}logo-full.svg`;

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#hero" className="logo" onClick={handleLinkClick}>
          <img
            src={logoSrc}
            alt="Willow Tree Logo"
            className="logo-img logo-text-part"
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
          
          {/* 🚀 SUBMENÚ: Servicios */}
          <li className="has-submenu">
            <a onClick={handleLinkClick}>{t("services_title")}</a> 
            <ul className="submenu">
              {/* Audio */}
              <li className="submenu-item">
                <a className="submenu-audio">{t("audio")}</a>
                <ul className="sub-submenus">
                  <li><a href="#audio-prod" onClick={handleLinkClick}>{t("audio_prod")}</a></li>
                  <li><a href="#audio-mix" onClick={handleLinkClick}>{t("audio_mix")}</a></li>
                </ul>
              </li>
              {/* Video */}
              <li className="submenu-item">
                <a className="submenu-video">{t("video")}</a>
                <ul className="sub-submenus">
                  <li><a href="#video-post" onClick={handleLinkClick}>{t("video_post")}</a></li>
                  <li><a href="#video-motion" onClick={handleLinkClick}>{t("video_motion")}</a></li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li><a href="#portfolio" onClick={handleLinkClick}>{t("portfolio")}</a></li>
          <li><a href="#clients" onClick={handleLinkClick}>{t("clients")}</a></li>
          <li><a href="#team" onClick={handleLinkClick}>{t("team")}</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>{t("contact")}</a></li>

          {/* CONTROLES A LA DERECHA */}
          <li className="controls-group">
            <button className="lang-switch" onClick={toggleLanguage}>
              {i18n.language === "es" ? "EN" : "ES"}
            </button>
            <button 
              className="theme-switch" 
              onClick={toggleTheme}
              aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
              title={currentTheme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            >
              <span className="theme-icon">
                {currentTheme === 'dark' ? '☀️' : '🌙'}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}