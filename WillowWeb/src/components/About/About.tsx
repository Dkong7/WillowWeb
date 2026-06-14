import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react"; // 🚨 FIX: Se eliminó 'React,' para quitar la advertencia
import "./About.css";

export default function About() {
    const { t } = useTranslation();
    const basePath = import.meta.env.BASE_URL;
    
    // PARALLAX LOGIC: Estado para rastrear el desplazamiento vertical
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        // Limpieza: Remueve el listener
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Coeficientes de movimiento (Ajustados para el efecto de doble capa)
    const parallaxDepthForeground = scrollY * 0.05; // Movimiento más lento para la imagen principal
    const parallaxDepthBackground = scrollY * 0.10; // Movimiento más rápido para la imagen de fondo

    // Base de posicionamiento (coincide con los valores de top/left del CSS)
    const mainImageBaseTop = 4;
    const mainImageBaseLeft = 3; 

    // Estilos calculados para el parallax
    const mainImageParallaxStyle = { 
        // Combina el centrado estático (-50%, -50%) con el desplazamiento dinámico (translateY)
        transform: `translate(-50%, -50%) translateY(${parallaxDepthForeground}px)`,
        top: `${mainImageBaseTop}%`,
        left: `${mainImageBaseLeft}%`
    };

    const bgImageParallaxStyle = { 
        transform: `translateY(${parallaxDepthBackground}px)`,
    };


    return (
        <section id="about" className="about-section">
            <div className="about-container">
                
                {/* Lado Izquierdo: IMÁGENES DOBLES (Visuals - Stage 3) */}
                <div className="about-visuals">
                    <div className="about-image-placeholder">
                        {/* 1. Imagen de Fondo (Parallax MÁS RÁPIDA) */}
                        <img 
                            src={basePath + "backQuienesSomos.png"} 
                            alt={t('about_title') + " background"} 
                            className="about-background-image anim-delay-3"
                            style={bgImageParallaxStyle}
                        />
                        {/* 2. Imagen Frontal (Parallax MÁS LENTA + Zoom al hover) */}
                        <img 
                            src={basePath + "quienesSomos.png"} 
                            alt={t('about_title') + " main"} 
                            className="about-main-image anim-delay-4"
                            style={mainImageParallaxStyle}
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