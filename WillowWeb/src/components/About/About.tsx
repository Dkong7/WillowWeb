import { useTranslation } from "react-i18next";
import "./About.css";

export default function About() {
    const { t } = useTranslation();
    const basePath = import.meta.env.BASE_URL;

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                
                {/* Lado Izquierdo: Imagen Destacada (basado en el diseño) */}
                <div className="about-visuals">
                    <div className="about-image-placeholder">
                        {/* RUTA: La imagen principal de la sección About */}
                        <img 
                            src={basePath + "about-image.webp"} 
                            alt={t('about_title')} 
                            className="about-main-image"
                        />
                    </div>
                </div>

                {/* Lado Derecho: Contenido de Texto */}
                <div className="about-content-card">
                    {/* Título: Usa la fuente Espíritu */}
                    <h1 className="about-title">{t('about_title')}</h1> 
                    {/* Subtítulo: Usa la fuente Advent Pro */}
                    <h2 className="about-subtitle">{t('about_subtitle')}</h2>
                    {/* Cuerpo: Usa la fuente Advent Pro */}
                    <p className="about-body">{t('about_body')}</p>
                    <a href="#team" className="about-cta-button">
                        {t('about_cta')}
                    </a>
                </div>
            </div>
        </section>
    );
}