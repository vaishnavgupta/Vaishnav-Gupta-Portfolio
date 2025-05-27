import React from 'react'
import { education } from '../../constants'

const Education = () => {
  return (
    <section
      id="education"
      className="font-sans py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EDUCATION
        </h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>

      </div>
      {/* eDUCATION Cards and Line */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 h-full bg-white"></div>

        {/* Experience Entries */}
        {education.map((edu, idx) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row mb-16 ${
              idx % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
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
                <div className="w-24 h-16 bg-white rounded-xl overflow-hidden ">
                  <img
                    className="w-full h-full object-cover"
                    src={edu.img}
                    alt={edu.school}
                  ></img>
                </div>
                {/* Role School Desc */}
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300 mt-4">
                    {edu.school}
                  </h4>
                  {/* date */}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>
              {/* Grade */}
              <p className="text-lg sm:text-xl font-semibold text-gray-300 mt-4">
                {edu.grade} </p>
              <p className="text-gray-400 mt-4">{edu.desc}</p>
              {/* Skills */}
              
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education