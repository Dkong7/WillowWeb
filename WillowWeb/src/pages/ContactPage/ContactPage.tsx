import { useTranslation } from "react-i18next";
import "./ContactPage.css"; 

export default function ContactPage() {
  const { t } = useTranslation();

  // NOTA: Reemplaza "/path/to/your/dossier.pdf" con la URL real del dossier.
  const dossierUrl = "dossier/willowtree-dossier.pdf"; 

  return (
    <section className="contact-page-container">
      <div className="contact-content-wrapper">
        <h1 className="contact-title">{t("contact_dossier_title")}</h1>
        <p className="contact-body">{t("contact_dossier_body")}</p>
        
        {/* Botón CTA para descargar el dossier */}
        <a 
          href={dossierUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="dossier-button"
        >
          {t("contact_dossier_cta")}
        </a>
        
        <div className="contact-info">
          <p className="info-item">Email: <a href="mailto:info@willowtree.com">info@willowtree.com</a></p>
          <p className="info-item">Teléfono: +57 1 234 5678</p>
          <p className="info-item">Ubicación: Bogotá, Colombia</p>
        </div>
      </div>
    </section>
  );
}