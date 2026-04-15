import Project from "../../models/addProject.model.js";
import uploadOnCloudinary from "../../utils.js/cloudinary.js";



export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    // 👉 only allowed fields pick karo (secure + optimized)
    const allowedFields = ["projectName", "description", "technologyUsed", "liveLink"];
    const updateData = {};

    allowedFields.forEach((field) => {
      if (req.body[field]) {
        updateData[field] = req.body[field];
      }
    });

    // 👉 image sirf tab upload hogi jab new file aayi ho
    if (req.file) {
      const imageUrl = await uploadOnCloudinary(req.file.path);
      updateData.image = imageUrl;
    }

    // 👉 direct update (no extra DB call)
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(updatedProject);

  } catch (error) {
    res.status(500).json({ message: "Error updating project" });
  }
};