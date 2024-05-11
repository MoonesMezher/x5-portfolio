/* eslint-disable @typescript-eslint/no-explicit-any */
import "./MyProject.css";

import CardProject from "../CardProject/CardProject";
import img from "../../../assets/images/MyProject/white-desk-work-study-aesthetics.jpg";
import MainTitle from '../../shared/MainTitle/MainTitle'
import { useEffect, useState } from "react";
import axios from "axios";
import API from "../../../api/axios";
function MyProject() {

  // Define the type for the project object
type Project = {
  category: string;
  title: string;
  image: string;
};
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios.get(API.GET.projects)
        .then(response => {
            // Handle the response data here
            setProjects(response.data);
            
            console.log(response.data)
            console.log(typeof projects); // Add this line
            const projectsData = Array.isArray(response.data) ? response.data : [response.data];
            setProjects(projectsData);
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });
  }, []);
// const projects = [  {
//   "id": 3,
//   "title": "Focal X Comunity",
//   "category": "website",
//   "image": "1714734237.jpg",
//   "created_at": "2024-05-03T11:03:57.000000Z",
//   "updated_at": "2024-05-03T11:03:57.000000Z"
// },
// {
//   "id": 4,
//   "title": "Vila",
//   "category": "Real State",
//   "image": "1715176590.jpg",
//   "created_at": "2024-05-08T13:56:31.000000Z",
//   "updated_at": "2024-05-08T13:56:31.000000Z"
// }]



  return (
    <div className="ne-my-project" id="projects">
      <div className="main-container">
        <MainTitle img={img} title="Projects" style="project-title main-container"/>
        <div className="card-wrapper">
          {projects.map((e, i) => (
            <CardProject
            key={i}
            title={e.title}
            category={e.category}
            image={e.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProject;
