import Companies from "../../components/home/Companies/Companies";
import Hero from "../../components/home/Hero/Hero";
import MyProject from "../../components/home/MyProject/MyProject";
import MyStory from "../../components/home/MyStory/MyStory";
import SayHi from "../../components/home/Say Hi/SayHi";
import Services from "../../components/home/Services/Services";
import Information from "../../components/home/information/Information";

import "./Home.css";

const Home = () => {
  return (
    <section className="home page">
      <Hero />
      <MyStory />
      <Information />
      <Companies />
      <Services />
      <MyProject />
      <SayHi />
    </section>
  );
};

export default Home;
