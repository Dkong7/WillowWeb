import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const basePath = import.meta.env.BASE_URL;

// Componente SocialIcon adaptado para usar SVGs
const SocialIcon: React.FC<{ url: string; iconPath: string; name: string }> = ({ url, iconPath, name }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={name}>
        {/* Usando la ruta SVG */}
        <img src={basePath + iconPath} alt={name} className="social-icon-img" />
    </a>
);

export default function Footer() {
    const { t } = useTranslation();

    // 🚨 FIX 4: Rutas SVG para iconos de redes sociales
    const socialLinks = [
        { name: "Instagram", iconPath: "ig-icono.svg", url: "https://www.instagram.com/thisiswillowtree" },
        { name: "YouTube", iconPath: "yt-icono.svg", url: "https://www.youtube.com/user/thisiswillowtree" },
        { name: "TikTok", iconPath: "tiktok-icono.svg", url: "https://www.tiktok.com/@thisiswillowtree_" },
    ];
    
    // Lista de enlaces del navbar para reutilizar en el Footer
    const navLinks = [
        { path: "/", label: t("home") },
        { path: "/about", label: t("about") },
        { path: "/contact", label: t("contact") },
        { path: "/#services", label: t("services_title") },
        { path: "/#clients", label: t("clients") },
    ];

    return (
        <footer className="main-footer">
            <div className="footer-container">
                
                {/* COLUMNA 1: NAVEGACIÓN RÁPIDA */}
                <div className="footer-column footer-nav">
                    <h4 className="footer-heading">{t('footer_nav_title')}</h4>
                    <ul className="footer-links-list">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                {link.path.startsWith('/#') ? (
                                    <a href={link.path}>{link.label}</a>
                                ) : (
                                    <NavLink to={link.path}>{link.label}</NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* COLUMNA 2: REDES SOCIALES */}
                <div className="footer-column footer-social">
                    <h4 className="footer-heading">{t('footer_social_title')}</h4>
                    <div className="social-icons-container">
                        {socialLinks.map((link) => (
                            <SocialIcon 
                                key={link.name} 
                                url={link.url} 
                                iconPath={link.iconPath} 
                                name={link.name}
                            />
                        ))}
                    </div>
                </div>

            </div>
            
            {/* COPYRIGHT FINAL */}
            <div className="footer-bottom">
                <p className="developed-by">{t('developed_by')}</p>
            </div>
        </footer>
    );
}