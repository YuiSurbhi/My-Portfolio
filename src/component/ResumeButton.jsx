import { motion } from "framer-motion";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";

const ResumeButton = () => {
  return (
    <motion.button
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 bg-white border-2 border-black rounded-xl px-3 py-2 shadow-md flex items-center gap-2 hover:bg-pink-50 transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open("/Resume.pdf", "_blank")}
    >
      <HiOutlineDocumentText className="text-pink-400" />
      <span className="font-semibold text-sm text-gray-800 hidden sm:inline">Resume</span>
      <HiDownload className="text-gray-400" />
    </motion.button>
  );
};

export default ResumeButton;
