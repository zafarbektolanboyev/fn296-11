import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      select_language: "Select Language",
      home: "Home Page",
    },
  },
  ru: {
    translation: {
      select_language: "Выберите язык",
      home: "Главная страница",
    },
  },
  uz: {
    translation: {
      select_language: "Tilni tanlang",
      home: "Bosh sahifa",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
