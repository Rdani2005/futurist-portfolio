"use client";
import React, { useState, useRef } from "react";
import { ProjectCard, ProjectTag } from ".";
import { motion, useInView } from "framer-motion";
import { Project, Tags } from "@/models";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Krypto",
    description: "NFT Store",
    image: "/projects/krypto.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rdani2005/Krypto",
    previewUrl: "https://krypto.rdani2005.com/",
  },
  {
    id: 2,
    title: "Finca Flora y Fauna",
    description: "AirBnb rent house landing page",
    image: "/projects/la-floresta.jpg",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://fincaflorayfaunacr.com/",
  },
  {
    id: 3,
    title: "Orion",
    description: "Ecommerce Store",
    image: "/projects/orion.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "",
    previewUrl: "http://orion.orbitascr.com/",
  },
  {
    id: 4,
    title: "OSS",
    description: "Maintainance Multimodule Application created for Orbitas'",
    image: "/projects/oss-landing.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "",
    previewUrl: "https://oss.orbitascr.com/index.html",
  },
  {
    id: 5,
    title: "Star Wars Challenge",
    description: "Star Wars API Challenge for hiring interviews made for SIM",
    image: "/projects/star-wars.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cr-patitos/starwars-challenge",
    previewUrl: "https://starwars-challenge-jet.vercel.app",
  },
];

const tags: Tags[] = ["All", "Web", "Mobile"];

export const ProjectsSection = () => {
  const [tag, setTag] = useState<Tags>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: Tags) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {tags.map((tagData) => (
          <ProjectTag
            key={tagData.toString()}
            onClick={handleTagChange}
            name={tagData}
            isSelected={tagData === tag}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard key={project.id} {...project} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
