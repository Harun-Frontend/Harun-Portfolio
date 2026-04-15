import Project from "../../models/addProject.model.js";
import uploadOnCloudinary from "../../utils.js/cloudinary.js";

export const addProject = async (req, res) => {
  try {
    const { projectName, description, technologyUsed, liveLink } = req.body;

    const imageUrl = await uploadOnCloudinary(req.file.path);

    const project = await Project.create({
      projectName,
      description,
      technologyUsed,
      image: imageUrl,
      liveLink,
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Error adding project" });
  }
};