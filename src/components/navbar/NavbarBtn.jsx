import React from "react";
import { MdArrowOutward } from "react-icons/md";

const NavbarBtn = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1CNL8y5z5MpVFTjt6gZgc4YiICRCn6K2p/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="px-4 py-2 rounded-full text-xl font-bold text-white border-transparent 
  flex items-center gap-1 
  bg-gradient-to-r from-cyan-500 to-orange-500 
  transition-all duration-400 
  hover:shadow-lg cursor-pointer hover:bg-gradient-to-r hover:from-orange-500 hover:to-cyan-600"
      >
        Resume
        <span className="hidden md:block">
          <MdArrowOutward />
        </span>
      </button>
    </a>
  );
};

export default NavbarBtn;
