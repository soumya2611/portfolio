import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2
    "
    >
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-4 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-4  items-center justify-center rounded-full border  border-orange bg-gradient-to-tr from-darkBrown to-darkGrey ">
        <button
          onClick={toggleMenu}
          className="text-2xl p-3 border rounded-full border-orange bg-darkBrown  text-white"
        >
          {menuOpen ? <ImCross size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
