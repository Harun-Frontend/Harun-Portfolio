import Project from "../../models/addProject.model.js";

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not find",
      });
    }

    res.status(200).json({
      success: true,
      project,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Project not found",
    });
  }
};