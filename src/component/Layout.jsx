import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-screen bg-white">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
