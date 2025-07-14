import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-20 py-12 text-gray-800">
      {/* About Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-600 mb-4">About Me</h1>
        <p className="text-xl leading-relaxed text-slate-700 font-serif">
          Hello, I'm{" "}
          <span className="text-green-500 font-semibold">Soumya</span>, a
          passionate web developer with a keen eye for{" "}
          <span className="text-red-500 font-semibold">MERN Stack</span>{" "}
          development. With a background in IT, I strive to create impactful and
          visually stunning software solutions that leave a lasting impression.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-500 mb-2">
          Work Experience
        </h2>
        <hr className="border-red-300 mb-4" />
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-2 transition hover:shadow-2xl">
          <h3 className="text-xl font-bold">TOLET GLOBE</h3>
          <p className="text-md leading-relaxed text-gray-700 font-serif">
            Worked on optimizing and extending the Node.js backend for
            ToletGlobe, a property rental platform. Implemented key features,
            improved API performance, and ensured efficient server response
            times, contributing to a faster and more scalable system.
          </p>
          <span className="text-sm text-red-600 font-medium">2024 - 2025</span>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-500 mb-2">
          Education & Training
        </h2>
        <hr className="border-red-300 mb-4" />
        <div className="space-y-4">
          {[
            {
              title: "MCA",
              institute: "Trident Academy Of Creative Technology, Bhubaneswar",
              year: "2022 - 2024",
            },
            {
              title: "BSC (Physics)",
              institute: "Banki Autonomous College, Cuttack",
              year: "2019 - 2022",
            },
            {
              title: "12th",
              institute: "Jupiter Science College, Bhubaneswar",
              year: "2017 - 2019",
            },
          ].map((edu, idx) => (
            <div key={idx} className="bg-white shadow-sm rounded-xl p-4">
              <h4 className="text-lg font-semibold text-gray-900">
                {edu.title}
              </h4>
              <p className="text-md text-slate-600 font-serif">
                {edu.institute}
              </p>
              <p className="text-sm text-red-500 font-medium">{edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-500 mb-2">
          Skills & Expertise
        </h2>
        <hr className="border-red-300 mb-4" />
        <div className="space-y-4 text-lg text-gray-700">
          <p>
            <strong className="text-gray-900">Proficient in:</strong>{" "}
            <span className="text-zinc-500 font-serif">
              JavaScript, HTML, CSS, Node.js, React.js, Express.js, MongoDB,
              PostgreSQL, Cloudinary, Razorpay API, JWT authentication, Multer,
              REST APIs
            </span>
          </p>
          <p>
            <strong className="text-gray-900">Strong grasp of:</strong>{" "}
            <span className="text-zinc-500 font-serif">
              Frontend and backend development, state management,
              component-based architecture, database design, authentication &
              authorization
            </span>
          </p>
          <p>
            <strong className="text-gray-900">Problem-solving:</strong>{" "}
            <span className="text-zinc-500 font-serif">
              Skilled in debugging, code optimization, and implementing scalable
              solutions. Effective communicator, collaborative team player, and
              clear technical explainer.
            </span>
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-2">
          Mission Statement
        </h2>
        <hr className="border-red-300 mb-4" />
        <p className="text-lg text-zinc-600 font-serif leading-relaxed">
          My mission is to leverage my skills and creativity to deliver
          innovative software solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </section>
    </div>
  );
};

export default About;
