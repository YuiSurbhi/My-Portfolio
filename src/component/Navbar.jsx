import { AnimatePresence, delay, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";  

const Navbar = () => {
  
  const[isVisible, setIsVisible] = useState(true)
  const[lastScrollY, setLastScrollY] = useState(0)
  const[activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const controlNvbar = () => {
      const currentScrollY = window.scrollY

      //showing navbar when scrolling up, and hide when scroll down
      if (currentScrollY> lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNvbar)
    return() => window.removeEventListener("scroll",controlNvbar)
  }, [lastScrollY])

  const navItems = [
    {name: "Home", to: "home"},
    {name: "About", to: "about"},
    {name: "Projects", to: "projects"},
    {name: "Say Hi!", to: "contact"},
  ]

  const navVariants = {
    hidden: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const itemVariants = {
    hidden: {x: -20, opacity: 0},
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      },
    }),
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav 
          className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 md:left-11 z-50"
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="backdrop-blur-md bg-white/10 rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20"
            whileHover={{ scale:1.02 }}
            transition={{ duration:0.2 }}
          >
            <ul className="space-y-3 sm:space-x-4">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.to}
                  className="relative"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >   
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={600}
                    spy={true}
                    activeClass="active"
                    onSetActive={() => setActiveSection(item.to)}
                    className="group cursor-pointer block"
                  >
                    <motion.div
                      className="relative overflow-hidden rounded-lg px-3 py-2 sm:px-4 sm:py-2"
                      whileHover={{ scale:1.05 }}
                      whileTap={{ scale:0.95 }}
                    >
                      {/*background highlight for active/hover state */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-red-400/20 rounded-lg"
                        initial={{ opacity:0, scale:0.8 }}
                        whileHover={{ opacity:1, scale:1 }}
                        transition={{ duration:0.2 }}
                      />

                      {/*active state background */}
                      {activeSection === item.to && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-red-400/30 to-pink-400/30 rounded-lg"
                          layoutId="activeBackground"
                          transition={{ duration: 0.3, ease:"easeInOut" }}
                        />
                      )}

                      <span
                        className={`
                          relative z-10 uppercase text-xs sm:text-sm md:text-base font-medium
                          transition-all duration-300 ease-out 
                          ${
                            activeSection === item.to
                              ? "text-gray-800 font-bold"
                              : "text-gray-600 group-hover:text-gray-800 group-hover:font-semibold"
                          }
                        `}
                      >
                        {item.name}
                      </span>

                      {/*hover underline effect */}
                      <motion.div
                        className="absolute bottom-1 left-3 sm:left-4 right-3 sm:right-4 h-0.5 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"
                        initial={{ scaleX:0 }}
                        whileHover={{ scaleX:1 }}
                        transition={{ duration:0.5 }}
                      />
                    </motion.div>
                  </Link>       
                </motion.li>
              ))}
            </ul>

            {/* decorative dot indicator */}
            <motion.div
              className="absolute -right-2 top-1/2 w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration:2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            />
          </motion.div>
      </motion.nav>
      )}
    </AnimatePresence>
    
  );
};

export default Navbar;




