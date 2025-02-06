import React from "react";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-screen bg-white">
      <Navbar />
      <ThemeToggle />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
