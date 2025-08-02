import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "motion/react";
import { fadeIn } from "../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2 className="text-2xl md:text-3xl text-orange ">{name}</h2>
        <h2
          className={` text-xl font-thin text-white font-Josefin text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>
        <a
          className={` text-lg  flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer justify-self-center hover:scale-110 ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View
          <BiSolidRightTopArrowCircle size={24} />
        </a>
      </div>
      <div className="max-h-[250px] max-w-[400px] overflow-hidden rounded-xl hover:scale-110 transition-all relative duration-500 transform border-white">
        <div className="w-full h-full bg-lightBrown opacity-30 absolute top-0 left-0 hover:opacity-0 transition-all duration-300 hidden md:block"></div>
        <img className="w-full h-full " src={image} alt="projectImage" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
