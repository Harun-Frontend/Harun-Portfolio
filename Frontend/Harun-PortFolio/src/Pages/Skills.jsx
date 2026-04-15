import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiHtml5 } from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen w-full flex flex-col justify-center px-4 md:px-12 text-white bg-[linear-gradient(120deg,#020617,#111827,#3f0d12,#7f1d1d,#dc2626)]"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-10">
        My Skills
      </h1>

      {/* GRID */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">

        {/* FRONTEND */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 md:p-7"
        >
          <h2 className="text-lg md:text-xl font-semibold mb-5 text-center">
            Frontend
          </h2>

          <div className="space-y-4">
            {[
              { name: "React", icon: <FaReact />, level: 88 },
              { name: "HTML", icon: <SiHtml5 />, level: 90 },
              { name: "CSS", icon: <FaCss3Alt />, level: 85 },
              { name: "JavaScript", icon: <SiJavascript />, level: 87 },

              // ✅ Mobile में Tailwind दिखेगा
              { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90, mobileOnly: true },
            ].map((skill, i) => (
              <div
                key={i}
                className={`${skill.mobileOnly ? "block md:hidden" : ""}`}
              >
                <div className="flex justify-between text-sm mb-1">
                  <div className="flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </div>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full h-2 bg-white/20 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    className="h-full bg-[linear-gradient(90deg,#ef4444,#f59e0b)] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* BACKEND */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 md:p-7"
        >
          <h2 className="text-lg md:text-xl font-semibold mb-5 text-center">
            Backend
          </h2>

          <div className="space-y-4">
            {[
              { name: "Node.js", icon: <FaNodeJs />, level: 85 },
              { name: "Express", icon: <SiExpress />, level: 82 },
              { name: "MongoDB", icon: <SiMongodb />, level: 80 },
            ].map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <div className="flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </div>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full h-2 bg-white/20 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    className="h-full bg-[linear-gradient(90deg,#ef4444,#f59e0b)] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ✅ CSS FRAMEWORK (ONLY LAPTOP) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="hidden md:block bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 md:p-7"
        >
          <h2 className="text-lg md:text-xl font-semibold mb-5 text-center">
            CSS Framework
          </h2>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <div className="flex items-center gap-2">
                  <SiTailwindcss /> Tailwind CSS
                </div>
                <span>90%</span>
              </div>

              <div className="w-full h-2 bg-white/20 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  className="h-full bg-[linear-gradient(90deg,#ef4444,#f59e0b)] rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;