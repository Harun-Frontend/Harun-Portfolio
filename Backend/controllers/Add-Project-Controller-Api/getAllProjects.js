import Project from "../../models/addProject.model.js";

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      projects,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Get All Projects Error",
    });
  }
};