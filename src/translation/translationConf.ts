import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18next
   .use(initReactI18next)
   .use(HttpApi)
   .use(I18nextBrowserLanguageDetector)
   .init({
      // resources: {
      //    en: {
      //       translation: {
      //          "Welcome to React": "Welcome to React and react-i18next"
      //       }
      //    }
      // },
      fallbackLng: "en",

      detection: {
         order: ["cookie", "htmlTag"],
         caches: ["cookie"]
      },

      backend: {
         loadPath: "/locales/{{lng}}.json"
      }
   });
