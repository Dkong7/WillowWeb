import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import "./AudioServices.css"; 
import React from 'react';

// --- Componente de Formato de Cuerpo de Texto (FormattedBody) ---
const FormattedBody: React.FC<{ content: string }> = ({ content }) => {
  // 1. Dividir por salto de l\u00ednea
  const lines = content.split('\n');
  
  return (
    <div className="formatted-description">
      {lines.map((line, lIndex) => {
        const trimmedLine = line.trim();
        
        // 2. T\u00edtulo de secci\u00f3n (Doble asterisco: **T\u00edtulo**)
        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
          const title = trimmedLine.substring(2, trimmedLine.length - 2);
          return <p key={lIndex} className="section-title-body"><strong>{title}</strong></p>;
        }
        
        // 3. \u00cdtem de lista (Asterisco: * Item)
        if (trimmedLine.startsWith('*')) {
          const text = trimmedLine.substring(1).trim();
          return <li key={lIndex}>{text}</li>;
        }

        // 4. P\u00e1rrafo o l\u00ednea normal
        if (trimmedLine) {
            // Manejar un salto de l\u00ednea simple para crear un <p> si no es un \u00edtem de lista
            return <p key={lIndex}>{trimmedLine}</p>;
        }
        return null; // Ignorar l\u00edneas vac\u00edas
      })}
    </div>
  );
};
// -----------------------------------------------------------------

// Interfaz para la Modal (solo para Mix/Master/Grabaci\u00f3n)
interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  descTitle: string;
  descBody: string;
  videoUrl: string;
  iconSrc: string;
}

// Componente Modal Flotante (Portfolio) - S\u00f3lo para Grabaci\u00f3n, Mezcla y Master
const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, descTitle, descBody, videoUrl, iconSrc }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  // L\u00f3gica para identificar la tarjeta de Grabaci\u00f3n Profesional
  const isRecordingCard = descTitle.includes(t('portfolio_audio_rec_desc_title'));

  let mainDescriptionContent = descBody;
  let equipmentBlocks: string[] = []; 
  
  // L\u00f3gica para separar la descripci\u00f3n principal del equipamiento (solo en la tarjeta de Grabaci\u00f3n)
  if (isRecordingCard) {
    const parts = descBody.split('\n\n');
    mainDescriptionContent = parts[0] || ''; 
    
    if (parts.length > 1) {
        const rawBlocks = parts.slice(1);
        
        if (rawBlocks.length >= 3) {
            equipmentBlocks = [rawBlocks[0], rawBlocks[1], rawBlocks[2]];
        }
    }
  }


  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose} aria-label={t("close") || "Close"}>
          &times;
        </button>
        
        {/* 1. SECCI\u00d3N DE VIDEO Y DESCRIPCI\u00d3N PRINCIPAL (2 COLUMNAS) */}
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
            <img 
                src={iconSrc} 
                alt="Icono de Servicio" 
                className="modal-icon" 
                style={{ filter: `var(--icon-audio-filter)` }} // Audio Filter
            />
            <h3 className="modal-desc-title">{descTitle}</h3>
            <FormattedBody content={mainDescriptionContent} />

            <button className="modal-cta-button" onClick={() => window.open('/contact', '_self')}>
                {t("modal_pricing_cta")}
            </button>
          </div>
        </div>
        
        {/* 2. SECCI\u00d3N DE EQUIPAMIENTO (3 COLUMNAS) - SOLO PARA GRABACI\u00d3N PROFESIONAL */}
        {isRecordingCard && equipmentBlocks.length >= 3 && (
            <div className="modal-equipment-section">
                <h3 className="equipment-header">{t('portfolio_equipment_header')}</h3>
                <div className="modal-equipment-grid">
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
}

// Datos de las Cards (sin cambios)
const audioProdCard: ServiceCardContent = {
  id: 'audio-prod', 
  iconSrc: `${import.meta.env.BASE_URL}icono-prod-musical.svg`, 
  i18nTitleKey: "service_audio_prod_title",
  i18nCopyKey: "service_audio_prod_copy",
  i18nDescTitleKey: "portfolio_audio_prod_desc_title",
  i18nDescBodyKey: "portfolio_audio_prod_desc_body",
  videoUrlKey: "portfolio_audio_prod_video_url",
};

const audioRecordingCard: ServiceCardContent = {
  id: 'audio-rec', 
  iconSrc: `${import.meta.env.BASE_URL}icono-grabacion.svg`, 
  i18nTitleKey: "service_audio_rec_title",
  i18nCopyKey: "service_audio_rec_copy",
  i18nDescTitleKey: "portfolio_audio_rec_desc_title",
  i18nDescBodyKey: "portfolio_audio_rec_desc_body",
  videoUrlKey: "portfolio_audio_rec_video_url",
};

const audioMixingCard: ServiceCardContent = {
  id: 'audio-mix', 
  iconSrc: `${import.meta.env.BASE_URL}icono-mezcla.svg`, 
  i18nTitleKey: "service_audio_mix_title_card",
  i18nCopyKey: "service_audio_mix_copy",
  i18nDescTitleKey: "portfolio_audio_mix_desc_title",
  i18nDescBodyKey: "portfolio_audio_mix_desc_body",
  videoUrlKey: "portfolio_audio_mix_video_url",
};

const audioMasteringCard: ServiceCardContent = {
  id: 'audio-master', 
  iconSrc: `${import.meta.env.BASE_URL}icono-master.svg`, 
  i18nTitleKey: "service_audio_master_title_card",
  i18nCopyKey: "service_audio_master_copy",
  i18nDescTitleKey: "portfolio_audio_master_desc_title",
  i18nDescBodyKey: "portfolio_audio_master_desc_body",
  videoUrlKey: "portfolio_audio_master_video_url",
};


// Componente de la Card de Servicio (CORREGIDO: Mantiene todas las tarjetas)
const ServiceCard: React.FC<{ content: ServiceCardContent }> = ({ content }) => {
  const { t } = useTranslation();
  const navigate = useNavigate(); 
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funci\u00f3n que decide si abre modal o navega
  const handleOpenAction = () => {
      if (content.id === 'audio-prod') {
          // 🚀 ACCIÓN PRINCIPAL: Navegar a la p\u00e1gina dedicada
          navigate('/music-production');
      } else {
          setIsModalOpen(true);
      }
  }

  const closeModal = () => setIsModalOpen(false);

  const modalVideoUrl = t(content.videoUrlKey);
  const modalDescTitle = t(content.i18nDescTitleKey);
  const modalDescBody = t(content.i18nDescBodyKey);
  const cardTitle = t(content.i18nTitleKey);
  const cardCopy = t(content.i18nCopyKey);


  return (
    <>
      <div className="service-card-container" id={content.id}> 
        <div className="card-icon-column">
          <img 
            src={content.iconSrc} 
            alt={cardTitle} 
            className="service-icon"
            style={{ filter: `var(--icon-audio-filter)` }} // Audio Filter
          />
        </div>
        
        <div className="card-content-column">
          <h3 className="card-title">{cardTitle}</h3>
          <p className="card-copy">{cardCopy}</p>
        </div>

        <div className="card-button-column">
          {/* Botón llama a la acción que redirige o abre modal */}
          <button className="portfolio-button" onClick={handleOpenAction}>
            {content.id === 'audio-prod' ? t("explore") : t("portfolio_button")}
          </button>
        </div>
      </div>

      {/* Solo renderiza el modal si no es la tarjeta de Producci\u00f3n Musical */}
      {content.id !== 'audio-prod' && (
        <PortfolioModal
            isOpen={isModalOpen}
            onClose={closeModal}
            descTitle={modalDescTitle}
            descBody={modalDescBody}
            videoUrl={modalVideoUrl}
            iconSrc={content.iconSrc}
        />
      )}
    </>
  );
};

// Componente Principal de Servicios (LIMPIO)
export default function AudioServices() {
  
  const services = [audioProdCard, audioRecordingCard, audioMixingCard, audioMasteringCard]; 

  return (
    // 🚀 Renderiza las 4 tarjetas
    <div className="audio-services-list"> 
      {services.map((service) => (
        <ServiceCard key={service.id} content={service} />
      ))}
    </div>
  );
}