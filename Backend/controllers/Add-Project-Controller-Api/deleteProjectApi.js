import Project from "../../models/addProject.model.js";
import { v2 as cloudinary } from "cloudinary";

// 🔥 config OUTSIDE (sirf 1 baar run hoga)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    // 🔥 sirf image field lo (fast)
    const project = await Project.findById(id).select("image");

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project nahi mila",
      });
    }

    // 🔥 DB delete pehle (fast response)
    await Project.findByIdAndDelete(id);

    // 🔥 Cloudinary delete async (wait nahi karna)
    if (project.image) {
      const parts = project.image.split("/");
      const fileName = parts[parts.length - 1];
      const publicId = "projects/" + fileName.split(".")[0];

      cloudinary.uploader.destroy(publicId) // ❗ await hata diya
        .then(() => console.log("Image deleted"))
        .catch((err) => console.log("Cloudinary error", err));
    }

    // 🔥 fast response
    return res.status(200).json({
      success: true,
      message: "Deleted instantly 🚀",
    });

  } catch (error) {
    console.log("DELETE ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Delete Error",
    });
  }
};