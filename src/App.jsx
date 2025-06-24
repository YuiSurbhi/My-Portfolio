import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Layout from "./component/Layout";
import ScrollContainer from "./component/ScrollContainer";

const App = () => {
  return (
    <ScrollContainer>
      <Layout>
        <Home />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </ScrollContainer>
    
  );
};

export default App;





