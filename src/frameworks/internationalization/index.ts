import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import translationEnglish from './locales/en/translation.json';
import translationHindi from './locales/hin/translation.json';
import translationGerman from './locales/ger/translation.json';
import translationFrench from './locales/fre/translation.json';
import translationJapanese from './locales/jap/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    resources: {
      en: {
        translations: translationEnglish,
      },
      jap: {
        translations: translationJapanese,
      },
      hin: {
        translations: translationHindi,
      },
      ger: {
        translations: translationGerman,
      },
      fre: {
        translations: translationFrench,
      },
    },

    ns: ['translations'],
    defaultNS: 'translations',

    react: {
      wait: true,
    },
  });

export default i18n;
