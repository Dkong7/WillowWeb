import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      contact: "Contact",
    },
  },
  es: {
    translation: {
      home: "Inicio",
      about: "Acerca de",
      contact: "Contacto",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // idioma inicial
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
