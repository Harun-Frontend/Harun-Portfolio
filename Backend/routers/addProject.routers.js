import express from "express"
import { upload } from "../middlewares/multer.js";
import { addProject } from "../controllers/Add-Project-Controller-Api/addProjectApi.js";
import { updateProject } from "../controllers/Add-Project-Controller-Api/editProjectApi.js";
import { deleteProject } from "../controllers/Add-Project-Controller-Api/deleteProjectApi.js";
import { getAllProjects } from "../controllers/Add-Project-Controller-Api/getAllProjects.js";
import { getProjectById } from "../controllers/Add-Project-Controller-Api/getPRojectById.js";


const addProjectRouter=express.Router();

addProjectRouter.post("/addProject",upload.single("image"),addProject)
addProjectRouter.put("/updateProject/:id",upload.single("image"),updateProject)
addProjectRouter.delete("/deleteProject/:id",deleteProject);
addProjectRouter.get("/getAllProjects",getAllProjects);
addProjectRouter.get("/getProject/:id",getProjectById);



export default addProjectRouter;