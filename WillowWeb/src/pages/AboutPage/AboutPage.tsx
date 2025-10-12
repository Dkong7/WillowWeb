import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react"; 
import "./AboutPage.css"; 

export default function AboutPage() {
    const { t } = useTranslation();
    const basePath = import.meta.env.BASE_URL;
    
    // ❌ ELIMINADO: Se remueve toda la lógica de Parallax para evitar conflictos en página dedicada.
    /*
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const parallaxDepthForeground = scrollY * 0.05;
    const parallaxDepthBackground = scrollY * 0.10; 
    const mainImageBaseTop = 4;
    const mainImageBaseLeft = 3; 

    const mainImageParallaxStyle = { 
        transform: `translate(-50%, -50%) translateY(${parallaxDepthForeground}px)`,
        top: `${mainImageBaseTop}%`,
        left: `${mainImageBaseLeft}%`
    };

    const bgImageParallaxStyle = { 
        transform: `translateY(${parallaxDepthBackground}px)`,
    };
    */
    // 🚨 FIX: Reemplazamos los estilos dinámicos por un objeto vacío, confiando en el CSS estático.
    const staticStyle = {};


    return (
        <section id="about-page" className="about-section">
            <div className="about-container">
                
                {/* Lado Izquierdo: IMÁGENES DOBLES (Visuals - Stage 3) */}
                <div className="about-visuals">
                    <div className="about-image-placeholder">
                        {/* 1. Imagen de Fondo (Ahora estática) */}
                        <img 
                            src={basePath + "backQuienesSomos.png"} 
                            alt={t('about_title') + " background"} 
                            className="about-background-image anim-delay-3"
                            style={staticStyle} // Usamos estilo estático
                        />
                        {/* 2. Imagen Frontal (Ahora estática) */}
                        <img 
                            src={basePath + "quienesSomos.png"} 
                            alt={t('about_title') + " main"} 
                            className="about-main-image anim-delay-4"
                            style={staticStyle} // Usamos estilo estático
                        />
                    </div>
                </div>

                {/* Lado Derecho: Contenido de Texto (Stage 1 & 2) */}
                <div className="about-content-card">
                    {/* Stage 1: Título */}
                    <h1 className="about-title anim-delay-1">{t('about_title')}</h1> 
                    
                    {/* Stage 2: Subtítulo y Cuerpo de Texto */}
                    <h2 className="about-subtitle anim-delay-2">{t('about_subtitle')}</h2>
                    <p className="about-body anim-delay-2">{t('about_body')}</p>
                </div>
            </div>
        </section>
    );
}