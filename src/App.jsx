import React from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Layout from "./component/Layout";

const App = () => {
  return (
      <Layout> {/* Layout should include Navbar and ThemeToggle inside */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
  );
};

export default App;




