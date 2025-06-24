import Navbar from "./Navbar";
import ResumeButton from "./ResumeButton";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-screen bg-white">
      <Navbar />
      <ResumeButton />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
