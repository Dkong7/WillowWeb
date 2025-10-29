import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; 
import "./AudioServices.css"; 
import React from 'react';

// --- Componente de Formato de Cuerpo de Texto (FormattedBody) ---
const FormattedBody: React.FC<{ content: string; isVideo?: boolean }> = ({ content, isVideo = false }) => {
  const lines = content.split('\n');
  // Se determina el color base para títulos y el guión de la lista
  const colorBase = isVideo ? 'var(--color-video-base)' : 'var(--color-audio-base)';
  
  return (
    <div className="formatted-description">
      {lines.map((line, lIndex) => {
        const trimmedLine = line.trim();
        
        // 2. Título de sección (**Título**)
        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
          const title = trimmedLine.substring(2, trimmedLine.length - 2);
          return <p key={lIndex} className="section-title-body"><strong style={{ fontFamily: 'Albertus Medium', color: colorBase }}>{title}</strong></p>;
        }
        
        // 3. Ítem de lista (* Item)
        if (trimmedLine.startsWith('*')) {
          const text = trimmedLine.substring(1).trim();
          // Se pasa el color base como variable CSS inline para que el CSS pueda aplicarlo al guion (li::before)
          return <li key={lIndex} style={{ '--list-color': colorBase } as React.CSSProperties}>{text}</li>;
        }

        // 4. Párrafo o línea normal
        if (trimmedLine) {
            return <p key={lIndex}>{trimmedLine}</p>;
        }
        return null;
      })}
    </div>
  );
};
// -----------------------------------------------------------------

// Interfaz para la Modal (solo para Grabación, Mezcla/Master)
interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  descTitle: string;
  descBody: string;
  id: string; // Para identificar el tipo de tarjeta
  iconSrc: string;
}

// Componente Modal Flotante (Portfolio) - S\u00f3lo para Grabaci\u00f3n, Mezcla y Master
const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, descTitle, descBody, id, iconSrc }) => {
  const { t, i18n } = useTranslation();
  const modalContentRef = useRef<HTMLDivElement>(null);
  
  // FIX: Scroll al top al abrir el modal
  useEffect(() => {
    if (isOpen && modalContentRef.current) {
        requestAnimationFrame(() => {
            if (modalContentRef.current) {
                modalContentRef.current.scrollTop = 0;
            }
        });
    }
  }, [isOpen]);
  
  if (!isOpen) return null;

  // L\u00f3gica para identificar la tarjeta de Grabaci\u00f3n Profesional o Mezcla/Master
  const isRecordingCard = id === 'audio-rec';
  const isMixMasterCard = id === 'audio-mix-master';

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

  // Lógica de URL dinámica para Grabación y Mezcla/Master
  let videoSource = `https://www.youtube.com/embed/placeholder?autoplay=1&mute=1&controls=1&rel=0&playsinline=1`;
  if (isRecordingCard) {
      // Uso de URL dinámica ES/EN para Grabación
      videoSource = i18n.language.startsWith('es') ? t('portfolio_audio_rec_video_url_es') : t('portfolio_audio_rec_video_url_en');
  } else if (isMixMasterCard) {
      // Uso de URL dinámica ES/EN para Mezcla/Masterización
      videoSource = i18n.language.startsWith('es') ? t('portfolio_audio_mix_master_video_url_es') : t('portfolio_audio_mix_master_video_url_en');
  }


  return (
    <div className="modal-backdrop">
      <div className="modal-content" ref={modalContentRef}> 
        <button className="modal-close-button" onClick={onClose} aria-label={t("close") || "Close"}>
          ×
        </button>
        
        {/* 1. SECCI\u00d3N DE VIDEO Y DESCRIPCI\u00d3N PRINCIPAL (2 COLUMNAS) */}
        <div className="modal-two-columns">
          <div className="modal-video-container">
            <iframe
              src={videoSource} // Usar URL dinámica
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
                style={{ filter: `var(--icon-audio-filter)` }} // Mantiene el filtro de audio
            />
            {/* TÍTULO DEL MODAL: PORTAFOLIO */}
            <h3 className="modal-desc-title">{t('modal_portfolio_title')}</h3>
            {/* TÍTULO DE SERVICIO */}
            <h4 className="modal-service-title">{descTitle}</h4> 
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
                            <FormattedBody key={index} content={block} />
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
}

// Datos de las Cards (ACTUALIZADOS A 3)
const audioProdCard: ServiceCardContent = {
  id: 'audio-prod', 
  iconSrc: `${import.meta.env.BASE_URL}icono-prod-musical.svg`, 
  i18nTitleKey: "service_audio_prod_title",
  i18nCopyKey: "service_audio_prod_copy",
  i18nDescTitleKey: "portfolio_audio_prod_desc_title",
  i18nDescBodyKey: "portfolio_audio_prod_desc_body",
};

const audioRecordingCard: ServiceCardContent = {
  id: 'audio-rec', 
  iconSrc: `${import.meta.env.BASE_URL}icono-grabacion.svg`, 
  i18nTitleKey: "service_audio_rec_title",
  i18nCopyKey: "service_audio_rec_copy",
  i18nDescTitleKey: "portfolio_audio_rec_desc_title",
  i18nDescBodyKey: "portfolio_audio_rec_desc_body",
};

// Nueva tarjeta de Mezcla y Masterización fusionada
const audioMixMasterCard: ServiceCardContent = {
  id: 'audio-mix-master', 
  iconSrc: `${import.meta.env.BASE_URL}icono-mezcla.svg`, // Usa el icono de mezcla
  i18nTitleKey: "service_audio_mix_master_title", 
  i18nCopyKey: "service_audio_mix_master_copy", 
  i18nDescTitleKey: "portfolio_audio_mix_master_desc_title", 
  i18nDescBodyKey: "portfolio_audio_mix_master_desc_body", 
};


// Componente de la Card de Servicio
const ServiceCard: React.FC<{ content: ServiceCardContent }> = ({ content }) => {
  const { t } = useTranslation();
  const navigate = useNavigate(); 
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función que decide si abre modal o navega
  const handleOpenAction = () => {
      if (content.id === 'audio-prod') {
          // 🚀 ACCIÓN PRINCIPAL: Navegar a la p\u00e1gina dedicada
          navigate('/music-production');
      } else {
          setIsModalOpen(true);
      }
  }

  const closeModal = () => setIsModalOpen(false);

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
            style={{ filter: `var(--icon-audio-filter)` }} // Mantiene el filtro de audio
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
            id={content.id}
            iconSrc={content.iconSrc}
        />
      )}
    </>
  );
};

// Componente Principal de Servicios (LIMPIO)
export default function AudioServices() {
  
  const services = [audioProdCard, audioRecordingCard, audioMixMasterCard]; 

  return (
    // 🚀 Renderiza las 3 tarjetas
    <div className="audio-services-list"> 
      {services.map((service) => (
        <ServiceCard key={service.id} content={service} />
      ))}
    </div>
  );
}