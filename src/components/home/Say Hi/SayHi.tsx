import "./SayHi.css";
import Contact from "./Contact/Contact";
import MainTitle from "../../shared/MainTitle/MainTitle";
import Img from "../../../assets/images/home/aerial-view-man-using-computer-laptop-wooden-table.jpg";

const SayHi = () => {
  return (
    <div className="sayhi">
      <div className="main-container">
        <MainTitle img={Img} title="Say Hi" style="sayhi-title"/>
        <Contact />
      </div>
    </div>
  );
};

export default SayHi;
