import React from "react";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const About = () => {
  return (
    <div id="about" className="relative min-h-screen bg-white">
      {/* Navbar and Theme Toggle */}
      <header className="absolute top-0 left-0 w-full flex justify-between p-4 md:p-6">
        <Navbar />
        <ThemeToggle />
      </header>

      {/* About Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-6">
        {/* Big About Text */}
        <h1 className="absolute top-20 left-2 md:left-44 flex items-center font-extrabold uppercase z-20">
          <span className="text-black text-[4rem] md:text-[8rem] tracking-widest font-medium stroke-2 stroke-black text-transparent outline-text">
            ABO
          </span>
          <span className="text-gray-400 opacity-50 text-[4rem] md:text-[8rem] tracking-widest">
            UT
          </span>
        </h1>

        {/* Square Border Box */}
        <div className="relative border-[8px] md:border-[12px] border-black w-[250px] h-auto md:w-[500px] md:h-[450px] bg-white shadow-2xl flex flex-col justify-end md:left-20 z-10 p-4 pt-10 md:pt-20">
          <p className="text-gray-700 leading-relaxed text-sm md:text-lg text-center">
            Namaste! <br />
            I'm <span className="text-pink-300 font-medium">Surbhi Verma</span>, currently pursuing a BCA degree.
            I discovered my love for web development while browsing through Awwwards.
            Inspired by the innovative and visually stunning websites featured there,
            I decided to pursue a career in front-end development. Join me on my journey of learning and growing!
          </p>
        </div>

        {/* Decorative Plant Image */}
        <img
          src="/img/leaves.png"
          alt="Decorative Plant"
          className="absolute bottom-0 right-0 w-[200px] md:w-[500px] opacity-95 z-30"
        />
      </section>
    </div>
  );
};

export default About;
