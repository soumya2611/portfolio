import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCss3, SiMongodb, SiTypescript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { motion } from "motion/react";
import { fadeIn } from "../framerMotion/variants";

const AllSkillsSM = () => {
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
    <motion.div
      variants={fadeIn("up", 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="grid md:grid-cols-4 grid-cols-2 gap-12 my-4"
    >
      {skills.map((item, index) => {
        return (
          <div className="flex flex-col items-center " key={index}>
            <item.icon className="text-7xl text-orange " />
            <p className="text-center mt-4 text-white  "> {item.skill}</p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default AllSkillsSM;
