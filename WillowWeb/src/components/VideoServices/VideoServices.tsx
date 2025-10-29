import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./VideoServices.css";
import React from "react";

// Helper component for text formatting
const FormattedBody: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split("\n");
  return (
    <div className="formatted-description">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        // Check for **Title** (Section Title)
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          return (
            <p key={i} className="section-title-body">
              <strong style={{ fontFamily: 'Albertus Medium', color: 'var(--color-audio-base)' }}>{trimmed.slice(2, -2)}</strong>
            </p>
          );
        }
        // Check for * Item (List Item)
        if (trimmed.startsWith("*")) {
          return (
            <li key={i} className="detail-list-item">
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
  descTitle: string;
  descBody: string;
  videoUrl: string;
  iconSrc: string;
}

// Video Modal - Simplified for Video Services
const PortfolioVideoModal: React.FC<PortfolioVideoModalProps> = ({ isOpen, onClose, descTitle, descBody, videoUrl, iconSrc }) => {
    const { t } = useTranslation();
    const modalContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && modalContentRef.current) {
            modalContentRef.current.scrollTop = 0;
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
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
                <h3 className="modal-desc-title">{t('modal_reel_title')}</h3>
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
  i18nTitleKey: "video_service_prod_title",
  i18nCopyKey: "video_service_prod_copy",
  i18nDescTitleKey: "portfolio_video_prod_desc_title",
  i18nDescBodyKey: "portfolio_video_prod_desc_body",
  videoUrlKey: "portfolio_video_prod_video_url",
};

const videoPostProdCard: ServiceCardContent = {
  id: 'video-post', 
  iconSrc: `${import.meta.env.BASE_URL}icono-postvideo.svg`, 
  i18nTitleKey: "video_service_post_prod_title",
  i18nCopyKey: "video_service_post_prod_copy",
  i18nDescTitleKey: "portfolio_video_post_prod_desc_title",
  i18nDescBodyKey: "portfolio_video_post_prod_desc_body",
  videoUrlKey: "portfolio_video_post_prod_video_url",
};

const videoAnimCard: ServiceCardContent = {
  id: 'video-anim', 
  iconSrc: `${import.meta.env.BASE_URL}icono-animacion.svg`, 
  i18nTitleKey: "video_service_anim_title",
  i18nCopyKey: "video_service_anim_copy",
  i18nDescTitleKey: "portfolio_video_anim_desc_title",
  i18nDescBodyKey: "portfolio_video_anim_desc_body",
  videoUrlKey: "portfolio_video_anim_video_url",
};

// Component for a single Video Card
const VideoServiceCard: React.FC<{ content: ServiceCardContent }> = ({ content }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAction = () => {
      setIsModalOpen(true);
  }

  const closeModal = () => setIsModalOpen(false);

  const modalVideoUrl = t(content.videoUrlKey);
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


// -----------------------------------------------------------
// ORIGINAL EXPORT: MusicProductionPage (UPDATED)
// -----------------------------------------------------------

interface MusicProductionPageProps {
  // Prop para distinguirlo de la exportación nombrada
  isMusicPage?: boolean; 
}

export default function MusicProductionPage({ isMusicPage = false }: MusicProductionPageProps) {
  const { t, i18n } = useTranslation();
  
  // Si se está importando como VideoServices (nombrado), no renderizar la página de música
  if (!isMusicPage) {
      return null;
  }
  
  // LEO JARAMILLO (First player, not inverted) - Empieza con Leo
  const leoPlayer = {
    artistTitleKey: "music_player_leo_title",
    playerColorVar: "#7a4ed4",
    videoUrl: "https://www.youtube.com/embed/boPHlpclehY", 
    songSource: "/leo-alto.mp3",
    albumArt: "/leo-art.png",
    inverted: false,
  }

  // DKONG (Second player, inverted for visual order)
  const dkongPlayer = {
    artistTitleKey: "music_player_dkong_title",
    playerColorVar: "#ff6a00",
    videoUrl: "https://www.youtube.com/embed/zELzLR0-Qj4", 
    songSource: "/lfc-Jazz.mp3",
    albumArt: "/lfc-art.png",
    inverted: true,
  }
  
  // Array of players starting with LEO
  const players = [leoPlayer, dkongPlayer];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Section for the general "Producción Musical" content (El Intro)
  const musicProductionIntroCard = { 
    id: 'audio-prod-intro', 
    iconSrc: `${import.meta.env.BASE_URL}icono-prod-musical.svg`, 
    i18nTitleKey: "service_audio_prod_title",
    i18nCopyKey: "music_prod_title_artists_main_copy", 
    i18nDescTitleKey: "portfolio_audio_prod_desc_title",
    i18nDescBodyKey: "music_prod_desc_body", 
    videoUrlKey: "portfolio_audio_prod_video_url",
  };
  
  const musicProductionVideoUrl = t(musicProductionIntroCard.videoUrlKey);
  const musicProductionTitle = t(musicProductionIntroCard.i18nTitleKey);
  const musicProductionSubtitle = t(musicProductionIntroCard.i18nCopyKey);
  const musicProductionDescription = t(musicProductionIntroCard.i18nDescBodyKey);
  

  return (
    <div className="music-production-page-container">
      <h1 className="music-page-header">{t("music_player_title")}</h1>

      {/* 1. SECCIÓN DE PRODUCCIÓN MUSICAL (EL INTRO) */}
      <div className="music-production-intro-section">
        {/* TITULO: PRODUCCIÓN MUSICAL */}
        <h2 className="artist-name-title" style={{ color: 'var(--color-audio-base)', textAlign: 'center' }}>{musicProductionTitle}</h2>
        {/* SUBTITULO: MÚSICA ORIGINAL... */}
        <h3 className="artist-subtitle-genres" style={{ color: 'var(--color-accent)', textAlign: 'center', fontFamily: 'Advent Pro' }}>{musicProductionSubtitle}</h3> 
        
        <div className="music-prod-video-wrapper">
            <iframe
              src={musicProductionVideoUrl}
              title={musicProductionTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        </div>
        
        <div className="music-prod-description-container">
            <h4 className="description-subtitle">
              {t("description") || "Descripción"}
            </h4>
            <FormattedBody content={musicProductionDescription} />
        </div>
        
        <Link
            to="/contact"
            className="modal-cta-button intro-cta"
            style={{
              backgroundColor: 'var(--color-audio-base)',
              color: "var(--color-bg)",
              border: `2px solid var(--color-audio-base)`,
              width: "300px", 
              margin: '2rem auto 4rem auto',
              textAlign: "center",
              display: 'block'
            }}
          >
            {t("modal_pricing_cta")}
          </Link>

      </div>
      
      {/* 2. SECCIÓN DE ARTISTAS */}
      <h2 className="artist-name-title" style={{ color: 'var(--color-accent)', textAlign: 'center', fontFamily: 'Albertus Medium', fontSize: '2rem', marginBottom: '2rem' }}>{t('modal_artists_title')}</h2>
      {players.map((player, index) => (
          <MusicPlayerSection
            key={index}
            artistTitleKey={player.artistTitleKey}
            playerColorVar={player.playerColorVar}
            videoUrl={player.videoUrl}
            songSource={player.songSource}
            albumArt={player.albumArt}
            inverted={player.inverted}
          />
      ))}

      {/* 3. MÚSICA PARA CINE Y TV - NEW MODAL/SECTION */}
      <div className="music-production-intro-section">
        {/* TÍTULO: MÚSICA PARA RADIO, CINE Y TV */}
        <h2 className="artist-name-title" style={{ color: 'var(--color-video-base)', textAlign: 'center' }}>MÚSICA PARA RADIO, CINE Y TV</h2>
        
        <div className="music-prod-video-wrapper">
             <iframe
              // Usar URL dinámica para es/en
              src={i18n.language.startsWith('es') ? "https://www.youtube.com/embed/3UoM0YL2Obk" : "https://www.youtube.com/embed/c-SlQZxOIA8"}
              title="MÚSICA PARA RADIO, CINE Y TV"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        </div>
        
        <div className="music-prod-description-container">
            {/* TÍTULO DEL MODAL: REEL */}
            <h4 className="description-subtitle" style={{ color: 'var(--color-video-base)' }}>{t("modal_reel_title")}</h4> 
            
            {/* DESCRIPCIÓN */}
            <FormattedBody content="En Willow Tree transformamos ideas en experiencias sonoras completas. Nuestro equipo de compositores, productores y diseñadores de sonido desarrolla música original, jingles, bandas sonoras y paisajes auditivos que conectan con la esencia de cada marca o artista." />
        </div>
        
        <Link
            to="/contact"
            className="modal-cta-button intro-cta"
            style={{
              backgroundColor: 'var(--color-video-base)',
              color: "var(--color-bg)",
              border: `2px solid var(--color-video-base)`,
              width: "300px", 
              margin: '2rem auto 4rem auto',
              display: 'block'
            }}
          >
            {t("modal_pricing_cta")}
          </Link>
      </div>
      
    </div>
  );
}