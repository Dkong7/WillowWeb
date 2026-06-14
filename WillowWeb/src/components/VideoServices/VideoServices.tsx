import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./VideoServices.css";
import React from "react";

// Helper component for text formatting
const FormattedBody: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split("\n");
  const colorBase = 'var(--color-video-base)'; // FIX #2: Use video color base for titles/lists

  return (
    <div className="formatted-description">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        // Check for **Title** (Section Title)
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          return (
            <p key={i} className="section-title-body">
              {/* FIX #2: Use colorBase for internal titles */}
              <strong style={{ fontFamily: 'Albertus Medium', color: colorBase }}>{trimmed.slice(2, -2)}</strong>
            </p>
          );
        }
        // Check for * Item (List Item)
        if (trimmed.startsWith("*")) {
          return (
            // FIX #2: Pass inline style to enable list marker color
            <li key={i} className="detail-list-item" style={{ '--list-color': colorBase } as React.CSSProperties}>
              {trimmed.slice(1).trim()}
            </li>
          );
        }
        return trimmed ? <p key={i}>{trimmed}</p> : null;
      })}
    </div>
  );
};


// -----------------------------------------------------------
// Music Player Logic (Used on Music Production Page)
// -----------------------------------------------------------
// Este componente se mantuvo del código anterior para que no haya conflicto al ser importado/usado por MusicProductionPage
interface PlayerProps {
  artistTitleKey: string;
  playerColorVar: string;
  inverted?: boolean;
  videoUrl: string;
  songSource: string;
  albumArt: string;
}

const MusicPlayerSection: React.FC<PlayerProps> = ({
  artistTitleKey,
  playerColorVar,
  inverted = false,
  videoUrl,
  songSource,
  albumArt,
}) => {
  const { t } = useTranslation();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(0);
  const [showVolume, setShowVolume] = useState(false);

  const artistTitle = t(artistTitleKey);
  const songTitle = t("music_song_title");
  
  const socialIcons = {
    tidal: "/tidal-color.svg",
    spotify: "/spoty-color.svg",
    applemusic: "/apple-music.svg",
    youtube: "/yt-color.svg",
    instagram: "/ig-color.svg",
    tiktok: "/tiktok-color.svg",
  };

  const socialLinksKey = artistTitleKey === "music_player_leo_title" ? "social_links_leo" : "social_links_dkong";
  const socialLinks = t(socialLinksKey, { returnObjects: true }) as Record<
    string,
    string
  >;

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("play() failed:", err);
          setIsPlaying(false);
        });
    }
  };

  const toggleLoop = () => {
    if (!audioRef.current) return;
    audioRef.current.loop = !isLooping;
    setIsLooping(!isLooping);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / (audio.duration || 1)) * 100 || 0);
    };

    audio.volume = volume / 100;
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, [volume]);

  const onProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const newTime = (parseFloat(e.target.value) / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseInt(e.target.value, 10);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v / 100;
  };

  const playerStyleVars = {
    "--player-color-base": playerColorVar,
  } as React.CSSProperties;
  
  // Obtener la descripción traducida
  const artistDescriptionKey = artistTitleKey === "music_player_leo_title" ? "description_leo" : "description_dkong";
  const artistDescription = t(artistDescriptionKey);


  return (
    <div
      className={`artist-section ${inverted ? "inverted" : ""}`}
      style={playerStyleVars}
    >
      
      {/* ENCABEZADO DE ARTISTA (SOLO PARA LEO: NO INVERTIDO) */}
      {!inverted && (
        <h2 className="artist-name-title" style={{ color: playerColorVar }}>
          {artistTitle}
        </h2>
      )}

      <div className="artist-layout">
        
        {/* COLUMNA DE INFORMACIÓN */}
        <div className="info-column">

          {/* ENCABEZADO DE ARTISTA (SOLO PARA DKONG: INVERTIDO) */}
          {inverted && (
            <div className="video-title-right">
              <h2
                className="artist-name-title leo-title-right"
                style={{ color: playerColorVar }}
              >
                {artistTitle}
              </h2>
            </div>
          )}
          
          <p className="music-title-info">{songTitle}</p>
          
          <div className="video-wrapper">
            <iframe
              src={videoUrl}
              title={artistTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="description-container">
            <h4 className="description-subtitle">
              {t("description") || "Descripción"}
            </h4>
            <FormattedBody content={artistDescription} />
          </div>

          <Link
            to="/contact"
            className="modal-cta-button"
            style={{
              backgroundColor: playerColorVar,
              color: "var(--color-bg)",
              border: `2px solid ${playerColorVar}`,
              width: "100%",
              textAlign: "center",
              padding: "0.75rem 1.5rem",
              marginTop: "2rem",
            }}
          >
            {t("modal_pricing_cta")}
          </Link>
        </div>

        {/* COLUMNA DEL REPRODUCTOR */}
        <div className="player-column">
          <div className="album-art-wrapper">
            <img src={albumArt} alt="Album Art" className="album-art" />
            <audio ref={audioRef} preload="metadata">
              <source src={songSource} type="audio/mpeg" />
            </audio>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={Math.round(progress)}
            onChange={onProgressChange}
            className="progress-bar"
            aria-label="Track progress"
          />

          <div className="player-controls compact">
            <button className="control-button prev" aria-label="Anterior" title="Anterior">
              {"|<"}
            </button>

            <div className="volume-inline-wrapper">
              <button
                className="control-button volume-toggle"
                onClick={() => setShowVolume(!showVolume)}
                aria-label="Volumen"
                title="Volumen"
              >
                V
              </button>

              {showVolume && (
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={onVolumeChange}
                  className="volume-slider-popup"
                  aria-label="Control de volumen"
                />
              )}
            </div>

            <button
              className="control-button play-pause"
              onClick={togglePlayPause}
              aria-label="Play/Pause"
            >
              {isPlaying ? "||" : ">"}
            </button>

            <button className="control-button next" aria-label="Siguiente">
              {">|"}
            </button>

            <button
              className={`control-button repeat ${isLooping ? "active" : ""}`}
              onClick={toggleLoop}
              aria-label="Repetir"
            >
              R
            </button>
          </div>

          <div className="track-list-container">
            <h4 className="track-list-header">{t("track_list_header")}</h4>
            <ul className="track-list">
              <li className="track-item active">1. {songTitle}</li>
              <li className="track-item">2. {artistTitle} - Demo</li>
            </ul>
          </div>

          <div className="social-links">
            {Object.entries(socialIcons).map(([key, path]) => (
              <a
                key={key}
                href={socialLinks[key] && socialLinks[key] !== '#' ? socialLinks[key] : "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
              >
                <img src={path} alt={key} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


// -----------------------------------------------------------
// NEW COMPONENT: VideoServicesCards for the Home Page
// -----------------------------------------------------------

interface ServiceCardContent {
  id: string;
  iconSrc: string;
  i18nTitleKey: string;
  i18nCopyKey: string;
  i18nDescTitleKey: string;
  i18nDescBodyKey: string;
  videoUrlKey: string;
}

interface PortfolioVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardTitle: string; 
  descTitle: string;
  descBody: string;
  videoUrl: string;
  iconSrc: string;
}

// Video Modal - Simplified for Video Services
const PortfolioVideoModal: React.FC<PortfolioVideoModalProps> = ({ isOpen, onClose, cardTitle, descTitle, descBody, videoUrl, iconSrc }) => {
    const { t } = useTranslation();
    const modalContentRef = useRef<HTMLDivElement>(null);

    // FIX CRÍTICO: Scroll al top de la ventana al abrir el modal y asegurar que el contenido interno también esté arriba
    useEffect(() => {
        if (isOpen) {
            // Usa setTimeout para asegurar que el scroll ocurra DESPUÉS de que el modal es visible
            setTimeout(() => {
                window.scrollTo(0, 0); // Scroll la página principal al top
                if (modalContentRef.current) {
                    modalContentRef.current.scrollTop = 0; // Scroll el contenido del modal al top
                }
            }, 0); 
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        // El CSS de modal-backdrop y modal-content controla la posición TOP
        <div className="modal-backdrop"> 
          <div className="modal-content video-modal-content" ref={modalContentRef}>
            <button className="modal-close-button" onClick={onClose} aria-label={t("close") || "Close"}>
              ×
            </button>
            
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
                    // No filter needed here, CSS handles filter: none
                />
                {/* FIX #2: Use main card title (with video color) as H3/main title of the modal */}
                <h3 className="modal-desc-title">{cardTitle}</h3> 
                {/* FIX #2: Use secondary/reel title as H4/subtitle */}
                <h4 className="modal-service-title">{descTitle}</h4>
                <FormattedBody content={descBody} />

                <button className="modal-cta-button" onClick={() => window.open('/contact', '_self')} style={{ border: `2px solid var(--color-video-base)`, color: `var(--color-video-base)` }}>
                    {t("modal_pricing_cta")}
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

// Data for Video Cards (Only 3)
const videoProdCard: ServiceCardContent = {
  id: 'video-prod', 
  iconSrc: `${import.meta.env.BASE_URL}icono-audiovisual.svg`, 
  i18nTitleKey: "video_prod_title", // FIX: Restored to use the descriptive title from JSON
  i18nCopyKey: "video_prod_copy", // FIX: Restored to use the descriptive copy from JSON
  i18nDescTitleKey: "portfolio_video_prod_desc_title", // Modal Title
  i18nDescBodyKey: "portfolio_video_prod_desc_body", // Modal Body
  videoUrlKey: "portfolio_video_prod_video_url",
};

const videoPostProdCard: ServiceCardContent = {
  id: 'video-post', 
  iconSrc: `${import.meta.env.BASE_URL}icono-postvideo.svg`, 
  i18nTitleKey: "video_post_title",
  i18nCopyKey: "video_post_copy",
  i18nDescTitleKey: "portfolio_video_post_prod_desc_title",
  i18nDescBodyKey: "portfolio_video_post_prod_desc_body",
  videoUrlKey: "portfolio_video_post_prod_video_url",
};

const videoAnimCard: ServiceCardContent = {
  id: 'video-anim', 
  iconSrc: `${import.meta.env.BASE_URL}icono-animacion.svg`, 
  i18nTitleKey: "video_motion_title",
  i18nCopyKey: "video_motion_copy",
  i18nDescTitleKey: "portfolio_video_anim_desc_title",
  i18nDescBodyKey: "portfolio_video_anim_desc_body",
  videoUrlKey: "portfolio_video_anim_video_url",
};

// Component for a single Video Card
const VideoServiceCard: React.FC<{ content: ServiceCardContent }> = ({ content }) => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAction = () => {
      setIsModalOpen(true);
  }

  const closeModal = () => setIsModalOpen(false);

  // Lógica para seleccionar la URL correcta del video
  const isSpanish = i18n.language.startsWith('es');
  
  let modalVideoUrl = t(content.videoUrlKey); 
  
  // URL Específica por ID y por idioma
  if (content.id === 'video-prod') {
      modalVideoUrl = isSpanish ? t('portfolio_video_prod_video_url_es') : t('portfolio_video_prod_video_url_en');
  } else if (content.id === 'video-post') {
      modalVideoUrl = isSpanish ? t('portfolio_video_post_prod_video_url_es') : t('portfolio_video_post_prod_video_url_en');
  } else if (content.id === 'video-anim') {
      modalVideoUrl = isSpanish ? t('portfolio_video_anim_video_url_es') : t('portfolio_video_anim_video_url_en');
  }


  const modalDescTitle = t(content.i18nDescTitleKey);
  const modalDescBody = t(content.i18nDescBodyKey);
  const cardTitle = t(content.i18nTitleKey);
  const cardCopy = t(content.i18nCopyKey);


  return (
    <>
      <div className="service-card-container video-service-card" id={content.id}> 
        <div className="card-icon-column">
          <img 
            src={content.iconSrc} 
            alt={cardTitle} 
            className="service-icon"
            // FILTRO ELIMINADO: Se controla en CSS para restaurar el color original
          />
        </div>
        
        <div className="card-content-column">
          <h3 className="card-title">{cardTitle}</h3>
          <p className="card-copy">{cardCopy}</p>
        </div>

        <div className="card-button-column">
          <button className="portfolio-button" onClick={handleOpenAction} style={{ backgroundColor: 'var(--color-video-base)', color: 'var(--color-bg)' }}>
            {t("portfolio_button")}
          </button>
        </div>
      </div>

      <PortfolioVideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          cardTitle={cardTitle} // FIX #2: Pass cardTitle
          descTitle={modalDescTitle}
          descBody={modalDescBody}
          videoUrl={modalVideoUrl}
          iconSrc={content.iconSrc}
      />
    </>
  );
};


// Componente Principal de Servicios de Video (NUEVO)
export function VideoServices() {
  const services = [videoProdCard, videoPostProdCard, videoAnimCard]; 

  return (
    <div className="video-services-list"> 
      {services.map((service) => (
        <VideoServiceCard key={service.id} content={service} />
      ))}
    </div>
  );
}