import { Project } from "../interfaces/project.interface";

export const projects : Project[] = [
  {
    title: "PassAger",
    type: 'Personal',
    description: "<strong>Gestionnaire de mots de passe sécurisé</strong> développé en desktop. <br/>Chiffrement fort, interface moderne, synchronisation locale.",
    shortDescription: "Gestionnaire de mot de passe réalisé en Tauri Svelte + Rust.",
    imageUrl: null,
    githubUrl: null,
    projectUrl: null,
    tags: ['Tauri', 'Svelte', 'Rust']
  },
  {
    title: "Codex Bestiarum",
    type: 'Academic',
    description: "<strong>Bestiaire collaboratif</strong> de créatures (WoW, Monster Hunter, etc.). <br/>Fonctionnalités : comptes utilisateurs, contribution communautaire, modération.",
    shortDescription: "Bestiaire de référence des créatures de jeux vidéo avec système de contribution communautaire.",
    imageUrl: null,
    githubUrl: null,
    projectUrl: null,
    tags: ['Laravel', 'Angular']
  },
  {
    title: "Numa",
    type: 'Professional',
    description: "<strong>Portail SaaS de pilotage d'entreprise</strong> centralisé avec IA. <br/>Intégration multi-outils (ERP, CRM, comptabilité), tableaux de bord personnalisés, recommandations intelligentes.",
    shortDescription: "Portail SaaS de pilotage d'entreprise et d'aide à la décision avec IA intégrée.",
    imageUrl: null,
    githubUrl: null,
    projectUrl: "https://numa-soft.fr/",
    tags: ['Python', 'Symfony', 'JQuery', 'Tailwind CSS', 'DevExtreme', 'MongoDB', 'MySQL']
  },
  {
    title: "Orkestra",
    type: 'Personal',
    description: "<strong>Orkestra — application web full-stack</strong> de gestion de projets inspirée de Trello. <br/>Authentification JWT, tableau de bord, gestion de projets/tâches et vue Gantt. Organisé dans le cadre d'un hackathon d'une journée au sein d'Ynov.",
    shortDescription: "Application web full-stack de gestion de projets (React + Node.js + Prisma).",
    imageUrl: null,
    githubUrl: "https://github.com/Yyrion/Orkestra",
    projectUrl: null,
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL']
  },
  {
    title: "Bluz Thirst",
    type: 'Academic',
    description: "<strong>Jeu 2D shooter</strong> avec mode zombie solo. <br/>Mécanique de jeu itérative, courbe de difficulté progressive.",
    shortDescription: "Jeu 2D shooter avec mode zombie en solo.",
    imageUrl: null,
    githubUrl: "https://github.com/Elouanche/Yboost-TeamRefound",
    projectUrl: null,
    tags: ['Unity 2D', 'C#']
  },
  {
    title: "Unicef Extranet",
    type: 'Academic',
    description: "<strong>Plateforme de gestion de bénévoles</strong> pour l'UNICEF Bretagne. <br/>Développée en <strong>48h</strong> hackathon. Inscription, missions, postulez, admin.",
    shortDescription: "Plateforme de gestion des bénévoles pour l'UNICEF Bretagne, développée en React et Supabase.",
    imageUrl: null,
    githubUrl: "https://github.com/Yyrion/UNICEF-volunteer-manager",
    projectUrl: null,
    tags: ['React', 'Supabase']
  },
  {
    title: "MatrixPy",
    type: 'Personal',
    description: "<strong>Bibliothèque Python</strong> d'algèbre linéaire. <br/>Opérations matricielles : addition, multiplication, inversion, déterminant. <br/>Génération de matrices particulières (Identité, Vandermonde, etc.).",
    shortDescription: "Bibliothèque Python pour les opérations d'algèbre linéaire et la manipulation de matrices.",
    imageUrl: null,
    githubUrl: "https://github.com/Yyrion/matrixpy",
    projectUrl: null,
    tags: ['Python']
  },
  {
    title: "LabOps",
    type: 'Academic',
    description: "<strong>Outil desktop de déploiement</strong> multi-environnements. <br/>Intégration Jenkins (CI/CD), Docker, gestion centralisée des déploiements.",
    shortDescription: "Outil desktop de déploiement multi-environnements avec Jenkins et Docker.",
    imageUrl: null,
    githubUrl: null,
    projectUrl: null,
    tags: ['Tauri', 'Rust', 'React', 'Jenkins', 'Docker']
  },
  {
    title: "Moov",
    type: 'Personal',
    description: "<strong>App mobile de fitness sociale</strong>. <br/>Suivi d'activités, objectifs personnalisés, communauté, gamification.",
    shortDescription: "Application mobile sociale pour le suivi des activités sportives et la motivation.",
    imageUrl: null,
    githubUrl: null,
    projectUrl: null,
    tags: ['Flutter', 'NestJS', 'Prisma']
  },
  {
    title: "LycanBot",
    type: 'Personal',
    description: "<strong>Bot Discord</strong> pour Loup Garou automatisé. <br/>Gestion jour/nuit, rôles, votes. Statistiques et historique persistant.",
    shortDescription: "Bot Discord pour jouer au Loup Garou avec gestion automatisée des parties.",
    imageUrl: null,
    githubUrl: "https://github.com/Yyrion/LycanBot",
    projectUrl: null,
    tags: ['DiscordJS', 'SQlite']
  }
];