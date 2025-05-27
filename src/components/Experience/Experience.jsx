import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="font-sans py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my positions and work that I had done in various
          organizations.
        </p>
      </div>
      {/* Experience Cards and Line */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 h-full bg-white"></div>

        {/* Experience Entries */}
        {experiences.map((exprience, idx) => (
          <div
            key={exprience.id}
            className={`relative flex flex-col sm:flex-row mb-16 ${
              idx % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={exprience.img}
                alt={exprience.company}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Card content */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              ${idx % 2 === 0 ? "sm:ml-0" : "sm:mr-0"}
              sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105
              `}
            >
              {/* Flex container for img and text */}
              <div className="flex items-center space-x-6">
                {/* logo */}
                <div className="w-16 h-16 bg-white rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={exprience.img}
                    alt={exprience.company}
                  ></img>
                </div>
                {/* Role Comapny Work */}
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {exprience.role}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {exprience.company}
                  </h4>
                  {/* date */}
                  <p className="text-sm text-gray-500 mt-2">{exprience.date}</p>
                </div>
              </div>
              <p className="text-gray-400 mt-4">{exprience.desc}</p>
              {/* Skills */}
              <div className="mt-4">
                  <h5 className="font-medium text-white">Skills: </h5>
                  <ul className="flex flex-wrap mt-2">
                    {exprience.skills.map((skill,idx) => (
                      <li
                      key={idx}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
