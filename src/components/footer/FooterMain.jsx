import React from "react";

import { Link } from "react-scroll";

const FooterMain = () => {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="hidden md:flex justify-between  mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightGrey">SOUMYA RANJAN BEHERA</p>
        <ul className="flex gap-4 text-xl">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.section}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-130}
                  className="hover:text-cyan transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-center md:text-right mt-2 mb-4 text-sm text-lightBrown">
        <span className="hidden md:inline">
          Portfolio <span className="text-white text-xl">•</span>{" "}
        </span>{" "}
        Soumya @ 2025
        <span className="md:hidden inline-block text-2xl scale-x-[-1]">🗿</span>
      </p>
    </div>
  );
};

export default FooterMain;
