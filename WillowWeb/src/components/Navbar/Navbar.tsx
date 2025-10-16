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
            // Se usa window.location.hash = hash para forzar el scroll después de la navegación
            navigate(`/${hash}`); 
        } else {
            // Si estamos en el Home, forzamos el scroll
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    } 
    // Si no es un hash, NavLink lo maneja o no hacemos nada si es una ruta absoluta ya navegada.
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
          
          <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active-link" : ""}>{t("home")}</NavLink></li>
          
          {/* 🚀 SUBMENÚ: Servicios - Se usa handleLinkClick para scroll en el Home */}
          <li className="has-submenu">
            <a onClick={() => handleLinkClick('#services')} role="button">{t("services_title")}</a> 
            <ul className="submenu">
              {/* Audio */}
              <li className="submenu-item">
                <a onClick={() => handleLinkClick('#services')} role="button" className="submenu-audio">{t("audio")}</a>
                <ul className="sub-submenus">
                  <li><a onClick={() => handleLinkClick('#audio-prod')} role="button">{t("service_audio_prod_title")}</a></li>
                  <li><a onClick={() => handleLinkClick('#audio-jingles')} role="button">{t("service_audio_jingles_title")}</a></li>
                  <li><a onClick={() => handleLinkClick('#audio-cinetv')} role="button">{t("service_audio_cinetv_title")}</a></li>
                  <li><a onClick={() => handleLinkClick('#audio-games')} role="button">{t("service_audio_games_title")}</a></li>
                  <li><a onClick={() => handleLinkClick('#audio-rec')} role="button">{t("service_audio_rec_title")}</a></li>
                  <li><a onClick={() => handleLinkClick('#audio-voice')} role="button">{t("service_audio_voice_title")}</a></li>
                  <li><a onClick={() => handleLinkClick('#audio-mix')} role="button">{t("audio_mix")}</a></li>
                </ul>
              </li>
              {/* Video (Punto 4) */}
              <li className="submenu-item">
                {/* Enlace que lleva al banner de video services */}
                <a onClick={() => handleLinkClick('#video-services')} role="button" className="submenu-video">{t("video")}</a>
                <ul className="sub-submenus">
                  {/* 🚨 FIX 5: Nuevos enlaces de Video */}
                  <li><a onClick={() => handleLinkClick('#video-prod')} role="button">{t("service_video_prod_title")}</a></li>
                  <li><a onClick={() => handleLinkClick('#video-post-prod')} role="button">{t("service_video_post_prod_title")}</a></li>
                  <li><a onClick={() => handleLinkClick('#video-anim')} role="button">{t("service_video_anim_title")}</a></li>
                  <li><a onClick={() => handleLinkClick('#video-3d')} role="button">{t("service_video_3d_title")}</a></li>
                  <li><a onClick={() => handleLinkClick('#video-product')} role="button">{t("service_video_product_title")}</a></li>
                  <li><a onClick={() => handleLinkClick('#video-social')} role="button">{t("service_video_social_title")}</a></li>
                </ul>
              </li>
            </ul>
          </li>
          
          {/* ❌ ELIMINADO: Se quita Portafolio. */}

          <li><a onClick={() => handleLinkClick('#clients')} role="button">{t("clients")}</a></li>
          {/* ❌ ELIMINADO: Se quita el enlace a #team */}
          
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