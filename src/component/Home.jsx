import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Home = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });

      gsap.from('.heading-part', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.8,
      });

      gsap.from('.end-text', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: 'elastic.out(1, 0.5)',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      id="home"
      className="min-h-screen"
      ref={containerRef}
      initial={{ opacity: 0, y:50 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 1 }}
    >

      <motion.div
        className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/img/Home-page.png')" }}
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        loading="lazy"
      >

        {/* Text Content */}
        <div className="relative z-10 leading-tight drop-shadow-lg text-center px-4">
          <p className="text-gray-500 text-lg mb-4 intro-text text-start">
            Namaste! I am Surbhi Verma
          </p>
          <div >
            <h1 className="text-black text-[clamp(3rem,10vw,8rem)] leading-none font-normal heading-part">
              FRONT-
              <span
                className="text-transparent italic end-text"
                style={{
                  WebkitTextStroke: '1px black',
                }}
              >
                END
              </span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="text-black text-[clamp(3rem,10vw,8rem)] leading-none font-normal heading-part">
              DEVELOPER
            </h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
