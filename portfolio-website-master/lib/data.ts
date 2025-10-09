import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Support IT N1/N2",
    location: "BAO | CDD",
    description:
      "Suivi et sécurisation des flux financiers et des bases de données sensibles. Supervision de +50 postes et serveurs. Mise en place d'outils de monitoring et reporting, améliorant la fiabilité des données de 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "02/2025 - 08/2025",
  },
  {
    title: "Gestionnaire Support IT",
    location: "BCICDD",
    description:
      "Gestion des incidents utilisateurs via ITIL et supervision (Zabbix). Maintenance et déploiement de serveurs Windows Server/Linux Ubuntu. Support technique sur 100+ postes et requêtes SQL pour la base clients.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2022 - 06/2024",
  },
  {
     title: "Mastère Spécialisation Ingénierie Data & IA (En cours)",
    location: "ECE, Paris",
    description:
      "Spécialisation en Ingénierie des données, Big Data, Machine Learning. Projets: modèles de scoring, conception de dashboards BI, gouvernance de la donnée.",
    icon: React.createElement(LuGraduationCap),
    date: "2025 - 2027 (En cours)",
  },
] as const;

export const projectsData = [
  {
    title: "Scraping et analyse de données IMDb",
    description:
      "Collecte et analyse de données de films depuis IMDb (titres, genres, notes, année de sortie) via web scraping. Exploration des tendances du cinéma, identification des genres les mieux notés et visualisation de l’évolution des films populaires dans le temps.",
    tags: ["Python", "BeautifulSoup", "Pandas"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Petit site de recherche d’emplois pour développeurs en télétravail. J’ai développé le front-end avec des fonctionnalités simples comme le filtrage, le tri et la pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Projets Personnels & Futurs Lancements",
    description:
      "Développement d’applications financières et d’un futur site e-commerce pour étudiants, avec l’objectif de lancer mes propres produits numériques.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  // --- Web / Full-Stack (déjà présents)
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  // --- Compétences Data & IT ajoutées ---
  "Power BI",
  "Tableau",
  "SQL (avancé)",
  "Apache Spark",
  "Airflow",
  "AWS (S3, Glue, Lambda)",
  "Docker",
  "CI/CD",
  "Linux",
  "Windows Server",
  "Data Governance",
  "Réseaux & Cybersécurité",
] as const;
