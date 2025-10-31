import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./AudioServices.css"; 
import React from 'react';
import { Link } from "react-router-dom"; // AÑADIDO: Importación para el enlace a la página

// --- Componente de Formato de Cuerpo de Texto (FormattedBody) ---
const FormattedBody: React.FC<{ content: string }> = ({ content }) => {
  // 1. Dividir por salto de línea
  const lines = content.split('\n');
  
  return (
    <div className="formatted-description">
      {lines.map((line, lIndex) => {
        const trimmedLine = line.trim();
        
        // 2. Título de sección (Doble asterisco: **Título**)
        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
          const title = trimmedLine.substring(2, trimmedLine.length - 2);
          return <p key={lIndex} className="section-title-body"><strong>{title}</strong></p>;
        }
        
        // 3. Ítem de lista (Asterisco: * Item)
        if (trimmedLine.startsWith('*')) {
          const text = trimmedLine.substring(1).trim();
          return <li key={lIndex}>{text}</li>;
        }

        // 4. Párrafo o línea normal
        if (trimmedLine) {
            // Manejar un salto de línea simple para crear un <p> si no es un ítem de lista
            return <p key={lIndex}>{trimmedLine}</p>;
        }
        return null; // Ignorar líneas vacías
      })}
    </div>
  );
};
// -----------------------------------------------------------------

// Interfaz para la Modal (lo que se muestra)
interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  descTitle: string;
  descBody: string;
  videoUrl: string;
  iconSrc: string;
  modalGradient: string; // AÑADIDO
}

// Componente Modal Flotante (Portfolio)
const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, descTitle, descBody, videoUrl, iconSrc, modalGradient }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  // Lógica para identificar la tarjeta de Grabación Profesional
  const isRecordingCard = descTitle.includes(t('portfolio_audio_rec_desc_title'));

  let mainDescriptionContent = descBody;
  let equipmentBlocks: string[] = []; 
  
  // Lógica para separar la descripción principal del equipamiento (solo en la tarjeta de Grabación)
  if (isRecordingCard) {
    const parts = descBody.split('\n\n');
    mainDescriptionContent = parts[0] || ''; // Primer párrafo es la descripción principal
    
    if (parts.length > 1) {
        const rawBlocks = parts.slice(1);
        
        // Asumiendo que los 3 bloques restantes son Micrófonos, Instrumentos y Equipos de Audio
        if (rawBlocks.length >= 3) {
            equipmentBlocks = [rawBlocks[0], rawBlocks[1], rawBlocks[2]];
        }
    }
  }

  // APLICACIÓN DEL GRADIENTE
  const modalStyle = {
    background: modalGradient, 
  } as React.CSSProperties;


  return (
    <div className="modal-backdrop">
      {/* APLICADO EL ESTILO DE GRADIENTE AQUÍ */}
      <div className="modal-content" style={modalStyle}> 
        <button className="modal-close-button" onClick={onClose} aria-label={t("close") || "Close"}>
          ×
        </button>
        
        {/* 1. SECCIÓN DE VIDEO Y DESCRIPCIÓN PRINCIPAL (2 COLUMNAS) */}
        <div className="modal-two-columns">
          <div className="modal-video-container">
            <iframe
              src={videoUrl}
              title={descTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="modal-description-container">
            <img src={iconSrc} alt="Icono de Servicio" className="modal-icon" />
            <h3 className="modal-desc-title">{descTitle}</h3>
            {/* Renderiza solo la descripción principal (o el cuerpo completo si no es la tarjeta de grabación) */}
            <FormattedBody content={mainDescriptionContent} />

            {/* 🚀 PUNTO 5: Botón de Call to Action para preguntar por precios */}
            <button className="modal-cta-button" onClick={() => window.open('/contact', '_self')}>
                {t("modal_pricing_cta")}
            </button>
          </div>
        </div>
        
        {/* 2. SECCIÓN DE EQUIPAMIENTO (3 COLUMNAS) - SOLO PARA GRABACIÓN PROFESIONAL */}
        {isRecordingCard && equipmentBlocks.length >= 3 && (
            <div className="modal-equipment-section">
                <h3 className="equipment-header">{t('portfolio_equipment_header')}</h3>
                <div className="modal-equipment-grid">
                    {/* Los bloques ya contienen el título y la lista internamente */}
                    {equipmentBlocks.map((block, index) => (
                        <div key={index} className="equipment-column">
                            <FormattedBody content={block} />
                        </div>
                    ))}
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

// Interfaz para el contenido de la Card
interface ServiceCardContent {
  id: string;
  iconSrc: string;
  i18nTitleKey: string;
  i18nCopyKey: string;
  i18nDescTitleKey: string;
  i18nDescBodyKey: string;
  videoUrlKey: string;
  modalGradient: string; // AÑADIDO
}

// COLORES PARA EL GRADIENTE
const RECORDING_COLOR = "#e86c10"; // Naranja
const MIXMASTER_COLOR = "#7a4ed4"; // Púrpura
const GRADIENT_END = "rgba(0, 0, 0, 0.7)"; // Negro semi-transparente

// Datos de la Card 1: Producción Musical
const audioProdCard: ServiceCardContent = {
  id: 'audio-prod', 
  iconSrc: `${import.meta.env.BASE_URL}icono-prod-musical.svg`, 
  i18nTitleKey: "service_audio_prod_title",
  i18nCopyKey: "service_audio_prod_copy",
  i18nDescTitleKey: "portfolio_audio_prod_desc_title",
  i18nDescBodyKey: "portfolio_audio_prod_desc_body",
  videoUrlKey: "portfolio_audio_prod_video_url",
  modalGradient: 'none', // No aplica gradiente ya que es un enlace
};

// Datos de la Card 2: Grabación Profesional
const audioRecordingCard: ServiceCardContent = {
  id: 'audio-rec', 
  iconSrc: `${import.meta.env.BASE_URL}icono-grabacion.svg`, 
  i18nTitleKey: "service_audio_rec_title",
  i18nCopyKey: "service_audio_rec_copy",
  i18nDescTitleKey: "portfolio_audio_rec_desc_title",
  i18nDescBodyKey: "portfolio_audio_rec_desc_body",
  videoUrlKey: "portfolio_audio_rec_video_url",
  modalGradient: `linear-gradient(180deg, ${RECORDING_COLOR} 0%, ${GRADIENT_END} 100%)`, // Gradiente de Naranja a Negro
};

// Datos de la Card 3: Mezcla & Mastering (CONSOLIDADO)
const audioMixMasterCard: ServiceCardContent = {
  id: 'audio-mix-master', 
  iconSrc: `${import.meta.env.BASE_URL}icono-master.svg`, 
  i18nTitleKey: "service_audio_mix_master_title",
  i18nCopyKey: "service_audio_mix_master_copy",
  i18nDescTitleKey: "portfolio_audio_mix_master_desc_title",
  i18nDescBodyKey: "portfolio_audio_mix_master_desc_body", 
  videoUrlKey: "portfolio_audio_mix_master_video_url", 
  modalGradient: `linear-gradient(180deg, ${MIXMASTER_COLOR} 0%, ${GRADIENT_END} 100%)`, // Gradiente de Púrpura a Negro
};


// Componente de la Card de Servicio (MODIFICADO)
const ServiceCard: React.FC<{ content: ServiceCardContent }> = ({ content }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Nuevo: Determinar si es la tarjeta de Producción Musical
  const isProductionCard = content.id === 'audio-prod';

  // Lógica para seleccionar la URL correcta del video
  let modalVideoUrl = t(content.videoUrlKey);

  if (content.id === 'audio-rec') {
      modalVideoUrl = t('portfolio_audio_rec_video_url', { 
        defaultValue: modalVideoUrl
      });
  } else if (content.id === 'audio-mix-master') {
      modalVideoUrl = t('portfolio_audio_mix_master_video_url', {
        defaultValue: modalVideoUrl
      });
  }
  
  const modalDescTitle = t(content.i18nDescTitleKey);
  const modalDescBody = t(content.i18nDescBodyKey);
  const cardTitle = t(content.i18nTitleKey);
  const cardCopy = t(content.i18nCopyKey);

  // Lógica para el botón: Link para Producción Musical, Button para Modal
  const ActionButton = isProductionCard ? (
    <Link to="/music-production" className="portfolio-button">
        {t("portfolio_button")}
    </Link>
  ) : (
    <button className="portfolio-button" onClick={openModal}>
      {t("portfolio_button")}
    </button>
  );

  return (
    <>
      <div className="service-card-container" id={content.id}> 
        <div className="card-icon-column">
          <img src={content.iconSrc} alt={cardTitle} className="service-icon" />
        </div>
        
        <div className="card-content-column">
          <h3 className="card-title">{cardTitle}</h3>
          <p className="card-copy">{cardCopy}</p>
        </div>

        <div className="card-button-column">
          {ActionButton}
        </div>
      </div>

      {/* Solo renderizar el Modal si NO es la tarjeta de Producción */}
      {!isProductionCard && (
          <PortfolioModal
            isOpen={isModalOpen}
            onClose={closeModal}
            descTitle={modalDescTitle}
            descBody={modalDescBody}
            videoUrl={modalVideoUrl}
            iconSrc={content.iconSrc}
            modalGradient={content.modalGradient} // PASANDO EL GRADIENTE
          />
      )}
    </>
  );
};

// Componente Principal de Servicios
export default function AudioServices() {
  
  // Array con solo las 3 tarjetas de servicio: Producción, Grabación, Mezcla&Mastering
  const services = [audioProdCard, audioRecordingCard, audioMixMasterCard]; 

  return (
    <div className="audio-services-list"> 
      {services.map((service) => (
        <ServiceCard key={service.id} content={service} />
      ))}
    </div>
  );
}