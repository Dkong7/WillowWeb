import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

interface Slide {
  id: number;
  type: "video" | "info";
  url?: string;
  image_url?: string;
  title: string;
  subtitle: string;
  button_text?: string;
  link: string;
  url_es?: string;
  url_en?: string;
}

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showWelcomeCard, setShowWelcomeCard] = useState(true);

  const slides: Slide[] = t("hero_slides", { returnObjects: true }) as Slide[];
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const basePath = import.meta.env.BASE_URL;

  const renderWelcomeCard = () => {
    if (currentSlide !== 0 || !showWelcomeCard) return null;

    const logoLang = i18n.language.startsWith("es") ? "es" : "en";
    const logoSrc = `${basePath}logo-hero-${logoLang}.svg`;

    const welcomeCopy = t("hero_welcome_copy");
    const formattedCopy = welcomeCopy.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < welcomeCopy.split("\n").length - 1 && <br />}
      </span>
    ));

    return (
      <div className="welcome-card">
        <button
          className="close-button"
          onClick={() => setShowWelcomeCard(false)}
          aria-label="Cerrar"
        >
          ✕
        </button>
        <img
          src={logoSrc}
          alt="Willow Tree Logo Hero"
          className="welcome-logo"
        />
        <h1 className="welcome-title-text">{t("hero_welcome_title")}</h1>
        <p className="welcome-subtitle-copy">{formattedCopy}</p>
        <a
          href="#services"
          className="hero-button hero-btn-slide1"
          onClick={() => setShowWelcomeCard(false)}
        >
          {t("explore")}
        </a>
      </div>
    );
  };

  const renderSlide = (slide: Slide, index: number) => {
    const slideTypeClass = slide.type === "video" ? "video-slide" : "info-slide";
    let videoSrc = slide.url;

    if (index === 0 && slide.type === "video") {
      videoSrc = i18n.language.startsWith("es") ? slide.url_es : slide.url_en;
    }

    const audioIconSrc = `${basePath}icono-audio.svg`;
    const videoIconSrc = `${basePath}icono-video.svg`;
    const mediaIconSrc = `${basePath}icono-media.svg`;

    const buttonTarget =
      index === 1
        ? "#services"
        : index === 2
        ? "#video-services"
        : slide.link;

    const buttonClass =
      index === 0
        ? "hero-btn-slide1"
        : index === 1
        ? "hero-btn-slide2"
        : index === 2
        ? "hero-btn-slide3"
        : "";

    const textColorStyle = { color: "white" };

    return (
      <div className={`hero-slide-content ${slideTypeClass}`}>
        {slide.type === "video" && (
          <div className="video-container">
            <iframe
              src={videoSrc}
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              title={slide.title}
              className="responsive-iframe"
            ></iframe>
          </div>
        )}

        {slide.type === "info" && (
          <div
            className="info-image-placeholder"
            style={{ backgroundImage: `url(${slide.image_url})` }}
          ></div>
        )}

        {index !== 0 && (
          <div className="hero-overlay-text">
            <div className="hero-title-group">
              {index === 1 && (
                <img
                  src={audioIconSrc}
                  alt="Audio Icon"
                  className="hero-title-icon"
                />
              )}
              {index === 2 && (
                <img
                  src={videoIconSrc}
                  alt="Video Icon"
                  className="hero-title-icon"
                />
              )}
              {index === 3 && (
                <img
                  src={mediaIconSrc}
                  alt="Media Icon"
                  className="hero-title-icon"
                />
              )}
              <h1 className="hero-title" style={textColorStyle}>
                {slide.title}
              </h1>
            </div>
            <h2 className="hero-subtitle" style={textColorStyle}>
              {slide.subtitle}
            </h2>
            <a href={buttonTarget} className={`hero-button ${buttonClass}`}>
              {slide.button_text}
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="hero" className="hero-slider-section">
      {renderWelcomeCard()}

      <div className="slider-main-container">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="slide-item">
              {renderSlide(slide, index)}
            </div>
          ))}
        </div>

        <div className="slider-navigation">
          <button
            onClick={prevSlide}
            className="nav-button prev-button"
            aria-label={t("prev")}
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="nav-button next-button"
            aria-label={t("next")}
          >
            &gt;
          </button>
        </div>

        <div className="slider-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`indicator ${i === currentSlide ? "active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
