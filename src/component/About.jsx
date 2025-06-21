import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { motion } from "framer-motion";

if(typeof window !== "undefined"){
  gsap.registerPlugin(ScrollTrigger, SplitText)
}

const About = () => {
  const sectionRef = useRef()
  const headingRef = useRef()
  const boxRef = useRef()
  const textRef = useRef()
  const plantRef = useRef()

  useEffect(() =>{
    const ctx = gsap.context(() =>{
      const aboutText = headingRef.current
      if(aboutText) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none"
          },
        })

        tl.fromTo(".about-letter",{
            y:100,
            opacity:0
          },
          {
            y:0,
            opacity:1,
            stagger:0.1,
            duration:0.8,
            ease:'power3.out'
          },
        )

        tl.fromTo('.ut-letter',{
            y:100,
            opacity:0
          },
          {
            y:0,
            opacity:0.5,
            stagger:0.1,
            duration: 0.8,
            ease:'power3.out'
          },
          "-=0.4",
        )
      }

      gsap.fromTo(plantRef.current,{
        y:100,
        opacity:0
      },
      {
        y:0,
        opacity:0.95,
        delay:0.5,
        ease:"elastic.out(1, 0.5)",
        scrollTrigger:{
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: "play none none none"
        },
      },
    )

    if(textRef.current) {
      const splitText = new SplitText(textRef.current, {
        type:'words'
      })

      gsap.fromTo(splitText.words,{
        y:20,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 70%',
          toggleActions: "play none none none"
        },
      },
    )
    }
    },sectionRef)

    return() => ctx.revert()
  }, [])

  const boxVariants = {
    hidden: {opacity:0, scale:0.9},
    visible:{
      opacity:1,
      scale:1,
      trasition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      },
    },
  }


  return (
    <div 
      id="about" 
      className="relative min-h-screen bg-white snap-start "
      ref={sectionRef}
    >
      {/* Navbar and Theme Toggle */}
      <header className="absolute top-0 left-0 w-full flex justify-between p-4 md:p-6">
        <Navbar />
      </header>

      {/* About Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-6">
        {/* Big About Text */}
        <h1 
          className="absolute top-20 left-2 md:left-44 flex items-center font-extrabold uppercase z-20 ml-10"
          ref={headingRef}
        >
          <span className="text-black text-[min(8rem,10vw)]
            tracking-widest font-normal stroke-2 stroke-black text-transparent outline-text drop-shadow-lg flex">
            <span className="about-letter">A</span>
            <span className="about-letter">B</span>
            <span className="about-letter">O</span>
          </span>
          <span className="text-gray-400 opacity-50 text-[min(8rem,10vw)] tracking-widest flex">
            <span className="about-letter">U</span>
            <span className="about-letter">T</span>
          </span>
        </h1>

        {/* Square Border Box */}
        <motion.div 
          className="relative border-[8px] md:border-[12px] border-black w-[280px] h-auto md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[450px] bg-white shadow-2xl flex flex-col justify-end md:left-20 z-10 p-4 pt-10 md:pt-20 drop-shadow-lg"
          ref={boxRef}
          variants={boxVariants}
          initial='hiddne'
          whileInView="visible"
          viewport={{once: true, amount:0.3}}
          whileHover={{
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0,25)',
            y: -5,

            transition: { duration: 0.3}
          }}
        >
          <p 
            className="text-gray-700 leading-relaxed text-sm md:text-lg text-center"
            ref={textRef}
          >
            Namaste! <br />
            I'm {" "} 
            <motion.span 
              className="text-pink-300 font-medium hover:text-[#f472b6] transition duration-300"
              whileHover={{scale: 1.1}}
            >
              Surbhi Verma
            </motion.span>
            , currently pursuing a BCA degree.
            I discovered my love for web development while browsing through Awwwards.
            Inspired by the innovative and visually stunning websites featured there,
            I decided to pursue a career in front-end development. Join me on my journey of learning and growing!
          </p>
        </motion.div>

        {/* Decorative Plant Image */}
        <motion.img
          src="/img/leaves.png"
          alt="Decorative Plant"
          className="absolute bottom-0 right-0 w-[200px] md:w-[280px] lg:w-[470px] opacity-95 z-30 drop-shadow-lg"
          ref={plantRef}
          drag
          dragConstraints={{
            left:0,
            right:0,
            top:0,
            bottom:0
          }}
          dragElastic={0.1}
          // whileHover={{
          //   scale:1.05,
          //   rotate:2,
          //   transition: {duration: 0.3}
          // }}
        />
      </section>
    </div>
  );
};

export default About;
//className="text-black text-[min(8rem,10vw)]
            //tracking-widest font-medium stroke-2 stroke-black text-transparent outline-text"