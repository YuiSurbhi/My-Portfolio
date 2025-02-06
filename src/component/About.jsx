import React from "react";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const About = () => {
  return (
    <div id="about" className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Navbar and Theme Toggle */}
      <header className="absolute top-0 left-0 w-full flex justify-between p-6">
        <Navbar />
        <ThemeToggle />
      </header>

      {/* About Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6">
        {/* Big About Text */}
        <h1 className="absolute top-16 left-8 md:left-16 text-[5rem] md:text-[6rem] font-bold tracking-wide uppercase text-black dark:text-gray-600">
          ABO<span className="text-gray-300 opacity-50">UT</span>
        </h1>

        {/* About Content Box */}
        <div className="relative border-4 border-black dark:border-white p-6 md:p-8 max-w-lg md:w-2/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Namaste! <br />
            I'm <span className="text-pink-500 font-medium">Surbhi Verma</span>, currently pursuing a BCA degree.
            I discovered my love for web development while browsing through Awwwards.
            Inspired by the innovative and visually stunning websites featured there,
            I decided to pursue a career in front-end development.
            Join me on my journey of learning and growing!
          </p>
        </div>

        {/* Decorative Plant Image */}
        <img
          src="/img/leaves.png"
          alt="Decorative Plant"
          className="absolute bottom-2 right-2 md:right-8 md:bottom-4 w-28 md:w-36 opacity-90"
        />
      </section>
    </div>
  );
};

export default About;

