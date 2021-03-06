import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { LNG_SHORTCUTNAME } from 'constants/items';
import translationEN from './locales/en/translationEN';
import translationPL from './locales/pl/translationPL';

const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: [LNG_SHORTCUTNAME.EN, LNG_SHORTCUTNAME.PL],
    lng: LNG_SHORTCUTNAME.EN,
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
