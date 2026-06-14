import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

interface NavbarProps {
  currentTheme: "dark" | "light";
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

  const handleLinkClick = (path: string): void => {
    closeMenu();

    if (path === "/music-production") {
      navigate("/music-production");
      return;
    }

    if (path.startsWith("#")) {
      const hash = path.substring(1);
      if (location.pathname !== "/") {
        navigate(`/${path}`);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const basePath = import.meta.env.BASE_URL;
  const logoSrc = isMobile ? `${basePath}logo-icon.svg` : `${basePath}logo-full.svg`;

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img
            src={logoSrc}
            alt="Willow Tree Logo"
            className="logo-img logo-text-part"
          />
        </NavLink>

        {/* Hamburguesa */}
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
          {/* HOME */}
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive && location.hash === "" ? "active-link" : ""
              }
            >
              {t("home")}
            </NavLink>
          </li>

          {/* SERVICIOS */}
          <li className="has-submenu">
            <a onClick={() => handleLinkClick("#services")} role="button">
              {t("services_title")}
            </a>
            <ul className="submenu">
              {/* AUDIO */}
              <li className="submenu-item">
                <a role="button" className="submenu-audio">
                  AUDIO
                </a>
                <ul className="sub-submenus">
                  {/* 🎼 Producción Musical */}
                  <li>
                    <a
                      onClick={() => handleLinkClick("/music-production")}
                      role="button"
                    >
                      🎼 {t("audio_prod")}
                    </a>
                  </li>
                  {/* Grabación Profesional */}
                  <li>
                    <a
                      onClick={() => handleLinkClick("#audio-rec")}
                      role="button"
                    >
                      {t("service_audio_rec_title")}
                    </a>
                  </li>
                  {/* Mezcla & Master */}
                  <li>
                    <a
                      onClick={() => handleLinkClick("#audio-mix-master")}
                      role="button"
                    >
                      {t("service_audio_mix_master_title")}
                    </a>
                  </li>
                </ul>
              </li>

              {/* VIDEO */}
              <li className="submenu-item">
                <a role="button" className="submenu-video">
                  VIDEO
                </a>
                <ul className="sub-submenus">
                  <li>
                    <a
                      onClick={() => handleLinkClick("#video-prod")}
                      role="button"
                    >
                      {t("video_prod_title")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleLinkClick("#video-post")}
                      role="button"
                    >
                      {t("video_post_title")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => handleLinkClick("#video-anim")}
                      role="button"
                    >
                      {t("video_motion_title")}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* CLIENTES */}
          <li>
            <a onClick={() => handleLinkClick("#clients")} role="button">
              {t("clients")}
            </a>
          </li>

          {/* ABOUT */}
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {t("about")}
            </NavLink>
          </li>

          {/* CONTACTO */}
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {t("contact")}
            </NavLink>
          </li>

          {/* CONTROLES */}
          <li className="controls-group">
            <button className="lang-switch" onClick={toggleLanguage}>
              {i18n.language === "es" ? "EN" : "ES"}
            </button>
            <button
              className="theme-switch"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                currentTheme === "dark" ? "light" : "dark"
              } theme`}
              title={currentTheme === "dark" ? "Modo Claro" : "Modo Oscuro"}
            >
              <span className="theme-icon">
                {currentTheme === "dark" ? "☀️" : "🌙"}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
