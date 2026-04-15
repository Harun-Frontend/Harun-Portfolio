import { motion } from "framer-motion";
import profile from "../images/Harun.jpg";
import { Mail, MapPin, User, GraduationCap } from "lucide-react";

const About = () => {

  // 🔥 SCROLL FUNCTION
  const handleContactScroll = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center px-4 bg-[linear-gradient(120deg,#020617,#111827,#3f0d12,#7f1d1d,#dc2626)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-xl p-5 md:p-10 grid md:grid-cols-2 gap-6 md:gap-10 items-center"
      >

        {/* IMAGE */}
        <div className="hidden md:flex justify-center relative">
          <div className="absolute w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-30"></div>

          <img
            src={profile}
            alt="Harun"
            className="w-64 rounded-full border-4 border-white/20 relative z-10"
          />
        </div>

        {/* CONTENT */}
        <div className="text-white text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About Me
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold">
            Harun Khan
          </h3>

          <p className="text-red-300 mb-3 text-sm md:text-base">
            MERN Stack Developer
          </p>

          <p className="text-gray-300 mb-5 text-sm md:text-base leading-relaxed">
            I am a passionate MERN Stack Developer who loves building modern,
            responsive and user-friendly web applications. I enjoy working with
            React, Node.js, Express and MongoDB and continuously improving my skills.
          </p>

          {/* INFO */}
          <div className="space-y-2 text-sm md:text-base">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <User size={16} />
              <span>Harun Khan</span>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={16} />
              <span>Israna, Panipat, Haryana</span>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail size={16} />
              <span>hk2665550@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start">
              <GraduationCap size={16} />
              <span>BCA (2023–2026)</span>
            </div>
          </div>

          {/* 🔥 BUTTON (ONLY CONTACT) */}
          <div className="flex justify-center md:justify-start mt-5">
            <button
              onClick={handleContactScroll}
              className="px-5 py-2 rounded-full border border-red-400 hover:bg-red-500 transition"
            >
              Contact Me
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;