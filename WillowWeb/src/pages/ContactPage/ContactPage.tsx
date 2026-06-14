import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./ContactPage.css";
import emailjs from "@emailjs/browser";

// Inicialización EmailJS
const EMAILJS_PUBLIC_KEY = "3xK6nA6_wg4byta3S";
emailjs.init(EMAILJS_PUBLIC_KEY);

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, t }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content small-modal">
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label={t("close") || "Close"}
        >
          ×
        </button>
        <h3 className="modal-confirmation-title" style={{ color: "var(--color-audio-base)" }}>
          {t("modal_message_received")}
        </h3>
        <p className="modal-confirmation-body">{t("modal_message_success")}</p>
        <button
          className="modal-cta-button"
          onClick={onClose}
          style={{
            backgroundColor: "var(--color-audio-base)",
            color: "var(--color-bg)",
            border: `2px solid var(--color-audio-base)`,
          }}
        >
          {t("close")}
        </button>
      </div>
    </div>
  );
};

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const basePath = import.meta.env.BASE_URL;

  // Configuración de EmailJS
  const EMAILJS_SERVICE_ID = "service_yi6w30o";
  const EMAILJS_TEMPLATE_ID = "template_8o8tnr8";
  const RECEIVING_EMAIL = "direccionrevistatribu@gmail.com";
  const DISPLAYED_EMAIL = "thisiswillowtree@gmail.com";

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7952.560831173528!2d-73.9823885!3d4.7212791!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8e37070c043b%3A0x84ddb6031d09b848!2sConjunto%20Residencial%20-%20Fuerteventura!5e0!3m2!1ses!2sco!4v1761689872624!5m2!1ses!2sco";

  const [formData, setFormData] = useState({ name: "", email: "", idea: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [currentLang, setCurrentLang] = useState(i18n.language || "es");

  // Logo dinámico
  const getLogoSrc = useCallback(() => {
    const lang = currentLang.startsWith("es") ? "es" : "en";
    const logoFile = `logo-hero-${lang}.svg`;
    return `${basePath}${logoFile}`;
  }, [currentLang, basePath]);

  // Observar cambios de tema
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
          const targetEl = mutation.target as HTMLElement;
          const newTheme = targetEl?.getAttribute("data-theme") || "dark";
          setCurrentTheme(newTheme);
        }
      }
    });

    observer.observe(document.body, { attributes: true });
    setCurrentTheme(document.body.getAttribute("data-theme") || "dark");
    return () => observer.disconnect();
  }, []);

  // Observar cambios de idioma
  useEffect(() => {
    const handleLangChange = () => setCurrentLang(i18n.language || "es");
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, [i18n]);

  // Manejo de formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: RECEIVING_EMAIL,
      message: formData.idea,
      reply_to: formData.email,
    };

    try {
      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      console.log("SUCCESS!", response.status, response.text);
      setIsModalOpen(true);
      setFormData({ name: "", email: "", idea: "" });
    } catch (error) {
      console.error("FAILED...", error);
      alert(
        `El envío falló. Verifica la plantilla '${EMAILJS_TEMPLATE_ID}' en EmailJS y asegúrate de que use las variables {{from_name}}, {{from_email}} y {{message}}.`
      );
    }
  };

  return (
    <section className="contact-page-container">
      <div className="contact-content-wrapper">
        {/* ✅ LOGO PRINCIPAL */}
        <div className="contact-logo-top">
          <img src={getLogoSrc()} alt="Willow Tree Logo" className="contact-main-logo" />
        </div>

        {/* GRID SUPERIOR: MAPA Y CONTACTO */}
        <div className="contact-info-grid">
          <div className="contact-map-column">
            <p className="map-caption">{t("contact_map_location_text")}</p>
            <iframe
              src={mapEmbedUrl}
              title="Ubicación Willow Tree"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact-details-column">
            <h4 className="details-header">{t("contact_email_header")}</h4>
            <p className="info-item">
              {t("contact_email_label")}{" "}
              <a href={`mailto:${DISPLAYED_EMAIL}`}>{DISPLAYED_EMAIL}</a>
            </p>
            <p className="info-item">
              {t("contact_phone_label")} {t("contact_phone_number")}
            </p>
            <p className="info-item">
              {t("contact_location_label")} {t("contact_location_city")}
            </p>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="contact-form-grid">
          <div className="form-image-column left">
            <img
              src={`${basePath}diablo-izquierdo.png`}
              alt="Diablo"
              className="form-side-image"
            />
          </div>

          <div className="form-column">
            <h2 className="form-title">{t("contact_form_title")}</h2>
            <form onSubmit={handleFormSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder={t("contact_form_placeholder_name")}
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact_form_placeholder_email")}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="idea"
                placeholder={t("contact_form_placeholder_idea")}
                rows={6}
                value={formData.idea}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="submit-button">
                {t("send")}
              </button>
            </form>
          </div>

          <div className="form-image-column right">
            <img
              src={`${basePath}angel-derecho.png`}
              alt="Angel"
              className="form-side-image"
            />
          </div>
        </div>
      </div>

      <ConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} t={t} />
    </section>
  );
}
