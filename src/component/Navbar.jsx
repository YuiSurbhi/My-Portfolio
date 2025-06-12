import React from "react";
import { Link } from "react-scroll";  

const Navbar = () => {
  return (
    <nav className="fixed bottom-8 left-11 text-left z-55">
      <ul className="space-y-4">
        <li className="uppercase text-sm md:text-[16px]">
          <Link 
            to="home" 
            smooth={true} 
            duration={600} 
            spy={true}
            activeClass="active"
            className="cursor-pointer text-gray-400 hover:text-black hover:font-bold"
          >
            Home
          </Link>
        </li>
        <li className="uppercase text-sm md:text-[16px]">
          <Link 
            to="about" 
            smooth={true} 
            duration={600} 
            spy={true}
            activeClass="active"
            className="cursor-pointer text-gray-400 hover:text-black hover:font-bold"
          >
            About
          </Link>
        </li>
        <li className="uppercase text-sm md:text-[16px]">
          <Link 
            to="projects" 
            smooth={true} 
            duration={600} 
            spy={true}
            activeClass="active"
            className="cursor-pointer text-gray-400 hover:text-black hover:font-bold"
          >
            Projects
          </Link>
        </li>
        <li className="uppercase text-sm md:text-[16px]">
          <Link 
            to="contact" 
            smooth={true} 
            duration={600} 
            spy={true}
            activeClass="active"
            className="cursor-pointer text-gray-400 hover:text-black hover:font-bold"
          >
            Say Hi!
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;




