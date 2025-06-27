import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";
import { HiX, HiExternalLink } from "react-icons/hi"

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
  const [selectedProject, setSelectedProject] = useState(null)

  const projectData = [
    {
      id: 1,
      title: "Portfolio",
      shortDesc: "Portfolio Website",
      image: "/img/Ss.jpeg",
      fullDescription: "A modern portfolio website built with HTML5 and Tailwind CSS. This project showcases clean design principles and responsive layouts. The website features smooth animations, optimized performance, and a mobile-first approach to ensure great user experience across all devices.\n\nThe design emphasizes simplicity and elegance while maintaining functionality. It includes sections for showcasing projects, skills, and contact information with a focus on accessibility and SEO optimization.",
      technologies: ["HTML5", "Tilwind CSS"],
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Zentry",
      shortDesc: "Zentry: The Metagame Clone",
      image: "/img/Ss2.jpeg",
      fullDescription: "A sophisticated clone of the Zentry metagame platform built with modern React technologies. This project demonstrates advanced animation techniques using GSAP and Framer Motion to create engaging user interactions.\n\nThe application features complex state management, responsive design, and smooth page transitions. It showcases the ability to recreate complex UI/UX designs while maintaining performance and accessibility standards.",
      technologies: ["React", "Tailwind CSS", "Gsap", "Framer Motion"],
      liveUrl: "#"
    }
  ]

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

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.2,
      }
    }
  }

  return (
    <div 
      id="projects"
      className="min-h-screen bg-white flex snap-start items-center justify-center relative "
      ref={sectionRef}
    >

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12 relative max-w-7xl mx-auto">
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
          {/* Project Cards */}
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              className={`w-60 md:w-72 ${index === 0 ? "bg-gray-100" : "bg-gray-200"} rounded-xl shadow-md p-2 relative cursor-pointer`}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="rounded-lg w-full h-85 object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />

                <motion.div
                  className="absolute bottom-3 left-3 text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h2 className="text-lg font-bold">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-200">
                    {project.shortDesc}
                  </p>
                </motion.div>
                <motion.button
                  className="absolute top-1 right-1 bg-gray-200 p-2 rounded-md hover:bg-white transition-colors drop-shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <GoArrowRight size={25} className="text-gray-800"/>
                </motion.button>
              </div>
            </motion.div>
          ))}
          
          {/* GitHub Button */}
          <motion.button 
            className="bg-gray-200 rounded-xl p-3 md:p-3 lg:p-4 text-sm font-medium flex items-center gap-2 hover:bg-gray-300 transition w-40 md:w-55 justify-between md:mb-35 lg:mb-0 md:mr-80 lg:mr-0 drop-shadow-lg cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            GitHub 
            <motion.div
              animate={{x: [0, 5, 0] }}
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
            transition: {duration:0.3},
          }}
        />
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl focus:outline-none"
              style={{ touchAction: "pan-y" }}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
            >
              <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                {/* Left Side - Project Image */}
                <div className="md:w-1/2 p-6 bg-gray-50 flex items-center justify-center">
                  <div className="relative w-60 md:w-72">
                    <img
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      className="w-full rounded-xl shadow-lg object-cover h-auto"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="font-bold text-gray-800">
                        {selectedProject.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {selectedProject.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Project Details */}
                <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col relative">
                  {/* Close Button */}
                  <button
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
                    onClick={() => setSelectedProject(null)}
                  >
                    <HiX size={24} />
                  </button>

                  {/* Project Title */}
                  <motion.h1
                    className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-6 text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedProject.title}
                  </motion.h1>

                  {/* Project Description */}
                  <motion.div
                    className="flex-1 space-y-4 text-gray-700 leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedProject.fullDescription.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="text-sm lg:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Technologies Used:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.a
                      href={selectedProject.liveUrl}
                      className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiExternalLink size={18} />
                      Live Demo
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;