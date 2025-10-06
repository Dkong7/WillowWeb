import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";

// Definición de tipos para la estructura de las slides
interface Slide {
  id: number;
  type: 'video' | 'info';
  url?: string;
  image_url?: string;
  title: string;
  subtitle: string;
  button_text?: string;
  link: string;
}

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  // Estado para controlar la visibilidad del card de bienvenida
  const [showWelcomeCard, setShowWelcomeCard] = useState(true);

  // Se asegura el tipado de los datos traducidos
  const slides: Slide[] = t('hero_slides', { returnObjects: true }) as Slide[];
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const basePath = import.meta.env.BASE_URL;

  // Componente para el card de bienvenida (solo aparece en Slide 0)
  const renderWelcomeCard = () => {
    // La card solo se renderiza si estamos en el slide 0 y el usuario no la ha cerrado
    if (currentSlide !== 0 || !showWelcomeCard) return null;

    const lang = i18n.language === 'es' ? 'es' : 'en';
    const logoSrc = `${basePath}logo-hero-${lang}.svg`;

    return (
      <div className="welcome-card">
        {/* Botón X para cerrar la card */}
        <button 
          className="close-button" 
          onClick={() => setShowWelcomeCard(false)} 
          aria-label="Cerrar"
        >
          &#10005;
        </button>
        <h1 className="welcome-title-text">{t('hero_welcome_title')}</h1>
        <img src={logoSrc} alt="Willow Tree Logo Hero" className="welcome-logo" />
        <p className="welcome-subtitle-copy">{t('hero_welcome_copy')}</p>
        <a 
          href="#about" 
          className="hero-button" 
          onClick={() => setShowWelcomeCard(false)}
        >
          {t('explore')}
        </a>
      </div>
    );
  };

  // Componente condicional para la diapositiva (Video o Info)
  const renderSlide = (slide: Slide, index: number) => {
      const slideTypeClass = slide.type === 'video' ? 'video-slide' : 'info-slide';

      return (
        <div className={`hero-slide-content ${slideTypeClass}`}>
          {slide.type === 'video' && (
            <div className="video-container">
              <iframe
                src={slide.url}
                /* Permisos necesarios para autoplay y mute */
                allow="autoplay; muted; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                title={slide.title}
                className="responsive-iframe"
              ></iframe>
            </div>
          )}
          
          {slide.type === 'info' && (
            <div className="info-image-placeholder" style={{backgroundImage: `url(${slide.image_url})`}}>
              {/* Contenedor de la imagen del slide de Info */}
            </div>
          )}
          
          {/* 🚨 FIX: RENDERIZAR hero-overlay-text solo si NO es el Slide 1 (index 0) */}
          {index !== 0 && (
            <div className="hero-overlay-text">
              <h1 className="hero-title">{slide.title}</h1>
              <h2 className="hero-subtitle">{slide.subtitle}</h2>
              <a href={slide.link} className="hero-button">{slide.button_text}</a>
            </div>
          )}
        </div>
      );
  };
  
  return (
    <section id="hero" className="hero-slider-section">
      
      {/* RENDERIZADO DE LA CARD: Asegura que se superponga al slide 1 */}
      {renderWelcomeCard()}

      <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => ( 
          <div key={slide.id} className="slide-item">
            {renderSlide(slide, index)}
          </div>
        ))}
      </div>

      {/* Botones de Navegación Elegantes */}
      <div className="slider-navigation">
        <button onClick={prevSlide} className="nav-button prev-button" aria-label={t('prev')}>
          &lt;
        </button>
        <button onClick={nextSlide} className="nav-button next-button" aria-label={t('next')}>
          &gt;
        </button>
      </div>

      {/* Indicadores de Slide */}
      <div className="slider-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`indicator ${i === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}