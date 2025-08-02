import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "motion/react";
import { fadeIn } from "../framerMotion/variants";
const ProjectsMain = () => {
  const projects = [
    {
      name: "Prescripto",
      year: "2024",
      align: "left",
      image: "../../images/prescripto.png",
      link: "https://doctorappointmentbooking-frontend-887z.onrender.com/",
    },
    {
      name: "EMS System",
      year: "2024",
      align: "right",
      image: "../../images/ems.png",
      link: "https://ems-frontend-iota.vercel.app",
    },
    {
      name: "Stayzi",
      year: "2025",
      align: "left",
      image: "../../images/stayzi.png",
      link: "https://github.com/soumya2611/stayzi",
    },
    {
      name: "Mcq Forge",
      year: "2025",
      align: "right",
      image: "../../images/forge.png",
      link: "https://mcqforge.in/",
    },
  ];
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              image={item.image}
              link={item.link}
              align={item.align}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
