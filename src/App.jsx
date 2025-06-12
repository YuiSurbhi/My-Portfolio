import React from "react";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Layout from "./component/Layout";
import { Element } from "react-scroll"; // For scroll targets

const App = () => {
  return (
    <Layout>
      <div className="scroll-smooth">
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="contact"><Contact /></Element>
      </div>
    </Layout>
  );
};

export default App;





