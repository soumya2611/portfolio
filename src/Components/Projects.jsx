import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import pixa from "../assets/pixaay.png";
import travelodisha from "../assets/travelOdisha.png";
import docbook from "../assets/docbook.png";
import ems from "../assets/ems.png";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: "Doctor Appointment Booking",
      desc: "A web app for booking doctor appointments with secure authentication and online payments.",
      image: docbook,
      live: "https://doctorappointmentbooking-frontend-887z.onrender.com/",
      github: "https://github.com/soumya2611/doctorappointmentbooking",
    },
    {
      id: 2,
      name: "Travel Odisha",
      desc: "A website showcasing top travel destinations in Odisha. Currently under development.",
      image: travelodisha,
      live: "https://traveldest-frontend.onrender.com/",
      github: "https://github.com/soumya2611/traveldest",
    },
    {
      id: 3,
      name: "Pixaay",
      desc: "A fast and efficient image search and download app for high-quality stock photos.",
      image: pixa,
      live: "https://pixaay.vercel.app/",
      github: "https://github.com/soumya2611/pixaay",
    },
    {
      id: 4,
      name: "EMS",
      desc: "A full-stack HRMS to streamline employee data handling, leave tracking, and role-based access. Implemented secure authentication, admin controls, and responsive UI for efficient HR operations and team management.",
      image: ems,
      live: "https://ems-frontend-iota.vercel.app/login",
      github: "https://github.com/soumya2611/EMS-client",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-20 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-600 mb-2">Projects</h1>
        <p className="text-gray-500 italic font-mono">Featured Projects</p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projectsData.map(({ id, name, desc, image, github, live }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 p-4 flex flex-col justify-between"
          >
            {/* Image always visible */}
            <img
              src={image}
              alt={name}
              className="rounded-lg h-40 w-full object-cover mb-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {name}
              </h2>
              <p className="text-gray-600 text-sm mb-4 font-serif">{desc}</p>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-sm"
              >
                <FaExternalLinkAlt className="text-sm" />
                Live
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white px-3 py-1.5 rounded text-sm"
              >
                <FaGithub className="text-sm" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
