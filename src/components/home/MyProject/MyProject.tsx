import "./MyProject.css";
import project_one_img from "../../../assets/images/MyProject/nikhil-KO4io-eCAXA-unsplash.jpg";
import project_two_img from "../../../assets/images/MyProject/the-5th-IQYR7N67dhM-unsplash.jpg";
import project_three_img from "../../../assets/images/MyProject/true-agency-9Bjog5FZ-oc-unsplash.jpg";
import CardProject from "../CardProject/CardProject";
import img from "../../../assets/images/MyProject/white-desk-work-study-aesthetics.jpg";
import MainTitle from '../../shared/MainTitle/MainTitle'
import axios from "axios";
import API from "../../../api/axios";
import { useEffect, useState } from "react";
function MyProject() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(API.GET.projects)
    .then((res) => {
      console.log(res);
      
      setProjects(res.data.data);
    })
    .catch((error) => {
      console.log("error getting projects", error);
    });
  }, []);

  return (
    <div className="ne-my-project" id="projects">
      <div className="main-container">
        <MainTitle img={img} title="Projects" style="project-title main-container"/>
        <div className="card-wrapper">
          {projects.length == 0 && <p className="not-found">No projects yet</p>}
          {projects?.map((e, i) => (
            i <= 2 &&
            <CardProject
            key={i}
            category={e?.category}
            title={e?.title}
            image={e?.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProject;
