import React from "react";
import { DiReact } from "react-icons/di";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";
import profileImage from "../assets/pfp.jpg";

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-20 py-16 mt-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Side */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="text-2xl md:text-4xl font-semibold font-montserrat flex flex-col md:flex-row items-center md:items-start gap-2">
            <span>Hi, I'm a</span>
            <ReactTyped
              className="text-slate-600 hover:text-green-500"
              strings={["Developer", "Coder", "Problem Solver"]}
              typeSpeed={60}
              backSpeed={40}
              loop
              cursorChar="|"
            />
          </div>

          <p className="text-base md:text-lg lg:text-xl font-lora text-gray-700 text-justify leading-relaxed">
            Hey there! I'm{" "}
            <span className="font-bold text-green-600">Soumya</span> — a curious
            mind who loves turning ideas into interactive digital experiences.
            When I'm not coding, I'm probably learning something new or building
            side projects for fun.
          </p>

          {/* Resume and Socials */}
          <div className="flex flex-col gap-8 md:gap-6 md:flex-row items-center">
            {/* Resume Button */}
            <a
              href="https://drive.usercontent.google.com/u/0/uc?id=1CNL8y5z5MpVFTjt6gZgc4YiICRCn6K2p&export=download"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 animate-pulse hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium shadow-md transition duration-200"
            >
              Download Resume
            </a>

            {/* Social Links */}
            <div className="text-center">
              <h2 className="font-lora font-semibold text-gray-800">
                Find me on
              </h2>
              <div className="flex gap-4 justify-center mt-2 text-xl text-gray-600">
                <a
                  href="https://x.com/soumyadev2611"
                  target="_blank"
                  className="hover:text-black hover:scale-110 transition"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/soumya2611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 hover:scale-110 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.github.com/soumya2611"
                  target="_blank"
                  className="hover:text-gray-900 hover:scale-110 transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-left">
            <h2 className="font-lora font-semibold text-gray-800">
              Currently Working On
            </h2>
            <div className="flex gap-4 justify-center md:justify-start mt-2 text-2xl text-gray-700">
              <SiMongodb className="hover:text-green-600 hover:scale-110 transition cursor-pointer" />
              <SiExpress className="hover:text-gray-900 hover:scale-110 transition cursor-pointer" />
              <DiReact className="hover:text-blue-500 hover:scale-110 transition cursor-pointer" />
              <FaNodeJs className="hover:text-green-700 hover:scale-110 transition cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <img
              src={profileImage}
              alt="Soumya"
              className="rounded-full w-48 h-48 md:w-72 md:h-72 object-cover shadow-lg border-[6px] border-gray-200"
            />
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-1 text-sm font-bold font-montserrat rounded-full shadow animate-pulse">
              MERN Dev
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-16 border-red-300" />
    </div>
  );
}

export default Home;
