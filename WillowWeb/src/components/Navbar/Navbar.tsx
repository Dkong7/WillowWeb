import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
// 🚀 NUEVA IMPORTACIÓN: Componentes de React Router
import { NavLink, useNavigate, useLocation } from "react-router-dom";

// Definir los tipos de las props para TypeScript
interface NavbarProps {
  currentTheme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ currentTheme, toggleTheme }: NavbarProps) {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
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

  const closeMenu = (): void => setMenuOpen(false);

  // Función para manejar la navegación mixta (ruta + ancla)
  const handleLinkClick = (hash: string): void => {
    closeMenu();
    
    // Comprobación mejorada para enlaces de ancla
    if (hash.startsWith('#')) {
        if (location.pathname !== '/') {
            // Si NO estamos en el Home, navegamos al Home primero con el hash
            navigate(`/${hash}`); 
        } else {
            // Si estamos en el Home, forzamos el scroll
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    } 
    // Si no es un hash, no hacemos nada (NavLink lo maneja).
  };
  
  const basePath = import.meta.env.BASE_URL;
  const logoSrc = isMobile ? `${basePath}logo-icon.svg` : `${basePath}logo-full.svg`;

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="nav-container">
        {/* Logo utiliza NavLink para ir a la ruta raíz */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img
            src={logoSrc}
            alt="Willow Tree Logo"
            className="logo-img logo-text-part"
          />
        </NavLink>

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
          
          {/* HOME: Usa NavLink para ruteo */}
          <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>{t("home")}</NavLink></li>
          
          {/* 🚀 SUBMENÚ: Servicios - Usa handleLinkClick con el hash */}
          <li className="has-submenu">
            <a onClick={() => handleLinkClick('#services')} role="button">{t("services_title")}</a> 
            <ul className="submenu">
              {/* Audio */}
              <li className="submenu-item">
                <a role="button" className="submenu-audio">{t("audio")}</a>
                <ul className="sub-submenus">
                  <li><a onClick={() => handleLinkClick('#audio-prod')} role="button">{t("audio_prod")}</a></li>
                  <li><a onClick={() => handleLinkClick('#audio-mix')} role="button">{t("audio_mix")}</a></li>
                </ul>
              </li>
              {/* Video */}
              <li className="submenu-item">
                <a role="button" className="submenu-video">{t("video")}</a>
                <ul className="sub-submenus">
                  <li><a onClick={() => handleLinkClick('#video-post')} role="button">{t("video_post")}</a></li>
                  <li><a onClick={() => handleLinkClick('#video-motion')} role="button">{t("video_motion")}</a></li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li><a onClick={() => handleLinkClick('#clients')} role="button">{t("clients")}</a></li>
          <li><a onClick={() => handleLinkClick('#team')} role="button">{t("team")}</a></li>

          {/* QUIENES SOMOS: Usa NavLink para ruteo puro */}
          <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>{t("about")}</NavLink></li>

          {/* CONTACTO: Usa NavLink para ruteo puro */}
          <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>{t("contact")}</NavLink></li>

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