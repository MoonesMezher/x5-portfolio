import "./MyProject.css";
import project_one_img from "../../../assets/images/MyProject/nikhil-KO4io-eCAXA-unsplash.jpg";
import project_two_img from "../../../assets/images/MyProject/the-5th-IQYR7N67dhM-unsplash.jpg";
import project_three_img from "../../../assets/images/MyProject/true-agency-9Bjog5FZ-oc-unsplash.jpg";
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
      <MainTitle img={img} title="Projects" style="main-container"/>
      <div className="card-wrapper main-container">
        {projects.map((e, i) => (
          <CardProject
            key={i}
            category={e.category}
            title={e.title}
            image={e.image}
          />
        ))}
      </div>
    </div>
  );
}

export default MyProject;
