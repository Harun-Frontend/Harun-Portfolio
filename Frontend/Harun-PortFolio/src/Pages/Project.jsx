import { motion } from "framer-motion";
import ProjectsList from "../components/allProjectsView";

const ProjectsIntro = ({ onView }) => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-[linear-gradient(120deg,#020617,#111827,#7f1d1d,#dc2626)]">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-white backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          My Projects 🚀
        </h1>

        {/* Text */}
        <p className="text-gray-300 mb-6 max-w-md">
          Explore my work, real-world projects and creative designs built with modern technologies.
        </p>

        {/* Button */}
        <button
          onClick={onView}
          className="px-6 py-3 rounded-full bg-[linear-gradient(90deg,#ef4444,#f59e0b)] hover:scale-105 transition"
        >
          View All Projects 👇
        </button>
      </motion.div>

    </section>
  );
};

export default ProjectsIntro;