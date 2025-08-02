import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../framerMotion/variants";
import SkillTxt from "./SkillTxt";
import AllSkill from "./AllSkill";
import AllSkillsSM from "./AllSkillsSM";
import SubSkill from "./SubSkill";

const SkillMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SkillTxt />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] hidden lg:block">
          <AllSkill />
        </div>
        <div className="block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
      <div className="hidden lg:block">
        <SubSkill />
      </div>
    </div>
  );
};

export default SkillMain;
