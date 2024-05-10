import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
// import { initReactI18next } from "react-i18next";

// const fallbackLng = ["en"];


i18n
  .use(Backend) // used to load data from othe directory
//   .use(LanguageDetector) // detects the current language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "fr",
    // lng: getCurrentLang(),
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          page1: "Contact",
          page2: "Projects",
          page3: "Resume",
          page4: "Skills",
          page5: "",
          description:"Student majoring in computer science at 42, I am seeking employment to complement my academic training with meaningful professional experience. I am open to various job opportunities related to my studies and am ready to discuss my background further during an interview.",
          project:"Projects",
          welcome:"Welcome.",
          resume:"My Resume",
          contact_me:"CONTACT ME",
        },
      },
      fr: {
        translation: {
          page1: "Contact",
          page2: "Projets",
          page3: "CV",
          page4: "Competences",
          page5: "",
          description:"Étudiant a 42 en informatique, je cherche un emploi afin de compléter ma formation académique par une expérience professionnelle qui a du sens. Je suis ouvert à de nombreuses propositions en rapport avec mes études et suis prêt à discuter de mon parcours plus amplement lors d’un entretien.",
          project:"Projets",
          welcome:"Bienvenue.",
          resume:"Mon CV",
          contact_me:"CONTACTEZ MOI",
        },
      },
    },
  });

export default i18n;