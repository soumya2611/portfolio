import React from "react";
import { Link } from "react-scroll";
const NavbarLinks = () => {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];

  return (
    <ul className="flex gap-6 text-white font-bold text-center py-4 lg:flex-row flex-col lg:relative absolute top-[100%] left-0 bg-cyan/40 rounded-b-lg backdrop-blur-lg lg:bg-transparent w-full lg:w-auto px-4">
      {links.map((link, index) => (
        <li className="group" key={index}>
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
