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
    title: "Data Engineer / Data Analyst (Freelance)",
    location: "Benidaxe",
    description:
      "Conception et modélisation de bases de données SQL pour des projets data. Mise en place de pipelines ETL automatisés en Python pour la collecte et la transformation de données. Développement de dashboards interactifs Power BI avec DAX pour le suivi des KPI et l'aide à la décision. Analyse des tunnels de conversion et mise en place d'A/B testing pour améliorer la performance produit.",
    icon: React.createElement(CgWorkAlt),
    date: "12/2025 - Aujourd’hui",
  },
  {
    title: "Data Analyst / Data Operations",
    location: "BAO Retail | CDD",
    description:
      "Préparation et structuration de données pour l’aide à la décision commerciale et tarifaire. Automatisation de pipelines de données avec Python et SQL. Mise en place de contrôles qualité et nettoyage automatisé des données permettant d'améliorer la fiabilité des datasets de +25%. Création d’indicateurs de performance et de KPI prédictifs pour le pilotage de l’activité.",
    icon: React.createElement(CgWorkAlt),
    date: "12/2024 - 11/2025",
  },
  {
    title: "Gestionnaire Support IT & Data",
    location: "BCICDD",
    description:
      "Support technique et gestion des incidents via méthodologie ITIL. Supervision d’infrastructures et maintenance de serveurs Windows Server et Linux Ubuntu. Gestion et requêtes SQL sur les bases clients et support de plus de 100 postes utilisateurs. Mise en place d’outils de monitoring et amélioration de la disponibilité des systèmes.",
    icon: React.createElement(CgWorkAlt),
    date: "10/2022 - 06/2024",
  },
  {
    title: "Mastère Ingénierie Data & Intelligence Artificielle",
    location: "ECE, Paris",
    description:
      "Spécialisation en Data Engineering, Big Data et Machine Learning. Projets autour de la modélisation de données, du développement de pipelines data et de la création de dashboards décisionnels.",
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
  title: "Analyse des ventes voiture 2025",
  description:
    "Projet Power BI dédié à l’analyse des ventes automobiles pour l’année 2025. Conception de tableaux de bord interactifs pour le suivi des performances commerciales, des marges et des tendances régionales. Utilisation de SQL pour la préparation des données et de DAX pour la création de mesures et indicateurs dynamiques.",
  tags: ["Power BI", "DAX", "SQL", "Data Analysis", "Data Visualization"],
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
