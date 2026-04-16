import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProjectModal = ({ onClose, editProject }) => {

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [technologyUsed, setTechnologyUsed] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [frontendImage, setFrontendImage] = useState(null);
  const [backendImage, setBackendImage] = useState(null);
  const [loading, setLoading] = useState(false); // 🔥 loader state

  // 🔥 EDIT DATA AUTO FILL
  useEffect(() => {
    if (editProject) {
      setProjectName(editProject.projectName || "");
      setDescription(editProject.description || "");
      setTechnologyUsed(editProject.technologyUsed || "");
      setLiveLink(editProject.liveLink || "");
      setFrontendImage(editProject.image || null);
    }
  }, [editProject]);

  // 🔥 image handle
  const handleImage = (e) => {
    const file = e.target.files[0];
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file));
  };

  // 🔥 submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // 🔥 START LOADER

      const formData = new FormData();

      formData.append("projectName", projectName);
      formData.append("description", description);
      formData.append("technologyUsed", technologyUsed);
      formData.append("liveLink", liveLink);

      if (backendImage) {
        formData.append("image", backendImage);
      }

      if (editProject) {
        await axios.put(
          `https://harun-portfolio-backend.onrender.com/api/projects/updateProject/${editProject._id}`,
          formData
        );
        alert("Project Updated ✅");
      } else {
        await axios.post(
          "https://harun-portfolio-backend.onrender.com/api/projects/addProject",
          formData
        );
        alert("Project Added ✅");
      }

      setLoading(false); // 🔥 STOP
      onClose();

    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Error ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

      {/* 🔥 MODAL */}
      <div className="relative max-w-lg w-full bg-white shadow-xl rounded-2xl p-8 border border-red-100">

        {/* 🔥 LOADER OVERLAY */}
        {loading && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 rounded-2xl">

            <div className="w-14 h-14 border-4 border-transparent border-t-red-500 border-r-orange-400 rounded-full animate-spin"></div>

          </div>
        )}

        {/* 🔥 Heading */}
        <div className="text-2xl font-bold text-gray-700 text-center mb-6">
          {editProject ? "Edit Project ✏️" : "Add Project 🚀"}
        </div>

        <form onSubmit={handleSubmit}>

          {/* Project Name */}
          <input
            type="text"
            placeholder="Project Name"
            className="w-full px-4 py-2 border rounded-lg mb-2"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />

          {/* Image */}
          <input
            type="file"
            className="w-full px-4 py-2 border rounded-lg mb-2"
            onChange={handleImage}
          />

          {/* Preview */}
          {frontendImage && (
            <img
              src={frontendImage}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
          )}

          {/* Description */}
          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-lg mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Technology */}
          <input
            type="text"
            placeholder="Technology Used"
            className="w-full px-4 py-2 border rounded-lg mb-2"
            value={technologyUsed}
            onChange={(e) => setTechnologyUsed(e.target.value)}
          />

          {/* Live Link */}
          <input
            type="text"
            placeholder="Live Link"
            className="w-full px-4 py-2 border rounded-lg mb-2"
            value={liveLink}
            onChange={(e) => setLiveLink(e.target.value)}
          />

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-4 py-2 bg-gray-400 rounded text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-red-500 text-white rounded flex items-center gap-2"
            >
              {loading
                ? "Processing..."
                : editProject
                ? "Update"
                : "Save"}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default AddProjectModal;
