import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProjects } from "../redux Toolkit/projectSlice";

const useGetProjects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          "https://harun-portfolio-backend.onrender.com/api/projects/getAllProjects"
        );

        dispatch(setProjects(res.data.projects));
        console.log(res.data.projects);

      } catch (error) {
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

  return null;
};

export default useGetProjects;
