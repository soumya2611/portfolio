import React from "react";
const AboutText = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h2 className="text-6xl text-orange mb-10">About Me</h2>
      <p className="text-white font-roboto text-lg leading-relaxed tracking-wide">
        Hello! I’m{" "}
        <span className="font-semibold text-cyan">Soumya Ranjan</span>, a
        dedicated full-stack web developer with a Master’s degree in Computer
        Applications (MCA). I specialize in crafting responsive, scalable, and
        intuitive web applications using technologies like{" "}
        <span className="text-orange-300">JavaScript</span>,{" "}
        <span className="text-orange-300">React.js</span>,{" "}
        <span className="text-orange-300">Node.js</span>,{" "}
        <span className="text-orange-300">Express.js</span>, and{" "}
        <span className="text-orange-300">Tailwind CSS</span>.
        <br />
        <br />
        I’ve had the opportunity to work on real-world freelance projects,
        collaborating closely with clients to transform their ideas into
        functional products. From secure authentication systems and dynamic
        dashboards to appointment scheduling tools and admin panels—I enjoy
        building meaningful solutions that make an impact.
        <br />
        <br />I believe in writing clean, maintainable code and follow best
        practices to ensure performance and scalability. I’m proficient with
        tools like <span className="text-orange-300">Git</span>, and I deploy
        applications confidently on platforms such as{" "}
        <span className="text-orange-300">Vercel</span> and{" "}
        <span className="text-orange-300">Render</span>.
        <br />
        <br />
        Curious to see what I’ve been working on? Scroll down or click the
        button below to explore some of my featured projects!
      </p>
      <a
        href="https://www.github.com/soumya2611"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mb-4 border-t-1 border-b-cyan border-b-1 border-t-orange rounded-full py-2 px-6 text-lg flex items-center mt-10  transition-all duration-500 cursor-pointer md:self-start self-center text-white hover:text-black hover:bg-white">
          My Project
        </button>
      </a>
    </div>
  );
};

export default AboutText;
