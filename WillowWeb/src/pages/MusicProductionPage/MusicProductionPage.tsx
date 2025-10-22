import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./MusicProductionPage.css";
import React from "react";

// **********************************************
// IMPORTACIONES DE FONTAWESOME (FA)
// **********************************************
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faVolumeHigh, 
  faBackwardStep, 
  faPlay, 
  faPause, 
  faForwardStep, 
  faRepeat, 
  faArrowLeft, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';


// --- Tipado de datos de artista para la navegacion del modal ---
interface ArtistData {
  id: string;
  artistTitleKey: string;
  playerColorVar: string;
  inverted: boolean;
  videoUrl: string;
  songSource: string;
  albumArt: string;
  subtitle: string;
  descriptionKey: string;
  socialLinksOverride: { [k: string]: string };
  gradientBg: string; // Nuevo campo para el degradado
}

// --- Formateo de texto reutilizable (Limpio) ---
const FormattedBody: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split("\n");
  return (
    <div className="formatted-description">
      {lines.map((line, lIndex) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          const title = trimmed.substring(2, trimmed.length - 2);
          return (
            <p key={lIndex} className="section-title-body">
              <strong>{title}</strong>
            </p>
          );
        }
        if (trimmed.startsWith("*")) {
          const text = trimmed.substring(1).trim();
          return (
            <li key={lIndex} className="detail-list-item">
              {text}
            </li>
          );
        }
        // Manejar la linea de separacion y las etiquetas de texto
        if (trimmed === "***") {
          return <hr key={lIndex} />;
        }
        // Reemplazar placeholders de iconos
        const finalContent = trimmed
          .replace("[Antenna]", " [Antenna]")
          .replace("[Three Wise Monkeys]", "[Three Wise Monkeys]");

        return trimmed ? <p key={lIndex}>{finalContent}</p> : null;
      })}
    </div>
  );
};

const DEFAULT_ICONS = {
  tidal: "/tidal-color.svg",
  spotify: "/spoty-color.svg",
  apple: "/apple-music.svg",
  youtube: "/yt-color.svg",
  instagram: "/ig-color.svg",
  tiktok: "/tiktok-color.svg",
};

interface PlayerProps {
  artistTitleKey: string;
  playerColorVar: string;
  inverted?: boolean;
  videoUrl: string;
  songSource: string;
  albumArt: string;
  subtitle?: string;
  description?: string;
  socialLinksOverride?: { [k: string]: string };
}

const MusicPlayerSection: React.FC<PlayerProps & { descriptionKey: string; subtitle: string; gradientBg: string; }> = ({
  artistTitleKey,
  playerColorVar,
  inverted = false,
  videoUrl,
  songSource,
  albumArt,
  subtitle,
  descriptionKey,
  socialLinksOverride,
  gradientBg,
}) => {
  const { t } = useTranslation();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(0);
  const [showVolume, setShowVolume] = useState(false);

  const artistTitle = t(artistTitleKey);
  const songTitle = t("music_song_title"); 
  
  // Se obtiene la descripción del artista desde el i18n usando la key provista
  const descBody = t(descriptionKey) || t("portfolio_audio_prod_desc_body") || "";

  const i18nSocial = t("social_links", { returnObjects: true }) as {
    [key: string]: string;
  };
  const socialLinks = socialLinksOverride || i18nSocial || {};

  // Lógica de reproducción (misma que antes)
  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }
    try {
      audio.load();
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn("Error al reproducir:", err);
      setIsPlaying(false);
    }
  };

  const toggleLoop = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = !isLooping;
    setIsLooping(!isLooping);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const dur = audio.duration || 0;
      const cur = audio.currentTime || 0;
      setProgress(dur > 0 ? (cur / dur) * 100 : 0);
    };

    audio.volume = volume / 100;
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => setIsPlaying(false));
    audio.addEventListener("pause", () => setIsPlaying(false));
    audio.addEventListener("play", () => setIsPlaying(true));

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", () => setIsPlaying(false));
      audio.removeEventListener("pause", () => setIsPlaying(false));
      audio.removeEventListener("play", () => setIsPlaying(true));
    };
  }, [volume, isLooping]);

  const onProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) {
      setProgress(parseFloat(e.target.value));
      return;
    }
    const newTime = (parseFloat(e.target.value) / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  const styleVars = {
    "--player-color-base": playerColorVar,
    "--modal-bg-gradient": gradientBg,
  } as React.CSSProperties;


  return (
    <div
      className={`artist-section ${inverted ? "inverted" : ""}`}
      style={styleVars}
    >
      
      <h2
        className={`artist-name-title ${inverted ? "right-title" : ""}`}
      >
        {artistTitle}
      </h2>
      {/* Subtitulo debajo del titulo h2 (géneros) */}
      <span className="artist-subtitle-genres">
        {subtitle}
      </span>

      <div className="artist-layout">
        {/* INFO COLUMN (VIDEO + DESC) - Columna más grande */}
        <div className="info-column">
          
          <div className="video-wrapper">
            <div className="video-player-container full-width-video"> {/* CLASE PARA TAMAÑO ORIGINAL */}
              <iframe
                src={videoUrl}
                title={artistTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="description-container">
            <h4 className="description-subtitle">
              {t("description") || "Description"}
            </h4>
            <FormattedBody content={descBody} />
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

        {/* PLAYER COLUMN */}
        <div className="player-column">
          <div className="album-art-wrapper">
            <img src={albumArt} alt="Album Art" className="album-art" />
            <audio ref={audioRef} preload="auto">
              <source src={songSource} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>

          <input
            className="progress-bar"
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={onProgressChange}
            aria-label="barra de progreso"
          />

          <div className="player-controls compact">
            <div className="volume-inline">
              <button
                className="control-button volume-toggle"
                onClick={() => setShowVolume((s) => !s)}
                aria-label="volumen"
                title="Volumen"
                style={{ backgroundColor: playerColorVar }}
              >
                <FontAwesomeIcon icon={faVolumeHigh} />
              </button>
              {showVolume && (
                <div
                  className="volume-popup"
                  role="dialog"
                  aria-hidden={!showVolume}
                >
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={volume}
                    className="volume-slider-popup"
                    onChange={(e) => {
                      const v = parseInt(e.target.value);
                      if (audioRef.current) audioRef.current.volume = v / 100;
                    }}
                    aria-label="control de volumen"
                  />
                </div>
              )}
            </div>

            <button className="control-button" aria-label="Anterior pista" style={{ backgroundColor: playerColorVar }}>
              <FontAwesomeIcon icon={faBackwardStep} />
            </button>

            <button
              className="control-button play-pause"
              aria-label="Reproducir/Pausar"
              onClick={togglePlayPause}
              style={{ backgroundColor: playerColorVar }}
            >
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>

            <button className="control-button" aria-label="Siguiente pista" style={{ backgroundColor: playerColorVar }}>
              <FontAwesomeIcon icon={faForwardStep} />
            </button>

            <button
              className={`control-button repeat ${isLooping ? "active" : ""}`}
              onClick={toggleLoop}
              aria-label="Repetir"
              style={{ backgroundColor: playerColorVar }}
            >
              <FontAwesomeIcon icon={faRepeat} />
            </button>
          </div>

          <div className="track-list-container">
            <h4 className="track-list-header" style={{ color: playerColorVar }}>{t("track_list_header")}</h4>
            <ul className="track-list">
              <li className="track-item active" style={{ color: playerColorVar }}>1. {songTitle}</li>
              <li className="track-item" style={{ color: playerColorVar }}>2. {artistTitle} - Demo Track</li>
            </ul>
          </div>

          <p className="social-follow-prompt">{t("social_follow_prompt")}:</p>

          <div className="social-links">
            {Object.entries(DEFAULT_ICONS).map(([key, iconPath]) => (
              <a
                key={key}
                href={socialLinks[key] || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
              >
                <img src={iconPath} alt={key} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- DATA CENTRALIZADA DE ARTISTAS ---
const ARTISTS_DATA: ArtistData[] = [
  {
    id: "dkong",
    artistTitleKey: "music_player_dkong_title",
    playerColorVar: "#e86c10",
    inverted: false,
    videoUrl: "https://www.youtube.com/embed/zELzLR0-Qj4?autoplay=0&controls=1",
    songSource: "/lfc-Jazz.mp3",
    albumArt: "/lfc-art.png",
    subtitle: "hip-hop, afro beat, experimental",
    descriptionKey: "description_dkong",
    // Gradiente de color DKONG a color de fondo
    gradientBg: "linear-gradient(180deg, rgba(232, 108, 16, 0.4) 0%, var(--color-bg) 80%)",
    socialLinksOverride: {
      tidal: "https://tidal.com/artist/63112634",
      spotify: "https://open.spotify.com/artist/63112634",
      applemusic: "https://music.apple.com/artist/dkong/63112634",
      youtube: "https://music.youtube.com/channel/UCtqFZ4xZxuhmvlTgE6y9Zog",
      instagram: "https://instagram.com/_imdkong_",
      tiktok: "https://tiktok.com/@_imdkong_",
    },
  },
  {
    id: "leo",
    artistTitleKey: "music_player_leo_title",
    playerColorVar: "#7a4ed4",
    inverted: true,
    videoUrl: "https://www.youtube.com/embed/boPHlpclehY?autoplay=0&controls=1",
    songSource: "/leo-alto.mp3",
    albumArt: "/leo-art.png",
    subtitle: "reggae, dub, hip hop",
    descriptionKey: "description_leo",
    // Gradiente de color LEO a color de fondo
    gradientBg: "linear-gradient(180deg, rgba(122, 78, 212, 0.4) 0%, var(--color-bg) 80%)",
    socialLinksOverride: {
      // Si no hay override se usa la logica de i18n por defecto
    },
  },
];


export default function MusicProductionPage() {
  const { t } = useTranslation();
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
  const [hasNavigated, setHasNavigated] = useState(false); // Estado para controlar la animación

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentArtist = useMemo(() => ARTISTS_DATA[currentArtistIndex], [currentArtistIndex]);
  
  // Funciones de navegación cíclica
  const handlePrev = useCallback(() => {
    setHasNavigated(true); // Desactiva animación tras el primer click
    setCurrentArtistIndex((prev) => (prev === 0 ? ARTISTS_DATA.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setHasNavigated(true); // Desactiva animación tras el primer click
    setCurrentArtistIndex((prev) => (prev === ARTISTS_DATA.length - 1 ? 0 : prev + 1));
  }, []);


  return (
    <div className="music-production-page-container modal-view">
      <h1 className="music-page-header">{t("music_player_title")}</h1>

      <div className="artist-modal-controls-wrapper">
        <button 
          className={`modal-nav-button prev-artist ${!hasNavigated ? 'glowing-border' : ''}`} 
          onClick={handlePrev}
          style={{ backgroundColor: currentArtist.playerColorVar }}
          aria-label={t("prev") + " artista"}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> 
        </button>
        
        <h2 className="modal-artist-nav-title">{t("modal_artists_title")}</h2>

        <button 
          className={`modal-nav-button next-artist ${!hasNavigated ? 'glowing-border' : ''}`} 
          onClick={handleNext}
          style={{ backgroundColor: currentArtist.playerColorVar }}
          aria-label={t("next") + " artista"}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <MusicPlayerSection 
        key={currentArtist.id}
        artistTitleKey={currentArtist.artistTitleKey}
        playerColorVar={currentArtist.playerColorVar}
        videoUrl={currentArtist.videoUrl}
        songSource={currentArtist.songSource}
        albumArt={currentArtist.albumArt}
        subtitle={currentArtist.subtitle}
        descriptionKey={currentArtist.descriptionKey}
        socialLinksOverride={currentArtist.socialLinksOverride}
        inverted={currentArtist.inverted}
        gradientBg={currentArtist.gradientBg}
      />

    </div>
  );
}