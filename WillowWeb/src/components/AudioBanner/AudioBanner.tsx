import { useTranslation } from "react-i18next";
import "./AudioBanner.css";

export default function AudioBanner() {
    const { t } = useTranslation();
    const basePath = import.meta.env.BASE_URL;

    return (
        // Se usa el ID 'services' para que la navegación principal funcione
        <section id="services" className="audio-banner-section"> 
            <div className="audio-banner-texture-layer">
                {/* Esta capa tiene la textura y el filtro dinámico de inversión */}
            </div>
            
            {/* 🚨 CAPA DE COLOR NARANJA CON BLEND MODE */}
            <div className="audio-banner-color-layer">
                {/* Esta capa aplica el color naranja con 'overlay' a la textura de abajo */}
            </div>
            
            <div className="audio-banner-content">
                <div className="audio-banner-header">
                    <div className="audio-banner-icon">
                        <img 
                            src={basePath + "icono-audio.svg"} 
                            alt={t('audio_service_banner_title') + " icon"} 
                        />
                    </div>
                    <h1 className="audio-banner-title">{t('audio_service_banner_title')}</h1>
                </div>
            </div>
        </section>
    );
}