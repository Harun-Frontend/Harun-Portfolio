import { useState } from "react";
import ProjectsList from "../components/allProjectsView";
import ProjectsIntro from "./Project";
import AddProjectModal from "../components/addProjectForm"; // ✅ ये missing था
import ProjectDetails from "../components/ProjectDetails";

const ProjectsPage = () => {
  const [page, setPage] = useState("intro");
  const [selectedProject, setSelectedProject] = useState(null);
  const [editProject, setEditProject] = useState(null);

  return (
    <>
      {/* 🔥 INTRO PAGE */}
      {page === "intro" && (
        <ProjectsIntro onView={() => setPage("list")} />
      )}

      {/* 🔥 PROJECT LIST */}
      {page === "list" && (
        <ProjectsList
          onAdd={() => {
            setEditProject(null); // ✅ नया add → empty form
            setPage("add");
          }}
          onDetails={(project) => {
            setSelectedProject(project);
            setPage("details");
          }}
          onEdit={(project) => {
            setEditProject(project); // ✅ edit data set
            setPage("add");
          }}
        />
      )}

      {/* 🔥 ADD / EDIT FORM */}
      {page === "add" && (
        <AddProjectModal
          editProject={editProject}
          onClose={() => {
            setPage("list");
            setEditProject(null); // ✅ reset जरूरी
          }}
        />
      )}

      {/* 🔥 DETAILS PAGE */}
      {page === "details" && (
        <ProjectDetails
          project={selectedProject}
          onBack={() => setPage("list")}
        />
      )}
    </>
  );
};

export default ProjectsPage;