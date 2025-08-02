import React from "react";

import { motion } from "motion/react";
import { fadeIn } from "../framerMotion/variants";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCss3, SiMongodb, SiTypescript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import SingleSkill from "./SingleSkill";

const AllSkill = () => {
  const skills = [
    {
      skill: "HTML",
      icon: TiHtml5,
    },
    {
      skill: "CSS",
      icon: SiCss3,
    },
    {
      skill: "JAVASCRIPT",
      icon: IoLogoJavascript,
    },
    {
      skill: "REACTJS",
      icon: RiReactjsFill,
    },
    {
      skill: "NODEJS",
      icon: FaNodeJs,
    },
    {
      skill: "TAILWIND",
      icon: RiTailwindCssFill,
    },
    {
      skill: "MONOGDB",
      icon: SiMongodb,
    },
    {
      skill: "TYPESCRIPT",
      icon: SiTypescript,
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkill;
