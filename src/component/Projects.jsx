import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";

if (typeof window !== "undefined"){
  gsap.registerPlugin(ScrollTrigger)
}

motion

const Projects = () => {
  const sectionRef = useRef()
  const headingRef = useRef()
  const highlightRef = useRef()
  const projecsRef = useRef()
  const flowerRef = useRef()

  useEffect(() => {
    // GSAP animations
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      // Highlight background animation
      gsap.fromTo(
        highlightRef.current,
        {
          width: 0,
        },
        {
          width: "100%",
          duration: 1.2,
          delay: 0.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )

      // Flower animation
      gsap.fromTo(
        flowerRef.current,
        {
          y: 100,
          rotation: -10,
          opacity: 0,
        },
        {
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.8,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      )
    }, sectionRef)
        
    return() => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: {opacity:0},
    visible: {
      opacity:1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8
      },
    },
  }

  const cardVariants = {
    hidden: {y:50, opacity: 0},
    visible: {
      y:0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness : 100,
        damping: 12,
      },
    },
  }

  const buttonVariants = {
    hidden: {x: -20, opacity: 0},
    visible: {
      x:0,
      opacity: 1,
      transition: {
        delay: 1.2,
        type: "spring",
        stiffness: 120
      },
    },
    hover: {
      scale: 1.02,
      backgroundColor: '#e5e7eb',
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      },
    },
    tap: {scale: 0.95 },
  }

  return (
    <div 
      id="projects"
      className="min-h-screen bg-white flex snap-start items-center justify-center"
      ref={sectionRef}
    >

      {/* Main Content */}
      <div className="flex-1 p-12  left-3 md:left-10 relative">
        {/* Heading */}
        <h1 
          className="text-[min(8rem,10vw)] font-bold uppercase tracking-widest relative inline-block z-10 text-left mr-5"
          ref={headingRef}
        >
          <span className=" text-transparent stroke-2 stroke-black outline-text">PROJECTS</span>
          <div 
            className="absolute bottom-8 left-0 w-full h-6 md:h-10 lg:h-12 bg-indigo-100 rounded-xl translate-y-[21px] md:translate-y-[18px] lg:translate-y-0 -z-10"
            ref={highlightRef}
          ></div>
        </h1>


        {/* Project Cards */}
        <motion.div 
          className="flex flex-wrap gap-6 mt-0 ml-10 justify-center items-start drop-shadow-lg"
          ref={projecsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.2}}
        >
          {/* Project 1 */}
          <motion.div 
            className="w-60 md:w-72 bg-gray-100 rounded-xl shadow-md p-2 relative overflow-hidden"
            variants={cardVariants}
            whileHover={{
              y: -10,
              transition: {type: "spring", stiffness: 300}
            }}
          >
            <div className="relative">
              <img 
                src="/img/Ss.jpeg" 
                alt="Project 1" 
                className="rounded-md w-full h-85 object-cover" 
              />
              <motion.div 
                className="absolute top-2 left-2 text-black"
                initial = {{opacity:0, x: -10}}
                animate = {{ opacity:1, x:0}}
                transition={{delay: 0.3, duration:0.5}}
              >
                <h2 className="text-sm font-semibold text-zinc-200">Project 1</h2>
                <p className="text-xs text-gray-200">Description</p>
              </motion.div>
              <motion.button 
                className="absolute top-1 right-1 bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition drop-shadow-lg cursor-pointer"
                whileHover={{scale:1.1, rotate: 15}}
                whileTap={{scale:0.9}}
              >
                <GoArrowRight size={25} />
              </motion.button>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            className="w-60 md:w-72 bg-gray-200 rounded-xl shadow-md p-2 relative overflow-hidden"
            variants={cardVariants}
            whileHover={{
              y: -10,
              transition: {type: "spring", stiffness:300}
            }}
          >
            <div className="relative">
              <img 
                src="/img/Ss2.jpeg" 
                alt="Project 2" 
                className="rounded-md w-full h-85 object-cover" 
              />
              <motion.div 
                className="absolute top-2 left-2 text-black"
                initial={{opacity:0, x: -10}}
                animate={{opacity:1, x:0}}
                transition={{delay:0.3, duration:0.5}}
              >
                <h2 className="text-sm font-semibold">Project 2</h2>
                <p className="text-xs">Description</p>
              </motion.div>
              <motion.button 
                className="absolute top-1 right-1 bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition drop-shadow-lg cursor-pointer"
                whileHover={{scale:1.1, rotate:15}}
                whileTap={{scale:0.9}}
              >
                <GoArrowRight size={25} />
              </motion.button>
            </div>
          </motion.div>

          {/* GitHub Button */}
          <motion.button 
            className="bg-gray-200 rounded-xl p-3 md:p-3 lg:p-4 text-sm font-medium flex items-center gap-2 hover:bg-gray-300 transition w-40 md:w-55 justify-between md:mb-35 lg:mb-0 md:mr-80 lg:mr-0 drop-shadow-lg cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            GitHub 
            <motion.div
              animate={{x: [0,5,0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration:1.5,
                repeatType:"mirror",
                ease:"easeInOut"
              }}
            >
              <SlArrowRight size={16} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative Flower Image */}
        <motion.img
          src="/img/blue-flower.png"
          alt="Decorative Flower"
          className="absolute bottom-[-3rem] md:bottom-0 right-0 md:right-20 lg:right-20 w-[150px] md:w-[280px] lg:w-[380px] z-20 drop-shadow-xl md:mt-5"
          ref={flowerRef}
          drag
          dragConstraints={{ 
            left:0,
            right:0,
            top:0,
            bottom:0
          }}
          dragElastic={0.1}
          whileHover={{
            scale: 1.05,
            //rotate:5,
            transition: {duration:0.3},
          }}
        />
      </div>
    </div>
  );
};

export default Projects;

