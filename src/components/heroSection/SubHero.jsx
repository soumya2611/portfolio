import React from "react";
import { motion } from "motion/react";
const SubHero = () => {
  return (
    <div className="w-full border border-lightGrey text-lightGrey bg-brown uppercase flex justify-around xl:text-4xl md:text-2xl text-4xl py-6  items-center gap-4 font-serif">
      <motion.p
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="hidden hover:text-white  md:block"
      >
        Fast Learner
      </motion.p>
      <motion.p
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="hidden hover:text-white  md:block"
      >
        Team work
      </motion.p>
      <motion.p
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className=" hover:text-white"
      >
        Details Master
      </motion.p>
    </div>
  );
};

export default SubHero;
