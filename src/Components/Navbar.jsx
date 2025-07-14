import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-tl from-gray-200 to-gray-400 shadow-xl">
      <div className="max-w-screen-xl mx-auto px-4 md:px-20 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="font-semibold font-montserrat text-white text-xl cursor-pointer">
            SOUMYA
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:scale-110 hover:text-green-600 transition duration-200 cursor-pointer"
            >
              {text}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <AiOutlineClose size={24} /> : <HiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="md:hidden flex flex-col items-center justify-center bg-gray-100 py-4 gap-4 text-black font-semibold">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className="hover:scale-110 hover:text-green-600 transition duration-200 cursor-pointer"
            >
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
