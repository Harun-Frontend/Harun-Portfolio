import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus, MoreVertical } from "lucide-react";
import useGetProjects from "../hooks/GetallProjects";
import axios from "axios";

const ProjectsList = ({ onAdd, onDetails, onEdit }) => {
  useGetProjects();

  const { projects } = useSelector((state) => state.projects);
  const [openMenu, setOpenMenu] = useState(null);
  const dispatch = useDispatch();

  // 🔐 PASSWORD
  const ADMIN_PASSWORD = "12345";

  const verifyPassword = () => {
    const pass = prompt("Enter Password 🔐");

    if (!pass) return false;

    if (pass === ADMIN_PASSWORD) return true;

    alert("Wrong Password ❌");
    return false;
  };

  // 🔥 DELETE FUNCTION
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/projects/deleteProject/${id}`
      );

      // ✅ UI update without refresh
      dispatch({
        type: "projects/setProjects",
        payload: projects.filter((p) => p._id !== id),
      });

      alert("Project Deleted ✅");
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <section className="h-screen w-full px-6 py-6 text-white bg-[linear-gradient(120deg,#020617,#111827,#7f1d1d,#dc2626)] flex flex-col">

      {/* 🔥 TOP BAR */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => {
            if (verifyPassword()) onAdd();
          }}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-500 hover:bg-red-600 transition"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* 🔥 CONTENT */}
      <div className="flex-1 flex items-center justify-center">

        {projects.length === 0 ? (
          <h1 className="text-3xl text-gray-300">
            No Projects 😢
          </h1>
        ) : (
          <div className="w-full">

            {/* 🔥 MOBILE VIEW */}
            <div className="flex gap-4 overflow-x-auto md:hidden pb-4">

              {projects.map((p) => (
                <div
                  key={p._id}
                  className="relative min-w-[80%] bg-white/10 rounded-2xl overflow-hidden shadow-lg"
                >

                  {/* 🔥 3 DOT */}
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === p._id ? null : p._id)
                    }
                    className="absolute top-2 right-2 bg-black/40 p-1 rounded-full"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {/* 🔥 MENU */}
                  {openMenu === p._id && (
                    <div className="absolute top-10 right-2 bg-black rounded-lg z-10">

                      <button
                        onClick={() => {
                          if (verifyPassword()) onEdit(p);
                          setOpenMenu(null);
                        }}
                        className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          if (verifyPassword()) handleDelete(p._id);
                          setOpenMenu(null);
                        }}
                        className="block px-4 py-2 hover:bg-red-600 w-full text-left"
                      >
                        Delete
                      </button>

                    </div>
                  )}

                  <img
                    src={p.image}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-bold">
                      {p.projectName}
                    </h3>

                    <div className="flex justify-between mt-3">
                      <button
                        onClick={() => onDetails(p)}
                        className="px-3 py-1 bg-black/40 rounded-full text-sm"
                      >
                        Details
                      </button>

                      <a
                        href={p.liveLink}
                        target="_blank"
                        className="px-3 py-1 bg-red-500 rounded-full text-sm"
                      >
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* 🔥 DESKTOP VIEW */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {projects.map((p) => (
                <div
                  key={p._id}
                  className="relative bg-white/10 rounded-2xl overflow-hidden shadow-lg"
                >

                  {/* 🔥 3 DOT */}
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === p._id ? null : p._id)
                    }
                    className="absolute top-2 right-2 bg-black/40 p-1 rounded-full"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {/* 🔥 MENU */}
                  {openMenu === p._id && (
                    <div className="absolute top-10 right-2 bg-black rounded-lg z-20">

                      <button
                        onClick={() => {
                          if (verifyPassword()) onEdit(p);
                          setOpenMenu(null);
                        }}
                        className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          if (verifyPassword()) handleDelete(p._id);
                          setOpenMenu(null);
                        }}
                        className="block px-4 py-2 hover:bg-red-600 w-full text-left"
                      >
                        Delete
                      </button>

                    </div>
                  )}

                  <img
                    src={p.image}
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-bold">
                      {p.projectName}
                    </h3>

                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => onDetails(p)}
                        className="px-4 py-1 bg-black/40 rounded-full"
                      >
                        Details
                      </button>

                      <a
                        href={p.liveLink}
                        target="_blank"
                        className="px-4 py-1 bg-red-500 rounded-full"
                      >
                        Live
                      </a>
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectsList;