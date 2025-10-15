"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
   <p className="mb-3">
  Ingénieur Data &amp; IA en formation, je possède plus de <span className="font-medium">3 ans
  d’expérience en IT et administration systèmes</span>. Mon expertise couvre
  <span className="font-medium"> Python, SQL, infrastructures cloud et cybersécurité</span>.
  Je conçois des pipelines de données fiables et des solutions analytiques à
  fort impact, tout en restant curieux des nouvelles technologies pour créer
  des environnements performants et sécurisés.
</p>

      <p>
  <span className="italic">Quand je ne travaille pas sur des projets data</span>, 
  j’aime écouter de la <span className="font-medium">musique</span>, explorer 
  l’<span className="font-medium">entrepreneuriat</span> et le 
  <span className="font-medium">dropservice</span>, ainsi que voyager pour
  découvrir de nouvelles cultures. Ces activités nourrissent ma créativité
  et mon esprit d’initiative.
</p>
    </motion.section>
  );
}
