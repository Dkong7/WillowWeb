import { useTranslation } from "react-i18next";
import "./VideoBanner.css";

export default function VideoBanner() {
    const { t } = useTranslation();
    const basePath = import.meta.env.BASE_URL;

    return (
        // Se usa el ID 'video-services' para la navegación desde el navbar
        <section id="video-services" className="video-banner-section"> 
            <div className="video-banner-texture-layer">
                {/* Esta capa tiene la textura y el filtro dinámico de inversión */}
            </div>
            
            {/* 🚨 CAPA DE COLOR PURPURA CON BLEND MODE */}
            <div className="video-banner-color-layer">
                {/* Esta capa aplica el color purpura con 'overlay' a la textura de abajo */}
            </div>
            
            <div className="video-banner-content">
                <div className="video-banner-header">
                    <div className="video-banner-icon">
                        <img 
                            src={basePath + "icono-video.svg"} 
                            alt={t('video_service_banner_title') + " icon"} 
                        />
                    </div>
                    {/* Reutiliza la misma lógica de animación/hover para la consistencia del diseño */}
                    <h1 className="video-banner-title">{t('video_service_banner_title')}</h1>
                </div>
            </div>
        </section>
    );
}