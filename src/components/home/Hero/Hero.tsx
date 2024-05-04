import "./Hero.css";
import Img1 from "../../../assets/images/home/happy-bearded-young-mannn.jpg";
import Img2 from "../../../assets/images/home/portrait-happy.png";
import MainButton from "../../shared/MainButton/MainButton";

const Hero = () => {
  return (
    <div className="hero page main-container">
      <div className="left-box">
        <div className="first-col">
          <div className="left-img">
            <img src={Img1} alt={Img1} loading="lazy" />
          </div>
          <h1 className="font-3">Hello friend!</h1>
        </div>
        <h2 className="text-green">I’m available for freelance work.</h2>
        <MainButton url="/" title="Let's begin" />
      </div>
      <div className="right-box">
        <div className="right-img">
          <img src={Img2} alt={Img2} loading="lazy" />
        </div>
      </div>
      <div className="wave"></div>
      <div className="bg-hero bg-green"></div>
    </div>
  );
};

export default Hero;
