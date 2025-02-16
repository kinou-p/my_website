import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import Ft_transcendence from "../pages/projects/ft_transcendence";
// import { initReactI18next } from "react-i18next";

// const fallbackLng = ["en"];


i18n
  .use(Backend) // used to load data from othe directory
//   .use(LanguageDetector) // detects the current language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "fr",
    supportedLngs: ['en', 'fr'],
    detection: {
      order: ['localStorage', 'cookie', 'navigator'], // Prioritize storage
      caches: ['localStorage', 'cookie'], // Persist language setting
    },
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
          cloud_1:"Here is my cloud-based deployment project! This site showcases a fully automated infrastructure where each service, including WordPress, PHPMyAdmin, and a MySQL database, runs in its own container. Using powerful tools like Docker and Ansible, I have created a streamlined, scalable solution that ensures smooth parallel execution of services. Explore the behind-the-scenes setup and the seamless integration of automation in modern web hosting.",
          minishell:"Minishell is a project I developed, replicating a simple shell similar to bash. Entirely written in C, this project allowed me to dive deep into process management, file descriptors, command handling, pipes, redirections, and environment variables. Through this project, I strengthened my low-level programming skills while building an interactive tool that simulates the core functionalities of a shell.",
          cube3d:"Cub3D, my first RayCaster with MiniLibX. This project is inspired by the game Wolfenstein 3D, considered the first FPS ever developed. It allows you to explore the ray-casting technique. The objective is to create a dynamic 3D view within a maze, where the player must find their way. This project enhanced my understanding of algorithms, graphical rendering, and basic event handling in C.",
          ft_transcendence:"Developed an interactive web application that combines a real-time social pong game with messaging and secure authentication features. The project utilized modern technologies such as React for the frontend, NestJS for the backend, and PostgreSQL for data management, with a Docker-based architecture for service isolation. This project enhanced my skills in web development, WebSocket integration, and security management.",
          nas:"Set up a personal server using an Orange Pi 5 Plus with OpenMediaVault (OMV) as the operating system. Installed a self-hosted password manager, a cloud service for file and photo management, and Home Assistant for home automation. Integrated Portainer for container management, Plex for media streaming, and Traefik as a reverse proxy for managing and securing services.",
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
          cloud_1:"Voici mon projet de déploiement dans le cloud ! Ce site présente une infrastructure entièrement automatisée où chaque service, incluant WordPress, PHPMyAdmin et une base de données MySQL, fonctionne dans son propre conteneur. En utilisant des outils puissants comme Docker et Ansible, j'ai créé une solution optimisée et évolutive qui garantit une exécution parallèle fluide des services. Découvrez les coulisses de la configuration et l'intégration harmonieuse de l'automatisation dans l'hébergement web moderne.",
          minishell:"Minishell est un projet que j'ai développé, reproduisant un shell simple à la manière de bash. Ce projet, entièrement codé en C, m'a permis de travailler en profondeur sur la gestion des processus, les descripteurs de fichiers, ainsi que les commandes, les pipes, les redirections et les variables d'environnement. Grâce à ce projet, j'ai renforcé mes compétences en programmation bas niveau tout en construisant un outil interactif qui simule les fonctionnalités de base d'un shell.",
          cube3d:"Cub3D, mon premier RayCaster avec MiniLibX. Ce projet est inspiré du jeu Wolfenstein 3D, considéré comme le premier FPS jamais développé. Il vous permet d'explorer la technique du ray-casting. L'objectif est de créer une vue 3D dynamique au sein d'un labyrinthe, où le joueur doit trouver son chemin. Ce projet m'a permis de développer mes compétences en algorithmes, rendu graphique et gestion d'événements en C.",
          ft_transcendence:"Développement d'une application web interactive, combinant un jeu pong social en temps réel avec des fonctionnalités de messagerie et d'authentification sécurisée. Le projet a été réalisé en utilisant des technologies modernes telles que React pour le frontend, NestJS pour le backend, et PostgreSQL pour la gestion des données, avec une architecture basée sur Docker pour l'isolation des services. Ce projet a permis de renforcer mes compétences en développement web, en intégration de WebSocket, et en gestion de la sécurité.",
          nas:"Mise en place d'un serveur personnel utilisant un Orange Pi 5 Plus avec OpenMediaVault (OMV) comme système d'exploitation. Installation d'un gestionnaire de mots de passe auto-hébergé, d'un service de cloud pour la gestion des fichiers et photos, ainsi que de Home Assistant pour l'automatisation domestique. Intégration de Portainer pour la gestion des conteneurs, Plex pour le streaming multimédia, et Traefik comme proxy inverse pour la gestion et la sécurisation des services.",
        },
      },
    },
  });

export default i18n;