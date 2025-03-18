import React from "react";
import { GoArrowRight } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";

const Projects = () => {
  return (
    <div 
      id="projects"
      className="min-h-screen bg-white flex">

      {/* Main Content */}
      <div className="flex-1 p-12  left-3 md:left-10 relative">
        {/* Heading */}
        <h1 className="text-[4rem] md:text-[8rem] font-extrabold uppercase tracking-widest relative inline-block z-10 text-left mr-5">
          <span className="text-transparent stroke-2 stroke-black outline-text">PROJECTS</span>
          <div className="absolute bottom-8 left-0 w-full h-10 bg-indigo-100 rounded-xl -z-10"></div>
        </h1>


        {/* Project Cards */}
        <div className="flex flex-wrap gap-6 mt-0 ml-10 justify-center items-start">
          {/* Project 1 */}
          <div className="w-60 md:w-72 bg-gray-100 rounded-xl shadow-md p-2 relative overflow-hidden">
            <div className="relative">
              <img src="/img/project1.png" alt="Project 1" className="rounded-md w-full h-85 object-cover" />
              <div className="absolute top-2 left-2 text-black">
                <h2 className="text-sm font-semibold">Project 1</h2>
                <p className="text-xs text-gray-700">Description</p>
              </div>
              <button className="absolute top-1 right-1 bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition">
                <GoArrowRight size={25} />
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-60 md:w-72 bg-gray-200 rounded-xl shadow-md p-2 relative overflow-hidden">
            <div className="relative">
              <img src="/img/project2.png" alt="Project 2" className="rounded-md w-full h-85 object-cover" />
              <div className="absolute top-2 left-2 text-black">
                <h2 className="text-sm font-semibold">Project 2</h2>
                <p className="text-xs text-gray-700">Description</p>
              </div>
              <button className="absolute top-1 right-1 bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition">
                <GoArrowRight size={25} />
              </button>
            </div>
          </div>

          {/* GitHub Button */}
          <button className="bg-gray-200 rounded-xl p-4 text-sm font-medium flex items-center gap-2 hover:bg-gray-300 transition w-40 md:w-55 justify-between">
            GitHub <SlArrowRight size={16} />
          </button>
        </div>

        {/* Decorative Flower Image */}
        <img
          src="/img/blue-flower.png"
          alt="Decorative Flower"
          className="absolute bottom-0 right-5 w-[150px] md:w-[380px] z-20"
        />
      </div>
    </div>
  );
};

export default Projects;

