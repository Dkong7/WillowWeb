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
} from "@fortawesome/free-solid-svg-icons";

// --- Tipado de datos de artista para la navegacion del modal ---
interface ArtistData {
  id: string;
  artistTitleKey: string;
  artistSubtitleKey: string;
  playerColorVar: string;
  inverted: boolean;
  videoUrl: string;
  videoUrlEn?: string;
  songSource: string;
  albumArt: string;
  subtitle: string;
  descriptionKey: string;
  socialLinksOverride: { [k: string]: string };
  gradientBg: string;
  isService?: boolean;
}

// --- Formateo de texto reutilizable (Limpio) ---
const FormattedBody: React.FC<{ content: string }> = ({ content }) => {
  const strongColor = "var(--player-color-base)";
  const lines = content.split("\n");
  return (
    <div className="formatted-description">
      {lines.map((line, lIndex) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          const title = trimmed.substring(2, trimmed.length - 2);
          return (
            <p key={lIndex} className="section-title-body">
              <strong
                style={{ fontFamily: "Albertus Medium", color: strongColor }}
              >
                {title}
              </strong>
            </p>
          );
        }
        if (trimmed.startsWith("*")) {
          const text = trimmed.substring(1).trim();
          return (
            <li
              key={lIndex}
              className="detail-list-item"
              style={{ "--list-color": strongColor } as React.CSSProperties}
            >
              {text}
            </li>
          );
        }
        if (trimmed === "***") {
          return <hr key={lIndex} />;
        }
        return trimmed ? <p key={lIndex}>{trimmed}</p> : null;
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
  tiktok: "/tiktok-color.svg"
};

interface PlayerProps {
  artistTitleKey: string;
  artistSubtitleKey: string;
  playerColorVar: string;
  inverted?: boolean;
  videoUrl: string;
  videoUrlEn?: string;
  songSource: string;
  albumArt: string;
  subtitle: string;
  descriptionKey: string;
  socialLinksOverride: { [k: string]: string };
  gradientBg: string;
  isService?: boolean;
}

const MusicPlayerSection: React.FC<PlayerProps> = ({
  artistTitleKey,
  artistSubtitleKey,
  playerColorVar,
  inverted = false,
  videoUrl,
  videoUrlEn,
  songSource,
  albumArt,
  subtitle,
  descriptionKey,
  socialLinksOverride,
  gradientBg,
  isService = false
}) => {
  const { t, i18n } = useTranslation();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(0);
  const [showVolume, setShowVolume] = useState(false);

  const artistTitle = t(artistTitleKey);
  // Nuevo: Si es un servicio, usa la clave del subtítulo de la página, si no, usa el subtítulo local
  const finalSubtitle = isService ? t(artistSubtitleKey) : subtitle; 
  const songTitle = t("music_song_title");
  const isSpanish = i18n.language.startsWith("es");
  const finalVideoUrl = isSpanish ? videoUrl : videoUrlEn || videoUrl;
  const descBody = t(descriptionKey) || "";

  const socialLinks = socialLinksOverride;

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio || isService) return;

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
    if (!audio || isService) return;
    audio.loop = !isLooping;
    setIsLooping(!isLooping);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || isService) return;

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
  }, [volume, isLooping, isService]);

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
    "--modal-bg-gradient": gradientBg
  } as React.CSSProperties;

  return (
    <div
      className={`artist-section ${inverted ? "inverted" : ""}`}
      style={styleVars}
    >
      <h2
        className={`artist-name-title ${inverted ? "right-title" : ""}`}
        // FIX: Eliminado inline style para que el CSS (blanco con sombra) se aplique
        // style={{ color: playerColorVar }} 
      >
        {artistTitle}
      </h2>
      <span 
        className="artist-subtitle-genres"
        // FIX: Eliminado inline style para que el CSS (blanco) se aplique
        // style={{ color: playerColorVar }}
      >
        {finalSubtitle}
      </span>

      <div className="artist-layout">
        <div className={`info-column ${isService ? "service-layout-full" : ""}`}>
          <div className="video-wrapper">
            <div className="video-player-container">
              <iframe
                src={finalVideoUrl}
                title={artistTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="description-container">
            <h4 className="description-subtitle">
              {t("description") || "Descripción"}
            </h4>
            <div style={{ textAlign: isService ? "center" : "initial" }}>
              <FormattedBody content={descBody} />
            </div>
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
              marginTop: "2rem"
            }}
          >
            {t("modal_pricing_cta")}
          </Link>
        </div>

        {!isService && (
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
                        setVolume(v);
                      }}
                      aria-label="control de volumen"
                    />
                  </div>
                )}
              </div>

              <button
                className="control-button"
                aria-label="Anterior pista"
                style={{ backgroundColor: playerColorVar }}
              >
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

              <button
                className="control-button"
                aria-label="Siguiente pista"
                style={{ backgroundColor: playerColorVar }}
              >
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
              <h4
                className="track-list-header"
                style={{ color: playerColorVar }}
              >
                {t("track_list_header")}
              </h4>
              <ul className="track-list">
                <li
                  className="track-item active"
                  style={{ color: playerColorVar }}
                >
                  1. {songTitle}
                </li>
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
        )}
      </div>
    </div>
  );
};

// MODIFICADO: Solo se dejan los servicios y se ajustan colores/degradados
const ARTISTS_DATA: ArtistData[] = [
  {
    id: "prod-musical",
    artistTitleKey: "modal_portfolio_title", // MÚSICA ORIGINAL
    artistSubtitleKey: "music_prod_title_artists_main_copy", // PRODUCCIÓN MUSICAL PARA MARCAS Y ARTISTAS
    playerColorVar: "#e86c10", // COLOR PRINCIPAL: NARANJA
    inverted: false,
    videoUrl:
      "https://www.youtube.com/embed/KKARwQRbIAs?autoplay=0&controls=1&rel=0&playsinline=1",
    videoUrlEn:
      "https://www.youtube.com/embed/KKARwQRbIAs?autoplay=0&controls=1&rel=0&playsinline=1",
    songSource: "",
    albumArt: "/icono-prod-musical.svg",
    subtitle: "",
    descriptionKey: "portfolio_audio_prod_desc_body",
    // Degradado: NARANJA (#e86c10) a NEGRO (#000000)
    gradientBg:
      "linear-gradient(180deg, #e86c10 0%, #000000 100%)", 
    socialLinksOverride: {},
    isService: true
  },
  {
    id: "cine-tv",
    artistTitleKey: "modal_reel_title", // REEL
    artistSubtitleKey: "clients_subtitle", // Algunas de las marcas...
    playerColorVar: "#7a4ed4", // COLOR PRINCIPAL: PÚRPURA
    inverted: true,
    videoUrl:
      "https://www.youtube.com/embed/3UoM0YL2Obk?autoplay=0&controls=1&rel=0&playsinline=1",
    videoUrlEn:
      "https://www.youtube.com/embed/c-SlQZxOIA8?autoplay=0&controls=1&rel=0&playsinline=1",
    songSource: "",
    albumArt: "/icono-film-tv.svg",
    subtitle: "",
    descriptionKey: "clients_body", // Descripción de clientes
    // Degradado: PÚRPURA (#7a4ed4) a NEGRO (#000000)
    gradientBg:
      "linear-gradient(180deg, #7a4ed4 0%, #000000 100%)", 
    socialLinksOverride: {},
    isService: true
  }
];

export default function MusicProductionPage() {
  const { t } = useTranslation();
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0); 
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentArtist = useMemo(
    () => ARTISTS_DATA[currentArtistIndex],
    [currentArtistIndex]
  );
  
  // Lógica de navegación adaptada al nuevo array de 2 elementos
  const handlePrev = useCallback(() => {
    setHasNavigated(true);
    setCurrentArtistIndex((prev) =>
      prev === 0 ? ARTISTS_DATA.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setHasNavigated(true);
    setCurrentArtistIndex((prev) =>
      prev === ARTISTS_DATA.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Modificado: El título de navegación se basa en las nuevas claves que apuntan a "Música Original" y "REEL"
  const navTitle = useMemo(() => {
    if (currentArtist.id === "prod-musical") return t("modal_portfolio_title");
    if (currentArtist.id === "cine-tv") return t("modal_reel_title"); 
    return t("audio_service_banner_title"); // Fallback
  }, [currentArtist, t]);

  return (
    <div className="music-production-page-container modal-view">
      <h1
        className="music-page-header"
        style={{
          fontFamily: "Albertus Medium",
          fontSize: "1.8rem",
          letterSpacing: "1px",
          marginBottom: "2rem"
        }}
      >
        {t("audio_service_banner_title")}
      </h1>

      <div className="artist-modal-controls-wrapper">
        <button
          className={`modal-nav-button prev-artist ${
            !hasNavigated ? "glowing-border" : ""
          }`}
          onClick={handlePrev}
          style={{ backgroundColor: currentArtist.playerColorVar }}
          aria-label={t("prev") + " artista"}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <h2 className="modal-artist-nav-title">{navTitle}</h2>

        <button
          className={`modal-nav-button next-artist ${
            !hasNavigated ? "glowing-border" : ""
          }`}
          onClick={handleNext}
          style={{ backgroundColor: currentArtist.playerColorVar }}
          aria-label={t("next") + " artista"}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <MusicPlayerSection {...currentArtist} />
    </div>
  );
}