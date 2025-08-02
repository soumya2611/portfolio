import React from "react";
import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <div>
      <Link to="home" smooth={true} duration={500} className="cursor-pointer">
        <h1 className="text-white text-2xl hidden md:block font-Josefin">
          Soumya Ranjan
        </h1>
      </Link>
      <Link to="home" smooth={true} duration={500} className="cursor-pointer">
        <h1 className="text-white font-roboto font-extrabold text-4xl block md:hidden">
          SRB
        </h1>
      </Link>
    </div>
  );
};

export default NavbarLogo;
