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
  url_es?: string; // Propiedad para URL en español
  url_en?: string; // Propiedad para URL en inglés
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
    if (currentSlide !== 0 || !showWelcomeCard) return null;

    // FIX LOGO LANGUAGE: Usa 'es' si el idioma empieza con 'es', si no 'en'.
    const logoLang = i18n.language.startsWith('es') ? 'es' : 'en';
    const logoSrc = `${basePath}logo-hero-${logoLang}.svg`;

    const welcomeCopy = t('hero_welcome_copy');
    const capitalizedCopy = welcomeCopy.charAt(0).toUpperCase() + welcomeCopy.slice(1);

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
        {/* FIX MOBILE ORDER: Se coloca la imagen primero para el flujo responsive (imagen, luego texto) */}
        <img src={logoSrc} alt="Willow Tree Logo Hero" className="welcome-logo" />
        <h1 className="welcome-title-text">{t('hero_welcome_title')}</h1>
        <p className="welcome-subtitle-copy">{capitalizedCopy}</p> 
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
      
      let videoSrc = slide.url; 

      // FIX VIDEO URL DYNAMIC: Si es el slide 0, usa la URL traducida
      if (index === 0 && slide.type === 'video') {
          videoSrc = i18n.language.startsWith('es') ? slide.url_es : slide.url_en;
      }
      
      const audioIconSrc = `${basePath}icono-audio.svg`;
      const videoIconSrc = `${basePath}icono-video.svg`;
      const mediaIconSrc = `${basePath}icono-media.svg`;


      return (
        <div className={`hero-slide-content ${slideTypeClass}`}>
          {slide.type === 'video' && (
            <div className="video-container">
              <iframe
                src={videoSrc} 
                // FIX: El atributo allow solo necesita 'autoplay', 'encrypted-media', etc. 'muted' es un parámetro de la URL.
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
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
          
          {/* RENDERIZAR hero-overlay-text solo si NO es el Slide 1 (index 0) */}
          {index !== 0 && (
            <div className="hero-overlay-text">
              
              <div className="hero-title-group">
                
                {/* Iconos: Renderiza el ícono si es Slide 2, 3 o 4 */}
                {index === 1 && <img src={audioIconSrc} alt="Audio Icon" className="hero-title-icon" />}
                {index === 2 && <img src={videoIconSrc} alt="Video Icon" className="hero-title-icon" />}
                {index === 3 && <img src={mediaIconSrc} alt="Media Icon" className="hero-title-icon" />}
                
                <h1 className="hero-title">{slide.title}</h1>

              </div>
              
              <h2 className="hero-subtitle">{slide.subtitle}</h2>
              <a href={slide.link} className="hero-button">{slide.button_text}</a>
            </div>
          )}
        </div>
      );
  };
  
  return (
    <section id="hero" className="hero-slider-section">
      
      {/* 🚨 Welcome Card: Se superpone al Slide 1 si está visible */}
      {renderWelcomeCard()}

      <div className="slider-main-container">
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
      </div>
    </section>
  );
}