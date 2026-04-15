import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./utils.js/db.js";
import addProjectRouter from "./routers/addProject.routers.js";

dotenv.config();

const app= express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json())

app.use("/api/projects/",addProjectRouter)

app.listen(process.env.PORT,()=>{
    connectDb();
    console.log("Server is running...")
})