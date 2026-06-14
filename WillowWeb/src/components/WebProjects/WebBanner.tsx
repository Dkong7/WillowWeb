import { useTranslation } from "react-i18next";
import "./WebBanner.css";

export default function WebBanner() {
    const { t } = useTranslation();
    const basePath = import.meta.env.BASE_URL;

    return (
        <section id="web-services" className="web-banner-section"> 
            <div className="web-banner-texture-layer"></div>
            
            <div className="web-banner-color-layer"></div>
            
            <div className="web-banner-content">
                <div className="web-banner-header">
                    <div className="web-banner-icon">
                        <img 
                            src={basePath + "icono-media.svg"} 
                            alt={t('web_service_banner_title') + " icon"} 
                        />
                    </div>
                    <h1 className="web-banner-title">{t('web_service_banner_title', 'WEB & TRANSMEDIA')}</h1>
                </div>
            </div>
        </section>
    );
}
