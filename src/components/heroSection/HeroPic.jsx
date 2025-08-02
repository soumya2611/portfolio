import React from "react";
import { PiHexagon } from "react-icons/pi";
import { motion } from "motion/react";
import { fadeIn } from "../framerMotion/variants";
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="../../images/hexaYellow.png"
        alt="soumya image"
        className="max-h-[450px] w-auto"
      />
      <div className="absolute -z-10 animate">
        <PiHexagon className="md:h-[90%] h-[100%] min-h-[450px] text-cyan blur-md w-full animate-[spin_12s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
