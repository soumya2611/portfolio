import React from "react";

const SkillTxt = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] mb-[50px] ">
      <h2 className="text-6xl text-cyan mb-10">My Skills</h2>
      <p className="text-lg  text-center text-white max-w-4xl leading-relaxed px-4 font-roboto">
        I have hands-on experience with a modern tech stack for building
        responsive and scalable web applications. I work confidently with
        <span className="text-orange-300 font-medium"> HTML</span>,
        <span className="text-orange-300 font-medium"> CSS</span>, and
        <span className="text-orange-300 font-medium"> JavaScript</span>, and
        build interactive UIs using
        <span className="text-orange-300 font-medium"> React.js</span> and
        <span className="text-orange-300 font-medium"> Tailwind CSS</span>. On
        the backend, I use
        <span className="text-orange-300 font-medium"> Node.js</span> with
        <span className="text-orange-300 font-medium"> Express.js</span> to
        create APIs, while
        <span className="text-orange-300 font-medium"> MongoDB</span> powers my
        database needs. I'm also familiar with
        <span className="text-orange-300 font-medium"> TypeScript</span>, which
        helps write more predictable and maintainable code. Whether it's
        building full-stack apps, integrating third-party services, or deploying
        to the cloud, I enjoy solving problems and continuously improving my
        development workflow.
      </p>
    </div>
  );
};

export default SkillTxt;
