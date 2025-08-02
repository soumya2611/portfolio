import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../framerMotion/variants";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl text-xl uppercase text-cyan"
      >
        Full stack Web developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl text-4xl font-bold font-roboto text-orange text-shadow-lg/40 text-shadow-darkGrey "
      >
        SOUMYA RANJAN BEHERA
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-2xl mt-4 mb-6 font-Josefin font-light text-white"
      >
        A Passionate Web Developer with <br /> 6+ months of experience
      </motion.p>
    </div>
  );
};

export default HeroText;
