import { useState } from "react";
import { useTranslation } from "react-i18next";
// Reutilizamos el CSS base de AudioServices
import "../AudioServices/AudioServices.css"; 
import React from 'react';

// NOTA: Asumimos que los componentes utilitarios (FormattedBody y PortfolioModal) 
// están definidos correctamente en AudioServices.tsx

// Interfaz para el contenido de la Card (la misma de AudioServices)
interface ServiceCardContent {
  id: string;
  iconSrc: string;
  i18nTitleKey: string;
  i18nCopyKey: string;
  i18nDescTitleKey: string;
  i18nDescBodyKey: string;
  videoUrlKey: string;
  colorVar?: string;
}

const basePath = import.meta.env.BASE_URL;

// 🚨 FIX 1: Rutas de iconos de Video Services actualizadas a SVG

// Card 1: Producción Audiovisual
const videoProdCard: ServiceCardContent = {
  id: 'video-prod', 
  iconSrc: `${basePath}icono-audiovisual.svg`, // <--- RUTA CORREGIDA
  i18nTitleKey: "service_video_prod_title",
  i18nCopyKey: "service_video_prod_copy",
  i18nDescTitleKey: "portfolio_video_prod_desc_title",
  i18nDescBodyKey: "portfolio_video_prod_desc_body",
  videoUrlKey: "portfolio_video_prod_video_url",
};

// Card 2: Post-producción Audiovisual
const videoPostProdCard: ServiceCardContent = {
  id: 'video-post-prod', 
  iconSrc: `${basePath}icono-postvideo.svg`, // <--- RUTA CORREGIDA
  i18nTitleKey: "service_video_post_prod_title",
  i18nCopyKey: "service_video_post_prod_copy",
  i18nDescTitleKey: "portfolio_video_post_prod_desc_title",
  i18nDescBodyKey: "portfolio_video_post_prod_desc_body",
  videoUrlKey: "portfolio_video_post_prod_video_url",
};

// Card 3: Animación y Motion Graphics
const videoAnimCard: ServiceCardContent = {
  id: 'video-anim', 
  iconSrc: `${basePath}icono-animacion.svg`, // <--- RUTA CORREGIDA
  i18nTitleKey: "service_video_anim_title",
  i18nCopyKey: "service_video_anim_copy",
  i18nDescTitleKey: "portfolio_video_anim_desc_title",
  i18nDescBodyKey: "portfolio_video_anim_desc_body",
  videoUrlKey: "portfolio_video_anim_video_url",
};

// Card 4: 3D modeling
const video3DCard: ServiceCardContent = {
  id: 'video-3d', 
  iconSrc: `${basePath}icono-3dmodelado.svg`, // <--- RUTA CORREGIDA
  i18nTitleKey: "service_video_3d_title",
  i18nCopyKey: "service_video_3d_copy",
  i18nDescTitleKey: "portfolio_video_3d_desc_title",
  i18nDescBodyKey: "portfolio_video_3d_desc_body",
  videoUrlKey: "portfolio_video_3d_video_url",
};

// Card 5: Video de producto
const videoProductCard: ServiceCardContent = {
  id: 'video-product', 
  iconSrc: `${basePath}icono-producto.svg`, // <--- RUTA CORREGIDA
  i18nTitleKey: "service_video_product_title",
  i18nCopyKey: "service_video_product_copy",
  i18nDescTitleKey: "portfolio_video_product_desc_title",
  i18nDescBodyKey: "portfolio_video_product_desc_body",
  videoUrlKey: "portfolio_video_product_video_url",
};

// Card 6: Contenido para redes sociales
const videoSocialCard: ServiceCardContent = {
  id: 'video-social', 
  iconSrc: `${basePath}icono-media.svg`, // <--- RUTA CORREGIDA
  i18nTitleKey: "service_video_social_title",
  i18nCopyKey: "service_video_social_copy",
  i18nDescTitleKey: "portfolio_video_social_desc_title",
  i18nDescBodyKey: "portfolio_video_social_desc_body",
  videoUrlKey: "portfolio_video_social_video_url",
};


const ServiceCardLocal: React.FC<{ content: ServiceCardContent; colorVar: string }> = ({ content, colorVar }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const modalVideoUrl = t(content.videoUrlKey);
  const modalDescTitle = t(content.i18nDescTitleKey);
  const modalDescBody = t(content.i18nDescBodyKey);
  const cardTitle = t(content.i18nTitleKey);
  const cardCopy = t(content.i18nCopyKey);

  const cardStyle = { 
    '--card-accent-color': colorVar,
    '--card-accent-sub-tenue': 'var(--color-video-sub-tenue)' 
  } as React.CSSProperties;

  return (
    <>
      <div className="service-card-container" id={content.id} style={cardStyle}> 
        <div className="card-icon-column">
          <img src={content.iconSrc} alt={cardTitle} className="service-icon" />
        </div>
        
        <div className="card-content-column">
          <h3 className="card-title">{cardTitle}</h3>
          <p className="card-copy">{cardCopy}</p>
        </div>

        <div className="card-button-column">
          <button className="portfolio-button" onClick={openModal}>
            {t("portfolio_button")}
          </button>
        </div>
      </div>
    </>
  );
};


export default function VideoServices() {
  
  const services: ServiceCardContent[] = [
    videoProdCard, 
    videoPostProdCard,
    videoAnimCard,
    video3DCard,
    videoProductCard,
    videoSocialCard
  ]; 

  const videoColorVar = "var(--color-video-base)";

  return (
    <div className="audio-services-list"> 
      {services.map((service) => (
        <ServiceCardLocal 
            key={service.id} 
            content={service} 
            colorVar={videoColorVar} 
        />
      ))}
    </div>
  );
}