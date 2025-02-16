import React from "react";
import { NavLink } from "react-router-dom";  

const Navbar = () => {
  return (
    <nav className="fixed bottom-8 left-11 text-left z-55">
      <ul className="space-y-4">
        <li className="uppercase">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-black font-semibold" : "text-gray-400 hover:text-black"}
          >
            Home
          </NavLink>
        </li>
        <li className="uppercase">
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "text-black font-semibold" : "text-gray-400 hover:text-black"}
          >
            About
          </NavLink>
        </li>
        <li className="uppercase">
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "text-black font-semibold" : "text-gray-400 hover:text-black"}
          >
            Projects
          </NavLink>
        </li>
        <li className="uppercase">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "text-black font-semibold" : "text-gray-400 hover:text-black"}
          >
            Say Hi!
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;




