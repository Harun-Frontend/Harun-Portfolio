import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import profile from "../images/Harun.jpg";

const Hero = () => {

  // 🔥 SCROLL FUNCTION
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      className="h-screen flex items-center justify-center pt-24 text-white bg-[linear-gradient(120deg,#020617,#111827,#3f0d12,#7f1d1d,#dc2626)]"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-4 md:gap-8 px-4 sm:px-6 md:px-8">

        {/* TEXT */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold"
          >
            Harun Khan
          </motion.h1>

          <p className="mt-2 md:mt-4 text-lg md:text-xl text-gray-300">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </p>

          {/* 🔥 DESKTOP BUTTONS */}
          <div className="hidden md:flex gap-4 mt-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-full bg-[linear-gradient(90deg,#ef4444,#f59e0b)]"
            >
              View Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-full border border-red-400"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center relative mt-4 md:mt-0">
          <motion.img
            src={profile}
            alt="Harun"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-60 sm:w-64 md:w-72 rounded-full border-4 border-white/20 shadow-xl"
          />

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="hidden md:block absolute top-10 left-10 text-cyan-400 text-4xl"
          >
            <FaReact />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="hidden md:block absolute bottom-10 left-10 text-green-500 text-4xl"
          >
            <SiMongodb />
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="hidden md:block absolute top-10 right-10 text-gray-300 text-4xl"
          >
            <SiExpress />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="hidden md:block absolute bottom-10 right-10 text-green-400 text-4xl"
          >
            <FaNodeJs />
          </motion.div>
        </div>

        {/* 🔥 MOBILE BUTTONS */}
        <div className="flex gap-4 justify-center mt-4 md:hidden">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 rounded-full cursor-pointer bg-[linear-gradient(90deg,#ef4444,#f59e0b)]"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded-full border border-red-400"
          >
            Contact Me
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;