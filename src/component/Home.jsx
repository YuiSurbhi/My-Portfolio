import React from 'react';
import Navbar from './Navbar';
import ThemeToggle from './ThemeToggle';

const Home = () => {
  return (
    <div 
      id='home'
      className='min-h-screen'
    >
      <Navbar />
      < ThemeToggle />
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/img/Home-page.png')" }}
      >
        {/* Adding a semi-transparent overlay */}
        <div className="absolute inset-0 bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 leading-tight ">
          <p className="text-gray-500 text-lg mb-4">Namaste! I am Surbhi Verma</p>
          <h1 className="text-black text-[clamp(3rem,10vw,8rem)] leading-none font-semibold">
            FRONT-
            <span
              className="text-transparent italic"
              style={{
                WebkitTextStroke: '1px black',
                fontWeight: '900',
              }}
            >
              END
            </span>
          </h1>
          <h1 className="text-black text-[clamp(3rem,10vw,8rem)] leading-none font-semibold">DEVELOPER</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
