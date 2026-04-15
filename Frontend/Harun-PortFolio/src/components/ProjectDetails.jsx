const ProjectDetails = ({ project, onBack }) => {
  if (!project) return null;

  return (
    <div className="h-screen w-full overflow-hidden bg-[linear-gradient(120deg,#020617,#111827,#7f1d1d,#dc2626)]">

      {/* 🔥 MAIN CONTAINER */}
      <div className="h-full w-full flex items-center justify-center p-2">

        <div className="w-full max-w-6xl h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl flex flex-col overflow-hidden">

          {/* 🔝 HEADER (fixed) */}
          <div className="flex justify-between items-center p-3 border-b border-white/20 shrink-0">
            <button
              onClick={onBack}
              className="px-3 text-orange-500 py-1 rounded-full bg-white/10 hover:bg-white/20 text-sm"
            >
              ← Back
            </button>

            <a
              href={project.liveLink}
              target="_blank"
              className="px-3 py-1 rounded-full bg-linear-to-r from-red-500 to-orange-400 text-sm"
            >
              Live 🚀
            </a>
          </div>

          {/* 🔥 BODY */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 overflow-hidden">

            {/* 🖼 IMAGE (fixed height mobile) */}
            <div className="w-full h-48 md:h-full shrink-0">
              <img
                src={project.image}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 📄 CONTENT (scrollable ONLY here) */}
            <div className="p-4 overflow-y-auto">

              <h1 className="text-xl md:text-3xl font-bold mb-3 text-white">
                {project.projectName}
              </h1>

              <p className="text-gray-300 mb-3 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              <p className="text-red-400 font-semibold mb-4 text-sm md:text-base">
                ⚡ {project.technologyUsed}
              </p>

              {/* 🔥 EXTRA SPACE FOR SCROLL TEST */}
              <div className="h-10"></div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectDetails;