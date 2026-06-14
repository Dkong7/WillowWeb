import { useTranslation } from "react-i18next";
import "./Clients.css";

// 🚨 FIX 2: Lista de logos actualizada con rutas SVG reales
const LOGOS_PATHS = [
    "adidas-icono.svg",
    "epm-logo.svg",
    "orquesta-logo.svg",
    "reebok-icono.svg",
    "basswalk-icono.svg",
    "todorico-icono.svg",
    "cococola-logo.svg",
    "monticello-logo.svg",
    "mincultura-logo.svg"
];

export default function Clients() {
    const { t } = useTranslation();
    const basePath = import.meta.env.BASE_URL;

    // Duplicamos y aseguramos que haya suficientes logos para el loop
    const LOGOS_LOOP = [...LOGOS_PATHS, ...LOGOS_PATHS];

    return (
        // El ID clients es usado por el Navbar
        <section id="clients" className="clients-section"> 
            <h2 className="clients-title">{t('clients_title')}</h2>
            <h3 className="clients-subtitle">{t('clients_subtitle')}</h3>
            <p className="clients-body">{t('clients_body')}</p>
            
            {/* Contenedor para el loop infinito */}
            <div className="clients-logo-strip-container">
                <div className="clients-logo-strip">
                    {/* Renderizamos la lista de logos dos veces para el efecto de loop continuo */}
                    {LOGOS_LOOP.map((logoPath, index) => (
                        <div key={`logo-${index}`} className="logo-container">
                            <img 
                                src={basePath + logoPath} 
                                alt={`Client Logo ${index + 1}`} 
                                className="client-logo-img"
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
}