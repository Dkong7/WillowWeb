import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// 🚨 NEW: Importar el detector de idioma
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar los archivos JSON (asumimos que ya están limpios)
import enTranslation from './en.json';
import esTranslation from './es.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n
  .use(LanguageDetector) // 🚨 FIX: Usa el detector del navegador
  .use(initReactI18next)
  .init({
    resources,
    // La configuración de 'lng' se elimina para que el detector tome el control
    fallbackLng: "en", // Si no detecta nada, usa inglés
    detection: {
        order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag'],
        caches: ['localStorage'], // Guarda la preferencia
    },
    interpolation: { escapeValue: false },
  });

export default i18n;