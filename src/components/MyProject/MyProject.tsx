import "./MyProject.css";
import project_one_img from "../../assets/images/MyProject/nikhil-KO4io-eCAXA-unsplash.jpg";
import project_two_img from "../../assets/images/MyProject/the-5th-IQYR7N67dhM-unsplash.jpg";
import project_three_img from "../../assets/images/MyProject/true-agency-9Bjog5FZ-oc-unsplash.jpg";
import Card_Project from "../Card_Project/Card_Project";
import setion_img_one from "../../assets/images/MyProject/white-desk-work-study-aesthetics.jpg";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
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
      <div className="ne-header">
        <SectionHeader image={setion_img_one} title="Project" />
      </div>
      <div className="card-wrapper">
        {projects.map((e, i) => (
          <Card_Project
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
