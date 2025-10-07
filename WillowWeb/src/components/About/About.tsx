import { useTranslation } from "react-i18next";
import "./About.css";

export default function About() {
    const { t } = useTranslation();
    const basePath = import.meta.env.BASE_URL;

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                
                {/* Lado Izquierdo: IMÁGENES DOBLES (Visuals - Stage 3) */}
                <div className="about-visuals">
                    <div className="about-image-placeholder">
                        {/* 1. Imagen de Fondo (Stage 3a) */}
                        <img 
                            src={basePath + "backQuienesSomos.png"} 
                            alt={t('about_title') + " background"} 
                            className="about-background-image anim-delay-3"
                        />
                        {/* 2. Imagen Frontal (Stage 3b) */}
                        <img 
                            src={basePath + "quienesSomos.png"} 
                            alt={t('about_title') + " main"} 
                            className="about-main-image anim-delay-4"
                        />
                    </div>
                </div>

                {/* Lado Derecho: Contenido de Texto (Stage 1 & 2) */}
                <div className="about-content-card">
                    {/* 🚨 Stage 1: Título */}
                    <h1 className="about-title anim-delay-1">{t('about_title')}</h1> 
                    
                    {/* 🚨 Stage 2: Subtítulo y Cuerpo de Texto */}
                    <h2 className="about-subtitle anim-delay-2">{t('about_subtitle')}</h2>
                    <p className="about-body anim-delay-2">{t('about_body')}</p>
                    
                    {/* 🚨 REMOVIDO: El botón de CTA ha sido removido */}
                </div>
            </div>
        </section>
    );
}