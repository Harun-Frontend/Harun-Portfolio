import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSingleProject } from "../redux Toolkit/simgleProject";


const useGetProjectById = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `https://harun-portfolio-backend.onrender.com/api/projects/getProject/${id}`
        );

        dispatch(setSingleProject(res.data.project));
      } catch (error) {
        console.log(error);
      }
    };

    if (id) fetchProject();
  }, [id]);

  return null;
};

export default useGetProjectById;
