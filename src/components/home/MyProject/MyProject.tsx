/* eslint-disable @typescript-eslint/no-explicit-any */
import "./MyProject.css";

import CardProject from "../CardProject/CardProject";
import img from "../../../assets/images/MyProject/white-desk-work-study-aesthetics.jpg";
import MainTitle from '../../shared/MainTitle/MainTitle'
function MyProject() {
  const projects = [
    {
      category: "Branding",
      title: "Zoik agency",
      image: project_one_img,
    },
    {
      category: "Photography",
      title: "The Watch",
      image: project_two_img,
    },
    {
      category: "Website",
      title: "Polo",
      image: project_three_img,
    },
  ];

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
            category={e.category}
            title={e.title}
            image={e.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProject;
