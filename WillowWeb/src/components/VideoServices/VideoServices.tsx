import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./VideoServices.css";
import React from "react";

const FormattedBody: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split("\n");
  return (
    <div className="formatted-description">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          return (
            <p key={i} className="section-title-body">
              <strong>{trimmed.slice(2, -2)}</strong>
            </p>
          );
        }
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
    apple: "/apple-music.svg",
    youtube: "/yt-color.svg",
    instagram: "/ig-color.svg",
    tiktok: "/tiktok-color.svg",
  };

  const socialLinks = t("social_links", { returnObjects: true }) as Record<
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

  return (
    <div
      className={`artist-section ${inverted ? "inverted" : ""}`}
      style={playerStyleVars}
    >
      {!inverted && (
        <h2 className="artist-name-title" style={{ color: playerColorVar }}>
          {artistTitle}
        </h2>
      )}

      <div className="artist-layout">
        <div className="info-column">
          <p className="music-title-info">{songTitle}</p>

          <div className="video-wrapper">
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

            <iframe
              src={videoUrl}
              title={artistTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="description-container">
            <h4 className="description-subtitle">
              {t("description") || "Description"}
            </h4>
            <FormattedBody content={t("portfolio_audio_prod_desc_body")} />
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
                href={socialLinks[key] || "#"}
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

export default function MusicProductionPage() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="music-production-page-container">
      <h1 className="music-page-header">{t("music_player_title")}</h1>

      <MusicPlayerSection
        artistTitleKey="music_player_dkong_title"
        playerColorVar="#ff6a00"
        videoUrl="https://www.youtube.com/embed/zELzLR0-Qj4"
        songSource="/lfc-Jazz.mp3"
        albumArt="/lfc-art.png"
      />

      <MusicPlayerSection
        artistTitleKey="music_player_leo_title"
        playerColorVar="#7a4ed4"
        videoUrl="https://www.youtube.com/embed/boPHlpclehY"
        songSource="/another-track.mp3"
        albumArt="/images/leo-art.jpg"
        inverted
      />
    </div>
  );
}
