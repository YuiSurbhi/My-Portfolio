import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapPin } from 'react-icons/fa';

if(typeof window !== "undefined"){
  gsap.registerPlugin(ScrollTrigger)
}

const Contact = () => {
  const sectionRef = useRef()
  const headingRef = useRef()
  const hiRef = useRef()
  const flowerRef = useRef()
  //const footerRef = useRef()
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          y:50,
          opacity:0
        },
        {
          y:0,
          opacity:1,
          duration:0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger:sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          },
        },
      )

      gsap.fromTo(
        hiRef.current,
        {
          scale: 0.5,
          opacity: 0,
          rotation: -10,
        },
        {
          scale:1,
          opacity:1,
          duration:0.8,
          rotation:0,
          delay:0.3,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          },
        },
      )

      gsap.fromTo(
        flowerRef.current,
        {
          y:50,
          opacity: 0,
          rotation: -10,
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          delay: 0.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      )

      // gsap.fromTo(
      //   footerRef.current,
      //   {
      //     opacity: 0,
      //     y: 20,
      //   },
      //   {
      //     y: 0,
      //     opacity: 1,
      //     duration: 0.8,
      //     ease: "power2.out",
      //     scrollTrigger: {
      //       trigger: sectionRef.current,
      //       start: "center 80%",
      //       toggleActions: "play none none none"
      //     },
      //   },
      // )

      gsap.to(flowerRef.current, {
        y: -10,
        rotation: 4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6
      },
    },
  }

  const itemsVariants = {
    hidden: {y:20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const socialVariants = {
    hidden: {sclae:0, opacity: 0},
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 1 + i * 0.1,
      },
    }),
  }

  return (
    <div 
      className="min-h-screen flex flex-col snap-start items-center justify-center"
      ref={sectionRef}
    >
  {/* Centered Box with Responsive Sizing */}
  <div className="flex justify-center items-center flex-grow md:flex-grow">
    <motion.div 
      className="bg-[#F4EBEB] rounded-xl shadow-lg 
                w-full max-w-4xl px-5 py-8 md:px-10 md:py-8 
                mx-12 md:mx-6 lg:mx-0"
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true, amount: 0.3}}
      transition={{duration: 0.8, ease:"easeOut"}}
    >
      
      <div 
        id="say-hi" 
        className="flex flex-col md:flex-row min-h-[400px] relative"
      >
        
        {/* Left Section (Say Hi! + Contact Info) */}
        <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left space-y-6">
        <h1 
          className="text-4xl md:text-7xl lg:text-9xl font-semibold leading-none text-slate-800 drop-shadow-md"
          ref={headingRef}
        >
            Say 
            <motion.span 
              className='text-red-300 ml-3 transition duration-150'
              ref={hiRef}
              whileHover={{
                scale:1.1,
                color:'#f87171',
                transition: {type: "spring",
                  stiffness: 200,
                },
              }}
            >
              hi!
            </motion.span>
        </h1>

        <motion.h3 
          className='text-gray-700 mb-3 md:font-bold md:text-center '
          initial={{opacity:0, y:10}}
          animate={{opacity:1, y:0}}
          transition={{ duration: 0.5, delay: 0.4}}
        >
          Get in touch with me!
        </motion.h3>


          {/* Contact Info */}
          <motion.div 
            className=" flex flex-col mt-1 items-center md:items-center text-gray-600 space-y-4 "
            variants={containerVariants}
            initial='hidden'
            whileInView="visible"
            viewport={{once:true, amount: 0.3}}
          >
            <motion.div 
              className='flex items-start pl-4 md:pl-0 md:items-start space-x-4'
              variants={itemsVariants}
              whileHover={{
                x:5, 
                transition:{
                  type: "spring", 
                  stiffness: 300
                }
              }}
            >
              <motion.div 
                className='bg-rose-50 p-2 rounded-full shadow-sm'
                whileHover={{scale: 1.1,
                  backgroundColor: '#fecdd3'}}
                whileTap={{scale: 0.95}}
              >
                <FaEnvelope className='h-5 w-5 text-red-400' />
              </motion.div>
          
              <div className='text-slate-800'>
                <p className='font-bold'>Email</p>
                <p className='font-medium text-slate-600'>xyz@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              className='flex items-start space-x-4'
              variants={itemsVariants}
              whileHover={{x:5, 
                transition: {
                  type: "spring",
                  stiffness: 300
                }
              }}
            >
              <motion.div 
                className='bg-rose-50 p-2 rounded-full shadow-sm'
                whileHover={{
                  scale: 1.1,
                  backgroundColor:'#fecdd3'
                }}
                whileTap={{scale: 0.95}}
              >
                <FaMapPin className='h-5 w-5 text-red-400'/>
              </motion.div>
              <div className='text-slate-800'>
                <p className='font-bold'>Location</p>
                <p className='text-slate-600 font-medium'>Vaishali, Ghaziabad</p>
                <p className='text-slate-600 font-medium'>Uttar Pradesh, India</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <div className='pt-4'>
            <div className="flex gap-8 justify-center md:justify-center">
              <a href="#" aria-label='Twitter Profile' className="text-black hover:text-red-400 transition-transform transform hover:scale-110">
                <FaTwitter size={22} />
              </a>
              <a href="#" aria-label='Github Profile' className="text-black hover:text-red-400 transition-transform transform hover:scale-110">
                <FaGithub size={22} />
              </a>
              <a href="#" aria-label='LinkedIn Profile' className="text-black hover:text-red-400 transition-transform transform hover:scale-110">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Flower Image) */}
        <div className="flex flex-col items-center md:items-end md:w-1/2 relative">
          <motion.img
            src="/img/flowers.png"
            alt="Flower"
            className="w-40 md:w-74 mb-[-1rem] md:mb-[-2rem] mt-6 md:mt-18 z-10 drop-shadow-lg"
            ref={flowerRef}
            drag
            dragConstraints={{ 
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }}
            dragElastic={0.1}
          />
        </div>
      </div>
    </motion.div>
  </div>

  {/* Footer (Always at the Bottom) */}
  <footer className="p-3 md:p-4 text-center text-slate-500 text-sm mt-auto">
    <p>© {new Date().getFullYear()} • Designed with ❤️ by Surbhi Verma</p>
  </footer>
</div>

  );
};

export default Contact;






